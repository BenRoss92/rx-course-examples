import { interval } from 'rxjs';

/**
 * Task:
 * 
 * Every 2 seconds, change the HTML body to have a random colour
 * 
 * Create an observable stream that will emit a value every 2 seconds.
 * Once subscribed, each time you receive a new value, change the colour randomly.
 */

// Create an observable that emits a sequential number every 2 seconds
const interval$ = interval(2000);

// Get the body HTML element
const body = document.querySelector('body');

// Every 2 seconds, each time a value is emitted
interval$.subscribe(() => {
    const red = Math.floor(Math.random() * 255 + 1);
    const green = Math.floor(Math.random() * 255 + 1);
    const blue = Math.floor(Math.random() * 255 + 1);

    // change the background colour to a random colour
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

