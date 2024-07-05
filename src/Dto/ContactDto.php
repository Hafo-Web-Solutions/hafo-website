<?php

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ContactDto
{
    public const SUBJECT_CHOICES = [
        "Demande de devis" => "Demande de devis",
        "Demande de renseignement" => "Demande de renseignement", 
        "Partenariat" => "Partenariat", 
        "Création de site web" => "Création de site web", 
        "Refonte de site web" => "Refonte de site web", 
        "Maintenance de site web" => "Maintenance de site web", 
        "Référencement de site web" => "Référence de site web", 
        "Autre" => "Autre"
    ];

    public const ATTACHMENT_MIME_TYPES = ["application/pdf", "application/x-pdf", "image/jpeg", "image/png"];

    #[Assert\NotBlank(message: "Veuillez renseigner votre nom.")]
    #[Assert\Length(max: 255, maxMessage: "Le nom ne doit pas contenir plus de {{ limit }} caractères.")]
    private string $lastName = '';

    #[Assert\NotBlank(message: "Veuillez renseigner votre prénom.")]
    #[Assert\Length(max: 255, maxMessage: "Le prénom ne doit pas contenir plus de {{ limit }} caractères.")]
    private string $firstName = '';

    #[Assert\NotBlank(message: "Veuillez renseigner votre adresse email.")]
    #[Assert\Email(message: "Veuillez renseigner une adresse email valide.")]
    #[Assert\Length(max: 255, maxMessage: "L'adresse email ne doit pas contenir plus de {{ limit }} caractères.")]
    private string $email = '';

    #[Assert\Length(min: 0, max: 15, minMessage: "Le numéro de téléphone doit contenir au moins {{ limit }} caractères.", maxMessage: "Le numéro de téléphone ne doit pas contenir plus de {{ limit }} caractères.")]
    private ?string $phone = null;

    #[Assert\Length(max: 255, maxMessage: "Le nom de la société ne doit pas contenir plus de {{ limit }} caractères.")]
    private ?string $company = null;

    #[Assert\File(maxSize: "5M", mimeTypes: self::ATTACHMENT_MIME_TYPES, mimeTypesMessage: "Veuillez télécharger un fichier PDF, JPEG ou PNG valide.", maxSizeMessage: "Le fichier ne doit pas dépasser {{ limit }}.")]
    private ?UploadedFile $attachment = null;

    #[Assert\NotBlank(message: "Veuillez choisir un sujet.")]
    #[Assert\Choice(choices: self::SUBJECT_CHOICES, message: "Veuillez choisir un sujet valide.")]
    private string $subject = '';

    #[Assert\NotBlank(message: "Veuillez renseigner votre message.")]
    #[Assert\Length(max: 3000, maxMessage: "Le message ne doit pas contenir plus de {{ limit }} caractères.")]
    private string $message = '';

    #[Assert\NotBlank(message: "Vous devez accepter les Mentions Légales et les Conditions Générales de Vente.")]
    #[Assert\IsTrue(message: "Vous devez accepter les Mentions Légales et les Conditions Générales de Vente.")]
    private bool $consent = false;

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): void
    {
        $this->lastName = $lastName;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): void
    {
        $this->firstName = $firstName;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): void
    {
        $this->phone = $phone;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(?string $company): void
    {
        $this->company = $company;
    }

    public function getAttachment(): ?UploadedFile
    {
        return $this->attachment;
    }

    public function setAttachment(?UploadedFile $attachment): void
    {
        $this->attachment = $attachment;
    }

    public function getSubject(): string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): void
    {
        $this->subject = $subject;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function setMessage(string $message): void
    {
        $this->message = $message;
    }

    public function getConsent(): bool
    {
        return $this->consent;
    }

    public function setConsent(bool $consent): void
    {
        $this->consent = $consent;
    }
}
