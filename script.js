document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animación de las barras de habilidades
    gsap.from(".skill-progress", {
        width: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#habilidades",
            start: "top 80%",
        },
    });

    // Efecto de partículas en el fondo
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        const size = Math.random() * 5 + 2;
        const speedX = Math.random() * 2 - 1;
        const speedY = Math.random() * 2 - 1;

        gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            width: size,
            height: size,
        });

        gsap.to(particle, {
            x: "+=" + speedX * 100,
            y: "+=" + speedY * 100,
            opacity: 0,
            duration: Math.random() * 2 + 1,
            onComplete: () => {
                particle.remove();
                createParticle();
            }
        });
    }

    for (let i = 0; i < 50; i++) {
        createParticle();
    }
})
