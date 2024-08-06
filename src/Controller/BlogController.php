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
            4 /*limit per page*/
        );

        //modif pagination recent DESC

        return $this->render('default/blog/index.html.twig', [
            'blog' => $blog,
        ]);
    }

    //Blog by id
    #[Route('/blog/{id}', name: 'app_blog_detail')]
    public function blogDetail(PostRepository $postRepository, string $id): Response
    {
        $filterBlog = $postRepository->findOneById($id);
        $filterThreeLastedPosts = $postRepository->findThreeLatestExcludingId($id);

        $blog = [
            'id' => $filterBlog->getId(),
            'title' => $filterBlog->getTitle(),
            'category' => $filterBlog->getCategory(),
            'image' => $filterBlog->getImageByType('post')->getImage(),
            'resume' => "ghvhvhvhvjjd dc kdckdc kbdkcd djc dvc  cd dc d dcdc  cdjdkjcjcd",
            'createdAt' => $filterBlog->getCreatedAt(),
            'content' => $filterBlog->getContent()['content'],
            'tag' => $filterBlog->getTag(),
        ];

        $threeLastedPosts = [];
        foreach ($filterThreeLastedPosts as $post) {
            $threeLastedPosts[] = [
                'id' => $post->getId(),
                'title' => $post->getTitle(),
                'category' => $post->getCategory(),
                'image' => $post->getImageByType('post')->getImage(),
                'resume' => "ghvhvhvhvjjd dc kdckdc kbdkcd djc dvc  cd dc d dcdc  cdjdkjcjcd",
            ];
        }


        return $this->render('default/blog/blog.html.twig', [
            'blog' => $blog,
            'threeLastedPost' => $threeLastedPosts,
        ]);
    }
}
