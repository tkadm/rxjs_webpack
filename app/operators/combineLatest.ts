import * as Rx from 'rxjs';


export function Example() {
    var weight = Rx.of(70, 72, 76, 79, 75);
    var height = Rx.of(1.76, 1.77, 1.78);
    //var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));

    var bmi = Rx.combineLatest(weight, height, (w, h) => w + ' ' + h);

    bmi.subscribe(x => console.log('BMI is ' + x));
}