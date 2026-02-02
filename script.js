let currentSlide = 1;
const totalSlides = 10;

function showSlide(n) {
    // Скрываем все слайды
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Показываем нужный слайд
    const slideToShow = document.getElementById(`slide${n}`);
    if (slideToShow) {
        slideToShow.classList.add('active');
        currentSlide = n;
        
        // Обновляем индикатор
        document.getElementById('current-slide').textContent = n;
        document.getElementById('total-slides').textContent = totalSlides;
    }
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        showSlide(currentSlide - 1);
    }
}

// Управление клавиатурой
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key >= '1' && e.key <= '9') showSlide(parseInt(e.key));
    if (e.key === '0') showSlide(10);
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    showSlide(1);
});
