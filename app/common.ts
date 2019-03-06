import * as Rx from 'rxjs';
import { map, take, timestamp, withLatestFrom, zipAll } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from './main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    let result = Rx.of(CreateMarkedEvent(obs), Rx.interval(1000)).pipe(zipAll());

    SubscribeConsole(result);
}

