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
    const bottleElement = document.querySelector('.scene1__content-bottle');
    const trashbinElement = document.querySelector('.scene9__trash-bin');
    const trashExample1Element = document.querySelector('.scene9__img-container-trashExample1');
    const trashExample2Element = document.querySelector('.scene9__img-container-trashExample2');
    const trashExample3Element = document.querySelector('.scene9__img-container-trashExample3');
    const trashExample4Element = document.querySelector('.scene9__img-container-trashExample4');
    const trashExample5Element = document.querySelector('.scene9__img-container-trashExample5');
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
const textElements = document.querySelectorAll('.text-container');
const plantElementsRight = document.querySelectorAll('.plant-container__background-plants-right');
const plantElementsleft = document.querySelectorAll('.plant-container__background-plants-left');
const bottleRemove = document.querySelectorAll('.scene9__remove-bottle-trigger');
const linkrevealelement = document.querySelectorAll('h4 a span');

// Add observers to elements
textElements.forEach(el => textObserver.observe(el));
plantElementsRight.forEach(el => plantObserverRight.observe(el));
plantElementsleft.forEach(el => plantObserverLeft.observe(el));
bottleRemove.forEach(el => removeBottleTriggerObserver.observe(el));
linkrevealelement.forEach(el => linkcontainerObserver.observe(el));
