document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');
    const container = document.querySelector('.container');
    
    function adjustLayout() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const isPortrait = screenHeight > screenWidth;

        // Adjust photo layout based on screen width
        if (screenWidth <= 480) {
            photos.forEach(photo => {
                photo.style.width = '90%';
            });
        } else if (screenWidth <= 768) {
            photos.forEach(photo => {
                photo.style.width = '45%';
            });
        } else {
            photos.forEach(photo => {
                photo.style.width = '30%';
            });
        }

        // Adjust container padding based on screen width
        if (screenWidth < 600) {
            container.style.padding = '10px';
        } else {
            container.style.padding = '20px';
        }

        // Adjust layout further for portrait orientation
        if (isPortrait && screenWidth <= 768) {
            photos.forEach(photo => {
                photo.style.width = '100%';
            });
            container.style.padding = '5px';
        }

        // Add more responsiveness for very large screens
        if (screenWidth >= 1200) {
            photos.forEach(photo => {
                photo.style.width = '25%';
            });
        }
    }

    // Run on load
    adjustLayout();

    // Run on window resize
    window.addEventListener('resize', adjustLayout);

    // Optional: Add touch interaction for mobile devices
    photos.forEach(photo => {
        photo.addEventListener('touchstart', () => {
            photo.style.transform = 'scale(1.1)';
            photo.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
        });
        photo.addEventListener('touchend', () => {
            photo.style.transform = 'scale(1)';
            photo.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
