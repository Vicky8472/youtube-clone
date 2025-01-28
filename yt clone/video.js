
const likeElement = document.querySelector(".like .element:first-child");
const dislikeElement = document.querySelector(".like .element:last-child");


const likeCount = likeElement.querySelector("p");
const dislikeCount = dislikeElement.querySelector("p");

// Variables to track user interaction
let hasLiked = false;
let hasDisliked = false;


likeElement.addEventListener('click', () => {
    if (!hasLiked && !hasDisliked) {
        let count = parseInt(likeCount.textContent.replace(/,/g, ''));
        likeCount.textContent = (++count).toLocaleString();
        hasLiked = true;
        animateElement(likeElement, "liked-animation");
    }
});


dislikeElement.addEventListener('click', () => {
    if (!hasDisliked && !hasLiked) {
        let count = parseInt(dislikeCount.textContent.replace(/,/g, ''));
        dislikeCount.textContent = (++count).toLocaleString();
        hasDisliked = true;
        animateElement(dislikeElement, "disliked-animation");
    }
});


function animateElement(element, animationClass) {
    element.classList.add(animationClass);
    setTimeout(() => element.classList.remove(animationClass), 300);
}

