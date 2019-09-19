import {add} from "./helpers";
import { interval } from "rxjs";
import { map, take, tap } from "rxjs/operators";

/**
 * Task:
 * 
 * Create an observable that over 10 seconds, will count from the numbers 0 to 10
 * Then perform two operators to modify the values being emitted by the observable
 * And in between these two operators, log out the values using the `tap` operator
 */

 /**
  * `tap` operator - what is it?
  * 
  * `tap` is like `console.log`, but used for RxJS - `tap` is used inside `pipe` as an operator.
  * It allows you to perform side-effects or logging.
  */

 const counter$ = interval(1000);

 counter$
    .pipe(
        take(10),
        tap(count => add.li(`count before x2: ${count}`)),
        map(count => count * 2),
        tap(count => add.li(`count after x2: ${count}`)),
        map(count => count / 2)
    )
    .subscribe(data => add.li(data));
