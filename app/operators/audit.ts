import * as Rx from 'rxjs';
import { bufferWhen, combineAll } from 'rxjs/operators';


export function AuditExport(obs: Rx.Observable<Event>, btn: HTMLButtonElement) {
    //Rx.interval(1000).subscribe(value => { console.warn(value) });
    //let obs2: any = Rx.fromEvent(btn, 'click');
    Rx.interval(1000)
        .pipe(bufferWhen(() => obs))
        .subscribe(value => { console.log(value); });

}