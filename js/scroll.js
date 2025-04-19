document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('.tech-scroll-container');
  const scrollContent = document.querySelector('.tech-scroll');
  
  // Clone the content for seamless looping
  const clone = scrollContent.cloneNode(true);
  scrollContainer.appendChild(clone);
  
  let scrollPosition = 0;
  const scrollSpeed = 1.6; // pixels per frame
  
  function scroll() {
    scrollPosition -= scrollSpeed;
    
    // Reset position when first set of items is completely scrolled
    if (Math.abs(scrollPosition) >= scrollContent.offsetWidth) {
      scrollPosition = 0;
    }
    
    scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
    requestAnimationFrame(scroll);
  }
  
  // Start the animation
  requestAnimationFrame(scroll);
}); 