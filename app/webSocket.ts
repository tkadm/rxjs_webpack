import * as rx from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';

/**
 * Регулярное вражение для строки даты в ISO формате
 * ^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1,2]\d|3[0,1])T(?:0[1-9]|1\d|2[0-3]):[0-5]\d:[0-5]\d(?:.\d+|)\+(?:[0,1]\d|2[0,3]):[0-5]\d
 */

export function onWSClick() {
    console.log("WebSocket!!!");
    let socket: WebSocketSubject<any> = webSocket("ws://localhost:60541/");
    socket.pipe(map(item => { item.JSMoment = new Date(item.Moment); return item; }))
        .subscribe(value => { console.log(value); }, error => { console.error(error); }, () => { console.log("socket competed!"); });
}