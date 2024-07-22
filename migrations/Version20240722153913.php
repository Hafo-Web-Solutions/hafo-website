<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240722153913 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE project_tag (project_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(project_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_91F26D60166D1F9C ON project_tag (project_id)');
        $this->addSql('CREATE INDEX IDX_91F26D60BAD26311 ON project_tag (tag_id)');
        $this->addSql('ALTER TABLE project_tag ADD CONSTRAINT FK_91F26D60166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE project_tag ADD CONSTRAINT FK_91F26D60BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tag_project DROP CONSTRAINT fk_1d82fd44bad26311');
        $this->addSql('ALTER TABLE tag_project DROP CONSTRAINT fk_1d82fd44166d1f9c');
        $this->addSql('DROP TABLE tag_project');
        $this->addSql('ALTER TABLE image ADD size VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE image ADD updated_at TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT NULL');
        $this->addSql('ALTER TABLE image ALTER image DROP NOT NULL');
        $this->addSql('COMMENT ON COLUMN image.updated_at IS \'(DC2Type:datetime_immutable)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE TABLE tag_project (tag_id INT NOT NULL, project_id INT NOT NULL, PRIMARY KEY(tag_id, project_id))');
        $this->addSql('CREATE INDEX idx_1d82fd44166d1f9c ON tag_project (project_id)');
        $this->addSql('CREATE INDEX idx_1d82fd44bad26311 ON tag_project (tag_id)');
        $this->addSql('ALTER TABLE tag_project ADD CONSTRAINT fk_1d82fd44bad26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tag_project ADD CONSTRAINT fk_1d82fd44166d1f9c FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE project_tag DROP CONSTRAINT FK_91F26D60166D1F9C');
        $this->addSql('ALTER TABLE project_tag DROP CONSTRAINT FK_91F26D60BAD26311');
        $this->addSql('DROP TABLE project_tag');
        $this->addSql('ALTER TABLE image DROP size');
        $this->addSql('ALTER TABLE image DROP updated_at');
        $this->addSql('ALTER TABLE image ALTER image SET NOT NULL');
    }
}
