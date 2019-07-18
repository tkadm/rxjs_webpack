import * as Rx from 'rxjs';

import { map, take, timestamp, withLatestFrom, zipAll, pluck, filter, first, switchMap, debounceTime, tap, startWith, publish, share, multicast, refCount,
shareReplay } from 'rxjs/operators';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters, details } from '../main';

export function ShareReplayExport(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    obs.pipe(shareReplay());
}