import * as Rx from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Export } from './common';
import { Export as ExportRetryWhen } from './operators/retryWhen';

export interface IButtons {
    Next: HTMLButtonElement;
    Complete: HTMLButtonElement;
    Error: HTMLButtonElement;
}

let entry_point: (obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) => void = Export;

window.addEventListener('load', () => {
    if (entry_point) entry_point(
        Rx.fromEvent(GetBtn("btnMain"), 'click'),
        { Next: GetBtn("btnNext"), Complete: GetBtn("btnComplete"), Error: GetBtn("btnError") },
        { Next: GetBtn("btnNextII"), Complete: GetBtn("btnCompleteII"), Error: GetBtn("btnErrorII") }
    );
});

function GetBtn(id: string): HTMLButtonElement {
    return <HTMLButtonElement>document.getElementById(id);
}

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
    return CreateButtonObserver(buttons.Next, buttons.Complete, buttons.Error);
}

export function GenerateRandom(min: number, max: number) {
    return Math.round(min + Math.random() * (max - min));
}

export let Letters: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

console.clear();