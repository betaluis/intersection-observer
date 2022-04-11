
# Create classes

  .card {
      opacity: 0.2;
      transform: translateY(100px);
    }

  .fade {
      opacity: 1;
      transform: translateY(0px);
    }


# Get all the cards
  
  const cards = document.querySelectorAll('.card');


# Create observer

  const observer = new IntersectObserver(callback, options);


# Create options (so it doesn't yell at you.)

  const options = {}


# Create callback 

  const callback = (entries, observer) => {
      entries.forEach(entry => {
          if ( entry.isIntersecting ) {
              entry.target.classList.add('fade');
              cardObserver.unobserve(entry.target);
            }
        })
    }


# Activate the observer for each card.
   
   cards.forEach(card => {
       cardObserver.observe(card);
     })

# Add the fade in class to the entry.target

  -- line 35


# Stop observing once they fade in

  -- line 36


# Pass in a threshold when 50% of the card is in view to the options.

