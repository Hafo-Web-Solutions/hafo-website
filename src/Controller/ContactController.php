<?php

namespace App\Controller;

use App\Dto\ContactDto;
use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ContactController extends AbstractController
{
    private $httpClient;

    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
    }

    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, MailerInterface $mailer, ValidatorInterface $validator): Response
    {
        $contactDto = new ContactDto();
        $form = $this->createForm(ContactType::class, $contactDto);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $recaptchaResponse = $request->request->get('g-recaptcha-response');
            $recaptchaSecret = $this->getParameter('recaptcha_private_key');

            $response = $this->httpClient->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
                'body' => [
                    'secret' => $recaptchaSecret,
                    'response' => $recaptchaResponse,
                ],
                'verify_peer' => true,
            ]);

            $recaptchaData = $response->toArray();

            if (!$recaptchaData['success']) {
                if ($request->isXmlHttpRequest()) {
                    return new JsonResponse(['status' => 'error', 'errors' => ['recaptcha' => 'Invalid reCAPTCHA verification.']]);
                } else {
                    $this->addFlash('error', 'Invalid reCAPTCHA verification.');
                }
            } else {
                $errors = $validator->validate($contactDto);

                if (count($errors) > 0) {
                    if ($request->isXmlHttpRequest()) {
                        $errorMessages = [];
                        foreach ($errors as $error) {
                            $errorMessages[$error->getPropertyPath()][] = $error->getMessage();
                        }
                        return new JsonResponse(['status' => 'error', 'errors' => $errorMessages]);
                    } else {
                        foreach ($errors as $error) {
                            $this->addFlash('error', $error->getMessage());
                        }
                    }
                } else {
                    if ($form->isValid()) {
                        $emailContent = $this->renderView('contact/email.html.twig', [
                            'contact' => $contactDto
                        ]);

                        $email = (new Email())
                            ->from('hafowebsolutionsmailer@gmail.com')
                            ->to('contact@hafowebsolutions.fr')
                            ->subject('Nouveau message de contact depuis le site Hafowebsolutions.fr')
                            ->html($emailContent);

                        if ($contactDto->getAttachment()) {
                            $attachment = $contactDto->getAttachment();
                            $email->attachFromPath($attachment->getPathname(), $attachment->getClientOriginalName());
                        }

                        $mailer->send($email);

                        if ($request->isXmlHttpRequest()) {
                            return new JsonResponse(['status' => 'success']);
                        } else {
                            $this->addFlash('success', 'Votre message a été envoyé avec succès !');
                            return $this->redirectToRoute('app_contact');
                        }
                    } elseif ($request->isXmlHttpRequest()) {
                        $errors = [];
                        foreach ($form->getErrors(true, true) as $error) {
                            $errors[$error->getOrigin()->getName()][] = $error->getMessage();
                        }
                        return new JsonResponse(['status' => 'error', 'errors' => $errors]);
                    }
                }
            }
        }

        return $this->render('contact/contact.html.twig', [
            'controller_name' => 'ContactController',
            'form_contact' => $form->createView(),
        ]);
    }
}
