import * as Rx from 'rxjs';

import { map, take, timestamp, withLatestFrom, zipAll } from 'rxjs/operators';

import * as operators from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from './main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    let result = Rx.range(2,12);
    SubscribeConsole(result);
    SubscribeConsole(result);
}

