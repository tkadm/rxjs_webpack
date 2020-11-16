import * as rx from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export function onWSClick() {
    console.log("WebSocket!!!");
    let socket: WebSocketSubject<any> = webSocket("ws://localhost:60541/");
    socket.subscribe(value => { console.log(value); }, error => { console.error(error); }, () => { console.log("socket competed!"); });
}