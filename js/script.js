// Portfolio BTS SIO SLAM - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== VARIABLES GLOBALES =====
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.querySelector('.theme-toggle');
    const backToTop = document.getElementById('backToTop');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const contactForm = document.getElementById('contactForm');
    const projectModal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    const projectLinks = document.querySelectorAll('.project-link, .project-demo');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    // Données des projets pour la modal
    const projectsData = {
        1: {
            title: "ZouColis - Parcel Delivery",
            description: "Projet full-stack développé en équipe de 4 : <br> Création d'une plateforme de gestion de livraisons de colis entre expéditeurs, transporteurs et points relais. Architecture découplée reposant sur une API REST en PHP/MySQL, avec une application web (Symfony) et une application mobile Android.",
            mission: [
                "Création des maquettes web et Android ainsi que du MOT et MCD",
                "Développement de l'API REST en PHP/Symfony",
                "Développement de l'application Android",
                "Modélisation de la base de données et rédaction de la documentation technique",
            ],
            features: [
                "Authentification obligatoire",
                "Tableau de bord personnalisé selon le profil (expéditeur / transporteur)",
                "Gestion, grâce au CRUD, des colis, livraisons, suivis, transporteurs et points relais",
                "Suivi des colis avec historique des statuts",
                "Application Android pour la consultation et le suivi des livraisons",
            ],
            challenges: [
                "Modélisation des données avec héritage (Expéditeur / Destinataire / Utilisateur)",
                "Conception et documentation d'une API REST)",
                "Architecture découplée : API indépendante des deux clients (web & Android)",
                "Gestion des droits selon le rôle (expéditeur vs transporteur)",
                "Coordination sur GitHub",
                "Rédaction d'une documentation technique et utilisateur",
                "Capacité à présenter à l'oral",
            ],
        },
        2: {
            title: "Gestion de triathlon",
            description: "Projet full-stack développé en équipe de 4 : </br> Création d'une application web sur-mesure pour la Fédération Française de Triathlon (FFTRI). Application en architecture MVC (PHP/MySQL) permettant la gestion centralisée des compétitions, clubs et licenciés avec authentification multi-rôles.",           
            mission: [
                "Création des maquettes et du schéma de navigation",
                "Développement du back-end en PHP (architecture MVC)",
            ],
            features: [
                "Authentification obligatoire avec comptes pré-créés pour l'admin",
                "Tableau de bord personnalisé selon le profil (responsable club / gestionnaire FFTRI)",
                "Gestion complète (CRUD) des triathlons, clubs et licenciés",
                "Règles de gestion métier : catégories d'âge, types de licences, hiérarchie FFTRI",
                "Paramètres utilisateur : thème sombre/clair et modification mot de passe",
                "Interface responsive et ergonomique"
            ],
            challenges: [
                "Modélisation complexe des données (MCD, règles de gestion hiérarchiques)",
                "Respect de l'architecture MVC pure",
                "Gestion des droits et sessions utilisateur",
                "Coordination sur GitHub et respect des délais",
                "Rédaction d'une documentation technique",
                "Capacité à présenter à l'oral"
            ],
        },

        3: {
            title: "Gestion de courses hippiques",
            description: "Projet full-stack développé en équipe de 5 : </br> Création d'une plateforme web de gestion de courses hippiques pour la société TELLIS. Application avec authentification multi-rôles (propriétaire, gestionnaire, admin), développée en PHP/MySQL avec interface responsive.",            mission: ["Création d'un serveur sous Windows Serveur 2019 (le contrôleur du domaine)", "Création de 2 stations clientes sous Windows 10", "Création d'une station sous Debian 12"],
            features: [
                "Authentification distincte selon le rôle (propriétaire, gestionnaire)",
                "Inscription et gestion des chevaux et jockeys",
                "Organisation des courses et saisie des résultats",
                "Consultation des courses disponibles et de l'historique",
                "Tableau de bord personnalisé par type d'utilisateur",
                "Interface responsive et accessible"
            ],
            challenges: [
                "Travail collaboratif sur un projet d'ampleur à 5 personnes",
                "Respect des délais et répartition équitable des tâches",
                "Modélisation cohérente de la base de données",
                "Gestion des sessions et des droits d'accès",
                "Production d'une documentation claire et structurée",
                "Présentation orale et démonstration technique"
            ],
        },

        4: {
            title: "Livraison GoEat",
            description: "Projet de développement front-end réalisé en groupe : </br> Conception et réalisation d'un site vitrine responsive pour un service de livraison de repas. Ce projet nous a permis de collaborer sur une interface utilisateur complète et de maîtriser les bases de l'intégration web en équipe.",            mission: ["Création d'un serveur sous Windows Serveur 2019 (le contrôleur du domaine)", "Création de 2 stations clientes sous Windows 10", "Création d'une station sous Debian 12"],
            mission: ["Création de l'architecture HTML du site", "Développement responsif avec Bootstrap", "Intégration des interactions utilisateur en JavaScript", "Rédaction d'un cahier des charges", "Modélisation de MCD et de diagrammes UML"],
            features: [
                "Menu de navigation complet (Nos repas, Formules, Qui sommes-nous)",
                "Affichage dynamique des différents types de repas",
                "Présentation des formules de livraison (Express, Standard, Économique)",
                "Page de présentation de l'entreprise",
                "Interface responsive adaptée à tous les écrans",
                "Logo cliquable redirigeant vers l'accueil"
            ],
            challenges: [
                "Coordination et répartition des tâches en équipe",
                "Intégration des contributions de chacun sans conflit",
                "Optimisation du responsive design",
                "Rédaction d'une documentation technique",
                "Capacité à présenter à l'oral"
            ],
        },

        5: {
            title: "Administration de MEDOCLAB",
            description: "Projet d'initiation pour les élèves en spécialité développement : </br> Bien que spécialisés en conception et développement d'applications, ce projet nous a permis de sortir de notre zone de confort et de comprendre l'environnement dans lequel évolueront nos futurs projets.",
            mission: ["Création d'un serveur sous Windows Serveur 2019 (le contrôleur du domaine)", "Création de 2 stations clientes sous Windows 10", "Création d'une station sous Debian 12"],
            features: [
                "Utilisation de GPO pour contraintes horaires et autorisations d'accès",
                "Création de sessions / répertoires / UO",
                "Installation d'un antivirus et de LibreOffice sur les 2 stations clientes",
                "N'importe quel client doit pouvoir accéder à une page web avec l'url 'www.medoclab.local'",
            ],
            challenges: [
                "Capacités de répartition et gestion du temps et des tâches en binôme",
                "Respect des modes opératoires",
                "Rédaction d'une documentation technique",
                "Capacité à présenter à l'oral"
            ],
        }
    };
    
    // ===== NAVIGATION MOBILE =====
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Fermer le menu mobile en cliquant sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Mettre à jour l'état actif
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // ===== NAVBAR SCROLL EFFECT =====
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '15px 0';
        }
        
        // Back to top button
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // Section active highlight
        highlightActiveSection();
    });
    
// ===== THÈME SOMBRE/CLAIR =====
function initTheme() {
    // Vérifier la préférence système
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    // Appliquer le thème sauvegardé ou la préférence système
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        enableDarkTheme();
    } else {
        enableLightTheme();
    }
}

function enableDarkTheme() {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
}

function enableLightTheme() {
    body.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
}

// Initialiser le thème au chargement
initTheme();

// Gestionnaire d'événement pour le bouton de thème
themeToggle.addEventListener('click', function() {
    if (body.getAttribute('data-theme') === 'dark') {
        enableLightTheme();
    } else {
        enableDarkTheme();
    }
});

// Écouter les changements de préférence système
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    const savedTheme = localStorage.getItem('theme');
    // Seulement si l'utilisateur n'a pas déjà choisi un thème manuellement
    if (!savedTheme) {
        if (e.matches) {
            enableDarkTheme();
        } else {
            enableLightTheme();
        }
    }
});
    
/* ===== PARTICLES ANIMATION ===== */
function initParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    const particleCount = 60;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
    
    // Mouse interaction
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Desktop seulement
            createMouseParticle(e, particlesContainer);
            moveSpheres(e);
        }
    });
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random color (votre palette)
    const colors = [
        'rgba(190, 18, 60, 0.7)',    // #be123c
        'rgba(251, 113, 133, 0.7)',  // #fb7185
        'rgba(15, 23, 42, 0.7)',     // #0f172a
        'rgba(253, 164, 175, 0.7)'   // #fda4af
    ];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Initial position
    resetParticle(particle);
    
    container.appendChild(particle);
    
    // Animate
    animateParticle(particle);
}

function resetParticle(particle) {
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';
    
    return { x: posX, y: posY };
}

function animateParticle(particle) {
    const pos = resetParticle(particle);
    
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    
    setTimeout(() => {
        particle.style.transition = `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 40;
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        setTimeout(() => {
            animateParticle(particle);
        }, duration * 1000);
    }, delay * 1000);
}

function createMouseParticle(e, container) {
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${mouseX}%`;
    particle.style.top = `${mouseY}%`;
    particle.style.opacity = '0.8';
    particle.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    particle.style.boxShadow = '0 0 10px rgba(251, 113, 133, 0.5)';
    
    container.appendChild(particle);
    
    setTimeout(() => {
        particle.style.transition = 'all 1.5s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 30 - 15)}%`;
        particle.style.top = `${mouseY + (Math.random() * 30 - 15)}%`;
        particle.style.opacity = '0';
        particle.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 1500);
    }, 10);
}

function moveSpheres(e) {
    const spheres = document.querySelectorAll('.gradient-sphere');
    const moveX = (e.clientX / window.innerWidth - 0.5) * 15;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 15;
    
    spheres.forEach((sphere, index) => {
        const intensity = index === 0 ? 0.8 : index === 1 ? 1.2 : 0.6;
        sphere.style.transform = `translate(${moveX * intensity}px, ${moveY * intensity}px)`;
    });
}

// Initialiser les particules quand la section est visible
document.addEventListener('DOMContentLoaded', function() {
    // Attendre un peu pour que tout soit chargé
    setTimeout(() => {
        initParticles();
    }, 500);
});



    // ===== BACK TO TOP =====
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    
    // ===== ANIMATION DES COMPÉTENCES =====
    function animateSkills() {
        skillProgressBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }
    
    // Observer pour déclencher l'animation des compétences
    const skillsSection = document.getElementById('competences');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // ===== FORMULAIRE DE CONTACT =====
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation simple
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }
            
            // Simulation d'envoi (remplacer par un vrai envoi)
            console.log('Message envoyé:', { name, email, subject, message });
            
            // Afficher un message de confirmation
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
    
    // ===== MODAL DES PROJETS =====
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            const project = projectsData[projectId];
            
            if (project) {
                openProjectModal(project);
            }
        });
    });
    
    function openProjectModal(project) {
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <div class="modal-project">
                <h2 class="modal-title">${project.title}</h2>
                <p class="modal-description">${project.description}</p>
                
                <div class="modal-mission">
                    <h3><i class="fas fa-file"></i> Mission : </h3>
                    <ul>
                        ${project.mission.map(mission => `<li>${mission}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-features">
                    <h3><i class="fas fa-star"></i> Fonctionnalités principales</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-challenges">
                    <h3><i class="fas fa-trophy"></i> Compétences acquises : </h3>
                    <ul>
                        ${project.challenges.map(challenges => `<li>${challenges}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // Fermer la modal
    modalClose.addEventListener('click', function() {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Fermer la modal en cliquant à l'extérieur
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ===== HIGHLIGHT SECTION ACTIVE =====
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // ===== ANIMATION AU SCROLL =====
    // Observer pour les animations d'apparition
    const animatedElements = document.querySelectorAll('.profile-card, .experience-card, .project-card, .skill-category, .timeline-item');
    
    const appearOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        appearOnScroll.observe(element);
    });
    
    // Ajouter le CSS pour les animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.appear {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===== INITIALISATIONS =====
    // Initialiser la section active
    highlightActiveSection();
    
    // Initialiser les animations des compétences (si visible au chargement)
    const skillsRect = skillsSection ? skillsSection.getBoundingClientRect() : null;
    if (skillsRect && skillsRect.top < window.innerHeight) {
        animateSkills();
    }
    
    // Ajouter un effet de hover sur les cartes
    const cards = document.querySelectorAll('.profile-card, .experience-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});