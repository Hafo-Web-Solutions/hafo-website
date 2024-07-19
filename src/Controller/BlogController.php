<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class BlogController extends AbstractController
{
    //Blog
    #[Route('blog', name: 'app_blog')]
    public function blog(PostRepository $postRepository, EntityManagerInterface $em, PaginatorInterface $paginator, Request $request): Response
    {
        $dql = $postRepository->findAllByDql();
        $query = $em->createQuery($dql);

        /* pagination */
        $blog = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            2 /*limit per page*/
        );

        return $this->render('default/blog/index.html.twig', [
            'blog' => $blog,
        ]);
    }

    //Blog by id
    #[Route('/blog/{id}', name: 'app_blog_detail')]
    public function blogDetail(PostRepository $postRepository, string $id): Response
    {
        $blog = $postRepository->findOneById($id);
        $threeLastedPosts = $postRepository->findThreeLatestExcludingId($id);

        return $this->render('default/blog/blog.html.twig', [
            'blog' => $blog,
            'threeLastedPost' => $threeLastedPosts,
        ]);
    }
}
