// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Purchase button analytics/feedback simulation
const buyBtn = document.getElementById('buyBtn');
if (buyBtn) {
    buyBtn.addEventListener('click', (e) => {
        // Change text briefly to show interaction
        const originalText = buyBtn.innerText;
        buyBtn.innerText = "Redirecting to Roblox...";
        buyBtn.style.backgroundColor = "#ffffff";
        
        // Set a slight timeout to let the user see the feedback before the link opens
        setTimeout(() => {
            buyBtn.innerText = originalText;
            buyBtn.style.backgroundColor = "";
            // The link will naturally open because of target="_blank" in the HTML
        }, 1000);
    });
}
