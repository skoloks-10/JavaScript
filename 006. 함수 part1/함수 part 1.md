# 함수 part 1

Date: 2025년 3월 10일
페이지: p.154~p.167
완료: Yes
1일후 복습: Yes
7일후(주말) 복습: Yes
1달후 복습: No

# JavaScript 함수 요약본

## 1. 함수의 기본 개념

함수는 JavaScript에서 핵심적인 구성 요소로, 여러 문장(statements)을 하나의 실행 단위로 묶어 특정 작업을 수행하는 코드 블록입니다.

| 구성 요소 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 매개변수(Parameter) | 함수 내부에서 사용할 입력값을 정의하는 변수 | 함수 내에서 외부로부터 값을 받아 처리할 때 | `function add(x, y) { ... }` (x와 y가 매개변수) |
| 인수(Argument) | 함수 호출 시 전달하는 실제 값 | 함수를 호출할 때 매개변수에 전달할 값 | `add(2, 5)` (2와 5가 인수) |
| 반환값(Return Value) | 함수 실행 결과로 돌려주는 값 | 함수 처리 결과를 호출자에게 전달할 때 | `return x + y;` |
| 함수 몸체(Function Body) | 실제 실행될 코드들의 집합 | 함수의 로직을 구현할 때 | `{ return x + y; }` |

```jsx
// 함수 정의
function add(x, y) {  // x, y: 매개변수
  return x + y;       // 반환값
}

// 함수 호출
console.log(add(2, 5));  // 2, 5: 인수, 7: 출력값

```

## 2. 함수를 사용하는 이유

함수는 코드를 효율적으로 관리하고 사용하기 위한 여러 이점을 제공합니다.

| 이유 | 설명 | 사용 상황 | 예시 |
| --- | --- | --- | --- |
| 재사용성 | 한 번 정의된 함수를 여러 곳에서 호출하여 사용 | 동일한 로직이 반복될 때 | 여러 페이지에서 사용되는 입력값 검증 함수 |
| 유지보수 용이 | 코드 중복을 줄여 수정이 필요할 때 한 곳만 변경 | 로직이 변경되어야 할 때 | 세금 계산 함수의 세율 변경 |
| 가독성 향상 | 함수 이름으로 기능 파악 가능 | 코드가 복잡해질 때 명확성 부여 | `validateEmail()`, `calculateTotal()` 같은 명확한 이름 |
| 실행 시점 제어 | 필요한 시점에 원하는 로직 실행 | 이벤트 처리나 비동기 작업 | 클릭 이벤트 핸들러, 타이머 콜백 |

```jsx
// 재사용성 예시
function validateEmail(email) {
  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return pattern.test(email);
}

// 여러 곳에서 재사용
console.log(validateEmail('user@example.com'));  // true
console.log(validateEmail('invalid-email'));     // false

// 유지보수 예시
function calculateTax(amount) {
  const taxRate = 0.1;  // 세율 10%
  return amount * taxRate;
}
// 세율이 변경되면 한 곳만 수정하면 됨

```

## 3. 함수 정의 방법

JavaScript에서는 다양한 방법으로 함수를 정의할 수 있습니다.

### 3.1 함수 선언문 (Function Declaration)

| 특성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 함수 이름 | 반드시 함수 이름을 명시해야 함 | 명확하게 기능을 식별해야 할 때 | `function add(x, y) { ... }` |
| 호이스팅 | 함수 정의 전에도 호출 가능 | 함수 호출 코드가 정의보다 먼저 나와야 할 때 | 아래 예시 참조 |
| 독립적 사용 | 문장으로 독립적으로 사용 가능 | 일반적인 함수 정의 시 | 함수 정의 자체가 하나의 명령문 |

```jsx
// 호이스팅 예시 - 정의 전 호출 가능
console.log(add(2, 3));  // 5 출력

function add(x, y) {
  return x + y;
}

// 함수 선언문은 독립적으로 사용
function multiply(x, y) {
  return x * y;
}

```

### 3.2 함수 표현식 (Function Expression)

| 특성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 익명/기명 | 이름을 생략하거나(익명) 지정(기명) 가능 | 콜백 함수나 즉시 실행 함수 | `var add = function(x, y) { ... }` |
| 변수에 할당 | 함수 리터럴을 변수나 상수에 할당 | 함수를 값으로 취급해야 할 때 | `const square = function(x) { ... }` |
| 호이스팅 제한 | 변수 선언만 호이스팅, 초기화는 안 됨 | 실행 흐름 제어가 명확해야 할 때 | 아래 예시 참조 |

```jsx
// 익명 함수 표현식
const add = function(x, y) {
  return x + y;
};

// 기명 함수 표현식 - 함수 이름 'square'는 함수 내부에서만 접근 가능
const square = function square(x) {
  return x * x;
};

// 호이스팅 제한 예시
console.log(subtract);  // undefined (변수 선언만 호이스팅)
// console.log(subtract(5, 2));  // TypeError - 함수가 아직 아님

var subtract = function(x, y) {
  return x - y;
};

console.log(subtract(5, 2));  // 3 (이제 함수 호출 가능)

```

### 3.3 Function 생성자 함수

| 특성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 동적 생성 | 문자열로 함수 코드를 전달하여 동적으로 함수 생성 | 런타임에 함수 생성이 필요할 때 | `new Function('x', 'y', 'return x + y')` |
| 성능 이슈 | 매번 함수를 해석하므로 성능이 떨어짐 | 매우 제한적 상황에서만 사용 | 동적 코드 평가가 꼭 필요한 경우 |
| 스코프 제한 | 생성된 함수는 전역 스코프만 접근 가능 | 격리된 실행 환경이 필요할 때 | 외부 변수에 접근하지 않는 단순한 함수 |

```jsx
// Function 생성자를 사용한 함수 생성
const add = new Function('x', 'y', 'return x + y');

console.log(add(2, 3));  // 5

// 동적 함수 생성 예시
function createMathFunction(operation) {
  return new Function('a', 'b', `return a ${operation} b`);
}

const multiply = createMathFunction('*');
console.log(multiply(4, 5));  // 20

```

### 3.4 화살표 함수 (Arrow Function)

| 특성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 간결한 구문 | 함수 표현을 간결하게 작성 | 짧은 콜백 함수나 한 줄 함수 | `(x, y) => x + y` |
| this 바인딩 | 상위 스코프의 this를 유지 | 콜백에서 상위 컨텍스트 접근 필요 시 | 아래 예시 참조 |
| 항상 익명 | 이름을 지정할 수 없음(변수에 할당 필요) | 콜백 함수나 즉시 실행 함수 | `const add = (x, y) => x + y` |

```jsx
// 기본 화살표 함수
const add = (x, y) => x + y;
console.log(add(2, 3));  // 5

// 본문이 여러 줄인 경우 중괄호 필요
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

// this 바인딩 예시
const counter = {
  count: 0,
  increment: function() {
    // 화살표 함수는 상위 스코프(여기서는 increment 메서드)의 this 유지
    setInterval(() => {
      console.log(this.count++);  // counter 객체의 count에 접근 가능
    }, 1000);
  }
};

```

## 4. 함수의 특성

### 4.1 함수 호이스팅 (Function Hoisting)

| 특성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 함수 선언문 호이스팅 | 함수 선언문은 전체가 호이스팅됨 | 정의 전에 함수 호출 필요 시 | 아래 예시 참조 |
| 함수 표현식 호이스팅 | 변수 선언만 호이스팅됨(초기화 안됨) | 함수 정의와 호출 순서 명확히 할 때 | 아래 예시 참조 |

```jsx
// 함수 선언문 호이스팅
console.log(add(2, 3));  // 5 - 정상 작동

function add(x, y) {
  return x + y;
}

// 함수 표현식 호이스팅
console.log(typeof subtract);  // undefined
// console.log(subtract(5, 2));  // TypeError

var subtract = function(x, y) {
  return x - y;
};

```

### 4.2 일급 객체 (First-class Object)

| 특성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 변수에 할당 | 함수를 변수나 데이터 구조에 저장 | 함수를 값처럼 다룰 때 | `const func = function() { ... }` |
| 함수의 매개변수로 전달 | 다른 함수에 콜백으로 전달 | 이벤트 처리, 비동기 작업 등 | `array.map(item => item * 2)` |
| 함수의 반환값으로 사용 | 함수가 다른 함수를 반환 | 고차 함수, 팩토리 패턴 등 | `function makeCounter() { return function() { ... } }` |
| 프로퍼티와 메서드 소유 | 함수도 객체처럼 속성과 메서드를 가질 수 있음 | 함수에 상태 저장이 필요한 경우 | `func.count = 0; func.description = '...';` |

```jsx
// 변수에 함수 할당
const sayHello = function(name) {
  return `Hello, ${name}!`;
};

// 함수를 매개변수로 전달 (콜백 함수)
function processUser(user, callback) {
  return callback(user);
}

const user = { name: 'John' };
console.log(processUser(user, u => `User: ${u.name}`));  // "User: John"

// 함수를 반환하는 함수 (고차 함수)
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5));  // 10

// 함수의 프로퍼티
function counter() {
  counter.count = (counter.count || 0) + 1;
  return counter.count;
}

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter.count);  // 2

```

# 최종 요약본

## 1. 함수의 기본 개념

- **함수**: 여러 문장을 하나의 실행 단위로 묶은 코드 블록
- **구성 요소**: 매개변수(parameters), 함수 몸체(body), 반환값(return value)
- **특징**: JavaScript에서 함수는 값(객체)으로 취급됨

## 2. 함수 사용 이유

- **재사용성**: 동일한 코드를 여러 곳에서 활용
- **유지보수 용이**: 변경 시 한 곳만 수정하면 됨
- **가독성 향상**: 함수 이름으로 코드 의도 파악 가능
- **실행 시점 제어**: 필요한 시점에 로직 실행

## 3. 함수 정의 방법

- **함수 선언문**: `function name(params) { ... }` - 전체가 호이스팅됨
- **함수 표현식**: `const name = function(params) { ... }` - 변수 선언만 호이스팅
- **Function 생성자**: `new Function(param1, param2, bodyString)` - 동적 생성, 성능 이슈
- **화살표 함수**: `(params) => { ... }` - 간결한 구문, this 상위 스코프 유지

## 4. 함수의 특성

- **호이스팅**: 함수 선언문은 전체가, 함수 표현식은 변수 선언만 호이스팅
- **일급 객체**: 변수 할당, 매개변수 전달, 반환값으로 사용, 프로퍼티 소유 가능
- **스코프**: 함수는 자신만의 스코프 생성, 클로저 형성 가능
- **this 바인딩**: 함수 호출 방식에 따라 this 값이 결정됨 (화살표 함수는 예외)

# JavaScript 함수 복습 퀴즈

## 문제 1

다음 중 JavaScript에서 함수의 특징으로 올바르지 않은 것은?

1. 함수는 일급 객체로서 변수에 할당할 수 있다.
2. 함수는 다른 함수의 매개변수로 전달할 수 있다.
3. 모든 유형의 JavaScript 함수는 호이스팅된다.
4. 함수는 객체이므로 프로퍼티와 메서드를 가질 수 있다.

**정답: 3**

**해설:** JavaScript에서는 함수 선언문만 완전히 호이스팅되며, 함수 표현식은 변수 선언만 호이스팅됩니다. 화살표 함수나 함수 표현식으로 정의된 함수는 초기화 이전에 호출할 수 없습니다. 예를 들어:

```jsx
console.log(declarationFunc()); // 정상 작동
console.log(expressionFunc);    // undefined
// console.log(expressionFunc()); // TypeError: expressionFunc is not a function

function declarationFunc() { return "함수 선언문"; }
var expressionFunc = function() { return "함수 표현식"; };

```

## 문제 2

다음 코드의 실행 결과는 무엇인가요?

```jsx
console.log(typeof add);
console.log(add(2, 3));

var add = function(x, y) {
  return x + y;
};

```

1. "function", 5
2. "undefined", TypeError
3. "function", TypeError
4. "undefined", undefined

**정답: 2**

**해설:** 함수 표현식은 변수 선언만 호이스팅되고 함수 할당은 호이스팅되지 않습니다. 코드 실행 시:

1. `var add;`가 호이스팅되어 `add`는 `undefined` 상태가 됩니다.
2. `console.log(typeof add)`는 "undefined"를 출력합니다.
3. `undefined`는 함수가 아니므로 `add(2, 3)`를 호출하면 TypeError가 발생합니다.
4. 그 후에야 `add` 변수에 함수가 할당됩니다.

## 문제 3

다음 함수 정의 방법 중 `this` 바인딩이 다른 것은?

1. `function add(x, y) { return x + y; }`
2. `const add = function(x, y) { return x + y; };`
3. `const add = (x, y) => x + y;`
4. `const add = new Function('x', 'y', 'return x + y');`

**정답: 3**

**해설:** 화살표 함수(3번)는 다른 함수 정의 방법과 달리 자신만의 `this`를 가지지 않고, 상위 스코프의 `this`를 그대로 사용합니다. 반면 일반 함수(1, 2, 4번)는 호출 방식에 따라 `this` 값이 동적으로 결정됩니다. 예를 들어:

```jsx
const obj = {
  value: 10,
  regularFunc: function() {
    console.log(this.value); // 10 (obj를 가리킴)
  },
  arrowFunc: () => {
    console.log(this.value); // undefined (상위 스코프의 this)
  }
};

```

## 문제 4

다음 중 함수를 사용하는 주요 이유로 가장 적절하지 않은 것은?

1. 코드의 재사용성 향상
2. 유지보수 용이성 증가
3. 함수는 항상 다른 방법보다 실행 속도가 빠르다
4. 코드의 가독성 향상

**정답: 3**

**해설:** 함수 사용의 주요 이유는 코드 재사용, 유지보수 용이성, 가독성 향상, 실행 시점 제어 등이지만, 함수가 항상 다른 방법보다 실행 속도가 빠른 것은 아닙니다. 실제로 함수 호출에는 약간의 오버헤드가 발생할 수 있으며, 극단적인 성능 최적화가 필요한 경우 인라인 코드가 더 빠를 수 있습니다. 함수의 성능은 구현 방식, 호출 빈도, JavaScript 엔진의 최적화 등 여러 요소에 따라 달라집니다.

## 문제 5

다음 코드의 출력값은?

```jsx
function outer() {
  var x = 10;

  return function inner() {
    return x;
  };
}

const innerFunc = outer();
console.log(innerFunc());

```

1. undefined
2. 10
3. error
4. null

**정답: 2**

**해설:** 이 코드는 클로저(closure)의 예입니다. `outer` 함수는 `inner` 함수를 반환하고, `inner` 함수는 `outer`의 지역 변수 `x`를 참조합니다. JavaScript에서 함수는 자신이 생성된 환경(렉시컬 환경)을 기억하므로, `inner` 함수는 `outer` 함수의 실행이 끝난 후에도 `x` 변수에 접근할 수 있습니다. 따라서 `innerFunc()`를 호출하면 `x` 값인 10이 반환됩니다.

## 문제 6

다음 중 함수 선언문과 함수 표현식의 차이점으로 올바른 것은?

1. 함수 표현식은 변수에 할당할 수 없다.
2. 함수 선언문은 호이스팅되지만, 함수 표현식은 변수 선언만 호이스팅된다.
3. 함수 표현식은 매개변수를 가질 수 없다.
4. 함수 선언문은 콜백 함수로 사용할 수 없다.

**정답: 2**

**해설:** 함수 선언문(`function name() {}`)은 전체가 호이스팅되어 코드의 어느 위치에서든 호출이 가능합니다. 반면, 함수 표현식(`var name = function() {}`)은 변수 선언만 호이스팅되고 함수 할당은 실제 코드 실행 시점에 이루어집니다. 따라서 함수 표현식으로 정의된 함수는 정의 이전에 호출할 수 없습니다.

## 문제 7

다음 화살표 함수와 동일한 기능을 하는 일반 함수는?

```jsx
const double = x => x * 2;

```

1. `const double = function(x) { return x * 2 };`
2. `const double = function(x) { x * 2 };`
3. `function double(x) { return x * 2 };`
4. `function double(x) { x * 2 };`

**정답: 1**

**해설:** 화살표 함수 `x => x * 2`는 매개변수 `x`를 받아 `x * 2`를 반환하는 함수입니다. 화살표 함수에서는 중괄호 없이 표현식만 작성하면 그 결과가 자동으로 반환됩니다. 이와 동일한 기능을 하는 일반 함수는 `function(x) { return x * 2 }`이므로 1번이 정답입니다. 2번과 4번은 `return` 문이 없어서 `undefined`를 반환하고, 3번은 함수 선언문으로 기능은 같지만 표현식이 아닙니다.

## 문제 8

다음 코드의 출력값은?

```jsx
const counter = {
  count: 0,
  increment: function() {
    setTimeout(function() {
      console.log(this.count);
      this.count++;
    }, 1000);
  }
};

counter.increment();

```

1. 0
2. 1
3. undefined
4. NaN

**정답: 3**

**해설:** 일반 함수에서 `this`는 호출 방식에 따라 결정됩니다. `setTimeout` 내부의 콜백 함수는 일반 함수이며, 이 함수 내의 `this`는 전역 객체(브라우저에서는 `window`, Node.js에서는 `global`)를 가리킵니다. 따라서 `this.count`는 `counter.count`가 아닌 전역 객체의 `count` 프로퍼티를 참조하게 되며, 이 값은 정의되지 않았으므로 `undefined`가 출력됩니다. 이 문제를 해결하려면 화살표 함수를 사용하거나 `bind` 메서드로 `this`를 고정해야 합니다.

## 문제 9

다음 중 Function 생성자를 사용한 함수 정의의 특징으로 올바른 것은?

1. 함수 선언문보다 성능이 우수하다.
2. 함수 내부에서 클로저를 형성할 수 없다.
3. 생성된 함수는 전역 스코프에서만 실행된다.
4. 항상 익명 함수만 생성할 수 있다.

**정답: 3**

**해설:** `new Function()` 생성자로 만든 함수는 생성 당시의 스코프와 연결되지 않고 항상 전역 스코프에서 생성됩니다. 따라서 생성된 함수 내부에서는 지역 변수에 접근할 수 없고 전역 변수만 접근 가능합니다. 이는 다른 함수 정의 방식과의 중요한 차이점입니다. Function 생성자는 문자열로부터 동적으로 함수를 생성할 수 있지만, 성능이 저하되고 보안상의 위험이 있어 일반적인 사용은 권장되지 않습니다.

## 문제 10

다음 코드에서 함수 `foo`의 출력값은?

```jsx
function foo() {
  return
  {
    bar: "hello"
  };
}

console.log(foo());

```

1. { bar: "hello" }
2. undefined
3. null
4. SyntaxError

**정답: 2**

**해설:** JavaScript에서는 자동 세미콜론 삽입(ASI, Automatic Semicolon Insertion) 기능이 있어, 줄 바꿈을 만나면 세미콜론을 자동으로 삽입할 수 있습니다. 위 코드에서 `return` 뒤에 줄 바꿈이 있어 JavaScript는 `return;`으로 해석하고 함수가 여기서 종료됩니다. 따라서 아무 값도 명시적으로 반환하지 않아 기본값인 `undefined`가 반환됩니다. 의도한 대로 객체를 반환하려면 다음과 같이 작성해야 합니다:

```jsx
function foo() {
  return {
    bar: "hello"
  };
}

```

# JavaScript 함수 - 기본 연습문제

## 연습문제 1: 함수 선언문과 함수 표현식 활용하기

**문제**:
두 개의 숫자를 입력받아 덧셈, 뺄셈, 곱셈, 나눗셈을 수행하는 계산기를 구현하세요.

1. 덧셈(`add`)은 함수 선언문으로 정의하세요.
2. 뺄셈(`subtract`)은 함수 표현식으로 정의하세요.
3. 곱셈(`multiply`)은 화살표 함수로 정의하세요.
4. 나눗셈(`divide`)은 즉시 실행 함수(IIFE)를 사용하여 반환된 함수를 할당하세요.
5. 0으로 나누기를 시도하면 "0으로 나눌 수 없습니다."라는 메시지를 반환해야 합니다.
6. 각 함수를 테스트하는 코드를 작성하세요.

**정답**:

```jsx
// 1. 덧셈 - 함수 선언문
function add(x, y) {
  return x + y;
}

// 2. 뺄셈 - 함수 표현식
const subtract = function(x, y) {
  return x - y;
};

// 3. 곱셈 - 화살표 함수
const multiply = (x, y) => x * y;

// 4. 나눗셈 - 즉시 실행 함수(IIFE)를 사용
const divide = (function() {
  // 내부 함수를 반환
  return function(x, y) {
    // 0으로 나누기 검사
    if (y === 0) {
      return "0으로 나눌 수 없습니다.";
    }
    return x / y;
  };
})();

// 테스트
console.log("10 + 5 =", add(10, 5));         // 15
console.log("10 - 5 =", subtract(10, 5));    // 5
console.log("10 * 5 =", multiply(10, 5));    // 50
console.log("10 / 5 =", divide(10, 5));      // 2
console.log("10 / 0 =", divide(10, 0));      // 0으로 나눌 수 없습니다.

```

**해설**:

- **함수 선언문(add)**: 가장 기본적인 함수 정의 방법으로, 호이스팅되어 코드의 어느 위치에서든 호출할 수 있습니다.
- **함수 표현식(subtract)**: 함수를 변수에 할당하는 방식으로, 변수 선언만 호이스팅되고 함수 자체는 호이스팅되지 않습니다.
- **화살표 함수(multiply)**: ES6에서 도입된 간결한 함수 표현 방식입니다. 단일 표현식만 있을 때는 `return` 키워드와 중괄호가 필요 없습니다.
- **즉시 실행 함수(divide)**: 정의되자마자 실행되는 함수로, 여기서는 내부 함수를 반환합니다. 이 패턴은 클로저를 생성하여 비공개 변수나 메서드를 만들 때 유용합니다.
- 각 함수는 다른 방식으로 정의되었지만 동일한 기능을 수행할 수 있으며, 특히 나눗셈 함수에서는 0으로 나누기를 방지하는 유효성 검사를 추가했습니다.

## 연습문제 2: 매개변수와 기본값 다루기

**문제**:
사용자 정보를 생성하는 함수를 작성하세요. 함수는 매개변수의 기본값과 객체 구조분해를 활용해야 합니다.

요구사항:

1. `createUser` 함수를 작성하세요. 이 함수는 다음 매개변수를 받습니다:
    - `name` (필수)
    - `age` (기본값: 30)
    - `email` (기본값: 'no-email@example.com')
    - `options` 객체 (기본값: 빈 객체)
2. `options` 객체에서 다음 속성을 구조분해하세요:
    - `isAdmin` (기본값: false)
    - `language` (기본값: 'ko')
3. 함수는 모든 사용자 정보를 포함한 객체를 반환해야 합니다.
4. 다양한 인수 조합으로 함수를 호출하여 테스트하세요.

**정답**:

```jsx
function createUser(name, age = 30, email = 'no-email@example.com', options = {}) {
  // options 객체에서 속성 구조분해
  const { isAdmin = false, language = 'ko' } = options;

  // 사용자 객체 생성 및 반환
  return {
    name,
    age,
    email,
    isAdmin,
    language,
    createdAt: new Date()
  };
}

// 테스트 케이스
console.log("케이스 1: 이름만 제공");
console.log(createUser("홍길동"));

console.log("\\n케이스 2: 이름과 나이 제공");
console.log(createUser("김철수", 25));

console.log("\\n케이스 3: 이름, 나이, 이메일 제공");
console.log(createUser("이영희", 28, "lee@example.com"));

console.log("\\n케이스 4: 모든 정보 제공");
console.log(createUser("박지민", 35, "park@example.com", {
  isAdmin: true,
  language: 'en'
}));

console.log("\\n케이스 5: 이름과 옵션만 제공");
console.log(createUser("최민수", undefined, undefined, {
  language: 'jp'
}));

```

**해설**:

- **매개변수 기본값**: ES6에서 도입된 기능으로, 인수가 전달되지 않았을 때 사용할 기본값을 지정할 수 있습니다.
    - `age = 30`: `age` 인수가 제공되지 않으면 30이 사용됩니다.
    - `email = 'no-email@example.com'`: `email` 인수가 없으면 이 기본값이 사용됩니다.
    - `options = {}`: 옵션이 제공되지 않으면 빈 객체를 기본값으로 사용합니다.
- **객체 구조분해(destructuring)**: 객체에서 속성을 추출하여 변수에 할당하는 문법입니다.
    - `const { isAdmin = false, language = 'ko' } = options`: options 객체에서 isAdmin과 language 속성을 추출하고, 없을 경우 기본값을 설정합니다.
- **단축 속성명(shorthand property names)**: 객체 생성 시 변수명과 속성명이 같을 경우 간결하게 표현할 수 있습니다.
    - `{ name, age, email, ... }`: `{ name: name, age: age, ... }`와 동일합니다.
- **테스트 케이스**:
    - 다양한 인수 조합으로 함수를 호출하여 기본값이 올바르게 적용되는지 확인합니다.
    - `undefined`를 명시적으로 전달하면 해당 매개변수의 기본값이 사용됩니다(케이스 5).

이 함수는 필수 매개변수와 선택적 매개변수를 조합하여 유연한 API를 제공하는 방법을 보여줍니다.

## 연습문제 3: 콜백 함수와 고차 함수 활용하기

**문제**:
배열의 요소를 다양한 방식으로 처리할 수 있는 고차 함수를 작성하세요.

요구사항:

1. `processArray` 함수를 작성하세요. 이 함수는 다음 매개변수를 받습니다:
    - `array`: 처리할 배열
    - `callback`: 각 요소를 처리할 콜백 함수
2. `processArray` 함수는 원본 배열을 변경하지 않고, 처리된 새 배열을 반환해야 합니다.
3. 다음 콜백 함수들을 작성하세요:
    - `double`: 숫자를 2배로 만듭니다.
    - `square`: 숫자의 제곱을 계산합니다.
    - `isEven`: 짝수인지 확인하여 불리언 값을 반환합니다.
    - `toUpperCase`: 문자열을 대문자로 변환합니다(문자열이 아닌 요소는 그대로 반환).
4. 다른 타입의 배열로 함수들을 테스트하세요.

**정답**:

```jsx
// 고차 함수 정의
function processArray(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    // 콜백 함수를 각 요소에 적용하고 결과를 새 배열에 추가
    result.push(callback(array[i], i, array));
  }

  return result;
}

// 콜백 함수들 정의
function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function isEven(num) {
  return num % 2 === 0;
}

function toUpperCase(item) {
  return typeof item === 'string' ? item.toUpperCase() : item;
}

// 테스트를 위한 배열들
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'hello', true, 'world', 42];

// 테스트
console.log("원본 숫자 배열:", numbers);
console.log("2배로 만들기:", processArray(numbers, double));
console.log("제곱하기:", processArray(numbers, square));
console.log("짝수 확인:", processArray(numbers, isEven));

console.log("\\n원본 혼합 배열:", mixed);
console.log("대문자로 변환:", processArray(mixed, toUpperCase));

// 익명 함수를 콜백으로 사용
console.log("\\n익명 함수 사용:");
const filtered = processArray(numbers, function(num) {
  return num > 2;
});
console.log("2보다 큰 숫자 필터링:", filtered);

// 화살표 함수를 콜백으로 사용
console.log("\\n화살표 함수 사용:");
const summed = processArray(numbers, (num, index) => {
  console.log(`인덱스 ${index}의 요소: ${num}`);
  return num + index;
});
console.log("요소와 인덱스 더하기:", summed);

```

**해설**:

- **고차 함수(Higher-order Function)**: `processArray`는 함수를 인수로 받고 새로운 결과를 반환하는 고차 함수입니다. 이는 함수형 프로그래밍의 핵심 개념으로, 코드의 재사용성과 추상화를 높여줍니다.
- **콜백 함수(Callback Function)**: `double`, `square`, `isEven`, `toUpperCase`는 각각 특정 작업을 수행하는 콜백 함수입니다. 이들은 `processArray` 함수에 전달되어 배열의 각 요소를 처리합니다.
- **콜백 매개변수**: `callback(array[i], i, array)`로 콜백을 호출할 때 세 가지 매개변수를 전달합니다:
    1. `array[i]`: 현재 처리 중인 요소
    2. `i`: 요소의 인덱스
    3. `array`: 원본 배열
- **불변성(Immutability)**: `processArray` 함수는 원본 배열을 변경하지 않고 새로운 배열을 생성하여 반환합니다. 이는 예측 가능한 코드를 작성하는 데 도움이 됩니다.
- **익명 함수와 화살표 함수**: 마지막 두 예제는 이름 없는 함수와 화살표 함수를 콜백으로 사용하는 방법을 보여줍니다. 이러한 인라인 함수는 한 번만 사용할 콜백을 정의할 때 유용합니다.
- **실제 구현 비교**: 이 `processArray` 함수는 JavaScript의 내장 `Array.prototype.map()` 메서드와 유사한 기능을 합니다. 실제로는 `const result = array.map(callback)`와 같이 내장 메서드를 사용하는 것이 더 일반적입니다.

## 연습문제 4: 클로저를 활용한 카운터 함수 만들기

**문제**:
클로저(closure)를 활용하여 카운터 함수를 작성하세요.

요구사항:

1. `createCounter` 함수를 작성하세요. 이 함수는 초기값을 매개변수로 받습니다.
2. `createCounter` 함수는 다음과 같은 메서드를 가진 객체를 반환해야 합니다:
    - `increment()`: 카운터를 1 증가시키고 현재 값 반환
    - `decrement()`: 카운터를 1 감소시키고 현재 값 반환
    - `reset()`: 카운터를 초기값으로 재설정하고 그 값 반환
    - `getValue()`: 현재 카운터 값 반환
3. 카운터 값은 외부에서 직접 접근할 수 없어야 합니다.
4. 여러 개의 독립적인 카운터를 생성하여 테스트하세요.

**정답**:

```jsx
function createCounter(initialValue = 0) {
  // 클로저를 통해 보호되는 카운터 변수
  let count = initialValue;

  // 메서드를 가진 객체 반환
  return {
    increment: function() {
      count += 1;
      return count;
    },

    decrement: function() {
      count -= 1;
      return count;
    },

    reset: function() {
      count = initialValue;
      return count;
    },

    getValue: function() {
      return count;
    }
  };
}

// 첫 번째 카운터 생성 및 테스트
const counter1 = createCounter(5);
console.log("Counter1 초기값:", counter1.getValue()); // 5
console.log("Counter1 증가:", counter1.increment());  // 6
console.log("Counter1 증가:", counter1.increment());  // 7
console.log("Counter1 감소:", counter1.decrement());  // 6
console.log("Counter1 리셋:", counter1.reset());      // 5

// 두 번째 카운터 생성 및 테스트
const counter2 = createCounter(10);
console.log("\\nCounter2 초기값:", counter2.getValue()); // 10
console.log("Counter2 증가:", counter2.increment());    // 11

// 두 카운터가 서로 영향을 주지 않는지 확인
console.log("\\n두 카운터 독립성 확인:");
console.log("Counter1 현재값:", counter1.getValue()); // 5
console.log("Counter2 현재값:", counter2.getValue()); // 11

// 직접 접근 시도
console.log("\\n직접 접근 시도:");
console.log("counter1.count:", counter1.count); // undefined - 접근 불가

```

**해설**:

- **클로저(Closure)**: 함수와 그 함수가 선언된 렉시컬 환경의 조합입니다. 클로저는 외부 함수가 반환된 이후에도 외부 함수의 변수에 접근할 수 있게 해줍니다.
- **비공개 변수(Private Variable)**: `let count = initialValue`로 선언된 변수는 `createCounter` 함수의 렉시컬 환경에 있으며, 반환된 객체의 메서드들만 이 변수에 접근할 수 있습니다. 외부에서는 직접 접근할 수 없어 `counter1.count`는 undefined입니다.
- **객체 반환**: `createCounter` 함수는 메서드를 가진 객체를 반환합니다. 각 메서드는 클로저를 통해 `count` 변수에 접근할 수 있습니다.
- **함수 팩토리**: `createCounter`는 함수 팩토리로서, 호출될 때마다 새로운 클로저와 객체를 생성합니다. 이로 인해 `counter1`과 `counter2`는 각각 독립적인 `count` 변수를 가지게 됩니다.
- **모듈 패턴**: 이 구현은 JavaScript의 모듈 패턴의 간단한 형태입니다. 모듈 패턴은 관련 기능을 캡슐화하고 공개 API만 노출하는 방식으로, 정보 은닉과 코드 구조화에 유용합니다.

이 예제는 함수의 일급 객체 특성과 클로저를 활용하여 상태를 가진 함수를 만드는 방법을 보여줍니다. 이러한 패턴은 JavaScript에서 private 변수와 캡슐화를 구현하는 전통적인 방법입니다.

## 연습문제 5: 재귀 함수로 계승(팩토리얼) 계산하기

**문제**:
재귀 함수를 사용하여 숫자의 계승(팩토리얼)을 계산하는 함수를 작성하세요.

요구사항:

1. `factorial` 함수를 작성하세요. 이 함수는 양의 정수 n을 매개변수로 받아 n!을 계산합니다.
2. 재귀적 접근 방식을 사용하여 구현하세요 (n! = n × (n-1)!).
3. 0과 1의 팩토리얼은 1입니다 (0! = 1! = 1).
4. 음수나 소수점이 있는 숫자에 대해서는 오류 메시지를 반환하세요.
5. 큰 숫자에 대한 스택 오버플로우 가능성을 주석으로 설명하세요.

**정답**:

```jsx
function factorial(n) {
  // 입력값 유효성 검사
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    return "오류: 정수를 입력하세요.";
  }

  if (n < 0) {
    return "오류: 음수의 팩토리얼은 정의되지 않습니다.";
  }

  // 기저 조건: 0이나 1이면 1 반환
  if (n === 0 || n === 1) {
    return 1;
  }

  // 재귀 호출: n! = n × (n-1)!
  return n * factorial(n - 1);
}

// 테스트
console.log("0! =", factorial(0));   // 1
console.log("1! =", factorial(1));   // 1
console.log("5! =", factorial(5));   // 120 (= 5 × 4 × 3 × 2 × 1)
console.log("10! =", factorial(10)); // 3628800

// 오류 케이스 테스트
console.log("factorial(-1):", factorial(-1));  // 오류 메시지
console.log("factorial(3.5):", factorial(3.5)); // 오류 메시지
console.log("factorial('5'):", factorial('5')); // 오류 메시지

/*
참고: 재귀 함수의 제한 사항

JavaScript 엔진에는 호출 스택 크기 제한이 있습니다(대략 10,000~25,000 사이).
매우 큰 숫자(예: factorial(100000))에 대해 이 함수를 호출하면
"Maximum call stack size exceeded" 오류가 발생할 수 있습니다.

이런 경우에는 반복문을 사용하거나 꼬리 재귀 최적화(tail recursion)를 적용한
버전이 더 적합할 수 있습니다. 예시:

function factorialIterative(n) {
  if (n < 0 || !Number.isInteger(n)) return "오류";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
*/

// 재귀 과정 시각화
function factorialWithLog(n, depth = 0) {
  const indent = " ".repeat(depth * 2);
  console.log(`${indent}factorial(${n}) 호출됨`);

  if (n === 0 || n === 1) {
    console.log(`${indent}기저 조건 도달: factorial(${n}) = 1`);
    return 1;
  }

  const result = n * factorialWithLog(n - 1, depth + 1);
  console.log(`${indent}factorial(${n}) = ${n} × factorial(${n-1}) = ${result}`);
  return result;
}

console.log("\\n재귀 과정 시각화:");
factorialWithLog(4);

```

**해설**:

- **재귀 함수(Recursive Function)**: 자기 자신을 호출하는 함수입니다. 재귀는 문제를 더 작은 동일한 형태의 하위 문제로 나누어 해결하는 방식입니다.
- **기저 조건(Base Case)**: 재귀 함수에서 가장 중요한 부분은 기저 조건(재귀 호출을 멈추는 조건)입니다. 이 경우 n이 0이나 1일 때 재귀를 멈추고 1을 반환합니다.
- **재귀 관계식**: 팩토리얼의 재귀적 정의는 `n! = n × (n-1)!`입니다. 이 식을 코드로 표현하면 `return n * factorial(n - 1)`이 됩니다.
- **유효성 검사**: 함수는 입력이 유효한지 확인하고, 정수가 아니거나 음수일 경우 적절한 오류 메시지를 반환합니다.
- **시각화 함수**: `factorialWithLog` 함수는 재귀 호출의 과정을 시각화하여 이해를 돕습니다. 각 호출 단계와 반환 값을 콘솔에 출력합니다.
- **재귀의 제한 사항**: JavaScript 엔진에는 호출 스택 크기 제한이 있어, 너무 깊은 재귀 호출은 스택 오버플로우를 일으킬 수 있습니다. 이런 경우 반복문이나 꼬리 재귀 최적화가 대안이 될 수 있습니다.

이 예제는 재귀 함수의 기본 개념과 구현 방법을 보여줍니다. 재귀는 특히 트리 구조 탐색이나 분할 정복 알고리즘에서 유용하게 사용됩니다.