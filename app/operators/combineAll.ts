import * as Rx from 'rxjs';
import { bufferWhen, combineAll, audit, delay, take, map, every } from 'rxjs/operators';


export function AuditExport(obs: Rx.Observable<Event>, btn: HTMLButtonElement) {
    //Rx.interval(1000).subscribe(value => { console.warn(value) });
    let obs2: any = Rx.fromEvent(btn, 'click');
    let values: Array<number> = [0, 0];
    let first: Rx.Observable<string> = obs.pipe(map(value => { values[0]++; return 'A' + values[0]; }));

    let second: Rx.Observable<string> = Rx.interval(500).pipe(take(4), map(value => { values[1]++; return 'B' + values[1]; }));

    let outer: Rx.Observable<any> = Rx.interval(1000).pipe(take(2), map(item => item == 0 ? first : second));

    outer.pipe(combineAll((item1, item2) => {
        console.log(`Inner 1: ${item1}; Inner 2: ${item2}`);
        return [item1, item2];
    }))
        .subscribe(value => { console.log(`Output: ${value}`); }, null, () => console.log("completed!"));


}