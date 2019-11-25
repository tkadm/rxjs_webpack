import * as Rx from 'rxjs';
import { reduce } from 'rxjs/operators';

import { IButtons, SubscribeConsole, CreateIButtonObserver } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttons2: IButtons) {
    let result: Rx.Observable<any> = CreateIButtonObserver(buttons).pipe(reduce((acc: any[], value: any, index) => {
        // console.log(acc);
        // console.log(value);
        acc.push(value);
        return acc;
    }, []));
    //result.subscribe();
    SubscribeConsole(result);
}