import * as rxjs from 'rxjs';
import { map } from 'rxjs/operators';
import { IButtons } from '../main';

let behavSubj: rxjs.BehaviorSubject<string> = new rxjs.BehaviorSubject("first value");

export function BehaviorSubjectExport(obs: rxjs.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {

    Addition("Abr").subscribe(console.log);
    Addition("Sobr").subscribe(console.log);
    behavSubj.next("second value");
}

function Addition(corrector: string): rxjs.Observable<string> {
    return behavSubj.pipe(map<string, string>(value => value + " " + corrector));
}