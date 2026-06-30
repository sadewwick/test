document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch personalized info from our backend API
        const response = await fetch('/api/info');
        const data = await response.json();

        // Update the DOM with the user's data
        document.getElementById('name').textContent = data.name;
        document.getElementById('age-desc').textContent = `${data.age} Year Old | ${data.description}`;

        // Add small interactive animation for buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-3px)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        document.getElementById('name').textContent = "Sadew Wickramasingha";
        document.getElementById('age-desc').textContent = "18 Year Old | Entrepreneur and problem solver";
    }
});
