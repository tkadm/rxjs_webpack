import * as Rx from 'rxjs';
import { shareReplay, map, mapTo, expand, take, delay, filter, audit, share, tap } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';
import { HttpGet, HTTPDelay } from '../common';

export function Main(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons): void {
    buttons.Next.addEventListener("click", Start);
    console.log("Для старта нажми Main(next)");
}

let obs: Rx.Observable<object> = HTTPDelay(2000).pipe(share(), tap(value => {
    console.log(`tap:${JSON.stringify(value)}`);
}));

function Start() {
    obs.subscribe(console.log);
    obs.subscribe(console.log);
    obs.subscribe(console.log);
}

namespace MyOperators {
    export function MarkedNumber(mark: string) {
        return (input: Rx.Observable<number>) => {
            return input.pipe(map<number, string>(item => `${item} ${mark}`));
        }
    }
}