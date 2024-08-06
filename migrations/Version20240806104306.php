<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240806104306 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE image_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE post_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE post_category_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE project_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE tag_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE image (id INT NOT NULL, image VARCHAR(255) DEFAULT NULL, size VARCHAR(255) DEFAULT NULL, type VARCHAR(255) NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN image.updated_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE image_project (image_id INT NOT NULL, project_id INT NOT NULL, PRIMARY KEY(image_id, project_id))');
        $this->addSql('CREATE INDEX IDX_BAA387323DA5256D ON image_project (image_id)');
        $this->addSql('CREATE INDEX IDX_BAA38732166D1F9C ON image_project (project_id)');
        $this->addSql('CREATE TABLE image_post (image_id INT NOT NULL, post_id INT NOT NULL, PRIMARY KEY(image_id, post_id))');
        $this->addSql('CREATE INDEX IDX_A8B086133DA5256D ON image_post (image_id)');
        $this->addSql('CREATE INDEX IDX_A8B086134B89032C ON image_post (post_id)');
        $this->addSql('CREATE TABLE post (id INT NOT NULL, title VARCHAR(255) NOT NULL, content JSON NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, resume TEXT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN post.created_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('COMMENT ON COLUMN post.updated_at IS \'(DC2Type:datetime_immutable)\'');
        $this->addSql('CREATE TABLE post_post_category (post_id INT NOT NULL, post_category_id INT NOT NULL, PRIMARY KEY(post_id, post_category_id))');
        $this->addSql('CREATE INDEX IDX_A6D02E734B89032C ON post_post_category (post_id)');
        $this->addSql('CREATE INDEX IDX_A6D02E73FE0617CD ON post_post_category (post_category_id)');
        $this->addSql('CREATE TABLE post_tag (post_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(post_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_5ACE3AF04B89032C ON post_tag (post_id)');
        $this->addSql('CREATE INDEX IDX_5ACE3AF0BAD26311 ON post_tag (tag_id)');
        $this->addSql('CREATE TABLE post_category (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE project (id INT NOT NULL, title VARCHAR(255) NOT NULL, description TEXT NOT NULL, focus_title VARCHAR(255) NOT NULL, focus_description TEXT NOT NULL, link VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE project_tag (project_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(project_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_91F26D60166D1F9C ON project_tag (project_id)');
        $this->addSql('CREATE INDEX IDX_91F26D60BAD26311 ON project_tag (tag_id)');
        $this->addSql('CREATE TABLE tag (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE image_project ADD CONSTRAINT FK_BAA387323DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_project ADD CONSTRAINT FK_BAA38732166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_post ADD CONSTRAINT FK_A8B086133DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_post ADD CONSTRAINT FK_A8B086134B89032C FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE post_post_category ADD CONSTRAINT FK_A6D02E734B89032C FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE post_post_category ADD CONSTRAINT FK_A6D02E73FE0617CD FOREIGN KEY (post_category_id) REFERENCES post_category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE post_tag ADD CONSTRAINT FK_5ACE3AF04B89032C FOREIGN KEY (post_id) REFERENCES post (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE post_tag ADD CONSTRAINT FK_5ACE3AF0BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE project_tag ADD CONSTRAINT FK_91F26D60166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE project_tag ADD CONSTRAINT FK_91F26D60BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE image_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE post_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE post_category_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE project_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE tag_id_seq CASCADE');
        $this->addSql('ALTER TABLE image_project DROP CONSTRAINT FK_BAA387323DA5256D');
        $this->addSql('ALTER TABLE image_project DROP CONSTRAINT FK_BAA38732166D1F9C');
        $this->addSql('ALTER TABLE image_post DROP CONSTRAINT FK_A8B086133DA5256D');
        $this->addSql('ALTER TABLE image_post DROP CONSTRAINT FK_A8B086134B89032C');
        $this->addSql('ALTER TABLE post_post_category DROP CONSTRAINT FK_A6D02E734B89032C');
        $this->addSql('ALTER TABLE post_post_category DROP CONSTRAINT FK_A6D02E73FE0617CD');
        $this->addSql('ALTER TABLE post_tag DROP CONSTRAINT FK_5ACE3AF04B89032C');
        $this->addSql('ALTER TABLE post_tag DROP CONSTRAINT FK_5ACE3AF0BAD26311');
        $this->addSql('ALTER TABLE project_tag DROP CONSTRAINT FK_91F26D60166D1F9C');
        $this->addSql('ALTER TABLE project_tag DROP CONSTRAINT FK_91F26D60BAD26311');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE image_project');
        $this->addSql('DROP TABLE image_post');
        $this->addSql('DROP TABLE post');
        $this->addSql('DROP TABLE post_post_category');
        $this->addSql('DROP TABLE post_tag');
        $this->addSql('DROP TABLE post_category');
        $this->addSql('DROP TABLE project');
        $this->addSql('DROP TABLE project_tag');
        $this->addSql('DROP TABLE tag');
    }
}
