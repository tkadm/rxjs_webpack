import * as Rx from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { IButtons } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttons2: IButtons) {
    obs.subscribe(console.log);
    let sbs: Rx.Observable<any> = Rx.fromEvent(buttons.Next, 'click');
    sbs.subscribe(console.log);
}