import { add } from "./helpers"
import { Observable } from 'rxjs';

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

// producer = an observable that produces values
const producer = new Observable((subscribe) => {
    subscribe.next('Ben is amazing!');
    subscribe.next('Ben is amazing!');
    subscribe.next('Ben is amazing!');
    subscribe.complete();
    subscribe.next('Ben is amazing!'); // this is unlike the real RxJS Observable - if using the real Observable RxJS class, would stop emitting after a complete
});

producer.subscribe(observer);
