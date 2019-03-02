import * as Rx from 'rxjs';
import { map, mapTo, expand, take, delay, filter, pluck, repeatWhen } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from './main';


export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let cnt: number = 0;
    let result = Rx.interval(1000).pipe(take(3), repeatWhen(notific => {
        notific.subscribe(value => {
            cnt++;
            console.log(`notific: ${value}`);
            if (cnt > 4) (<Rx.Subject<any>>notific).complete();
        }, null, () => console.log(`notific: complete`));
        return CreateIButtonObserver(buttons);
    }));
    Rx.timer(6000).subscribe(_ => {
        //sb.complete();
    });
    SubscribeConsole(result);
}

