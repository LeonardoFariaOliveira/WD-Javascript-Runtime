let interval = 0;
let sleep = 200;
// timeout(sleep, interval, ()=>{
//     print('1' + new Date().toISOString())
// })

const setTimeout = (ms, cb) => timeout(ms, 0, cb);
const setInterval = (ms, cb) => timeout(0, ms, cb);
const setTimeoutAsync = (ms) => new Promise(resolve => setTimeout(ms, resolve));

;(async function asyncFn(){
    print(new Date().toISOString(), 'waiting a sec...');
    await setTimeoutAsync(1000);
    print(new Date().toISOString(), 'waiting a sec...');
    await setTimeoutAsync(1000);
    print(new Date().toISOString(), 'finished...');
})();


thread(10);