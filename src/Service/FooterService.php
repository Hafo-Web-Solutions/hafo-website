<?php

// src/Service/FooterService.php
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
        // Remplace 'Entity' par le nom de ton entité
        return $this->em->getRepository(Post::class)->findBy([], ['id' => 'DESC'], 3);
    }
}
