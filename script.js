
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
// Infinite Scrolling loop clone functions
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("reviewsTrack");
    // Initial cards ko clone karna taake loop break na ho
    const initialCards = track.innerHTML;
    track.innerHTML += initialCards;
});

function addLiveReview(event) {
    event.preventDefault();

    const name = document.getElementById("revName").value;
    const trip = document.getElementById("revTrip").value;
    const text = document.getElementById("revText").value;
    const track = document.getElementById("reviewsTrack");

    // Naya structure create karna
    const newCard = document.createElement("div");
    newCard.className = "review-card";
    newCard.innerHTML = `
        <div class="reviewer-info">
            <div class="reviewer-details">
                <h3>${name}</h3>
                <span class="trip-tag">${trip}</span>
            </div>
            <div class="stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
        </div>
        <p class="review-text">"${text}"</p>
    `;

    // Track me push karna (dono side add karenge loop active rakhne k liye)
    track.appendChild(newCard);

    // Form clear karna
    document.getElementById("reviewForm").reset();
    alert("Thank you! Your live review is added to the scroll list.");
}