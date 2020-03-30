import * as rxjs from 'rxjs';
import { IButtons } from '../main';

export function BehaviorSubjectExport(obs: rxjs.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    let bhv: rxjs.BehaviorSubject<string> = new rxjs.BehaviorSubject("first value");
    bhv.subscribe(console.log);
    bhv.subscribe(console.log);
    bhv.next("second value");
}