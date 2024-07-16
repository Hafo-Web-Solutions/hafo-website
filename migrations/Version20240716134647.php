<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240716134647 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE image_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE image (id INT NOT NULL, image VARCHAR(255) NOT NULL, type VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE image_project (image_id INT NOT NULL, project_id INT NOT NULL, PRIMARY KEY(image_id, project_id))');
        $this->addSql('CREATE INDEX IDX_BAA387323DA5256D ON image_project (image_id)');
        $this->addSql('CREATE INDEX IDX_BAA38732166D1F9C ON image_project (project_id)');
        $this->addSql('CREATE TABLE image_post (image_id INT NOT NULL, post_id INT NOT NULL, PRIMARY KEY(image_id, post_id))');
        $this->addSql('CREATE INDEX IDX_A8B086133DA5256D ON image_post (image_id)');
        $this->addSql('CREATE INDEX IDX_A8B086134B89032C ON image_post (post_id)');
        $this->addSql('ALTER TABLE image_project ADD CONSTRAINT FK_BAA387323DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_project ADD CONSTRAINT FK_BAA38732166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_post ADD CONSTRAINT FK_A8B086133DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_post ADD CONSTRAINT FK_A8B086134B89032C FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE image_id_seq CASCADE');
        $this->addSql('ALTER TABLE image_project DROP CONSTRAINT FK_BAA387323DA5256D');
        $this->addSql('ALTER TABLE image_project DROP CONSTRAINT FK_BAA38732166D1F9C');
        $this->addSql('ALTER TABLE image_post DROP CONSTRAINT FK_A8B086133DA5256D');
        $this->addSql('ALTER TABLE image_post DROP CONSTRAINT FK_A8B086134B89032C');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE image_project');
        $this->addSql('DROP TABLE image_post');
    }
}
