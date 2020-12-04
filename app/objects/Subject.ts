import * as Rx from 'rxjs';

import { map, take, timestamp, withLatestFrom, zipAll, pluck, filter, first, switchMap, debounceTime, tap, startWith, publish, share, multicast, refCount } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from '../main';

export function SubjectExport(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    let w_subject: Rx.Subject<any> = <any>new Rx.ReplaySubject(100,2000);
    w_subject.next("One");
    w_subject.next("Two");
    SubscribeConsole(w_subject);
    w_subject.next("Three");
    w_subject.complete();
}