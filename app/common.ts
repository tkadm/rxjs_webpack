import * as Rx from 'rxjs';

import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters, details } from './main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    obs.subscribe(Action);
}

function Action() {
    let init = { first: "First", second: 234 };
    let pas = { ...init, second: 200 };
    console.log(pas);
    console.log(init === pas ? "Equal" : "Not equal!");
}

function Action2() {
    let val = { one: "один", two: "два", title: "Название" };
    let { title, ...rest } = val;
    console.log(title);
    console.log(rest);
}