
export function Simple() {
    let promise: Promise<any> = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
    promise.then(value=>console.log(value));
    //promise.then(console.log);
}