var x=10;

var str=x.toString();
console.log(typeof str, str);
console.log(typeof x,x);

var str=x+'2';
console.log(typeof str, str);
console.log(typeof x,x);

console.log(+true);

// 아래의 조건문은 모두 코드 블록을 실행한다.
if (!false)     console.log(false + ' is falsy value');
if (!undefined) console.log(undefined + ' is falsy value');
if (!null)      console.log(null + ' is falsy value');
if (!0)         console.log(0 + ' is falsy value');
if (!NaN)       console.log(NaN + ' is falsy value');
if (!'')        console.log('' + ' is falsy value');