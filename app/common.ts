import * as Rx from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators'
import { IButtons, CreateMarkedEvent, CreateMarkedInterval, SubscribeConsole, CreateIButtonObserver, GenerateRandom, Letters } from './main';

export function Export(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    let first: Rx.Observable<string> = Rx.from(["A", "B", "C"]);
    let second: Rx.Observable<number> = Rx.from([234]);
    SubscribeConsole(second.pipe(
        switchMap(num => first.pipe(map(letter => { return { letter: letter, num: num }; })))
    ));
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

function Action3() {
    let w_init: string = "ClassName/SubclassName/Sub3Classname";
    let [one, ...two] = w_init.split('/');
    console.log(one);
    console.log(two);
}

function Action4() {
    let w_substr: Array<string> = ['1', '2'];
    let w_full: Array<string> = ['1', '2', '3', '4'];
    console.log(w_full.join('/').indexOf(w_substr.join('/')) == 0 ? "Equal!" : "Not equal!");
}