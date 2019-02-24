import * as Rx from 'rxjs';
import { take as take_rs } from 'rxjs/operators';

export function Example() {
    console.log('creating...');
    var take = Rx.interval(5000).pipe(take_rs(4));

    take.subscribe(val => console.log(val), error => console.error(error),
        () => console.log('completed'));
}