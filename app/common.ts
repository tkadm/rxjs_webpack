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

export function HttpGet<T>(uri: string, query: { [index: string]: string } = null): Rx.Observable<T> {
    return new Rx.Observable(observer => {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        let query_str: string = "";
        if (query) {
            let values: Array<string> = [];
            for (let p in query)
                if (query.hasOwnProperty(p)) values.push(encodeURIComponent(p) + "=" + encodeURIComponent(query[p]));
            query_str = "?" + values.join("&");
        }
        xhr.open("GET", uri + query_str);
        xhr.send();
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) throw new Error(`Status: ${xhr.status}; Error:${xhr.statusText}; Message:${xhr.responseText}`);
            observer.next(JSON.parse(xhr.responseText));
            observer.complete();
        });
    });
}

export function HTTPDelay(delay: number = 500): Rx.Observable<any> {
    return HttpGet("http://webora/cdp/values/delay", { delay: delay.toString() });
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