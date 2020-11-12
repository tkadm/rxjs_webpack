import * as Rx from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IButtons } from '../main';


export function ExportSbs(obs: Rx.Observable<Event>, buttons: IButtons, buttons2: IButtons) {
    obs.subscribe(_ => {
        Rx.from(['a', 'b', 'c']).pipe(mergeMap(value => HttpEmulator(value))).subscribe(console.log);
    });
}

function HttpEmulator(value: string): Rx.Observable<string> {
    return Rx.timer(2000).pipe(map(input => value + input));
}