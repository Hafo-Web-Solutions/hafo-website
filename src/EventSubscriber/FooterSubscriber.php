<?php

// src/EventSubscriber/FooterSubscriber.php
namespace App\EventSubscriber;

use App\Service\FooterService;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\RequestStack;

class FooterSubscriber implements EventSubscriberInterface
{

    public function __construct(private FooterService $footerService, private RequestStack $requestStack)
    {
        $this->footerService = $footerService;
        $this->requestStack = $requestStack;
    }

    public function onKernelController(ControllerEvent $event)
    {
        $request = $event->getRequest();
        $footerData = $this->footerService->getFooterData();
        $request->attributes->set('footerData', $footerData);
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::CONTROLLER => 'onKernelController',
        ];
    }
}
