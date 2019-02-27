import * as Rx from 'rxjs';
import { map, exhaust } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom } from '../main';
import { NotificationKind } from 'rxjs/internal/Notification';


export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let val: number = -1;
    let result = obs.pipe(map(_ => { val++; return CreateMarkedInterval(1000, 5, arr[val]); }));

    SubscribeConsole(result.pipe(exhaust()));
}



