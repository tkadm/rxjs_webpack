import * as Rx from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IButtons } from './main';


export function notification_main(obs: Rx.Observable<Event>, buttons: IButtons, buttonsII: IButtons) {
    GetNotification().subscribe(value => console.log(value));
}

function CreateNotification(): Rx.Observable<Notification> {
    return new Rx.Observable(subscriber => {
        let result = new Notification("Заголовок", { body: "Тело сообщения!" });
        subscriber.next(result);
        subscriber.complete();
    });
}

function GetNotification(): Rx.Observable<Notification> {
    return Rx.from(Notification.requestPermission()).pipe(
        switchMap((value) => {
            switch (value) {
                case "denied": return Rx.EMPTY;
                case "granted": return CreateNotification();
            }
        }
        )
    );
}