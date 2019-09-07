import { of, from, fromEvent } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';
import { add } from "./helpers";

/**
 * Use Creation operators for all of the following tasks
 */

// create and subscribe to a `numbers` observable that emits the separate numbers 1-4
const numberSubscription = of(1,2,3,4)
    .subscribe((number) => add.li(number));

// create and subscribe to a `fruits` observable that emits an array of fruits: apples, oranges and grapes
const fruitSubscription = from(['apples', 'oranges', 'grapes'])
    .subscribe((fruit) => add.li(fruit));

// create and subscribe to an observable stream that emits a message when when clicking the submit button
const submitButton = document.getElementById('submit');

const clickSubscription = fromEvent(submitButton, 'click')
    .subscribe(click => add.li('clicked!'));

// create an observable stream from responses when calling the endpoint https://jsonplaceholder.typicode.com/users

const userSubscription = fromFetch('https://jsonplaceholder.typicode.com/users')
    .pipe(
        switchMap((response) => {
            return response.json();
        })
    )
    .subscribe(
        users => users.forEach(
            user => add.li(user.name)
        )
    );

