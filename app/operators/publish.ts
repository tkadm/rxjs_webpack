import * as Rx from 'rxjs';
import { shareReplay, map, mapTo, expand, take, delay, filter, audit, share, tap, publish, publishBehavior, publishReplay, refCount, switchMap, finalize } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';
import { HttpGet, HTTPDelay } from '../common';

export function Main(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons): void {
    let current: number = 1;
    let yes = obs.pipe(map<Event, string>(value => `Event:${JSON.stringify(value)}`), switchMap(value => HTTPDelay(2000, Letters[current])),
        publishReplay<string>(1), refCount(), tap(_ => current++), finalize(() => console.info("yes finalized!")));

    buttons.Next.addEventListener("click", _ => {
        console.log("Subscription button 1");
        yes.subscribe(value => console.log(`button 1 value: ${JSON.stringify(value)}`));
    });

    buttonsII.Next.addEventListener("click", _ => {
        console.log("Subscription button 2");
        yes.subscribe(value => console.log(`button 2 value: ${JSON.stringify(value)}`));
    })
}

export function MainPrev(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons): void {
    let myObs: Rx.Observable<string> = new Rx.Observable(observer => {
        console.log("Подписка!");
        observer.next("first value!");
        obs.subscribe(value => observer.next(JSON.stringify(value)));
    }).pipe(publishBehavior("wow"), refCount());
    SubscribeConsole(myObs);
    SubscribeConsole(myObs);
}