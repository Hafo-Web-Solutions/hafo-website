<?php

namespace App\Service;

use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;

class FooterService
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getFooterData()
    {
        $filterPosts = $this->em->getRepository(Post::class)->findBy([], ['id' => 'DESC'], 3);

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

        return $posts;
    }
}
