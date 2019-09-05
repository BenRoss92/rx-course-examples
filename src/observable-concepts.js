import { add } from './helpers';
import { Observable } from 'rxjs';
// create an observable stream that emits the value 'Ben is amazing' every second.
const observable = new Observable((observer) => {
    setInterval(() => {
        observer.next('Ben is amazing');
    }, 1000);
});

// create a subscription (subscribe) to this observable stream and add a list item for each async message (event) emitted
const subscription = observable.subscribe({
    next: (message) => {
        add.li(message);
    },
    error: (err) => {
        add.li(err);
    },
    complete: () => {
        'Observable has completed! Yay!'
    },
});

// After 3 seconds, stop those emitted values from appearing on the screen. i.e. stop the subscription by unsubscribing to this observable stream.
setTimeout(() => {
    subscription.unsubscribe();
}, 3000);
