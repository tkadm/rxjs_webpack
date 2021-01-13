import * as Rx from 'rxjs';
import { shareReplay, map, mapTo, expand, take, delay, filter, audit, share, tap, publish, publishBehavior, refCount } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';
import { HttpGet, HTTPDelay } from '../common';

export function Main(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons): void {
    let myObs: Rx.Observable<string> = new Rx.Observable(observer => {
        console.log("Подписка!");
        observer.next("first value!");
        obs.subscribe(value => observer.next(JSON.stringify(value)));
    }).pipe(publishBehavior("wow"),refCount());
    SubscribeConsole(myObs);
    SubscribeConsole(myObs);
}