function genTicket(n){
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}
function sum(arr){
    let totalsum = 0;
    for (let i = 0; i < 3; i++) {
        totalsum += arr[i];
    }
    return totalsum;
}
export {genTicket, sum}