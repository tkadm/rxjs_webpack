import * as Rx from 'rxjs';
import { reduce } from 'rxjs/operators';

import { IButtons, SubscribeConsole } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttons2: IButtons) {
    SubscribeConsole(obs);
}