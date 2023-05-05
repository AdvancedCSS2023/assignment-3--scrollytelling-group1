// Observer for .scene-text-container
const textObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('showTextAnimation')) {
      entry.target.classList.add('showTextAnimation');
    }
  });
}, { threshold: 0.3 });

// Observer for .background-plants-right
const plantObserverRight = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('showPlantRightAnimation')) {
      entry.target.classList.add('showPlantRightAnimation');
    }
  });
});

// Observer for .background-plants-left
const plantObserverLeft = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('showPlantLeftAnimation')) {
      entry.target.classList.add('showPlantLeftAnimation');
    }
  });
});

// Elements to observe
const textElements = document.querySelectorAll('.scene-text-conteiner');
const plantElementsRight = document.querySelectorAll('.background-plants-right');
const plantElementsleft = document.querySelectorAll('.background-plants-left');
const h3Element = document.querySelector('h3');

// Add observers to elements
textElements.forEach(el => textObserver.observe(el));
plantElementsRight.forEach(el => plantObserverRight.observe(el));
plantElementsleft.forEach(el => plantObserverLeft.observe(el));
