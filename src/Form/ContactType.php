<?php

namespace App\Form;

use App\Dto\ContactDto;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use EWZ\Bundle\RecaptchaBundle\Form\Type\EWZRecaptchaType;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Choice;
use Symfony\Component\Validator\Constraints\IsTrue;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('lastName', TextType::class, [
                'label' => 'Nom',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre nom.',
                    ]),
                    new Length([
                        'max' => 255,
                        'maxMessage' => 'Le nom ne doit pas contenir plus de {{ limit }} caractères.',
                    ]),
                ],
            ])
            ->add('firstName', TextType::class, [
                'label' => 'Prénom',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre prénom.',
                    ]),
                    new Length([
                        'max' => 255,
                        'maxMessage' => 'Le prénom ne doit pas contenir plus de {{ limit }} caractères.',
                    ]),
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre adresse email.',
                    ]),
                    new Email([
                        'message' => 'Veuillez renseigner une adresse email valide.',
                    ]),
                    new Length([
                        'max' => 255,
                        'maxMessage' => "L'adresse email ne doit pas contenir plus de {{ limit }} caractères.",
                    ]),
                ],
            ])
            ->add('phone', TextType::class, [
                'label' => 'Téléphone',
                'required' => false,
                'constraints' => [
                    new Length([
                        'min' => 0,
                        'max' => 15,
                        'maxMessage' => 'Le numéro de téléphone ne doit pas contenir plus de {{ limit }} caractères.',
                    ]),
                ],
            ])
            ->add('company', TextType::class, [
                'label' => 'Société',
                'required' => false,
                'constraints' => [
                    new Length([
                        'max' => 255,
                        'maxMessage' => 'Le nom de la société ne doit pas contenir plus de {{ limit }} caractères.',
                    ]),
                ],
            ])
            ->add('attachment', FileType::class, [
                'label' => 'Pièce jointe',
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '5M',
                        'mimeTypes' => ContactDTO::ATTACHMENT_MIME_TYPES,
                        'mimeTypesMessage' => 'Veuillez télécharger un fichier PDF, JPEG ou PNG valide.',
                        'maxSizeMessage' => 'Le fichier ne doit pas dépasser {{ limit }}.',
                    ]),
                ],
            ])
            ->add('subject', ChoiceType::class, [
                'label' => 'Sujet',
                'choices' => (ContactDTO::SUBJECT_CHOICES),
                'placeholder' => '-Veuillez choisir un sujet-',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez choisir un sujet.',
                    ]),
                    new Choice([
                        'choices' => ContactDTO::SUBJECT_CHOICES,
                        'message' => 'Veuillez choisir un sujet valide.',
                    ]),
                ],
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Message',
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre message.',
                    ]),
                    new Length([
                        'max' => 3000,
                        'maxMessage' => 'Le message ne doit pas contenir plus de {{ limit }} caractères.',
                    ]),
                ],
            ])
            ->add('consent', CheckboxType::class, [
                'label' => "J'accepte les Mentions Légales et les Conditions Générales de Vente.",
                'constraints' => [
                    new NotBlank([
                        'message' => 'Vous devez accepter les Mentions Légales et les Conditions Générales de Vente.',
                    ]),
                    new IsTrue([
                        'message' => 'Vous devez accepter les Mentions Légales et les Conditions Générales de Vente.',
                    ])
                ],
            ])
            ->add('recaptcha', EWZRecaptchaType::class, [
                'label' => false,
                'mapped' => false,
                'attr' => [
                    'class' => 'g-recaptcha',
                    'data-sitekey' => '%env(RECAPTCHA_PUBLIC_KEY)%',
                    'data-callback' => 'onSubmit',
                    'data-action' => 'submit',
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ContactDto::class,
            'csrf_protection' => true,
            'csrf_field_name' => '_token',
            'csrf_token_id' => 'contact_item',
        ]);
    }
}
