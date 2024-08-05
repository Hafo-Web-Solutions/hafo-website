function updateSubject() {
  const select = document.getElementById("select_subject");
  const heading = document.getElementById("subject_heading");
  const titles = document.querySelectorAll(".question_title");
  const contents = document.querySelectorAll(".question_content");
  const selectedValue = select.value;

  const subjects = {
    0: {
        heading: "Questions fréquentes",
        questions: [
          {
            title: "Quels services proposez-vous ?",
            content:
              "Nous offrons des services de développement web, maintenance, refonte, et référencement. Nous sommes spécialisés dans le développement Symfony, garantissant des solutions robustes et sur mesure pour nos clients.",
          },
          {
            title: "Comment obtenir un devis ?",
            content:
              "Contactez-nous pour un devis gratuit adapté à vos besoins spécifiques. Nous analysons votre projet et fournissons une estimation précise basée sur vos exigences.",
          },
          {
            title: "Quels sont vos tarifs pour le développement de site ?",
            content:
              "Nos tarifs varient : Basique (1200 €), Standard (2500 €), Avancé (5000 €), Personnalisé (sur devis). Ces prix sont indicatifs et flexibles en fonction de la complexité et des fonctionnalités requises.",
          },
          {
            title: "Proposez-vous des services de maintenance ?",
            content:
              "Oui, nous proposons des services de maintenance à partir de 80 €/mois pour le forfait Basique et 250 €/mois pour le forfait Complet, assurant que votre site reste à jour et performant.",
          },
          {
            title: "Combien de temps prend un projet typique ?",
            content:
              "La durée d'un projet dépend de sa complexité. Après une analyse détaillée de vos besoins, nous fournissons une estimation précise du délai nécessaire pour réaliser votre projet.",
          },
          {
            title: "Offrez-vous des consultations gratuites ?",
            content:
              "Oui, nous offrons des consultations gratuites pour discuter de vos besoins et définir la meilleure stratégie pour votre projet.",
          },
          {
            title: "Comment prendre rendez-vous avec votre équipe ?",
            content:
              'Utilisez notre bouton "Prendre RDV" pour accéder à notre calendrier. Planifiez un rendez-vous à votre convenance. Nous sommes flexibles et disponibles pour répondre à vos questions et discuter de votre projet.',
          },
          {
            title: "Quels avantages pour le référencement proposez-vous ?",
            content:
              "Nous offrons une optimisation SEO initiale à 450 € pour améliorer votre visibilité en ligne. Ensuite, nous proposons des optimisations SEO continues à 250 €/mois pour garantir que votre site reste performant et bien classé dans les moteurs de recherche",
          },
        ],
      },
    1: {
      heading: "Questions fréquentes",
      questions: [
        {
          title: "Quels services proposez-vous ?",
          content:
            "Nous offrons des services de développement web, maintenance, refonte, et référencement. Nous sommes spécialisés dans le développement Symfony, garantissant des solutions robustes et sur mesure pour nos clients.",
        },
        {
          title: "Comment obtenir un devis ?",
          content:
            "Contactez-nous pour un devis gratuit adapté à vos besoins spécifiques. Nous analysons votre projet et fournissons une estimation précise basée sur vos exigences.",
        },
        {
          title: "Quels sont vos tarifs pour le développement de site ?",
          content:
            "Nos tarifs varient : Basique (1200 €), Standard (2500 €), Avancé (5000 €), Personnalisé (sur devis). Ces prix sont indicatifs et flexibles en fonction de la complexité et des fonctionnalités requises.",
        },
        {
          title: "Proposez-vous des services de maintenance ?",
          content:
            "Oui, nous proposons des services de maintenance à partir de 80 €/mois pour le forfait Basique et 250 €/mois pour le forfait Complet, assurant que votre site reste à jour et performant.",
        },
        {
          title: "Combien de temps prend un projet typique ?",
          content:
            "La durée d'un projet dépend de sa complexité. Après une analyse détaillée de vos besoins, nous fournissons une estimation précise du délai nécessaire pour réaliser votre projet.",
        },
        {
          title: "Offrez-vous des consultations gratuites ?",
          content:
            "Oui, nous offrons des consultations gratuites pour discuter de vos besoins et définir la meilleure stratégie pour votre projet.",
        },
        {
          title: "Comment prendre rendez-vous avec votre équipe ?",
          content:
            'Utilisez notre bouton "Prendre RDV" pour accéder à notre calendrier. Planifiez un rendez-vous à votre convenance. Nous sommes flexibles et disponibles pour répondre à vos questions et discuter de votre projet.',
        },
        {
          title: "Quels avantages pour le référencement proposez-vous ?",
          content:
            "Nous offrons une optimisation SEO initiale à 450 € pour améliorer votre visibilité en ligne. Ensuite, nous proposons des optimisations SEO continues à 250 €/mois pour garantir que votre site reste performant et bien classé dans les moteurs de recherche",
        },
      ],
    },
    2: {
      heading: "Expertise",
      questions: [
        {
          title: "Pourquoi choisir Symfony ?",
          content:
            "Symfony offre une flexibilité et une robustesse incomparables pour développer des applications web évolutives et performantes. Sa modularité permet d'adapter le projet à des besoins spécifiques tout en garantissant une sécurité et une maintenance aisées.",
        },
        {
          title: "Quels sont les avantages de Docker ?",
          content:
            "Docker permet des déploiements rapides et fiables avec des environnements de développement isolés et reproductibles. Il facilite la gestion des dépendances et assure une continuité entre les environnements de développement, de test et de production.",
        },
        {
          title: "Pourquoi utiliser PostgreSQL ?",
          content:
            "PostgreSQL garantit des performances élevées et une gestion efficace des données pour des applications exigeantes. C'est un système de gestion de bases de données relationnelles robuste et fiable, capable de gérer de grandes charges de travail avec une forte concurrence.",
        },
        {
          title: "Comment assurez-vous la sécurité des applications ?",
          content:
            "Nous intégrons des protocoles de sécurité rigoureux dans toutes nos solutions. Avec Symfony, nous utilisons des composants de sécurité robustes pour protéger contre les vulnérabilités courantes, assurant ainsi une protection complète des données.",
        },
        {
          title: "Mettez-vous en place une CI/CD ?",
          content:
            "Oui, nous mettons en place des pipelines CI/CD pour automatiser le déploiement et l'intégration des nouvelles fonctionnalités, assurant ainsi une livraison rapide et fiable des mises à jour./p>",
        },
        {
          title: "Avantage d'une équipe polyvalente ?",
          content:
            "Notre polyvalence nous permet de nous adapter à divers projets et besoins avec des outils variés. Nous pouvons intégrer et utiliser différentes technologies et frameworks pour répondre spécifiquement à vos exigences, garantissant ainsi des solutions optimales.",
        },
        {
          title: "Types de projets adaptés à Symfony ?",
          content:
            "Symfony convient aux sites vitrines, applications web complexes et plateformes e-commerce. Grâce à sa flexibilité et à sa modularité, il peut être utilisé pour des projets de toute taille, du petit site web aux applications d'entreprise complexes.",
        },
        {
          title: "Utilisez-vous Git ?",
          content:
            "Oui, nous utilisons Git pour la gestion de version, ce qui permet un suivi précis des modifications, une collaboration efficace et une intégration continue dans nos projets de développement",
        },
      ],
    },
    3: {
      heading: "Création de site",
      questions: [
        {
          title: "Pourquoi choisir le framework Symfony ?",
          content:
            "Symfony est un framework PHP puissant, flexible et sécurisé, idéal pour des projets web robustes et évolutifs. Il permet de développer des fonctionnalités sur mesure tout en garantissant une haute performance.",
        },
        {
          title: "Quels types de sites pouvez-vous créer ?",
          content:
            "Nous créons des sites vitrines, e-commerce, applications web complexes, et bien plus, adaptés à vos besoins spécifiques. Chaque projet est unique et conçu pour refléter votre identité et répondre à vos objectifs.",
        },
        {
          title: "Comment gérez-vous la maintenance du site ?",
          content:
            "Nous assurons la maintenance continue avec des mises à jour régulières, une surveillance proactive, et des interventions rapides pour garantir que votre site reste sécurisé et performant. Ces services sont proposés sous forme de forfaits adaptés à vos besoins.",
        },
        {
          title: "Quels sont les délais de création d'un site web ?",
          content:
            "Les délais varient selon la complexité : de quelques semaines pour un site vitrine à plusieurs mois pour une application complexe. Nous fournissons une estimation précise après l'analyse de vos besoins.",
        },
        {
          title: "Quels sont les coûts de création d'un site web ?",
          content:
            "Les coûts dépendent de la complexité et des fonctionnalités requises. Nous proposons des devis personnalisés pour chaque projet, vous assurant une solution adaptée à votre budget.",
        },
        {
          title: "Proposez-vous des solutions d'hébergement web ?",
          content:
            "Oui, nous proposons des services d'hébergement incluant gestion de la sécurité, mises à jour régulières, et support technique pour garantir la disponibilité et la performance de votre site web.",
        },
        {
          title: "Comment intégrez-vous l'optimisation SEO ?",
          content:
            "Nous intégrons des pratiques SEO dès le début du projet pour améliorer la visibilité de votre site sur les moteurs de recherche, attirant ainsi plus de visiteurs qualifiés.",
        },
        {
          title: "Quel accompagnement offrez-vous après le lancement ?",
          content:
            "Après le lancement, nous offrons un accompagnement pour assurer que tout se passe bien et pour effectuer les ajustements nécessaires. Ce suivi initial est inclus dans le projet. Pour des besoins à long terme, nous proposons des contrats de maintenance",
        },
      ],
    },
    4: {
      heading: "Refonte",
      questions: [
        {
          title: "Pourquoi devrais-je envisager une refonte de site web ?",
          content:
            "La refonte permet d'améliorer l'expérience utilisateur, de moderniser le design, et d'optimiser les performances techniques, ce qui peut augmenter le trafic et les conversions.",
        },
        {
          title:
            "Quels sont les signes indiquant qu'une refonte est nécessaire ?",
          content:
            "Des signes incluent un design daté, une faible performance, des difficultés de navigation, et un taux de conversion faible.",
        },
        {
          title: "Combien de temps prend une refonte de site web ?",
          content:
            "Le délai varie selon la complexité du projet, allant de quelques semaines à plusieurs mois. Une estimation précise est fournie après l'analyse de vos besoins.",
        },
        {
          title: "Quels sont les coûts associés à une refonte de site web ?",
          content:
            "Les coûts dépendent de la complexité et des fonctionnalités requises. Nous proposons des devis personnalisés pour chaque projet.",
        },
        {
          title: "Est-ce que mon site sera hors ligne pendant la refonte ?",
          content:
            "Non, nous travaillons sur une version de développement et effectuons la transition finale rapidement pour minimiser les interruptions.",
        },
        {
          title: "Puis-je conserver mon contenu actuel lors de la refonte ?",
          content:
            "Oui, nous pouvons réutiliser et optimiser votre contenu actuel tout en intégrant de nouveaux éléments.",
        },
        {
          title: "Comment assurer la continuité du SEO pendant la refonte ?",
          content:
            "Nous intégrons des pratiques SEO dès le début pour préserver et améliorer votre positionnement sur les moteurs de recherche.",
        },
        {
          title: "Que se passe-t-il après le lancement du nouveau site ?",
          content:
            "Nous offrons un suivi post-lancement pour assurer une transition en douceur et des services de maintenance pour garantir la pérennité de votre site",
        },
      ],
    },
    5: {
      heading: "Maintenance",
      questions: [
        {
          title: "Pourquoi la maintenance de site web est-elle importante ?",
          content:
            "La maintenance régulière garantit la sécurité, la performance et la compatibilité de votre site web, vous protégeant contre les pannes et les cyberattaques.",
        },
        {
          title: "Quelles sont les actions incluses dans la maintenance ?",
          content:
            "Les actions incluent les mises à jour de logiciels, la surveillance de la sécurité, l'optimisation des performances, les sauvegardes régulières, et le support technique.",
        },
        {
          title: "À quelle fréquence mon site doit-il être mis à jour ?",
          content:
            "Nous recommandons des mises à jour mensuelles pour le framework, les bibliothèques et les dépendances, avec des vérifications de sécurité et des optimisations de performance régulières.",
        },
        {
          title: "Que faire en cas de problème urgent sur mon site ?",
          content:
            "Nous offrons un support technique réactif pour résoudre rapidement tout problème. Contactez notre équipe via notre formulaire de contact pour une assistance immédiate.",
        },
        {
          title: "Quels sont les coûts de la maintenance de site web ?",
          content:
            "Les coûts varient en fonction des besoins spécifiques de votre site. Nous proposons des forfaits personnalisés adaptés à votre budget et à vos exigences.",
        },
        {
          title: "Comment la maintenance affecte-t-elle le SEO de mon site ?",
          content:
            "Une maintenance régulière améliore la vitesse et la sécurité de votre site, ce qui peut positivement influencer votre classement dans les moteurs de recherche.",
        },
        {
          title:
            "Puis-je demander une maintenance même si mon site n'a pas été créé par votre agence ?",
          content:
            "Oui, nous offrons des services de maintenance pour tous les sites web, quel que soit leur développeur initial.",
        },
        {
          title:
            "Que se passe-t-il si une mise à jour cause des problèmes sur mon site ?",
          content:
            "Nous testons toutes les mises à jour dans un environnement de staging avant de les appliquer en production pour minimiser les risques. Si un problème survient, nous intervenons rapidement pour le résoudre",
        },
      ],
    },
    6: {
      heading: "Référencement",
      questions: [
        {
          title: "Qu'est-ce que le SEO ?",
          content:
            "Le SEO (Search Engine Optimization) est l'ensemble des techniques visant à améliorer le positionnement d'un site web sur les moteurs de recherche. Cela inclut l'optimisation du contenu, du code, et la création de backlinks.",
        },
        {
          title: "Pourquoi le SEO est-il important ?",
          content:
            "Le SEO est crucial pour augmenter la visibilité de votre site web, attirer plus de visiteurs qualifiés et améliorer la crédibilité et l'autorité de votre marque en ligne.",
        },
        {
          title: "Qu'est-ce qu'un audit SEO technique ?",
          content:
            "Un audit SEO technique est une analyse détaillée de la structure et du code de votre site web pour identifier les problèmes qui pourraient affecter son classement sur les moteurs de recherche.",
        },
        {
          title: "Comment optimiser le code source pour le SEO ?",
          content:
            "Optimiser le code source inclut la correction des erreurs, l'amélioration de la vitesse de chargement, l'utilisation appropriée des balises HTML et l'assurance de la compatibilité mobile.",
        },
        {
          title: "Qu'est-ce que le netlinking ?",
          content:
            "Le netlinking, ou link building, est la pratique d'obtenir des backlinks de qualité provenant d'autres sites web pour renforcer l'autorité et le classement de votre site sur les moteurs de recherche.",
        },
        {
          title: "Comment le contenu impacte-t-il le SEO ?",
          content:
            "Un contenu pertinent, bien structuré et optimisé pour les mots-clés cible améliore l'engagement des utilisateurs et aide les moteurs de recherche à comprendre et à indexer votre site correctement.",
        },
        {
          title:
            "Quelle est l'importance de la vitesse de chargement pour le SEO ?",
          content:
            "Une vitesse de chargement rapide améliore l'expérience utilisateur et est un facteur de classement important pour les moteurs de recherche. Un site lent peut entraîner une baisse de trafic et un mauvais classement.",
        },
        {
          title: "Quels sont les outils utilisés pour le SEO ?",
          content:
            "Les outils couramment utilisés pour le SEO incluent Google Analytics, Google Search Console, Ahrefs, SEMrush, et Moz, qui aident à analyser les performances, identifier les problèmes et optimiser le site",
        },
      ],
    },
  };

  const subject = subjects[selectedValue] || { heading: "", questions: [] };

  heading.textContent = subject.heading;

  titles.forEach((title, index) => {
    title.textContent = subject.questions[index]?.title || "";
  });

  contents.forEach((content, index) => {
    content.textContent = subject.questions[index]?.content || "";
  });
}

window.updateSubject = updateSubject;
