import { add } from "./helpers"

/**
 * Task:
 * 
 * Without the RxJS library, build an observable from scratch that emits one value - 'Ben is amazing'
 * 
 * Subscribe to that value and add it to the DOM as a list item
 */

const observer = {
    next: (message) => add.li(message),
    error: (err) => add.li(err),
    complete: () => add.li("Ben's observable has completed!"),
};

class Observable {
    constructor(subscribeTo) {
        // takes in a function as a parameter. This function will take its own parameter - the observer to call next/complete on
        this.subscribeTo = subscribeTo;
        
    }

    // can take in an object as a parameter. This object will be the observer
    subscribe(observer) {
        // subscribe doesn't return anything - returns undefined. Just calls the function passed into the constructor, which also returns undefined.
        return this.subscribeTo(observer);
        
    }
}

// producer = an observable that produces values
const producer = new Observable((subscribe) => {
    subscribe.next('Ben is amazing!');
    subscribe.next('Ben is amazing!');
    subscribe.next('Ben is amazing!');
    subscribe.complete();
    subscribe.next('Ben is amazing!'); // this is unlike the real RxJS Observable - if using the real Observable RxJS class, would stop emitting after a complete
});

producer.subscribe(observer);
