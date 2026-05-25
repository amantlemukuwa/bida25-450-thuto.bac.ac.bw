function goToPage(pageName) {
    // I use window.location to go to different pages
    window.location.href = pageName;
}

// this function runs when the page loads
window.onload = function() {
    // animation
    var content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        
        setTimeout(function() {
            content.style.transition = 'opacity 0.5s, transform 0.5s';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // this adds hover effects to menu items
    var menuItems = document.querySelectorAll('.menu-item');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#FFF';
        });
        menuItems[i].addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#FFF8DC';
        });
    }
    
    // this adds click effect to gallery items
    var galleryItems = document.querySelectorAll('.gallery-item');
    for (var j = 0; j < galleryItems.length; j++) {
        galleryItems[j].addEventListener('click', function() {
            // show an alert when you click on a gallery item
            var caption = this.querySelector('p').textContent;
            alert('This is: ' + caption);
        });
    }
    
    // adding current year to footer
    var footer = document.querySelector('.footer p');
    if (footer) {
        var currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML + ' | ' + currentYear;
    }
    
    // this logs a message in the console for debugging
    console.log('Welcome to Amantle Coffee Corner website!');
    console.log('Page loaded successfully!');
};

// function for the contact form submission
function submitForm(event) {
    // prevent the form from actually submitting
    event.preventDefault();
    
    // get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // get the message element
    var formMessage = document.getElementById('form-message');
    
    // check if the fields are filled
    if (name && email && message) {
        // show success message
        formMessage.textContent = 'Thank you ' + name + '! Your message has been sent. We will contact you soon!';
        formMessage.className = 'form-message success';
        
        // clear the form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
        
        // log to console
        console.log('Form submitted by: ' + name);
    } else {
        alert('Please fill in all required fields!');
    }
}

// this function checks what time it is and shows different greeting
function getTimeGreeting() {
    var hour = new Date().getHours();
    var greeting = '';
    
    if (hour < 12) {
        greeting = 'Good morning! Ready for coffee?';
    } else if (hour < 17) {
        greeting = 'Good afternoon! Time for a coffee break?';
    } else {
        greeting = 'Good evening! You deserve to cool off?';
    }
    
    return greeting;
}

// add a random coffee fact
function showCoffeeFact() {
    var facts = [
        'Did you know? Coffee is the second most traded commodity in the world!',
        'Fun fact: It takes about 40 coffee beans to make one cup of espresso!',
        'Coffee tip: The best water temperature for brewing is between 90-96 degrees Celsius.',
        'Did you know? Ethiopia is the birthplace of coffee!'
    ];
    
    var randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// log a coffee fact when page loads
console.log(showCoffeeFact());