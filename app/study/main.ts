import * as Rx from 'rxjs';
import { IButtons } from '../main';
import { Simple } from './promise';


export function Main(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons): void {
    Simple();;
}