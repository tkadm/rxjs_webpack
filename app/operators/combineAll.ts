import * as Rx from 'rxjs';
import { map, take, combineAll } from 'rxjs/operators';

export function Example() {


    var clicks = Rx.fromEvent(document, 'click');

    var higherOrder = clicks.pipe(map(ev => {
        console.log('clicked!');
        let obs: Rx.Observable<any> = Rx.interval(Math.random() * 2000).pipe(take(3));
        obs.subscribe(val => console.log('InternalObs: ' + val),
            (error) => { }, () => console.log('obs completed!'));
        return obs;
    }, take(2))
    );
    higherOrder.subscribe(value => console.log('HighterObs: ' + value));
    var result = higherOrder.pipe(combineAll());
    result.subscribe(x => console.log(x), (error) => { console.error(error) },
        () => { console.log('completed!'); });
}