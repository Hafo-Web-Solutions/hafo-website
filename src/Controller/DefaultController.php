<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_default')]
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('agence', name: 'app_agency')]
    public function agency(): Response
    {
        return $this->render('default/agency.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    #[Route('creation-de-site', name: 'app_expertise_site_creation')]
    public function expertiseSiteCreation(): Response
    {
        return $this->render('default/expertises/site-creation.html.twig');
    }

    #[Route('refonte', name: 'app_expertise_redesign')]
    public function expertiseRedesign(): Response
    {
        return $this->render('default/expertises/redesign.html.twig');
    }

    #[Route('maintenance', name: 'app_expertise_maintenance')]
    public function expertiseMaintenance(): Response
    {
        return $this->render('default/expertises/maintenance.html.twig');
    }

    #[Route('referencement', name: 'app_expertise_seo')]
    public function expertiseSeo(): Response
    {
        return $this->render('default/expertises/seo.html.twig');
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

    #[Route('nos-realisations', name: 'app_achievements')]
    public function achievements(): Response
    {
        //en attendant de mettre les données dans le database
        $achievements = [
            [
                'id' => '1',
                'title' => 'Réalisation 1',
                'category' => 'Site Vitrine',
                'href' => '#'
            ],
            [
                'id' => '2',
                'title' => 'Réalisation 2',
                'category' => 'Site Web',
                'href' => '#'
            ],
            [
                'id' => '3',
                'title' => 'Réalisation 3',
                'category' => 'Site Complexe',
                'href' => '#'
            ],
            [
                'id' => '4',
                'title' => 'Réalisation 4',
                'category' => 'Site Autre',
                'href' => '#'
            ],
        ];

        return $this->render(
            'default/achievements/index.html.twig',
            [
                'achievements' => $achievements,
            ]
        );
    }

    #[Route('nos-realisations/{id}', name: 'app_achievement')]
    public function achievement(string $id): Response
    {
        //en attendant de mettre les données dans le database
        $achievements = [
            [
                'id' => '1',
                'title' => 'Réalisation 1',
                'category' => 'Site Vitrine',
                'href' => '#'
            ],
            [
                'id' => '2',
                'title' => 'Réalisation 2',
                'category' => 'Site Web',
                'href' => '#'
            ],
            [
                'id' => '3',
                'title' => 'Réalisation 3',
                'category' => 'Site Complexe',
                'href' => '#'
            ],
            [
                'id' => '4',
                'title' => 'Réalisation 4',
                'category' => 'Site Autre',
                'href' => '#'
            ],
        ];

        $achievement = [];
        if ($id === '1') {
            $achievement = $achievements[0];
        }
        if ($id === '2') {
            $achievement = $achievements[1];
        }
        if ($id === '3') {
            $achievement = $achievements[2];
        }
        if ($id === '4') {
            $achievement = $achievements[3];
        }

        return $this->render('default/achievements/achievement.html.twig', [
            'achievement' => $achievement,
        ]);
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

    //Blog
    #[Route('blog', name: 'app_blog')]
    public function blog(): Response
    {
        return $this->render('default/blog/index.html.twig');
    }

    //Blog by slug
    #[Route('/blog/{slug}', name: 'app_blog_detail')]
    public function blogDetail(string $slug): Response
    {
        $blog = [];

        if ($slug === 'blog-1') {
            $blog = [
                'title' => 'Blog 1',
                'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
                'image' => './image/blog/blog-1.jpg',
            ];
        } elseif ($slug === 'blog-2') {
            $blog = [
                'title' => 'Blog 2',
                'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
                'image' => './image/blog/blog-2.jpg',
            ];
        } else {
            // Handle case when the blog is not found, for example, redirect to a 404 page
            throw $this->createNotFoundException('The blog does not exist');
        }
    
        return $this->render('default/blog/blog.html.twig', [
            'blog' => $blog,
        ]);
    }



}
