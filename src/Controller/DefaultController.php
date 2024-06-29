<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
