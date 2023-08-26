// Countdown timer logic
function updateCountdown() {
    const now = new Date();
    const eventDate = new Date(now.getFullYear(), 9, 6);  // Month is 0-indexed, so 9 is October
    
    if (now > eventDate) {
        eventDate.setFullYear(eventDate.getFullYear() + 1);
    }
    
    const totalSeconds = (eventDate - now) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);

// Photo Mosaic Wall
// Photo Mosaic Wall
document.addEventListener("DOMContentLoaded", () => {
    const photos = [
        'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 
        'photo4.jpg', 'photo5.jpg'  // Add more photo filenames
    ];

    const mosaicContainer = document.getElementById('mosaic-container');

    photos.forEach(filename => {
        const img = document.createElement('img');
        img.src = `images/${filename}`;
        img.alt = 'Photo Mosaic';
        img.classList.add('mosaic-photo');
        
        img.addEventListener('click', function() {
            // You can add functionality to enlarge the photo, 
            // for example, by displaying it in a modal.
        });

        mosaicContainer.appendChild(img);
    });
});
