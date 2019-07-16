import * as Rx from 'rxjs';
import { switchMap, map, finalize } from 'rxjs/operators';
import { IButtons, SubscribeConsole, CreateIButtonObserver, CreateMarkedEvent, CreateMarkedInterval, Letters } from '../main';

export function SwitchMapRoot(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    let w_obs: any = CreateMarkedEvent(obs).pipe(map<string, any>(value => value), switchMap(value => {
        if (value == 1) return Rx.EMPTY;
        else
            return CreateMarkedInterval(1000, 7, Letters[value - 1]);
    }));
    SubscribeConsole(Rx.EMPTY.pipe(finalize(() => console.log("It must be your cooking Merry Poppins!"))));
}
