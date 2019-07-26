import * as Rx from 'rxjs';
import { map, mapTo, expand, take, delay, filter } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttons2: IButtons) {
    SubscribeConsole(CreateIButtonObserver(buttons).pipe(MyOperator("Hello!")));
}

function ReturnedFunc<T, R>(source: Rx.Observable<R>): Rx.Observable<T> {
    console.log(source);
    return <Rx.Observable<T>><any>source;
}

function MyOperator<T, R>(value: string): Rx.OperatorFunction<T, R> {
    console.log(value);
    return (source) => {
        let w_result: Rx.Observable<any> = new Rx.Observable(subscriber => {
            source.subscribe(item => subscriber.next(item + value), subscriber.error, subscriber.complete);
            let w_subscription: Rx.Subscription = source.subscribe();
            w_subscription.add(() => setTimeout(() => w_subscription.unsubscribe(), 5000));
        });
        return w_result;
    };
}

function refCountWithUnsubscriptionDelay<T>(source: Rx.ConnectableObservable<T>, delay: number): Rx.Observable<T> {

    let refCount = 0;
    let sub: any;
    let timeoutRef: any;
    return Rx.Observable.create((observer: Rx.Observer<T>) => {
        refCount++;
        if (timeoutRef) {
            clearTimeout(timeoutRef);
        }
        console.log('refCount = ' + refCount);
        if (!sub) {
            // connect on first call
            sub = source.connect();
        }

        return source.subscribe(observer)
            .add(function () {
                refCount--;
                if (refCount <= 0) {
                    // trigger delayed unsubscription if there are no listeners
                    timeoutRef = setTimeout(() => {
                        // don't unsubscribe if new listeners have subscribed
                        if (refCount <= 0) {
                            console.log('unsub');
                            sub.unsubscribe();
                            sub = undefined;
                            timeoutRef = undefined;
                        }
                    }, delay);
                }
            });
    })
}