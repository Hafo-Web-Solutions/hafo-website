<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240717104549 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE image ADD size VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE image ADD updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE image DROP created_at');
        $this->addSql('ALTER TABLE image DROP update_at');
        $this->addSql('ALTER TABLE image RENAME COLUMN image_name TO image');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE image ADD image_name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE image ADD created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE image ADD update_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE image DROP image');
        $this->addSql('ALTER TABLE image DROP size');
        $this->addSql('ALTER TABLE image DROP updated_at');
        $this->addSql('COMMENT ON COLUMN image.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN image.update_at IS \'(DC2Type:datetime_immutable)\'');
    }
}
