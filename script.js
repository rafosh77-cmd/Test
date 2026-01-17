document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.section');

    // Tab Switching Logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update sections
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });

    // 3D Tilt Effect for the Image
    const culturalImg = document.querySelector('.cultural-img');
    if (culturalImg) {
        const wrapper = culturalImg.closest('.image-hover-wrapper');

        wrapper.addEventListener('mousemove', (e) => {
            const rect = culturalImg.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (centerY - y) / 15; // Inverted for more natural lift
            const rotateY = (x - centerX) / 15;

            // Adding a slight translation to "move with the mouse"
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;

            culturalImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${moveX}px, ${moveY}px, 50px) scale(1.02)`;
            culturalImg.style.transition = 'transform 0.05s linear, box-shadow 0.3s ease';
        });

        wrapper.addEventListener('mouseleave', () => {
            culturalImg.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)`;
            culturalImg.style.transition = 'transform 0.5s ease, box-shadow 0.3s ease';
        });
    }

    // Existing tilt for preview-text - REMOVED as image is gone

    // Simple micro-interaction for form inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.closest('.glass-card').style.transform = 'scale(1.02)';
            input.parentElement.closest('.glass-card').style.transition = '0.3s ease';
        });
        input.addEventListener('blur', () => {
            input.parentElement.closest('.glass-card').style.transform = 'scale(1)';
        });
    });
});
