document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero-section');
    const colorSwatches = document.querySelectorAll('.color-swatch');

    // Function to change the background and update active swatch
    function changeSofaColor(color) {
        // 1. Remove all existing color-specific classes
        heroSection.classList.remove('dark-grey-sofa-bg', 'brown-sofa-bg');

        // 2. Add the new class based on the selected color
        if (color === 'dark-grey') {
            heroSection.classList.add('dark-grey-sofa-bg');
        } else if (color === 'brown') {
            heroSection.classList.add('brown-sofa-bg');
        }
        // If color is 'orange', no extra class is added (it uses the default .hero style)

        // 3. Update the 'active' state of the swatches
        colorSwatches.forEach(swatch => {
            swatch.classList.remove('active');
        });
        document.querySelector(`.color-swatch[data-color="${color}"]`).classList.add('active');
    }

    // Add event listeners to all color swatches
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', (event) => {
            const selectedColor = event.target.getAttribute('data-color');
            changeSofaColor(selectedColor);
        });
    });
});