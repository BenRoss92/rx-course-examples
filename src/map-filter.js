import { add } from "./helpers";

import { interval } from "rxjs";
import { take, filter, map } from "rxjs/operators";

/**
 * Task
 * 
 * Create a counter that every second will count from 0-3 sequentially (and then finish).
 * 
 * Take only the even count values. With these event count values, find the items in the following array, and add them as list items to the DOM:
 * ```js
 * ['zero', 'one', 'two', 'three', 'four'];
 * ```
 */

const words = ['zero', 'one', 'two', 'three', 'four'];
 
const count$ = interval(1000)
    .pipe(
        take(4),
    );
 
count$
    .pipe(
        filter(number => number % 2 === 0)
    )
    .pipe(
        map((number) => words[number])
    )
    .subscribe((count) => {
        add.li(count);
    });

