import * as Rx from 'rxjs';
import { map, take, sample, skipLast, tap, takeLast } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from './main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let result = CreateIButtonObserver(buttons).pipe(takeLast(4));

    SubscribeConsole(result);
}

