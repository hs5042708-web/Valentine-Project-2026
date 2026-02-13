let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('bar');

function updateProgress() {
    // Slides ki total counting ke hisaab se bar ko update karein
    const percent = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.width = percent + "%";
}

function next() {
    if (currentSlide < slides.length - 1) {
        // Purani slide se 'active' class hatao
        slides[currentSlide].classList.remove('active');
        
        // Agli slide par jao
        currentSlide++;
        
        // Nayi slide ko 'active' karo
        slides[currentSlide].classList.add('active');
        
        // Progress bar ko update karo
        updateProgress();
    }
}

// Pehli baar load hone par bar set karein
updateProgress();