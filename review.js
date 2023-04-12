// Function to generate review cards
function generateReviewCards() {
    const reviewData = window.reviewData; // Get review data from data.js
    const reviewCardsContainer = document.getElementById("review-cards-container"); // Get review cards container element

    // Clear existing review cards
    reviewCardsContainer.innerHTML = "";

    // Loop through review data and create a card for each review
    for (const review of reviewData) {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card"); // Add CSS class for styling
        reviewCard.innerHTML = `
            <h3>${review.name}</h3>
            <p>Date: ${review.date}</p>
            <p>Rating: ${getRatingStars(review.rating)}</p>
            <p>Review: ${review.review}</p>
        `;
        reviewCardsContainer.appendChild(reviewCard);
    }
}

function getRatingStars(rating) {
    const maxRating = 5;
    let stars = "";
    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars += "★ "; // Full star
        } else {
            stars += "☆ "; // Empty star
        }
    }
    return stars;
}