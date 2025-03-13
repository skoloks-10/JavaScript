# 함수 part 2

Date: 2025년 3월 13일
페이지: p.168~p.188
완료: Yes
1일후 복습: No
7일후(주말) 복습: No
1달후 복습: No

## 1. 함수 호출 기본 개념

- **함수 호출 방법:**
    
    함수 이름과 괄호를 사용하여 호출하며, 괄호 안에는 0개 이상의 인수를 쉼표로 구분해서 넣습니다.
    
- **실행 흐름:**
    
    함수 호출 시 현재 실행 흐름은 일시 중단되고, 지정한 함수 몸체로 실행이 이동합니다. 함수 내부의 문장이 실행되고, `return`문에 만나면 그 값이 호출부로 반환됩니다.
    

---

## 2. 매개변수와 인수

함수가 실행되기 위해 외부에서 내부로 값을 전달할 때 **매개변수(parameter)**와 **인수(argument)**를 사용합니다.

- **매개변수 선언 및 할당 과정:**
    1. 함수를 정의할 때 매개변수를 선언합니다.
    2. 함수를 호출할 때 전달된 인수들이 매개변수에 순서대로 할당됩니다.
    3. 함수 몸체 내에서는 매개변수가 지역 변수처럼 동작합니다.
- **예제:**
    
    ```jsx
    function add(x, y) {
      console.log('x:', x, ', y:', y); // x와 y의 전달된 값을 출력함
      return x + y;
    }
    
    const result = add(1, 2);  // 인수 1, 2가 매개변수 x와 y에 각각 할당됨
    console.log(result);  // 3 출력
    
    ```
    
- **인수의 개수 관련 현상:**
    - **인수가 부족할 경우:**
    부족한 매개변수는 `undefined`로 초기화되며, 예를 들어 아래처럼 동작합니다.
        
        ```jsx
        function add(x, y) {
          return x + y;
        }
        
        console.log(add(2)); // x는 2, y는 undefined → 결과: NaN
        
        ```
        
    - **인수가 초과할 경우:**
    초과 인수는 `arguments` 객체에 저장되지만, 선언된 매개변수에는 할당되지 않습니다.
        
        ```jsx
        function listArgs(x, y) {
          console.log(arguments); // 전달된 모든 인수가 저장된 유사 배열
        }
        
        listArgs(1, 2, 3, 4); // 매개변수는 1과 2만 직접 사용되지만 arguments에 전체 값이 있음
        
        ```
        
- **매개변수는 함수 몸체 내부에서만 접근 가능:**
    
    함수 외부에서는 매개변수를 참조할 수 없으므로 아래 코드는 에러를 발생시킵니다.
    
    ```jsx
    function add(x, y) {
      return x + y;
    }
    
    add(2, 5);
    console.log(x, y);  // ReferenceError: x is not defined
    
    ```
    

---

## 3. 인수 확인과 기본값 할당

자바스크립트는 함수 호출 시 인수의 타입이나 개수를 자동으로 체크하지 않습니다. 따라서 다음과 같이 인수를 검증하거나 기본값을 할당하는 기법을 사용합니다.

- **타입 확인 예제:**
    
    ```jsx
    function add(x, y) {
      if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
      }
      return x + y;
    }
    
    console.log(add(2, 3));      // 5 출력
    // console.log(add(2));      // 인수가 부족하여 TypeError 발생
    // console.log(add('a', 'b')); // TypeError 발생
    
    ```
    
- **기본값 할당 (단축 평가 사용):**
    
    ```jsx
    function add(a, b, c) {
      a = a || 0;
      b = b || 0;
      c = c || 0;
      return a + b + c;
    }
    
    console.log(add(1, 2, 3)); // 6
    console.log(add(1, 2));    // 3
    console.log(add(1));       // 1
    console.log(add());        // 0
    
    ```
    
    > 주의: ES6부터는 기본 매개변수(default parameters)를 사용할 수 있으므로
    > 
    > 
    > ```jsx
    > function add(a = 0, b = 0, c = 0) {
    >   return a + b + c;
    > }
    > 
    > ```
    > 
    > 와 같이 작성하는 것이 더 명료합니다.
    > 
- **매개변수 최대 개수:**
    
    함수를 설계할 때 전달해야 하는 인수의 수가 많으면 인수의 순서나 전달이 복잡해집니다.
    
    보통 **3개 이하**로 제한하고, 만약 그 이상의 데이터가 필요할 경우 하나의 객체로 묶어 인수로 전달하는 방법이 유리합니다.
    
    ```jsx
    // 객체를 이용한 인수 전달 예제
    function createUser({ name, age, email }) {
      console.log(name, age, email);
    }
    
    createUser({ name: 'Alice', age: 25, email: 'alice@example.com' });
    
    ```
    

---

## 4. 반환문 (Return Statement)

함수는 `return` 키워드를 사용해 결과값을 외부로 반환할 수 있습니다.

- **반환문의 역할:**
    1. 함수의 실행을 즉시 중단하고 함수 몸체를 빠져나갑니다.
    2. `return` 뒤에 오는 표현식을 평가하여 해당 값을 호출한 곳으로 반환합니다.
- **예제:**
    
    ```jsx
    function multiply(x, y) {
      return x * y; // 반환값
      console.log('이 코드는 실행되지 않습니다.');
    }
    
    console.log(multiply(3, 5)); // 15 출력
    
    ```
    
- **반환값이 없는 경우:**
    
    `return` 뒤에 아무 표현식도 없으면 암묵적으로 `undefined`가 반환됩니다.
    
    ```jsx
    function foo() {
      return;
    }
    
    console.log(foo()); // undefined 출력
    
    ```
    
    또는 `return`문 자체가 생략되면 함수는 `undefined`를 반환합니다.
    
    ```jsx
    function bar() {
      // 아무 반환문도 없음
    }
    
    console.log(bar()); // undefined 출력
    
    ```
    
- **주의: 줄바꿈과 세미콜론 자동 삽입(ASI)**
    
    `return`과 반환값 사이에 줄바꿈이 있으면 의도치 않게 세미콜론이 자동으로 삽입되어, 반환값이 무시될 수 있습니다.
    
    ```jsx
    function multiply(x, y) {
      return
      x * y; // 이 부분은 실행되지 않음!
    }
    
    console.log(multiply(3, 5)); // undefined 출력
    
    ```
    
- **함수 몸체 내부에서만 사용 가능:**
    
    함수 외부에서 `return`문을 사용하면 문법 에러가 발생합니다.
    
    ```html
    <!DOCTYPE html>
    <html>
    <body>
      <script>
        // 문법 에러: 함수 밖에서 return 사용 불가
        // return;
      </script>
    </body>
    </html>
    
    ```
    

---

## 5. 참조에 의한 전달 vs. 값에 의한 전달

자바스크립트에서 함수에 인수를 전달할 때 값의 특성에 따라 아래와 같이 동작합니다.

- **원시 값(primitive)은 값에 의한 전달:**
    
    함수에 전달된 숫자, 문자열, 불리언 등은 복사되어 전달되므로 함수 내부에서 재할당해도 외부 값에는 영향을 주지 않습니다.
    
- **객체는 참조에 의한 전달:**
    
    객체나 배열과 같은 참조 타입의 경우, 참조(주소)가 복사되어 전달됩니다.
    
    따라서 함수 내부에서 객체의 속성을 변경하면 외부 원본이 변경됩니다.
    
- **예제:**
    
    ```jsx
    function changeVal(primitive, obj) {
      primitive += 100;   // 원시값은 복사되어 전달되므로 외부 num에는 영향을 주지 않음
      obj.name = 'Kim';   // 객체의 프로퍼티 변경은 외부에도 반영됨
    }
    
    var num = 100;
    var person = { name: 'Lee' };
    
    console.log(num);    // 100
    console.log(person); // { name: "Lee" }
    
    changeVal(num, person);
    
    console.log(num);    // 여전히 100
    console.log(person); // { name: "Kim" } → 원본 객체가 변경됨
    
    ```
    
- **문제점 & 해결법:**
    
    외부 상태를 변경하는 부수효과(side effect)는 프로그램의 예측 가능성을 떨어뜨릴 수 있습니다.
    
    이를 해결하기 위해 **불변객체(immutable object)** 개념이나 **순수 함수** (외부 상태에 의존하지 않고 부작용을 일으키지 않는 함수)를 사용하는 방법이 있습니다.
    

---

## 추가: 함수 설계 시 고려사항

- **단일 책임 원칙:**
    
    이상적인 함수는 한 가지 일만 하도록 설계합니다. 인수가 너무 많아지면 함수의 역할이 분산되거나 호출 시 실수가 발생하기 쉽습니다.
    
- **객체를 통한 인수 전달:**
    
    인수가 많을 경우 순서를 맞출 필요 없이, 객체의 프로퍼티 키를 통해 필요한 값을 전달할 수 있으나 객체의 변경에 따른 부작용(side effect)에도 주의해야 합니다.
    
- **함수형 프로그래밍 패러다임:**
    
    부수효과를 피하고 순수함수를 이용하면, 코드의 예측 가능성과 유지보수성이 향상됩니다.
    

---

## ASCII 다이어그램: 함수 호출과 전달 과정

```
             함수 호출
                │
                ▼
      ┌─────────────────┐
      │  호출 시 전달   │
      │   인수 값들     │
      └─────────────────┘
                │
    ┌────────────────────────┐
    │ 매개변수에 값 복사 (원시) │    원본 변경 X
    │ 또는 참조 복사 (객체)    │    원본 변경 O
    └────────────────────────┘
                │
                ▼
      ┌─────────────────┐
      │  함수 몸체 실행  │
      └─────────────────┘
                │
                ▼
            [return]
                │
                ▼
      ┌─────────────────┐
      │  반환 값을 호출 │
      │      위치에    │
      │      전달      │
      └─────────────────┘

```

---

아래는 **다양한 함수의 형태**를 보기 좋게 정리한 내용입니다. 각각의 형태에 대해 핵심 개념과 예제를 함께 소개합니다.

---

## 1. 즉시 실행 함수 (Immediately Invoked Function Expression, IIFE)

즉시 실행 함수는 함수 정의와 동시에 바로 실행되는 함수입니다.

특징:

- **한 번만 실행**되며 재사용하거나 재호출할 수 없습니다.
- **익명 함수**를 주로 사용하지만 기명 함수도 가능하나, 그룹 연산자 `()`로 감싸면 함수 리터럴로 평가되어 외부에서는 호출할 수 없습니다.
- **반드시 그룹 연산자** `()`로 감싸야 하는데, 그렇지 않으면 문법 오류가 발생합니다.

### 예제 1: 익명 즉시 실행 함수

```jsx
(function () {
  var a = 3;
  var b = 5;
  return a * b;
}());
// 실행 결과: 15 (반환값을 변수에 담거나 바로 사용하는 식)

```

### 예제 2: 기명 즉시 실행 함수

```jsx
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
}());
// foo(); // ReferenceError 발생: foo는 외부에서 접근할 수 없음

```

### 예제 3: 인수를 전달하는 즉시 실행 함수

```jsx
var res = (function (a, b) {
  return a * b;
}(3, 5));

console.log(res); // 15

```

> 참고:
> 
> 
> 만약 함수 선언문 뒤에 바로 `()`를 사용하면 자바스크립트 엔진이 이를 문(statement)으로 해석하여 구문 에러가 발생합니다. 따라서 반드시 함수 리터럴을 평가하도록 그룹 연산자 `()`를 사용합니다.
> 

---

## 2. 재귀 함수 (Recursive Function)

재귀 함수는 **자기 자신을 호출**하는 함수입니다.

주로 반복되는 처리를 구현할 때 사용하며,

**반복문 대신** 재귀 호출을 통해 문제를 해결할 수 있습니다.

### 예제 1: 재귀를 사용한 카운트다운 함수

```jsx
function countdown(n) {
  if (n < 0) return; // 탈출 조건 (base case)
  console.log(n);
  countdown(n - 1); // 재귀 호출
}

countdown(10);
// 출력: 10 9 8 ... 0

```

### 예제 2: 팩토리얼 함수 (n!)

```jsx
// 팩토리얼: n! = n * (n - 1) * ... * 1, 0!과 1!은 1로 정의
function factorial(n) {
  if (n <= 1) return 1; // 탈출 조건: n이 1 이하일 때
  return n * factorial(n - 1); // 재귀 호출
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

```

### 예제 3: 함수 표현식을 이용한 재귀 함수

```jsx
var factorial = function foo(n) {
  if (n <= 1) return 1;
  // 내부에서는 함수 이름 foo나 외부 식별자 factorial 둘 다 사용 가능
  return n * foo(n - 1);
};

console.log(factorial(5)); // 120

```

> 주의:
> 
> 
> 재귀 함수는 **반드시 탈출 조건(base case)을 정의**해야 합니다. 그렇지 않으면 무한 재귀가 발생하여 스택 오버플로 오류를 유발합니다.
> 

---

## 3. 중첩 함수 (Nested Function)

중첩 함수는 **함수 내부에 정의된 함수**입니다.

- *외부 함수(outer function)**의 변수나 매개변수를 참조할 수 있어 헬퍼(helper) 함수로 활용됩니다.
- **외부 함수 내부에서만 호출**할 수 있습니다.

### 예제: 중첩 함수 사용

```jsx
function outer() {
  var x = 1;

  // 중첩 함수 (inner function)
  function inner() {
    var y = 2;
    // outer 함수의 변수 x에 접근 가능
    console.log(x + y); // 3 출력
  }

  inner();
}

outer();

```

> ES6 주의사항:
> 
> 
> ES6부터는 중첩 함수를 if, for 같은 블록 내에서도 정의할 수 있지만, 호이스팅 문제로 인한 혼란이 발생할 수 있으므로 사용 시 유의해야 합니다.
> 

---

## 4. 콜백 함수와 고차 함수 (Callback & Higher-Order Functions)

### 콜백 함수 (Callback Function)

콜백 함수는 **다른 함수의 인수로 전달되어 호출되는 함수**입니다.

이런 방식은 **동일한 반복 로직은 그대로 두고** 반복하면서 수행하는 작업만 달리할 때 효과적입니다.

### 예제 1: 단순 반복함수

```jsx
// 정해진 횟수만큼 동작하는 함수 (콜백 미적용)
function repeat(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

repeat(5);
// 출력: 0 1 2 3 4

```

### 예제 2: 콜백 함수를 활용한 고차 함수

```jsx
// 고차 함수: 외부에서 전달받은 f 함수(콜백)를 n번 호출
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); // 전달받은 콜백 함수 호출 시 i 전달
  }
}

// 1) 모든 인덱스를 출력하는 콜백 함수
var logAll = function (i) {
  console.log(i);
};
repeat(5, logAll); // 출력: 0 1 2 3 4

// 2) 홀수인 경우에만 출력하는 콜백 함수
var logOdds = function (i) {
  if (i % 2) console.log(i);
};
repeat(5, logOdds); // 출력: 1 3

// 3) 익명 함수 리터럴을 바로 전달하는 경우
repeat(5, function (i) {
  if (i % 2) console.log(i);
});
// 출력 역시: 1 3

```

> 고차 함수 (Higher-Order Function):
> 
> 
> 콜백 함수를 인수로 받거나 함수를 반환하는 함수 또한 고차 함수라고 하며,
> 
> 이를 통해 다른 함수의 내부 로직에 동적으로 행동을 주입할 수 있습니다.
> 

> 효율적인 콜백 처리:
> 
> 
> 매번 콜백 함수를 익명 리터럴로 생성하면 필요할 때마다 새로운 함수 객체가 생성됩니다.
> 
> 재사용 가능하다면 외부에 미리 선언 후 전달하는 것이 성능 측면에서 유리합니다.
> 

---

## 5. 순수 함수와 비순수 함수 (Pure vs. Impure Functions)

### 순수 함수 (Pure Function)

순수 함수는 주어진 인수에 대해 **항상 동일한 출력**을 반환하며,

함수 내부 외부의 상태 변경과 같은 **부수 효과(side effect)가 없습니다.**

### 예제: 순수 함수

```jsx
// 단순히 인수에 1을 더하여 반환 → 동일 인수는 언제나 동일한 결과
function increase(n) {
  return n + 1;
}

var count = 0;
count = increase(count); // count는 1
count = increase(count); // count는 2
console.log(count); // 2

```

### 비순수 함수 (Impure Function)

비순수 함수는 **외부 상태에 의존하거나** 외부 상태를 변경합니다.

이로 인해 동일한 인수라도 매 호출마다 결과가 달라질 수 있고,

부수 효과로 인해 디버깅 및 상태 추적이 어려워집니다.

### 예제: 비순수 함수

```jsx
var count = 0; // 외부 상태

function impureIncrease() {
  return ++count; // 외부의 count 값을 직접 변경
}

impureIncrease();
console.log(count); // 1

impureIncrease();
console.log(count); // 2

```

> 함수형 프로그래밍 패러다임:
> 
> 
> 순수 함수를 기반으로 부수 효과를 최소화하고,
> 
> 불변성을 유지하는 프로그래밍을 통해 코드의 예측 가능성과 유지보수성을 높입니다.
> 

---

## 추가: 함수 형태별 특징 요약

| 구분 | 특징 | 예제 |
| --- | --- | --- |
| 즉시 실행 함수 (IIFE) | - 함수 정의와 동시에 바로 실행<br>- 한 번만 실행됨<br>- 그룹 연산자 `()`로 감싸야 함 | `(function(){ /* ... */ }());` |
| 재귀 함수 | - 자기 자신을 호출<br>- 반복문 대신 재귀로 문제 해결<br>- 반드시 탈출 조건 필요 | `function factorial(n) { if(n<=1)return 1; return n*factorial(n-1); }` |
| 중첩 함수 | - 함수 내부에 정의된 함수<br>- 외부 함수의 변수를 참조 가능<br>- 외부에서는 호출 불가 | `function outer() { function inner() { /* ... */ } inner(); }` |
| 콜백 함수 | - 다른 함수의 인수로 전달되어 특정 시점에 호출<br>- 고차 함수와 함께 유연한 로직 구성이 가능 | `repeat(5, function(i){ /* ... */ });` |
| 순수/비순수 함수 | - 순수 함수: 동일 인수 → 동일 결과, 부수 효과 없음<br>- 비순수 함수: 외부 상태 의존/변경 | `function increase(n){ return n+1; } // 순수 함수`<br>`function impure(){ ++count; } // 비순수 함수` |

---

이처럼 자바스크립트는 다양한 함수 형태를 지원하여 서로 다른 문제 상황에 맞게 함수를 작성할 수 있도록 도와줍니다.

함수의 형태에 따라 **실행 시점**, **범위(scope)**, **부수 효과의 관리** 등이 달라지므로 상황에 맞게 적절히 선택하는 것이 중요합니다.

**더 깊이 들어간 내용:**

- ES6부터는 화살표 함수(arrow function)를 비롯한 다양한 함수 표현식 기법을 지원하여 코드의 간결함과 문맥상의 `this` 바인딩 문제를 해결합니다.
- 고차 함수와 콜백 패턴을 활용하면 비동기 처리, 이벤트 처리 등에서 매우 강력한 패턴을 만들 수 있습니다.