

# Things you'll need to create for this tutorial.

1. Terms and conditions section

2. Query selectors

3. Callback function

4. Options

5. Observer

6. Call the Observer

7. Event Listener

========================================================

# Call your querySelectors

    const lastTermElements = document.querySelector('.terms p:last-child');

    const acceptBtn = document.querySelector('.btn-accept');


# Observer
  
    const termsObserver = new IntersectionObserver(termsObserverCallback, termsObserverOptions)


# Call back

    const termsObserverCallback = (lastP, termsObserver) => {
    }

    Add the class "enabled" to the accept button if the intersection observer is triggered.
    
    Stop the observer after the class is added. oberserver.unobserve(itemBeingObserved)

    Add the focus on the button. button.focus();

# Options
  
    const termsObserverOptions = {};

    Add a threshold of 1 because you want the whole thing to be visible before it triggers.

# Call the Observer
  
    termsObserver.observe(lastTermElements);

# Event listener

    Create a click event for the button.

    If it has the enabled class we don't want to do anything, but if it doesn't, we want to show the message.

    e.target.classList.contains('enabled')

    Grab the button message.

    Add a class list to the button message.

    Add a timeout so that it doesn't stay there forever.

    setTimeout(() => btnMessage.classList.remove('visible'), '2000');
