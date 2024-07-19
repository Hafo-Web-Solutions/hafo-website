<?php

namespace App\Controller;

use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProjectController extends AbstractController
{
    #[Route('nos-realisations', name: 'app_achievements')]
    public function achievements(ProjectRepository $projectRepository, EntityManagerInterface $em, PaginatorInterface $paginator, Request $request): Response
    {
        $dql = $projectRepository->findAllByDql();
        $query = $em->createQuery($dql);

        /* pagination */
        $achievements = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            4 /*limit per page*/
        );

        return $this->render(
            'default/project/index.html.twig',
            [
                'achievements' => $achievements,
            ]
        );
    }

    #[Route('nos-realisations/{id}', name: 'app_achievement')]
    public function achievement(string $id, ProjectRepository $projectRepository): Response
    {
        $achievement = $projectRepository->findOneById($id);

        return $this->render('default/project/project.html.twig', [
            'achievement' => $achievement,
        ]);
    }

    #[Route('/nos-realisations/ajax', name: 'app_achievements_ajax')]
    public function achievementsAjax(): JsonResponse
    {
        // Return a simple JSON response
        return new JsonResponse(['status' => 'success', 'message' => 'This is a test response']);
    }
}
