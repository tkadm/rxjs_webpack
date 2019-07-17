import * as Rx from 'rxjs';

import { map, take, timestamp, withLatestFrom, zipAll, pluck, filter, first, switchMap, debounceTime, tap, startWith, publish } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters, details } from './main';
/**
 * Основная фукнция вызова
 * @param obs Входной Observable
 * @param buttons интерфейс IButtons основного ряда кнопок
 * @param buttonsII интерфейс IButtons дополнительного ряда кнопок
 */
export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    console.log("Started!");
    let w_result: Rx.Observable<any> = DetailObserver().pipe(
        filter(value => value),
        first(),
        switchMap(_ => DelayObserver("First Http!", 3000)),
        switchMap(value => { console.log(value); return DetailObserver(); }),
        debounceTime(3000), tap(_ => console.log("Long unmovie delay detected!")),
        filter(value => value),
        first(), tap(_ => console.log("First value passed!")),
        switchMap(value => DelayObserver(`Mark as read! ${value}`, 2000)));
    SubscribeConsole(w_result);
}

function DetailObserver(): Rx.Observable<boolean> {
    return Rx.fromEvent(details, 'toggle').pipe(pluck<Event, boolean>('target', 'open'), startWith(details.open));
}

function DelayObserver(caption: string, delay: number): Rx.Observable<string> {
    return Rx.timer(delay).pipe(map<number, string>(_ => caption));
}

