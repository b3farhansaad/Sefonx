document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.getElementById('animated-text');
    const textArray = [
        'Backend Developer',
        'Web Developer', 
        'Frontend Expert',
        'Full-Stack Developer'
    ];
    
    let currentIndex = 0;
    let isAnimating = false;
    let currentText = '';
    let targetText = '';
    let isDeleting = false;
    let typeSpeed = 100; 
    
    function typeWriter() {
        if (isAnimating) return;
        
        isAnimating = true;
        
        if (!isDeleting && currentText === '') {
            targetText = textArray[currentIndex];
            isDeleting = false;
        }
        
        if (isDeleting) {
            currentText = currentText.slice(0, -1);
            animatedText.textContent = currentText;
            animatedText.classList.add('deleting');
            animatedText.classList.remove('typing');
            
            if (currentText === '') {
                currentIndex = (currentIndex + 1) % textArray.length;
                targetText = textArray[currentIndex];
                isDeleting = false;
                typeSpeed = 100; 
            } else {
                typeSpeed = 50; 
            }
        } else {
            currentText = targetText.slice(0, currentText.length + 1);
            animatedText.textContent = currentText;
            animatedText.classList.add('typing');
            animatedText.classList.remove('deleting');
            
            if (currentText === targetText) {
                typeSpeed = 2000; 
                setTimeout(() => {
                    isDeleting = true;
                    typeSpeed = 50; 
                }, 2000);
            } else {
                typeSpeed = 100; 
            }
        }
        
        setTimeout(() => {
            isAnimating = false;
            if (currentText !== targetText || isDeleting) {
                typeWriter();
            }
        }, typeSpeed);
    }
    
    setTimeout(() => {
        typeWriter();
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuItems = document.querySelectorAll('.mobile-nav-link');
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (scrollY > lastScrollY && scrollY > 200) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMobileMenu);
        }
        
        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        }
        
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', closeMobileMenu);
        });
        
        const mobileCtaBtn = document.querySelector('.mobile-cta-btn');
        const mobileOldPortfolioBtn = document.querySelector('.mobile-old-portfolio-btn');
        
        if (mobileCtaBtn) {
            mobileCtaBtn.addEventListener('click', function() {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    const offsetTop = contactSection.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                closeMobileMenu();
            });
        }
        
        if (mobileOldPortfolioBtn) {
            mobileOldPortfolioBtn.addEventListener('click', closeMobileMenu);
        }
        
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; 
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
		});
	});
    
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`a[href="#${id}"]`);
                
                document.querySelectorAll('.menu-item, .mobile-menu-item').forEach(link => {
                    link.classList.remove('active');
                });
                
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    const hireUsBtn = document.querySelector('.hire-us-btn');
    const ctaButtonTop = document.querySelector('.cta-button-top');
    
    if (hireUsBtn) {
        hireUsBtn.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    if (ctaButtonTop) {
        ctaButtonTop.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const skillOptions = document.querySelectorAll('.skill-option');
    const skillGrids = document.querySelectorAll('.skills-grid');
    
    skillOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            skillOptions.forEach(opt => opt.classList.remove('active'));
            
            this.classList.add('active');
            
            skillGrids.forEach(grid => {
                grid.classList.remove('active');
            });
            
            const targetGrid = document.querySelector(`.${category}-skills`);
            if (targetGrid) {
                targetGrid.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            const submitBtn = contactForm.querySelector('.contact-submit-btn');
            const originalText = submitBtn.querySelector('.button-text').textContent;
            
            submitBtn.querySelector('.button-text').textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send to Discord webhook
            sendToDiscord(name, email, subject, message)
                .then(() => {
                    // Success
                    submitBtn.querySelector('.button-text').textContent = 'Message Sent!';
                    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.querySelector('.button-text').textContent = originalText;
                        submitBtn.disabled = false;
                    }, 3000);
                })
                .catch((error) => {
                    // Error
                    console.error('Error sending message:', error);
                    submitBtn.querySelector('.button-text').textContent = originalText;
                    submitBtn.disabled = false;
                    showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
                });
        });
        
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });
    }
});

// Discord Webhook Integration
async function sendToDiscord(name, email, subject, message) {
    const webhookUrl = 'https://discord.com/api/webhooks/1510318451892424844/PgGqcSw5WxhS9ThJV-d2n-x5IhzXw8gM5cNCUNyOzac4s_FBE4z-aQbHS6gSAXST8Wtx';
    
    // Create detailed embed
    const embed = {
        title: "📧 New Contact Form Submission",
        description: "Someone has sent you a message through your portfolio website!",
        color: 0x7B68EE, // Purple color matching your theme
        timestamp: new Date().toISOString(),
        fields: [
            {
                name: "👤 Name",
                value: name,
                inline: true
            },
            {
                name: "📧 Email",
                value: email,
                inline: true
            },
            {
                name: "📝 Subject",
                value: subject,
                inline: false
            },
            {
                name: "💬 Message",
                value: message.length > 1000 ? message.substring(0, 1000) + "..." : message,
                inline: false
            },
            {
                name: "🌐 Website",
                value: "Sefonx Portfolio",
                inline: true
            },
            {
                name: "⏰ Time",
                value: new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Dubai',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                }),
                inline: true
            }
        ],
        footer: {
            text: "Sefonx Portfolio Contact Form",
            icon_url: "https://sefonx.vercel.app/assests/website-logo.png"
        },
        thumbnail: {
            url: "https://sefonx.vercel.app/assests/website-logo.png"
        }
    };
    
    // Send to Discord
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            embeds: [embed],
            username: "sefonx Portfolio",
            avatar_url: "https://sefonx.vercel.app/assests/website-logo.png"
        })
    });
    
    if (!response.ok) {
        throw new Error(`Discord webhook failed: ${response.status}`);
    }
    
    // Discord webhooks return empty response, not JSON
    // Just return success if we get here
    return { success: true };
}

// Geolocation and Project Filtering
let userCountry = null;
let isUAEUser = false;

// Detect user's country
async function detectUserCountry() {
    try {
        // Try to get country from IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        userCountry = data.country_code;
        isUAEUser = userCountry === 'AE';
        
        // Apply project filtering
        filterProjectsForUAE();
        
        console.log('User country detected:', userCountry, 'UAE User:', isUAEUser);
    } catch (error) {
        console.log('Could not detect country, showing all projects');
        // If geolocation fails, show all projects
        isUAEUser = false;
        filterProjectsForUAE();
    }
}

// Filter projects based on user location
function filterProjectsForUAE() {
    const projectsSection = document.querySelector('.projects-section');
    if (!projectsSection) return;
    
    const projectsGrid = projectsSection.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Projects to hide for UAE users
    const uaeHiddenProjects = [
        'CloudCart',
        'System Bot', 
        'Nexus Bot Website',
        'ProLexBot'
    ];
    
    const projectCards = projectsGrid.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectTitle = card.querySelector('.project-title');
        if (!projectTitle) return;
        
        const title = projectTitle.textContent.trim();
        
        if (isUAEUser && uaeHiddenProjects.includes(title)) {
            // Hide project for UAE users
            card.style.display = 'none';
            card.setAttribute('data-uae-hidden', 'true');
        } else {
            // Show project for non-UAE users or non-restricted projects
            card.style.display = 'block';
            card.removeAttribute('data-uae-hidden');
        }
    });
    
    // Update projects note for UAE users
    updateProjectsNote();
}

// Update projects note based on user location
function updateProjectsNote() {
    const projectsNote = document.querySelector('.projects-note-text');
    if (!projectsNote) return;
    
    if (isUAEUser) {
        projectsNote.innerHTML = `
            Additional projects are available in my portfolio, however, they are not displayed here due to the absence of professional logos and branding materials, as well as confidentiality agreements and client privacy policies that restrict public disclosure of certain completed work.
            <br><br>
        `;
    } else {
        projectsNote.innerHTML = `
            Additional projects are available in my portfolio, however, they are not displayed here due to the absence of professional logos and branding materials, as well as confidentiality agreements and client privacy policies that restrict public disclosure of certain completed work.
        `;
    }
}

// Initialize geolocation detection
document.addEventListener('DOMContentLoaded', function() {
    // Detect user's country when page loads
    detectUserCountry();
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}
