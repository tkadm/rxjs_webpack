import * as Rx from 'rxjs';
import { take, map, every, concatAll } from 'rxjs/operators';


export function Export(obs: Rx.Observable<Event>, btn: HTMLButtonElement) {
    let array: Array<number> = [0, 0];
    let obsA: Rx.Observable<string> = obs.pipe(map(_ => { array[0]++; return "A" + array[0] }));
    //let obsB: Rx.Observable<string> = Rx.fromEvent(btn, 'click').pipe(map(_ => { array[1]++; return "B" + array[1] }));
    let second = Rx.interval(1000).pipe(take(5), map(item => "Значение: " + item));
    let outer = Rx.interval(1000).pipe(take(2), map(_ => _ == 0 ? second : obsA));

    //Rx.concat(Rx.interval(1000).pipe(take(5), map(item => "Значение: " + item)), obsA)
    //Rx.combineLatest(obsA, obsB, (valA, valB) => [valA, valB, 100])
    outer.pipe(concatAll()).subscribe(value => console.log(value), null, () => console.log("complete!"));
}