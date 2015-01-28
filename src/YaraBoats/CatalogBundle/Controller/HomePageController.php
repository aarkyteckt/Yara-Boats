<?php

namespace YaraBoats\CatalogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomePageController extends Controller
{
    public function indexAction()
    {
        return $this->render('YaraBoatsCatalogBundle:HomePage:index.html.twig');
    }
}