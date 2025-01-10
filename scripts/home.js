// Array of motivational quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "The future depends on what we do in the present. - Mahatma Gandhi",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Your limitation—it's only your imagination. - Unknown",
    "Pain is temporary. Quitting lasts forever. - Lance Armstrong",
    "A problem is a chance for you to do your best. - Duke Ellington",
    "It's not about perfect. It's about effort. - Jillian Michaels",
    "Difficult roads always lead to beautiful destinations. - Zig Ziglar",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Perseverance is failing 19 times and succeeding the 20th. - Julie Andrews",
    "Goals may give focus, but dreams give power. - John Maxwell",
    "If you cannot do great things, do small things in a great way. - Napoleon Hill",
    "When you know what you want, and want it bad enough, you'll find a way to get it. - Jim Rohn",
    "Motivation is what gets you started. Habit is what keeps you going. - Jim Rohn",
    "Done is better than perfect. - Sheryl Sandberg",
    "I didn't get there by wishing for it or hoping for it, but by working for it. - Estée Lauder",
    "Don't ask if your dream is crazy, ask if it's crazy enough. - Lena Waithe",
    "Success is what happens after you have survived all of your disappointments. - Unknown",
    "Aim for the moon. If you miss, you may hit a star. - W. Clement Stone",
    "Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new. - Brian Tracy",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Perseverance is the hard work you do after you get tired of doing the hard work you already did. - Newt Gingrich",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Expect problems and eat them for breakfast. - Alfred A. Montapert",
    "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't. - Rikki Rogers",
    "Tough times don't last. Tough people do. - Robert H. Schuller",
    "Everything you've ever wanted is on the other side of fear. - George Addair"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Event listener for button click
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.getElementById('quote-button').addEventListener('click', function() {
    const quoteElement = document.getElementById('quote');
    const buttonElement = document.getElementById('quote-button');
    
    // Fade out the current quote
    quoteElement.style.opacity = 0;
    
    // Fade out the button
    buttonElement.style.opacity = 0;
    
    // Set a timeout to update the quote and button after the fade-out completes
    setTimeout(function() {
        const newQuote = getRandomQuote();
        quoteElement.textContent = newQuote;
        quoteElement.style.margin = "0 60px 0 60px";
        
        // Change button text to "Try another!"
        buttonElement.textContent = "Try another!";
        
        // Fade in the new quote
        quoteElement.style.opacity = 1;
        
        // Fade in the button
        buttonElement.style.opacity = 1;
    }, 1000); // Timeout duration matches the fade-out duration
});



// Get the image element by its ID
console.log('script.js loaded');
const image = document.getElementById('logo');

// Add an event listener to handle the click event

image.addEventListener('click', () => {
    // Redirect to home.html when the image is clicked
    window.location.href = 'index.html';
});
