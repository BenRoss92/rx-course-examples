import {add} from './helpers';
import {range, of} from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

/**
 * Task
 * 
 * Add a number to the UI each second, starting from a certain number and ending on a certain number.
 * i.e. starting at 50 and ending at 100 (i.e. count the numbers 50 to 100).
 * 
 */

/**
 * Explanation of `range`:
 * 
 * `range` gives you an observable that immediately emits a range of numbers, in order.
 * You specify a `start` (starting number) and a `length` (i.e. the total amount of numbers you will have at the end) as parameters.
 * E.g. `range(2, 10)` will give you an observable that emits a range starting at 2, and ending at 11.
 * This is because the range will _start_ with 2. When counting 10 numbers, 2 will be included.
 * i.e. At the beginning of creating this range of numbers, we do not count the next number as 3; we explicitly count the first number as 2. (i.e. 2 is the first number out of 10 numbers we are counting).
 *
 */

 // create an observable that emits a range of 51 sequential numbers, starting with the number 50 - i.e. emits the numbers 50-100
const numbers$ = range(50, 51);

/**
 * Incorrect implementation:
 * 
 * ```js
 * numbers$
 *  .pipe(
 *      delay(1000)
 *  );
 * ```
 * 
 * The above won't work as it will only add a one second delay to the whole observable (i.e. the stream of numbers).
 * i.e. it will simply delay the time that the observable starts emitting values by one second (not delaying each value by one second):
 * 
 * outer (i.e. our main) observable:
 * -50-51-52-etc.-|
 * 
 * operator:
 * delay(1000)
 * 
 * new observable (i.e. one second delay):
 * --50-51-52-etc.-|
 * 
 * See below for correct implementation
 */

/**
 * Correct implementation - explanation:
 * 
 * - `pipe` - We pass the whole observable into a pipe, so that we can pass the observable through one or more operators.
 * 
 * - `of` - We create an observable that only emits one of the many numbers in the range.
 * 
 * - `delay` - We are delaying the single observable (emitting one value) by one second. 
 * 
 * - `concatMap` - We are mapping each number to an observable. This observable will emit this number after a one second delay. An observable will get created for each number (so we will have many observables). `concatMap` will then concatenate these observables together into one observable. This new outer observable will emit values that have a delay of one second between each of them. Because these observables have been concatenated and not merged (i.e. we used `concatMap` and not `mergeMap`), each inner observable needs to complete before the next one is subscribed to. So we wait for each number to be emitted, before subscribing to the next one.
 */
const delayedNumbers$ = numbers$
    .pipe(
        concatMap(number => {
            return of(number)
                .pipe(
                    delay(1000)
                );
            }
        )
    )
    
delayedNumbers$
    .subscribe((delayedNumber) => {
        add.li(delayedNumber)
    });
