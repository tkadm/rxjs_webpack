import * as Rx from 'rxjs';
import { map, take, timestamp, windowWhen, mergeAll, mergeMap } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let i: number = -1;
    let result = Rx.interval(1000).pipe(windowWhen(() => {console.log('lambda!'); return obs;}), map(value => {
        i++;
        return value.pipe(map(item => Letters[i] + item));
    }), mergeAll());

    SubscribeConsole(result);
}

