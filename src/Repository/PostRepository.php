<?php

namespace App\Repository;

use App\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Post>
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    public function findAllByDql(): string
    {
        return 'SELECT p FROM App\Entity\Post p';
    }

      /**
     * @return Post[] Returns an array of Post objects
     */
    public function findThreeLatestExcludingId($excludeId)
    {
        return $this->createQueryBuilder('p')
            ->where('p.id != :excludeId')
            ->setParameter('excludeId', $excludeId)
            ->orderBy('p.id', 'DESC')
            ->setMaxResults(3)
            ->getQuery()
            ->getResult();
    }
}
