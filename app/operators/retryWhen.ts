import * as Rx from 'rxjs';
import { map, mapTo, expand, take, delay, filter, pluck, retryWhen } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let result = Rx.interval(1000).pipe(take(5), map(item => {
        if (item > 3) throw new Error("OMG! Error happened!"); return item;
    }), retryWhen(notific => {
        console.log(`subscription!`);
        notific.subscribe(value => console.log(`notific value: ${value}`),
            error => console.log(`notific error: ${error}`),
            () => console.log(`notific complete`));
        return CreateIButtonObserver(buttons);
    }));

    SubscribeConsole(result);
}

