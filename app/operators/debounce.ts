import * as Rx from 'rxjs';
import { map, take, timestamp, windowWhen, mergeAll, mergeMap, debounceTime, filter, first } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let Switcher: boolean = false;
    let result: Rx.Observable<boolean>;
    result = obs.pipe(map((value, index) => { Switcher = !Switcher; return Switcher; }), debounceTime(2000), filter((value, index) => value),first());
    SubscribeConsole(result);
}