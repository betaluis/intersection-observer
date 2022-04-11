const nav = document.getElementById('nav');
const header = document.getElementById('header');

const observerCallback = (watchEntry, navObserver) => {
  watchEntry.forEach(entry => {
    if ( !entry.isIntersecting ) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  })
}

const navObserver = new IntersectionObserver(observerCallback, {rootMargin: "-90px"});

navObserver.observe(header);

// - - - - - - - - - - - - - - - -
// Card Observer - Fade in effect
// - - - - - - - - - - - - - - - -

const cards = document.querySelectorAll('.card');

const cardObserverCallback = (cards, cardObserver) => {
  cards.forEach(card => {
    if (card.isIntersecting) {
      card.target.classList.add('fade');
      cardObserver.unobserve(card.target);
      console.log(card);
    }
  })
}

const cardObserver = new IntersectionObserver(cardObserverCallback, { threshold: 0 });

cards.forEach(card => {
  cardObserver.observe(card);
})
