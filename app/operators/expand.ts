import * as Rx from 'rxjs';
import { map, expand, delay } from 'rxjs/operators';

import { IButtons, SubscribeConsole, CreateIButtonObserver, Letters } from '../main';


export function Export(buttons: IButtons) {
    let i: number = -1;
    let result = CreateIButtonObserver(buttons).pipe(
        map(_ => { i++; console.log(`Click! #${i}`); return Letters[i]; }),
        expand((value, index) => {
            console.log(`Expand lambda, value-index: ${value}-${index}`);
            return Rx.of(value[0] + index).pipe(delay(1000));
        }, 3)
    );
    SubscribeConsole(result);
}
