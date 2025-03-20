# 함수 part 2

Date: 2025년 3월 13일
페이지: p.168~p.188
완료: Yes
1일후 복습: Yes
7일후(주말) 복습: Yes
1달후 복습: No

# JavaScript 함수 호출과 다양한 형태 요약본

## 1. 함수 호출의 기본

### 1.1 함수 호출 개념

함수 호출은 정의된 함수의 코드 블록을 실행하는 과정입니다. 함수 이름 뒤에 괄호()를 사용하여 호출하며, 필요한 인수를 전달할 수 있습니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 기본 호출 문법 | 함수명과 괄호를 사용해 함수 호출 | 일반적인 함수 실행 | `add(2, 3);` |
| 실행 흐름 | 호출 시점에 현재 실행 흐름을 중단하고 함수 내부로 이동 | 순차적 실행이 필요한 로직 | `console.log("시작"); add(2, 3); console.log("끝");` |
| 반환 값 사용 | 함수의 실행 결과를 변수에 할당하거나 표현식에 사용 | 계산 결과 활용 시 | `const result = add(2, 3);` |

### 1.2 매개변수와 인수

함수 호출 시 외부에서 내부로 값을 전달하는 메커니즘으로, 매개변수(parameter)는 함수 정의에서, 인수(argument)는 함수 호출에서 사용됩니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 매개변수 선언 | 함수 정의 시 괄호 내에 선언하는 변수 | 함수 내부에서 사용할 값 정의 | `function add(x, y) { ... }` |
| 인수 전달 | 함수 호출 시 괄호 내에 전달하는 값 | 함수 실행에 필요한 외부 값 제공 | `add(2, 3);` |
| 인수 부족 | 매개변수보다 인수가 적을 경우 나머지는 undefined | 선택적 매개변수 처리 | `add(2); // y는 undefined` |
| 인수 초과 | 매개변수보다 인수가 많을 경우 무시됨(arguments 객체에는 저장) | 가변 인수 함수 구현 | `add(2, 3, 4); // 4는 매개변수로 직접 접근 불가` |
| arguments 객체 | 함수 내부에서 사용할 수 있는 모든 인수를 담은 유사 배열 객체 | 가변 인자 함수 | `function sum() { return Array.from(arguments).reduce((a, b) => a + b, 0); }` |

```jsx
// 매개변수와 인수 예시
function display(name, age) {
  console.log(`이름: ${name}, 나이: ${age}`);
}

display('홍길동', 25);  // 이름: 홍길동, 나이: 25
display('김철수');     // 이름: 김철수, 나이: undefined

```

### 1.3 인수 확인과 기본값 할당

JavaScript는 함수 호출 시 인수 타입이나 개수를 검사하지 않으므로, 개발자가 명시적으로 처리해야 합니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 타입 검사 | 인수의 타입을 확인하여 유효성 검증 | 숫자 연산 함수 등에서 타입 보장 | `if (typeof x !== 'number') throw new TypeError();` |
| ES5 기본값 할당 | 논리 연산자를 활용한 기본값 설정 | 옵션 매개변수 처리 | `x = x |
| ES6 기본 매개변수 | 매개변수 선언 시 기본값 직접 지정 | 현대적 방식의 기본값 처리 | `function add(a = 0, b = 0) { ... }` |
| 객체 매개변수 | 여러 인수를 하나의 객체로 묶어 전달 | 매개변수가 많을 때 가독성 향상 | `function createUser({ name, age, email }) { ... }` |

```jsx
// 인수 확인과 기본값 할당
function createProfile(name, options = {}) {
  const age = options.age || 30;
  const city = options.city || 'Seoul';

  return `${name}님은 ${age}세이고 ${city}에 거주합니다.`;
}

console.log(createProfile('김철수', { age: 25 }));
// 김철수님은 25세이고 Seoul에 거주합니다.

```

### 1.4 반환문 (Return Statement)

함수에서 결과값을 외부로 전달하기 위해 `return` 키워드를 사용합니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 값 반환 | return 키워드 뒤의 표현식 값을 함수 외부로 전달 | 계산 결과, 처리 결과 반환 | `return x + y;` |
| 함수 종료 | return문 실행 시 즉시 함수 실행 종료 | 조건부 반환, 조기 종료 | `if (x < 0) return 0;` |
| 반환값 없음 | return 뒤에 표현식이 없거나 생략 시 undefined 반환 | void 함수, 프로시저 | `return;` 또는 return문 생략 |
| 줄바꿈 주의 | return과 반환값 사이 줄바꿈 시 자동 세미콜론 삽입으로 오류 발생 | 코드 포맷팅 시 | `return (x + y);` 또는 같은 줄에 작성 |

```jsx
// 반환문의 다양한 사용
function processNumber(num) {
  // 조기 반환
  if (num < 0) return 0;

  // 값 반환
  return num * 2;

  // 이 코드는 실행되지 않음
  console.log("절대 실행되지 않는 코드");
}

// 잘못된 반환문 예시
function wrongReturn(x, y) {
  return  // 자동 세미콜론 삽입으로 undefined 반환
    x + y;  // 이 코드는 실행되지 않음
}

```

### 1.5 참조에 의한 전달 vs. 값에 의한 전달

JavaScript에서 함수에 인수를 전달할 때, 데이터 타입에 따라 전달 방식이 달라집니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 값에 의한 전달 | 원시값(문자열, 숫자 등)은 값 자체가 복사됨 | 함수 내에서 외부 변수 영향 없이 값 조작 | `function add(num) { num += 10; }` |
| 참조에 의한 전달 | 객체는 참조(메모리 주소)가 복사됨 | 함수 내에서 객체 속성 변경 | `function changeName(obj) { obj.name = 'Kim'; }` |
| 부수 효과(Side Effect) | 함수가 외부 상태를 변경하는 현상 | 원본 객체 수정 필요 시 | `function addItem(arr, item) { arr.push(item); }` |
| 불변성 유지 | 원본 객체 변경 없이 새 객체 반환 | 예측 가능한 함수형 프로그래밍 | `function addItem(arr, item) { return [...arr, item]; }` |

```jsx
// 값 전달과 참조 전달의 차이
function modifyValues(num, obj) {
  num = 200;  // 원본에 영향 없음
  obj.value = 200;  // 원본 변경됨
}

let number = 100;
let object = { value: 100 };

modifyValues(number, object);
console.log(number);  // 100 (변경 안됨)
console.log(object);  // { value: 200 } (변경됨)

```

## 2. 다양한 함수 형태

### 2.1 즉시 실행 함수 (IIFE)

즉시 실행 함수는 정의되자마자 바로 실행되는 함수 표현식으로, 전역 스코프 오염을 방지하는데 유용합니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 기본 문법 | 그룹 연산자로 함수를 감싸고 마지막에 호출 괄호 추가 | 모듈화, 변수 스코프 제한 | `(function() { ... })();` |
| 익명/기명 함수 | 이름이 있거나 없는 함수를 즉시 실행 가능 | 디버깅 용도로 이름 추가 | `(function init() { ... })();` |
| 인수 전달 | 함수 호출 괄호에 인수 전달 가능 | 외부 값을 안전하게 사용 | `(function(global) { ... })(window);` |
| 반환값 | 즉시 실행 함수의 결과값을 변수에 할당 가능 | 초기화된 값 반환 | `const result = (function() { return 42; })();` |

```jsx
// 즉시 실행 함수 예시
const counter = (function() {
  let count = 0;  // 외부에서 접근 불가능한 비공개 변수

  return {
    increase() { return ++count; },
    decrease() { return --count; },
    getValue() { return count; }
  };
})();

console.log(counter.increase());  // 1
console.log(counter.increase());  // 2
console.log(counter.getValue());  // 2

```

### 2.2 재귀 함수 (Recursive Function)

함수가 자기 자신을 호출하는 함수로, 특정 문제를 분할 정복 방식으로 해결할 때 사용합니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 자기 호출 | 함수 내부에서 자신을 다시 호출 | 트리구조 탐색, 수학적 계산 | `function fn() { fn(); }` |
| 탈출 조건 | 재귀 호출을 종료하는 기저 조건(base case) | 무한 호출 방지 | `if (n <= 1) return 1;` |
| 함수 표현식 | 기명 함수 표현식을 통한 재귀 | 변수명 변경에도 안전 | `const factorial = function fact(n) { ... };` |
| 스택 제한 | 브라우저에 따라 호출 스택 제한 존재 | 매우 큰 재귀에 주의 | 꼬리 재귀 최적화(ES6) 고려 |

```jsx
// 재귀 함수 예시: 피보나치 수열
function fibonacci(n) {
  // 탈출 조건
  if (n <= 1) return n;

  // 재귀 호출
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));  // 8 (0, 1, 1, 2, 3, 5, 8)

```

### 2.3 중첩 함수 (Nested Function)

함수 내부에 정의된 함수로, 복잡한 작업을 더 작은 함수로 분리하여 가독성과 재사용성을 높입니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 스코프 | 내부 함수는 외부 함수의 변수에 접근 가능 | 헬퍼 함수, 로직 분리 | `function outer() { let x = 1; function inner() { console.log(x); } }` |
| 은닉화 | 내부 함수는 외부에서 직접 호출 불가 | 캡슐화, 정보 은닉 | `function calculator() { function add() {...} return { useAdd() { add(); } }; }` |
| 클로저 생성 | 외부 함수가 반환된 후에도 내부 함수가 외부 변수 참조 | 상태 유지, 모듈 패턴 | `function createCounter() { let count = 0; return function() { return ++count; }; }` |

```jsx
// 중첩 함수 예시
function formatText(text) {
  // 중첩 함수들
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function removeExtraSpaces(str) {
    return str.replace(/\\s+/g, ' ').trim();
  }

  // 중첩 함수 활용
  text = removeExtraSpaces(text);
  const sentences = text.split('.');
  return sentences.map(capitalize).join('. ').replace(/\\. $/, '.');
}

console.log(formatText("hello   world.   this is a   test."));
// "Hello world. This is a test."

```

### 2.4 콜백 함수와 고차 함수

콜백 함수는 다른 함수에 인수로 전달되는 함수이며, 고차 함수는 함수를 인수로 받거나 함수를 반환하는 함수입니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 콜백 함수 전달 | 함수를 다른 함수의 인자로 전달 | 이벤트 핸들링, 비동기 처리 | `button.addEventListener('click', handleClick);` |
| 고차 함수 | 함수를 받거나 반환하는 함수 | 함수형 프로그래밍, 추상화 | `array.map(item => item * 2);` |
| 익명 콜백 | 인라인으로 정의되는 익명 함수 | 한 번만 사용하는 간단한 로직 | `setTimeout(function() { alert('시간 종료!'); }, 1000);` |
| 콜백 지옥 | 중첩된 콜백으로 인한 가독성 저하 | 복잡한 비동기 로직 (Promise로 해결) | 다중 중첩 콜백 구조 |

```jsx
// 콜백 함수와 고차 함수 예시
// 고차 함수: 콜백을 실행하는 함수
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

// 콜백 함수 1: 모든 인덱스 출력
repeat(3, function(i) {
  console.log(`인덱스: ${i}`);
});
// 인덱스: 0
// 인덱스: 1
// 인덱스: 2

// 콜백 함수 2: 짝수 인덱스만 출력
repeat(5, function(i) {
  if (i % 2 === 0) console.log(`짝수 인덱스: ${i}`);
});
// 짝수 인덱스: 0
// 짝수 인덱스: 2
// 짝수 인덱스: 4

```

### 2.5 순수 함수와 비순수 함수

순수 함수는 부수 효과가 없고 동일 입력에 항상 같은 출력을 반환하는 함수이며, 비순수 함수는 외부 상태에 의존하거나 외부 상태를 변경하는 함수입니다.

| 속성 | 설명 | 사용 상황 | 예시 코드 |
| --- | --- | --- | --- |
| 순수 함수 | 동일 입력에 항상 같은 출력, 부수 효과 없음 | 함수형 프로그래밍, 테스트 용이성 | `function add(a, b) { return a + b; }` |
| 비순수 함수 | 외부 상태 의존 또는 변경 | 사용자 입력 처리, DOM 조작 | `function addToTotal(x) { total += x; }` |
| 참조 투명성 | 함수 호출을 결과값으로 대체해도 동일한 결과 | 최적화, 병렬 처리 | `const result = add(2, 3);` ≡ `const result = 5;` |
| 불변성 | 데이터를 변경하지 않고 새로운 데이터 생성 | 예측 가능한 상태 관리 | `function addItem(arr, item) { return [...arr, item]; }` |

```jsx
// 순수 함수와 비순수 함수 비교
// 순수 함수
function add(x, y) {
  return x + y;
}

// 비순수 함수
let total = 0;
function addToTotal(x) {
  total += x;  // 외부 변수 변경 (부수 효과)
  return total;
}

// 순수 함수 사용
console.log(add(2, 3));  // 5
console.log(add(2, 3));  // 항상 5

// 비순수 함수 사용
console.log(addToTotal(2));  // 2
console.log(addToTotal(3));  // 5 (호출할 때마다 결과가 달라짐)

```

# 최종 요약본

## 1. 함수 호출의 기본

- **함수 호출 개념**: 함수명()으로 호출, 인수를 전달하고 실행 흐름이 함수 내부로 이동함
- **매개변수와 인수**: 매개변수는 함수 정의 시 변수, 인수는 호출 시 전달 값. 인수 부족 시 undefined, 초과 시 arguments에 저장
- **인수 확인과 기본값**: 타입 검사는 수동으로 해야 하며, ES6에서는 `함수(a=0)`와 같이 기본값 지정 가능
- **반환문**: return으로 값 반환 및 함수 종료, 생략 시 undefined 반환, 줄바꿈 주의
- **전달 방식**: 원시값은 값 복사(변경 안됨), 객체는 참조 복사(변경 가능)로 전달됨

## 2. 다양한 함수 형태

- **즉시 실행 함수(IIFE)**: `(function(){})()` 형태로 정의와 동시에 실행, 변수 스코프 제한에 유용
- **재귀 함수**: 자기 자신을 호출하는 함수, 반드시 탈출 조건 필요, 트리구조 탐색이나 수학적 연산에 활용
- **중첩 함수**: 함수 내부에 정의된 함수, 외부 함수의 변수 접근 가능, 로직 분리와 캡슐화에 유용
- **콜백과 고차 함수**: 콜백은 함수에 전달되는 함수, 고차 함수는 함수를 인수로 받거나 반환하는 함수
- **순수/비순수 함수**: 순수 함수는 동일 입력에 동일 출력, 부수 효과 없음. 비순수 함수는 외부 상태 의존 또는 변경

# JavaScript 함수 호출과 다양한 형태 - 연습문제

## 연습문제 1: 매개변수와 인수의 다양한 처리

**문제**:
다음 요구사항에 맞게 함수 `processArguments`를 작성하세요:

1. 함수는 여러 개의 인수를 받을 수 있어야 합니다.
2. 함수는 다음을 콘솔에 출력해야 합니다:
    - 받은 인수의 총 개수
    - 첫 번째, 두 번째, 세 번째 인수의 값 (없는 경우 "제공되지 않음" 출력)
    - 모든 인수의 합 (숫자인 인수만 계산)
3. 함수를 다양한 인수로 호출하여 테스트하세요.

**정답**:

```jsx
function processArguments() {
  // 1. 인수의 총 개수
  console.log(`인수의 총 개수: ${arguments.length}`);

  // 2. 첫 번째, 두 번째, 세 번째 인수 출력
  console.log(`첫 번째 인수: ${arguments[0] !== undefined ? arguments[0] : "제공되지 않음"}`);
  console.log(`두 번째 인수: ${arguments[1] !== undefined ? arguments[1] : "제공되지 않음"}`);
  console.log(`세 번째 인수: ${arguments[2] !== undefined ? arguments[2] : "제공되지 않음"}`);

  // 3. 숫자 인수의 합 계산
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
    }
  }
  console.log(`숫자 인수의 합: ${sum}`);
}

// 함수 호출 테스트
console.log("--- 테스트 1 ---");
processArguments(10, 20, 30, 40);

console.log("--- 테스트 2 ---");
processArguments("안녕", 5);

console.log("--- 테스트 3 ---");
processArguments();

console.log("--- 테스트 4 ---");
processArguments(10, "세계", true, 20);

```

**해설**:

- 이 함수는 `arguments` 객체를 사용하여 함수에 전달된 모든 인수에 접근합니다.
- `arguments` 객체는 함수에 전달된 인수들을 담고 있는 유사 배열 객체입니다.
- `arguments.length`를 통해 총 인수 개수를 확인할 수 있습니다.
- 특정 인수가 제공되었는지 확인하기 위해 `arguments[index] !== undefined` 조건을 사용합니다.
- 숫자 인수의 합을 계산할 때 `typeof` 연산자를 사용하여 각 인수의 타입을 확인합니다.
- 함수는 다양한 인수 조합으로 호출하여 동작을 테스트했습니다.

이 예제를 통해 JavaScript 함수가 어떻게 가변 개수의 인수를 처리하는지, 그리고 `arguments` 객체의 활용 방법을 배울 수 있습니다.

## 연습문제 2: 기본 매개변수와 반환문 활용

**문제**:
다음 요구사항에 맞게 할인 가격을 계산하는 함수 `calculateDiscount`를 작성하세요:

1. 함수는 `price`(가격)와 `discountRate`(할인율) 두 매개변수를 받습니다.
2. `discountRate`의 기본값은 0.1(10%)로 설정하세요.
3. 가격이 음수이면 오류 메시지를 반환하고 함수를 즉시 종료하세요.
4. 할인율이 0 미만이거나 1 초과인 경우, 0.1로 재설정하세요.
5. 최종 할인 가격을 계산하여 반환하세요(소수점 이하 반올림).
6. 다양한 인수로 함수를 호출하여 결과를 테스트하세요.

**정답**:

```jsx
function calculateDiscount(price, discountRate = 0.1) {
  // 가격이 음수인 경우 검사
  if (price < 0) {
    return "오류: 가격은 음수가 될 수 없습니다.";
  }

  // 할인율 유효성 검사 및 재설정
  if (discountRate < 0 || discountRate > 1) {
    console.log("경고: 잘못된 할인율입니다. 기본값 10%로 설정합니다.");
    discountRate = 0.1;
  }

  // 할인 금액 계산
  const discountAmount = price * discountRate;

  // 최종 가격 계산 및 반환 (소수점 이하 반올림)
  const finalPrice = Math.round(price - discountAmount);

  return finalPrice;
}

// 함수 호출 테스트
console.log("정상 가격, 기본 할인율: " + calculateDiscount(1000)); // 기본 할인율 10%
console.log("정상 가격, 지정 할인율: " + calculateDiscount(1000, 0.2)); // 20% 할인
console.log("정상 가격, 잘못된 할인율: " + calculateDiscount(1000, 1.5)); // 잘못된 할인율
console.log("음수 가격: " + calculateDiscount(-500)); // 음수 가격

```

**해설**:

- 이 함수는 ES6의 기본 매개변수 문법을 사용하여 `discountRate`의 기본값을 0.1로 설정합니다.
- 함수의 첫 부분에서 가격이 음수인 경우를 검사하고, 조건이 참이면 오류 메시지를 반환하고 함수를 즉시 종료합니다(`return` 문 활용).
- 할인율이 유효하지 않은 경우(0 미만 또는 1 초과), 경고 메시지를 출력하고 할인율을 0.1로 재설정합니다.
- 할인 금액을 계산하고, 최종 가격을 계산한 후 소수점 이하를 반올림합니다.
- 다양한 입력 조합으로 함수를 테스트하여 모든 조건이 제대로 처리되는지 확인합니다.

이 예제를 통해 기본 매개변수 설정, 조건에 따른 조기 반환, 그리고 매개변수 유효성 검사의 중요성을 배울 수 있습니다.

## 연습문제 3: 값 전달과 참조 전달 이해하기

**문제**:
다음 요구사항에 맞게 `modifyData` 함수를 작성하세요:

1. 함수는 다음 매개변수를 받습니다: `num`(숫자), `arr`(배열), `obj`(객체)
2. 함수 내에서 다음 작업을 수행합니다:
    - `num`에 10을 더합니다.
    - `arr`에 새 요소를 추가합니다.
    - `obj`에 새 프로퍼티를 추가합니다.
3. 함수 호출 전후의 각 값 변화를 출력하는 코드를 작성하세요.
4. 각 데이터 타입이 함수에 전달될 때의 동작 차이를 설명하는 주석을 추가하세요.

**정답**:

```jsx
function modifyData(num, arr, obj) {
  // 값 복사: 원본 num에 영향 없음
  num = num + 10;
  console.log("함수 내부 num:", num);

  // 참조 복사: 원본 배열에 영향 있음
  arr.push("새 요소");
  console.log("함수 내부 arr:", arr);

  // 참조 복사: 원본 객체에 영향 있음
  obj.newProperty = "새 속성";
  console.log("함수 내부 obj:", obj);

  // 새 객체 할당: 원본에 영향 없음
  obj = {
    completelyNew: true
  };
  console.log("새 객체 할당 후 함수 내부 obj:", obj);
}

// 테스트 데이터
let number = 5;
let array = [1, 2, 3];
let object = { name: "원본 객체" };

// 함수 호출 전 상태
console.log("===== 함수 호출 전 =====");
console.log("number:", number);
console.log("array:", array);
console.log("object:", object);

// 함수 호출
console.log("\\n===== 함수 내부 =====");
modifyData(number, array, object);

// 함수 호출 후 상태
console.log("\\n===== 함수 호출 후 =====");
console.log("number:", number);  // 원시값은 변경되지 않음
console.log("array:", array);    // 배열은 변경됨 (참조에 의한 전달)
console.log("object:", object);  // 객체는 변경됨 (참조에 의한 전달)

```

**해설**:

- 이 예제는 JavaScript에서 함수에 인수를 전달할 때의 값 전달(pass-by-value)과 참조 전달(pass-by-reference)의 차이를 보여줍니다.
- **원시값(primitive type)** - 숫자, 문자열, 불리언 등:
    - 값 자체가 복사되어 전달됩니다.
    - 함수 내에서 매개변수 값을 변경해도 원본 변수에 영향을 주지 않습니다.
    - `number` 변수는 함수 호출 후에도 초기값 5를 유지합니다.
- **참조값(reference type)** - 객체, 배열, 함수 등:
    - 참조(메모리 주소)가 복사되어 전달됩니다.
    - 함수 내에서 참조값의 프로퍼티나 요소를 수정하면 원본에도 영향을 미칩니다.
    - `array`에 새 요소가 추가되고, `object`에 새 프로퍼티가 추가된 것을 확인할 수 있습니다.
- **중요한 점**:
    - 함수 내에서 매개변수에 새로운 객체를 할당하면, 원본 변수와의 연결이 끊어집니다.
    - 위 예제에서 함수 내부에서 `obj`에 새 객체를 할당해도 원본 `object`는 영향을 받지 않습니다.

이 개념을 이해하면 함수를 사용할 때 의도치 않은 부수 효과(side effect)를 방지할 수 있습니다.

## 연습문제 4: 즉시 실행 함수(IIFE) 구현하기

**문제**:
즉시 실행 함수를 사용하여 간단한 카운터 모듈을 구현하세요:

1. 즉시 실행 함수를 사용하여 전역 스코프를 오염시키지 않는 모듈을 만듭니다.
2. 모듈은 다음 메서드를 가진 객체를 반환해야 합니다:
    - `increment()`: 카운터를 1 증가시키고 현재 값 반환
    - `decrement()`: 카운터를 1 감소시키고 현재 값 반환
    - `getValue()`: 현재 카운터 값 반환
    - `reset()`: 카운터를 0으로 재설정하고 0 반환
3. 카운터 값은 모듈 외부에서 직접 접근할 수 없어야 합니다.
4. 모듈의 메서드를 다양하게 호출하여 작동을 테스트하세요.

**정답**:

```jsx
// 즉시 실행 함수를 사용한 카운터 모듈
const counter = (function() {
  // 프라이빗 변수
  let count = 0;

  // 공개 인터페이스를 가진 객체 반환
  return {
    increment: function() {
      return ++count;
    },

    decrement: function() {
      return --count;
    },

    getValue: function() {
      return count;
    },

    reset: function() {
      count = 0;
      return count;
    }
  };
})(); // 함수 즉시 실행

// 카운터 모듈 테스트
console.log("초기값:", counter.getValue()); // 0

console.log("증가:", counter.increment()); // 1
console.log("증가:", counter.increment()); // 2
console.log("증가:", counter.increment()); // 3

console.log("현재값:", counter.getValue()); // 3

console.log("감소:", counter.decrement()); // 2

console.log("리셋:", counter.reset()); // 0

console.log("count 직접 접근:", counter.count); // undefined - 접근 불가

// 다시 증가 테스트
console.log("증가:", counter.increment()); // 1

```

**해설**:

- 이 예제는 즉시 실행 함수 표현식(IIFE)을 사용하여 모듈 패턴을 구현합니다.
- IIFE 문법: `(function() { /* 코드 */ })();` - 함수를 정의하자마자 즉시 실행합니다.
- 이 패턴의 주요 장점:
    1. **캡슐화**: `count` 변수는 함수 스코프 내에 있어 외부에서 직접 접근할 수 없습니다.
    2. **전역 스코프 오염 방지**: 모듈의 내부 변수들이 전역 네임스페이스를 오염시키지 않습니다.
    3. **정보 은닉**: 내부 구현은 숨기고 공개 API만 노출합니다.
- 함수는 객체를 반환하며, 이 객체의 메서드들은 클로저(closure)를 통해 내부 `count` 변수에 접근합니다.
- 클로저는 함수가 선언될 때의 환경을 기억하는 함수로, 이를 통해 `count` 변수가 함수 실행이 끝난 후에도 보존됩니다.
- `counter.count`로 직접 접근을 시도해도 `undefined`가 반환되어, 변수가 성공적으로 캡슐화되었음을 확인할 수 있습니다.

이 패턴은 JavaScript에서 모듈화와 캡슐화를 구현하는 전통적인 방법이며, ES6의 모듈 시스템이 등장하기 전에 널리 사용되었습니다.

## 연습문제 5: 재귀 함수 구현하기

**문제**:
다음 요구사항에 맞게 재귀 함수를 작성하세요:

1. 정수 n을 매개변수로 받아 1부터 n까지 숫자의 합을 계산하는 `sumToN` 함수를 작성하세요.
2. 이 함수는 반복문(for, while 등)을 사용하지 않고, 재귀 호출만으로 구현해야 합니다.
3. 재귀 함수의 종료 조건(기저 조건)을 명확히 설정하세요.
4. 음수 입력에 대한 처리를 추가하세요.
5. 다양한 입력값으로 함수를 테스트하세요.

**정답**:

```jsx
function sumToN(n) {
  // 입력값이 정수가 아닌 경우 처리
  if (!Number.isInteger(n)) {
    return "오류: 정수를 입력하세요.";
  }

  // 음수 처리
  if (n < 0) {
    return "오류: 양수를 입력하세요.";
  }

  // 기저 조건(종료 조건)
  if (n <= 1) {
    return n;
  }

  // 재귀 호출
  return n + sumToN(n - 1);
}

// 함수 테스트
console.log("sumToN(1):", sumToN(1));    // 1
console.log("sumToN(5):", sumToN(5));    // 15 (1+2+3+4+5)
console.log("sumToN(10):", sumToN(10));  // 55 (1+2+...+10)
console.log("sumToN(0):", sumToN(0));    // 0
console.log("sumToN(-5):", sumToN(-5));  // 오류 메시지
console.log("sumToN(3.5):", sumToN(3.5)); // 오류 메시지

// 재귀 과정 시각화
console.log("\\n재귀 과정 시각화:");
function sumToNWithVisualization(n, depth = 0) {
  const indent = " ".repeat(depth * 2);
  console.log(`${indent}sumToN(${n}) 호출됨`);

  if (n <= 1) {
    console.log(`${indent}기저 조건 도달: sumToN(${n}) = ${n}`);
    return n;
  }

  const result = n + sumToNWithVisualization(n - 1, depth + 1);
  console.log(`${indent}sumToN(${n}) = ${n} + sumToN(${n-1}) = ${result}`);
  return result;
}

sumToNWithVisualization(4);

```

**해설**:

- 이 재귀 함수는 1부터 n까지의 합을 계산하는 전형적인 예입니다.
- 재귀 함수의 핵심 구성 요소:
    1. **기저 조건(Base Case)**: `n <= 1`일 때 재귀를 멈추고 결과를 반환합니다. 이는 재귀 함수에서 가장 중요한 부분으로, 이 조건이 없으면 무한 재귀에 빠질 수 있습니다.
    2. **재귀 호출(Recursive Call)**: `n + sumToN(n - 1)`로, 문제를 더 작은 하위 문제로 분할합니다.
- 함수는 입력값에 대한 유효성 검사를 수행합니다:
    - 정수가 아닌 입력은 오류 메시지를 반환합니다.
    - 음수 입력도 오류 메시지를 반환합니다.
- **재귀 과정 시각화**:
재귀 함수의 동작을 이해하기 위해 `sumToNWithVisualization` 함수를 추가했습니다. 이 함수는 각 재귀 호출의 깊이를 추적하고 호출 스택의 흐름을 콘솔에 출력합니다.
    
    예를 들어, `sumToNWithVisualization(4)`를 호출하면 다음과 같이 동작합니다:
    
    ```
    sumToN(4) 호출됨
      sumToN(3) 호출됨
        sumToN(2) 호출됨
          sumToN(1) 호출됨
          기저 조건 도달: sumToN(1) = 1
        sumToN(2) = 2 + sumToN(1) = 3
      sumToN(3) = 3 + sumToN(2) = 6
    sumToN(4) = 4 + sumToN(3) = 10
    
    ```
    
- 이 시각화를 통해 재귀 함수가 어떻게 호출 스택을 쌓고 하위 문제를 해결해 나가는지 이해할 수 있습니다.

재귀 함수는 일부 문제(트리 탐색, 분할 정복 알고리즘 등)에서 반복문보다 더 직관적인 해결책을 제공할 수 있지만, 깊은 재귀는 스택 오버플로우의 위험이 있으니 주의해야 합니다.