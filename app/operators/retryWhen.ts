import * as Rx from 'rxjs';
import { map, mapTo, expand, take, last, scan, zip, delay, filter, tap, retryWhen } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    //let result = Rx.interval(1000).pipe(take(5), map(item => {
    let result = Rx.interval(1000).pipe(map(item => { if (item > 3) throw `Thrown exception ${item}`; return item; }),
        retryWhen(
            errors => errors.pipe(map((value, index) => { if (index >= 5) throw value; return value; }))
            //errors => errors.pipe(scan((acc, value, index) => ++acc, 1))

        )
    );

    SubscribeConsole(result);
}

