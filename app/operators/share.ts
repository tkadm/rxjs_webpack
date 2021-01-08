import * as Rx from 'rxjs';
import { shareReplay, map, mapTo, expand, take, delay, filter, audit } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

export function Main(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons): void {
    buttons.Next.addEventListener("click", Start);
    console.log("Для старта нажми Main(next)");
}

function Start() {
    let lv_interval: Rx.Observable<number> = Rx.interval(1000);
    lv_interval.pipe(MyOperators.MarkedNumber("A")).subscribe(console.log);
    lv_interval.pipe(MyOperators.MarkedNumber("B")).subscribe(console.log);
}

namespace MyOperators {
    export function MarkedNumber(mark: string) {
        return (input: Rx.Observable<number>) => {
            return input.pipe(map<number, string>(item => `${item} ${mark}`));
        }
    }
}