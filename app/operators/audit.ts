import * as Rx from 'rxjs';
import { map, mapTo, expand, take, delay, filter, audit } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

let w_buttons: IButtons;

export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    w_buttons = buttons;
    let w_b_obs = CreateIButtonObserver(buttons);
    let result = CreateMarkedEvent(obs).pipe(audit(value => { console.log(`Execute audit duration func! Value:${value}`); return w_b_obs; }));
    SubscribeConsole(result);
}

function CreateAuditor(buttons: IButtons): Rx.Observable<string> {
    let val: number = 1;
    let result: Rx.Observable<string> = new Rx.Observable(subscriber => {
        console.log('Auditor subscribed!');
        buttons.Next.addEventListener("click", _ => {
            console.log('Auditor set next value!');
            subscriber.next('value');
            subscriber.complete();
        });
    });
    return result;
}

let CustomObservable: Rx.Observable<string> = new Rx.Observable(subscriber => {
    console.log('Auditor subscribed!');
    w_buttons.Next.addEventListener("click", _ => {
        console.log('Auditor set next value!');
        subscriber.next('value');
        //subscriber.complete();
    });
});