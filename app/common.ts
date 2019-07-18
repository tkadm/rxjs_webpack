import * as Rx from 'rxjs';

import { map, take, timestamp, withLatestFrom, zipAll, pluck, filter, first, switchMap, debounceTime, tap, startWith, publish, share, multicast, refCount } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters, details } from './main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    FirsMode();
    //SecondMode();
}

function FirsMode() {
    let w_input_subject: Rx.Subject<any> = new Rx.Subject();
    let w_result: Rx.Observable<any> = new Rx.Observable(subscriber => {
        console.log("Subscription!");
        setTimeout(() => {
            subscriber.next("One");
            subscriber.next("Two");
            subscriber.complete();
        }, 2000);
    }).pipe(multicast(() => { console.log("Oh, try getting subject!"); return w_input_subject }));
    SubscribeConsole(w_result);
    let w_sbs: Rx.Subscription = SubscribeConsole(w_result);
    (<Rx.ConnectableObservable<any>>w_result).connect();
    w_sbs.unsubscribe();
}

function SecondMode() {
    let w_input_subject: Rx.Subject<any> = new Rx.Subject();
    let w_result: Rx.Observable<any> = new Rx.Observable(subscriber => {
        console.log("Subscription!");
        setTimeout(() => {
            subscriber.next("One");
            subscriber.next("Two");
            subscriber.complete();
        }, 2000);
    }).pipe(multicast(() => { console.log("Oh, try getting subject!"); return w_input_subject }, input => {
        if (input === w_input_subject) console.log("input is w_inptu_subject");
        console.log("On selector!");
        return input;
    }));
    SubscribeConsole(w_result);
    SubscribeConsole(w_result);
}
