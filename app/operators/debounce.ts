import * as Rx from 'rxjs';
import {
    map, take, timestamp, windowWhen, mergeAll, mergeMap, debounceTime,
    filter, first, combineLatest, withLatestFrom, audit, find, combineAll, finalize, concatAll
} from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

interface IHttpResult {
    id: number;
}

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttons2: IButtons) {
    let result: Rx.Observable<any>;

    result = Rx.from([CreateToggleObservable(buttons2.Next).pipe(first(value => value)), HttpEmulator(), CreateToggleObservable(buttons2.Next)]).pipe(concatAll());

    //let result: Rx.Observable<boolean>;
    //result = obs.pipe(,map((value, index) => { Switcher = !Switcher; return Switcher; }), debounceTime(2000), filter((value, index) => value), first());
    //result = Rx.combineLatest(HttpEmulator(), swObserver).pipe(map(value => value[1]), debounceTime(2000), filter((value, index) => value), first());

    

    // result = Rx.combineLatest(CreateToggleObservable(buttons2.Next), Rx.concat(CreateToggleObservable(buttons2.Next).pipe(find(value => value)), HttpEmulator()))
    //     .pipe(filter(value => (typeof value[1]) != 'boolean'), debounceTime(2000), filter(value => value[0]), first());
    SubscribeConsole(result);
}

function CreateToggleObservable(button: HTMLButtonElement): Rx.Observable<boolean> {
    let w_switcher: boolean = false;
    return Rx.fromEvent(button, 'click').pipe(map((value, index) => { w_switcher = !w_switcher; return w_switcher; }), finalize(() => console.log("Toggle finished!")));
}

function HttpEmulator(): Rx.Observable<IHttpResult> {
    return new Rx.Observable<IHttpResult>(subscriber => {
        console.log("HttpEmulator is subscribed!");
        setTimeout(() => {
            subscriber.next({ id: 234 });
            subscriber.complete();
            console.log("HttpEmulator is complete!");
        }, 6000);
    });
}

function TestPipe<T>(): Rx.MonoTypeOperatorFunction<T> {
    console.log('Test pipe! Execution');
    return value => {
        console.log('Test pipe! Returned function execution!');
        return value;
    }
}

function StartAndCombineLatest<T, R>(init: Rx.Observable<R>): Rx.MonoTypeOperatorFunction<T> {
    return enter => {
        init.subscribe(value => {

        });
        return enter;
    };
}