<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DefaultController extends AbstractController
{

    public function __construct(private EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('/', name: 'app_default')]
    public function index(): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('admin');
        }
        
        $filterPosts = $this->em->getRepository(Post::class)->findBy([], ['id' => 'DESC'], 4);
        $projects = $this->em->getRepository(Project::class)->findBy([], ['id' => 'DESC'], 4);

        $posts = [];
        foreach ($filterPosts as $post) {
            $posts[] = [
                'id' => $post->getId(),
                'title' => $post->getTitle(),
                'category' => $post->getCategory(),
                'image' => $post->getImageByType('post')->getImage(),
                'resume' => $post->getResume(),
            ];
        }

        return $this->render('default/index.html.twig', [
            'posts' => $posts,
            'projects' => $projects,
        ]);
    }

    #[Route('agence', name: 'app_agency')]
    public function agency(): Response
    {
        $posts = $this->em->getRepository(Post::class)->findAll(['id' => 'DESC'], 4);
        return $this->render('default/agency.html.twig', [
            'posts' => $posts,
        ]);
    }

    #[Route('expertise', name: 'app_expertise')]
    public function expertise(): Response
    {
        return $this->render('default/expertises/index.html.twig');
    }

    #[Route('creation-de-site', name: 'app_expertise_site_creation')]
    public function expertiseSiteCreation(): Response
    {
        $posts = $this->em->getRepository(Post::class)->findAll(['id' => 'DESC'], 4);
        $projects = $this->em->getRepository(Project::class)->findAll(['id' => 'DESC'], 3);
        return $this->render('default/expertises/site-creation.html.twig', [
            'posts' => $posts,
            'projects' => $projects,
        ]);
    }

    #[Route('refonte', name: 'app_expertise_redesign')]
    public function expertiseRedesign(): Response
    {
        $posts = $this->em->getRepository(Post::class)->findAll(['id' => 'DESC'], 4);
        $projects = $this->em->getRepository(Project::class)->findAll(['id' => 'DESC'], 3);
        return $this->render('default/expertises/redesign.html.twig', [
            'posts' => $posts,
            'projects' => $projects,
        ]);
    }

    #[Route('maintenance', name: 'app_expertise_maintenance')]
    public function expertiseMaintenance(): Response
    {
        $posts = $this->em->getRepository(Post::class)->findAll(['id' => 'DESC'], 4);
        $projects = $this->em->getRepository(Project::class)->findAll(['id' => 'DESC'], 3);
        return $this->render('default/expertises/maintenance.html.twig', [
            'posts' => $posts,
            'projects' => $projects,
        ]);
    }

    #[Route('referencement', name: 'app_expertise_seo')]
    public function expertiseSeo(): Response
    {
        $posts = $this->em->getRepository(Post::class)->findAll(['id' => 'DESC'], 4);
        $projects = $this->em->getRepository(Project::class)->findAll(['id' => 'DESC'], 3);
        return $this->render('default/expertises/seo.html.twig', [
            'posts' => $posts,
            'projects' => $projects,
        ]);
    }

    #[Route('services-et-tarifs', name: 'app_services_and_prices')]
    public function servicesAndPrices(): Response
    {
        return $this->render('default/services-and-prices.html.twig');
    }

    #[Route('centre-de-support', name: 'app_support_center')]
    public function supportCenter(): Response
    {
        return $this->render('default/support/support-center.html.twig');
    }

    #[Route('definir-vos-objectifs', name: 'app_define_your_goals')]
    public function defineYourGoals(): Response
    {
        return $this->render('default/support/define-your-goals.html.twig');
    }

    //Legal Notice
    #[Route('mentions-legales', name: 'app_legal_notice')]
    public function legalNotice(): Response
    {
        return $this->render('default/legal-notice.html.twig');
    }

    //Terms of Sales
    #[Route('conditions-generales-de-vente', name: 'app_terms_of_sales')]
    public function termsOfSales(): Response
    {
        return $this->render('default/terms-of-sales.html.twig');
    }

    //Project Launch
    #[Route('lancement-du-projet', name: 'app_project_launch')]
    public function projectLaunch(): Response
    {
        return $this->render('default/support/project-launch.html.twig');
    }

    //Let's Plan Together
    #[Route('planifions-ensemble', name: 'app_lets_plan_together')]
    public function letsPlanTogether(): Response
    {
        return $this->render('default/support/lets-plan-together.html.twig');
    }

    //Make an Appointment
    #[Route('appointment', name: 'app_make_an_appointment')]
    public function makeAnAppointment(): Response
    {
        return $this->render('default/make-an-appointment.html.twig');
    }
}
