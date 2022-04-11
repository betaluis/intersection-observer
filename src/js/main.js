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
    }
  })
}

const cardObserver = new IntersectionObserver(cardObserverCallback, { threshold: 0 });

cards.forEach(card => {
  cardObserver.observe(card);
})


// ================================
//      Terms and condition
// ================================

const lastTerm = document.querySelector('.terms p:last-child');
const acceptButton = document.querySelector('.btn-accept');

const termsObserverCallback = (entries, termsObserver) => {
  entries.forEach(entry => {
    if ( entry.isIntersecting ) {
      acceptButton.classList.add('enabled');
      termsObserver.unobserve(lastTerm);
      acceptButton.focus();
      console.log(entry)
    }
  }) 
}

const termsObserverOptions = { threshold: 1 }

const termsObserver = new IntersectionObserver(termsObserverCallback, termsObserverOptions);

termsObserver.observe(lastTerm);

acceptButton.addEventListener('click', e => {
  e.preventDefault();
  if (!e.target.classList.contains('enabled')) {
    const messageButton = document.querySelector('.btn-message')
    messageButton.classList.add('visible');
    setTimeout(() => messageButton.classList.remove('visible'), '2000');
  }
}) 


