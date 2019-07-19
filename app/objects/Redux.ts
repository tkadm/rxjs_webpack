import * as Rx from 'rxjs';
import { createStore, Store } from 'redux'

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters, details } from '../main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {

    return;
    let store: Store = createStore(reducer);
    store.dispatch({ type: "" });
}

function reducer(state: any, action: any) {
    return state;
}