<?php

namespace App\Controller\Admin;

use App\Entity\Project;
use App\Form\ImageType;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ProjectCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Project::class;
    }
    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('title'),
            TextField::new('description')->hideOnIndex(),
            TextField::new('focusTitle'),
            TextField::new('focusDescription')->hideOnIndex(),
            TextField::new('link'),
            AssociationField::new('tag'),
            CollectionField::new('images')->setEntryType(ImageType::class),
        ];
    }
    
}
