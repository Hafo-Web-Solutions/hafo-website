<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Entity;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProjectController extends AbstractController
{
    //index page
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

    //show page
    #[Route('nos-realisations/{id}', name: 'app_achievement')]
    public function achievement(string $id, ProjectRepository $projectRepository): Response
    {
        $achievement = $projectRepository->findOneById($id);

        return $this->render('default/project/project.html.twig', [
            'achievement' => $achievement,
        ]);
    }

    //request json
    #[Route('/ajax-projects', name: 'app_achievements_ajax')]
    public function achievementsAjax(EntityManagerInterface $em): JsonResponse
    {

        $projects = $em->getRepository(Project::class)->findAll(['id' => 'DESC'], 3);
        $arrayProject = [];
        foreach ($projects as $project) {
            $arrayProject[] = [
                'id' => $project->getId(),
                'title' => $project->getTitle(),
                'description' => $project->getDescription(),
                'focusTitle' => $project->getFocusTitle(),
                'focusDescription' => $project->getFocusDescription(),
                'image' => $project->getImageByType('main')->getImage(),
                'link' => $project->getLink(),
                'tags' => $project->getTag()[0]->getName(),
            ];
        }

        // Return a simple JSON response
        return new JsonResponse([
            'status' => 'success',
            'data' => $arrayProject,
        ]);
    }
}
