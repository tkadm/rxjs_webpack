import * as Rx from 'rxjs';
import { bufferTime } from 'rxjs/operators';

export function AuditExport(obs: Rx.Observable<Event>, btn: HTMLButtonElement) {
    //Rx.interval(1000).subscribe(value => { console.warn(value) });
    obs.pipe(bufferTime(4000)).subscribe(value => { console.log(value); })

    // obs.subscribe(value => {
    //     console.log(value);
    // });
}