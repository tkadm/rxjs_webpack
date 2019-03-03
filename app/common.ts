import * as Rx from 'rxjs';
import { map, take, sample } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from './main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let result = Rx.interval(1000).pipe(sample(CreateIButtonObserver(buttons)));

    SubscribeConsole(result);
}

