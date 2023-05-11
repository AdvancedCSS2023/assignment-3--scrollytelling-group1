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

// Observer for .removeBottleTrigger
const removeBottleTriggerObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    const bottleElement = document.querySelector('.bottle');
    const trashbinElement = document.querySelector('.trash-bin');
    const trashExample1Element = document.querySelector('.trashExample1');
    const trashExample2Element = document.querySelector('.trashExample2');
    const trashExample3Element = document.querySelector('.trashExample3');
    const trashExample4Element = document.querySelector('.trashExample4');
    const trashExample5Element = document.querySelector('.trashExample5');
    if (entry.isIntersecting && bottleElement && !bottleElement.classList.contains('removeBottle')) {
      bottleElement.classList.remove('throwBottleAnimation');
      trashbinElement.classList.add('trashBinFixed');
      trashExample1Element.classList.add('showTrashExample1');
      trashExample2Element.classList.add('showTrashExample2');
      trashExample3Element.classList.add('showTrashExample3');
      trashExample4Element.classList.add('showTrashExample4');
      trashExample5Element.classList.add('showTrashExample5');
    }
  });
});

// Observer for Link reveal
const linkcontainerObserver = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('revealanimation')) {
      entry.target.classList.add('revealanimation');
    }
  });
});

// Elements to observe
const textElements = document.querySelectorAll('.scene-text-conteiner');
const plantElementsRight = document.querySelectorAll('.background-plants-right');
const plantElementsleft = document.querySelectorAll('.background-plants-left');
const bottleRemove = document.querySelectorAll('.removeBottleTrigger');
const linkrevealelement = document.querySelectorAll('h4 a span');

// Add observers to elements
textElements.forEach(el => textObserver.observe(el));
plantElementsRight.forEach(el => plantObserverRight.observe(el));
plantElementsleft.forEach(el => plantObserverLeft.observe(el));
bottleRemove.forEach(el => removeBottleTriggerObserver.observe(el));
linkrevealelement.forEach(el => linkcontainerObserver.observe(el));
