import * as Rx from 'rxjs';
import { Export } from './operators/common';

let entry_point: (obs: Rx.Observable<Event>, bnt: HTMLButtonElement) => void = Export;

window.addEventListener('load', () => {
    let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnRoot");
    let btn2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnAdd");
    if (entry_point) entry_point(Rx.fromEvent(btn, 'click'), btn2);
});


//import { Example } from './operators/combineAll';
//import { Example } from './operators/combineLatest';
// import { Example } from './operators/take';
// Example();
