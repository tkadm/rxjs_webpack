import * as Rx from 'rxjs';
import { tap } from 'rxjs/operators';
import { IButtons, SubscribeConsole, CreateIButtonObserver } from '../main';

export function FirstLesson(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    let FObs: Rx.Observable<any> = new Rx.Observable(Sbs);
    console.log("еще не подписались?");
    FObs.subscribe(value => console.log(value),null,()=>console.log('complete 1!'));
    FObs.subscribe(value => console.log(value),null,()=>console.log('complete 2!'));

    

    let sb:Rx.Subject<number>=new Rx.Subject();

    sb.subscribe(value=>console.log(value),null,()=>console.log("comlete1!"));
    sb.subscribe(value=>console.log(value),null,()=>console.log("comlete2!"));
    sb.next(12);
    sb.next(20);
    sb.next(30);
    sb.next(200);
    sb.complete();

}

function Sbs(subscriber:Rx.Subscriber<any>){
    console.log("мы подписались!");
    subscriber.next(2);
    subscriber.next(4);
    subscriber.next(5);
    subscriber.next(10);
    setInterval(()=> subscriber.complete(),0);
}