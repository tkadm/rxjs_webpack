import * as Rx from 'rxjs';
import { map, take, timestamp, toArray } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from './main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let result = Rx.range(1,9).pipe(toArray());

    SubscribeConsole(result);
}

