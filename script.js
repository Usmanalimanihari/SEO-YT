// Dynamic SEO Score Update (Example)
function updateSeoScore() {
    const scoreElement = document.querySelector('.score');
    let currentScore = 82;
    
    // Simulate real-time score change (for demo)
    setInterval(() => {
        currentScore += Math.random() > 0.5 ? 1 : -1;
        if (currentScore > 100) currentScore = 100;
        if (currentScore < 0) currentScore = 0;
        scoreElement.textContent = Math.floor(currentScore);
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateSeoScore();
});