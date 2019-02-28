import * as Rx from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Export } from './operators/common';

export interface IButtons {
    Main: HTMLButtonElement;
    Complete: HTMLButtonElement;
    Error: HTMLButtonElement;
}

let entry_point: (obs: Rx.Observable<Event>, buttons: IButtons) => void = Export;

window.addEventListener('load', () => {
    let btnMain: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnMain");
    let btnComplete: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnComplete");
    let btnError: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnError");
    if (entry_point) entry_point(Rx.fromEvent(btnMain, 'click'), { Main: btnMain, Complete: btnComplete, Error: btnError });
});

export function CreateMarkedInterval(interval: number, count: number, prefix?: string): Rx.Observable<string> {
    return Rx.interval(interval).pipe(map(value => prefix ? prefix + value : value.toString()), take(count));
}

export function CreateMarkedEvent(observ_event: Rx.Observable<Event>, prefix?: string): Rx.Observable<string> {
    let i: number = 0;
    return observ_event.pipe(map(_ => { i++; return prefix ? prefix + i : i.toString(); }));
}

export function SubscribeConsole<T>(obs: Rx.Observable<T>): Rx.Subscription {
    return obs.subscribe(value => console.log(value), error => console.warn(`Error: ${error}`), () => console.log('Complete!'));
}

export function CreateButtonObserver(next: HTMLButtonElement, complete: HTMLButtonElement, error?: HTMLButtonElement): Rx.Observable<number> {
    return new Rx.Observable(subscriber => {
        let i: number = 0;
        next.addEventListener('click', _ => { i++; subscriber.next(i); });
        complete.addEventListener('click', () => subscriber.complete());
        if (error) error.addEventListener('click', error => subscriber.error(error));
    });
}

export function CreateIButtonObserver(buttons: IButtons): Rx.Observable<number> {
    return CreateButtonObserver(buttons.Main, buttons.Complete, buttons.Error);
}

export function GenerateRandom(min: number, max: number) {
    return Math.round(min + Math.random() * (max - min));
}

export let Letters: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];