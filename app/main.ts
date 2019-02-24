
window.addEventListener('load', () => {
    let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btnRoot");
    btn.addEventListener('click', () => {
        console.log('on click');
    });
});

//import { Example } from './operators/combineAll';
//import { Example } from './operators/combineLatest';
import { Example } from './operators/take';
Example();
 