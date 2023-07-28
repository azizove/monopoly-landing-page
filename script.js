$(document).ready(function() {
    // Function to add fade-in animation to elements when they come into view
    function animateOnScroll(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }
  
    // Create a new Intersection Observer to watch for elements with the class "animate-on-scroll"
    const observer = new IntersectionObserver(animateOnScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Adjust this value to control when the animation triggers
    });
  
    // Get all elements with the class "animate-on-scroll" and observe them
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => observer.observe(element));
  
    // Smooth scroll effect for navigation links
    $('.nav-link').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 100
        }, 800); // Adjust the animation speed (in milliseconds) as needed
      }
    });
  });
  