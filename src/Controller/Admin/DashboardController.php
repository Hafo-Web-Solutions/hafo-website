<?php

namespace App\Controller\Admin;

use App\Entity\Image;
use App\Entity\Post;
use App\Entity\PostCategory;
use App\Entity\Project;
use App\Entity\Tag;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin_nothing')]
    public function adminNothing(): Response
    {
        return $this->render('components/404.html.twig');
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/secret-admin-hafo-web-solutions', name: 'admin')]
    public function admin(EntityManagerInterface $em): Response
    {

        $projects = $em->getRepository(Project::class)->findAll();
        $posts = $em->getRepository(Post::class)->findAll();

       return $this->render('admin/dashboard.html.twig', [
           'projects' => count($projects),
           'posts' => count($posts),
       ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Hafo Website');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Categories de post', 'fas fa-list', PostCategory::class);
        yield MenuItem::linkToCrud('Tags', 'fas fa-list', Tag::class);
        yield MenuItem::linkToCrud('Posts', 'fas fa-list', Post::class);
        yield MenuItem::linkToCrud('Projets', 'fas fa-list', Project::class);
        yield MenuItem::linkToCrud('Images', 'fas fa-list', Image::class);
        yield MenuItem::linkToCrud('Users', 'fas fa-list', User::class);
    }
}