import {add, sampleData} from "./helpers";

import {pluck} from "rxjs/operators";

/**
 * Task:
 * 
 * Retrieve only a specific value inside of this object (which is emitted from the `sampleData` observable):
 * 
 * ```js
 * {
 *     "id": 1,
 *     "name": "Leanne Graham",
 *     "username": "Bret",
 *     "email": "Sincere@april.biz",
 *     "address": {
 *         "street": "Kulas Light",
 *         "suite": "Apt. 556",
 *         "city": "Gwenborough",
 *         "zipcode": "92998-3874",
 *         "geo": {
 *             "lat": "-37.3159",
 *             "lng": "81.1496"
 *         }
 *     },
 *     "phone": "1-770-736-8031 x56442",
 *     "website": "hildegard.org",
 *     "company": {
 *         "name": "Romaguera-Crona",
 *         "catchPhrase": "Multi-layered client-server neural-net",
 *         "bs": "harness real-time e-markets"
 *     }
 * }
 * ```
 */
    
/**
 * `Observable.pipe`:
 * 
 * What does `pipe` do?
 * 
 * It is a method on the `Observable` class which is used to compose multiple operators together (into one big operator) that your data can be manipulated by.
 * 
 * How the `Observable.pipe` function works:
 * 
 * - returns a function which takes in an "initial value" (i.e. the value that goes into the first operator)
 * - it then calls `Array.prototype.reduce()` on the array of operators that were passed in
 * - the `reduce` function then iterates over each operator in the array. The initial value get passed into operator 1, then the resulting value of operator 1 gets passed into operator 2, etc. until all operators and finished and we get an accumulative value.
 * - the `reduce` function then returns this accumulated value (i.e. the result of your initial value passing through all of the operators)
 * 
 * How you use `pipe`:
 * 
 * ```js
 * numbers$
 *  .pipe(
 *      map((number) => number * 10),
 *      filter(numberTimesTen => numberTimesTen < 20)
 *  )
 * .subscribe((result) => console.log(result));
 * ```
 */

/**
 * `pluck` operator:
 * 
 * How does it work:
 * 
 * It allows you to "pluck" a property's value from inside of an object, as well as nested values
 * 
 * Example:
 * 
 * Data getting emitted from an observable stream:
 * 
 * ```js
 * {
 *    "email": "Sincere@april.biz",
 *    "address": {
 *        "street": "Kulas Light",
 *        "suite": "Apt. 556",
 *        "city": "Gwenborough",
 *        "zipcode": "92998-3874",
 *        "geo": {
 *            "lat": "-37.3159",
 *            "lng": "81.1496"
 *        }
 *    },
 * }
 * ```
 * 
 * Plucking just the email:
 * ```js
 * sampleData$
 *     .pipe(
 *         pluck('email')
 *     )
 * ```
 * 
 * Plucking the nested `zipcode` from inside `address`:
 * ```js
 * sampleData$
 *     .pipe(
 *         pluck('address', 'zipcode')
 *     )
 * ```
 */

sampleData
    .pipe(
        pluck('company', 'name'),
    )
    .subscribe(data => add.li(data));
