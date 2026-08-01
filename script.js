
function selectTour(tourName) {
    const tourInput = document.getElementById('selectedTour');
    tourInput.value = tourName;
    
    
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tour = document.getElementById('selectedTour').value;
    
    if(!tour) {
        alert("Please select a tour first before submitting!");
        return;
    }
    
    alert(`Thank you, ${name}! Your booking request for "${tour}" has been submitted successfully.`);
    
  
    this.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    // Website khulne ke 3 seconds baad corner se slide-in hoga
    setTimeout(() => {
        const modal = document.getElementById("newsletterModal");
        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add("show");
        }, 50);
    }, 3000);
});

// Pop-up close karne ka smooth trigger
function closeNewsletter() {
    const modal = document.getElementById("newsletterModal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

// Form Submit Handling
function handleSubscribe(event) {
    event.preventDefault();
    alert("Awesome! Welcome to AdventraHub.");
    closeNewsletter();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', /* Smooth rolling transition */
                block: 'start'      /* Section ke top par stop hoga */
            });
        }
    });
});
/* Pehle wale media query code ko hata kar ye bilkul end me paste kar den */
@media screen and (max-width: 768px) {
    /* Main body padding reset */
    body, html {
        overflow-x: hidden !important;
        width: 100% !important;
    }

    /* Section titles compact look */
    .section-title h2 {
        font-size: 24px !important;
        text-align: center !important;
    }

    /* Tours Grid vertical stacks */
    .tours-grid {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        gap: 25px !important;
        padding: 15px !important;
        width: 100% !important;
        box-sizing: border-box !important;
    }

    .tour-card {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 auto !important;
        box-sizing: border-box !important;
    }

    /* Why Choose Us & Testimonials block view */
    .services-container, .testimonials-track {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        width: 100% !important;
        animation: none !important; /* Mobile pr scroll band takeh screen se bahar na jaye */
        transform: none !important;
    }

    .service-box, .review-card {
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
        margin-bottom: 15px !important;
    }

    .carousel-wrapper {
        overflow: visible !important;
        width: 100% !important;
    }
}