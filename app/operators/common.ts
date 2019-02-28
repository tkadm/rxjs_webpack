import * as Rx from 'rxjs';
import { map, mapTo, expand, take, delay, filter } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';


export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let result = obs;
    SubscribeConsole(result);
}



