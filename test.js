// 함수를 호출하여 초기화
animateOnScroll();

// 스크롤 이벤트를 감지하여 항목을 표시할 때 애니메이션을 추가
function animateOnScroll() {
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight) {
            item.style.transitionDelay = `${index * 0.2}s`;
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
