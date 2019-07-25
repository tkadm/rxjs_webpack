import * as Rx from 'rxjs';
import { map, mapTo, expand, take, delay, filter } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

function ReturnedFunc<T, R>(source: Rx.Observable<R>): Rx.Observable<T> {
    console.log(source);
    return <Rx.Observable<T>><any>source;
}

function MyOperator<T, R>(value: string): Rx.OperatorFunction<T, R> {
    console.log(value);
    return (source) => <any>source;
}

export function Export(obs: Rx.Observable<Event>, buttons: IButtons) {
    SubscribeConsole(obs.pipe(MyOperator<any, any>("Helic")));
}
