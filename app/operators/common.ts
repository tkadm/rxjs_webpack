import * as Rx from 'rxjs';
import { map, mapTo, expand, take, delay, filter } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';


export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    const timer1 = Rx.interval(1000).pipe(map(value => "A" + value), take(10));
    const timer2 = Rx.interval(2000).pipe(map(value => "B" + value), take(6));
    const timer3 = Rx.interval(500).pipe(map(value => "C" + value), take(10));
    const concurrent = 2; // the argument
    const merged = Rx.merge(timer1, timer2, timer3, concurrent);
    SubscribeConsole(merged);
}



