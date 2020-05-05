# 코스 정보

JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2019]
<br>https://www.youtube.com/watch?v=W6NZfCO5SIk

# Javascript
## 자바스크립트를 body 밑에서 로딩하는 이유

- 컨텐츠를 스크립트보다 먼저 로딩해서 체감되는 대기 시간을 줄이기
- 컨텐츠와 스크립트가 상호작용해야하기 때문에 컨텐츠부터 로딩

## 관심사의 분리 (Separation of Concern)

자바스크립트와 HTML을 분리하는 이유

## Single Responsibility Principle

하나의 모듈 (객체, 함수 등)은 하나의 작은 역할(책임) 만을 지게하는 것

## Garbage Collector

더 이상 사용되지 않는 변수나 상수의 메모리 공간의 할당을 자동으로 해제해준다
- 사용자가 할당이나 해제 시점을 통제할수 없음

## 팁
- 스코프 안에서 선언시에 대입된 후 값이 바뀌지 않는 변수는 상수로 선언하는게 좋다
- 관련이 높은 라인들끼리는 붙여주는게 좋고, 그렇지 않으면 떨어뜨리는게 좋다

# 변수
## 변수 선언
    var | let | const

## 변수명
- 예약된 키워드는 쓸 수 없다
- 의미있는, 설명해주는 이름으로 짓자
- 숫자로 시작하면 안된다
- 공백이나 하이픈(-)을 넣을 수 없다
- Are case-sensitive
- 모던 자바스크립트에서는 다른 변수는 각각 여러 줄에서 선언

## 프리미티브 / 값 타입

1. <code>String</code>
1. <code>Number</code>
1. <code>Boolean</code>
1. <code>undefined</code>
<br>변수가 초기화되지 않은 상태
1. <code>null</code>
<br>값이 정해지지 않았다는 걸 표현

## 변수의 타입을 반환하는 키워드

    typeof [변수명 or 값]

## 레퍼런스 타입

1. <code>Object</code>
<br>실세계의 대상들을 속성으로 표현
2. <code>Array</code>
3. <code>Function</code>

### Object (객체)
#### 객체 리터럴(Object Literal)

    let obj = { key: value, ... };

#### 점 표기법(Dot Notation)

    obj.key = 'This is String Literal';

#### 브라켓 표기법(Bracket Notation)

런타임 중 속성(프로퍼티)을 알아내서 동적으로 접근할 수 있음

    let selection = 'name';
    obj[selection] = 'This is String Literal';

### Array (배열)

- 요소들의 목록을 표현하는데 사용되는 자료 구조
<br>(Data structure that we use to represent a list of items)
- 객체의 일종이다. 따라서 점 표기법으로 원소에 접근할 수 있다
- Square Bracket 으로 배열 리터럴을 선언할 때마다 자동으로 Property(속성)이 같이 선언된다
- 배열의 원소의 타입은 변수와 마찬가지로 동적으로 바꿀 수 있다

#### 배열 리터럴(Array Literal)

    let arr = ['valueOne', 'valueTwo', ...];

#### 배열의 크기를 동적으로 변경

    arr[2] = 'valueThree'; // ['valueOne', 'valueTwo', 'valueThree']
    arr[3] = 'valueFour';  // ['valueOne', 'valueTwo', empty, 'valueFour']

### function (함수)

    function funcName(var1, var2, ...) {}

- 함수에 많은 파라미터가 들어갈수록 사용하기 어렵다
- 파라미터를 적게 유지할수록 좋다

#### 파라미터와 아규먼트의 차이

- 파라미터 : 선언부
- 아규먼트 : 호출부, 실제 값

# 연산자들
## Power Operator

    2 ** 2

## 논리적 연산자

- 논리적 연산자는 operand가 boolean일 필요는 없음

### Strict Equality Operator (Type + Value)

    x === 1
    x !== 1

### Lose Eqality Operator (Value)

    1 == 1      // true
    '1' == 1    // true
    true == 1   // true (true가 1로 변환됨)

### Falsy (false) value

논리적 연산에서 <code>false</code>처럼 다룰 수 있는 값들

1. <code>undefined</code>
1. <code>null</code>
1. <code>0</code>
1. <code>false</code>
1. <code>''</code>
1. <code>NaN</code>

왼쪽 값이 Falsy하면 우측의 값이 대입된다

    let userColor;                          // undefined
    let defaultColor = 'red';
    console.log(userColor || defaultColor); // red

### Short-circuiting

OR 연산에서 첫번째 값이 Truthy라면 두번째 Operand가 무시되는 현상

    // 1이 Truthy 값이기 때문에 2는 무시됨.
    let v = false || 1 || 2;    // (false || 1) || 2
    console.log(v);             // 1

https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c

## Bitwise Operation (비트 연산자)

### 예제
                                    // Read, Write, Execute
    const readPermission = 4;       // 00000100
    const writePermission = 2;      // 00000010
    const executePermission = 1;    // 00000001

    let myPermission = 0;
    myPermission = myPermission | readPermission | writePermission;

    let message = (myPermission & readPermission) ? 'yes' : 'no';
    console.log(message);

# 반복문
## for-in loop

    // 객체, 값이 아닌 키 이름이 나옴
    for (let key in obj) { // 
        console.log(obj[key]); // braket notation을 이용해 프로퍼티 이름으로 값에 접근
    }

    // 배열, 값이 아닌 인덱스 번호가 나옴
    for (let index in arr) {
        console.log(arr[index]);
    }

## for-of loop

배열 안의 원소를 순회

    for (let element of arr) {
        console.log(element);
    }

## nested loop

중첩된 루프를 말함 (2중 for문 등)

# 객체
## 객체를 생성하는 방법들
### Object Literal 방식

    const circle = {
        radius: 1,
        // 값은 객체가 들어갈수도 있고
        location: {
            x: 1,
            y: 1
        },
        isVisible: true,
        // 함수(메서드)가 들어갈수도 있다.
        draw: function() {  
            console.log('draw');
        }
    };

여러 동일한 객체를 만들려면 복사 붙여넣기를 해야 하는 단점.

### Factory Function 방식

객체 리터럴을 반환하는 함수

- 네이밍에 Camel Notation 사용 (oneTwoThree)
- 아규먼트를 값으로 대입하는 경우 키 값을 생략하면 아규먼트 이름과 동일하게 만들어짐
- 메서드는 function() {} 형태로 Function Literal 대입 없이 선언 가능

####  

    // Hard Coding
    function createCircle() {
        return {
            radius: 1,
            location: {
                x: 1,
                y: 1
            },
            isVisible: true,
            draw: function() {  // Function Literal
                console.log('draw');
            },
        };
    }

    // 일반화
    function createCircle(radius, location, isVisible) {
        return {
            radius: radius,
            location: location,
            isVisible: isVisible,
            draw: function() {
                console.log('draw');
            },
        };
    }

    // 간단하게 표현하는 방법
    function createCircle(radius, location, isVisible) {
        return {
            radius,
            location,
            isVisible
            draw() {
                console.log('draw');
            },
        };
    }

    // 선언, 초기화, 사용
    const circle = createCircle(1, { x:1, y:1 }, true);
    console.log(circle);
    circle.draw();
    
### Constructor Function

객체를 생성하는 함수

- 네이밍에 Pascal Notation 사용 (OneTwoThree)

####  

    function Circle(radius, location, inVisible) {
        this.radius = radius;
        this.location = location;
        this.isVisible = isVisible;
        this.draw = function() {
            console.log('draw');
        }

        // return this; 는 생략됨
    }

    let circle = new Circle(1, { 1, 1 }, true);

- <code>new</code> 키워드
<br>빈 객체를 생성함 ( {} ). 사용하지 않으면 함수는 전역 객체를 변경하게 됨
- <code>this</code> 키워드
<br><code>new</code> 키워드로 만들어진 객체를 지정함. 없을 때는 전역 객체를 변경

## const 객체

    // const에 새로운 객체를 대입할 수는 없지만
    const circle = {
        radius: 1
    }

    // 객체의 속성과 값은 동적으로 추가할 수 있다
    circle.color = 'yellow';
    circle.draw = function() {};

    // 지울 수도 있다
    delete circle.color;
    delete circle.draw;

## Constructor Property

객체를 생성할 때 사용된 함수

- obj.constructor 로 볼 수 있다
- 리터럴은 생성자 호출과 같음 (Syntax Sugar)

###  

    new Object(); // {}
    new String(); // '', "", ``
    new Boolean(); // true, false
    new Number(); // 1, 2, 3, ...

## 객체로서의 함수

함수는 객체다

    // Constructor Function
    function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }

    // 다른 표현
    const Circle = new Function('radius', `
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    `);

    // 객체 생성
    const circle = new Circle(1);
    Circle.call({}, 1, 2, 3, 4); // 함수 안의 this가 {}, 나머지는 인자(Argument)
    Circle.apply({}, [1, 2, 3]); // call 메서드와 같지만 인자를 배열로 전달

## 타입
### 값 타입 (Value Types, Primitive Types)

- <code>Number, String, Bolean, Symbol, undefined, null</code>
- 프로퍼티나 메서드 호출시 자동으로 객체로 래핑되고 호출된다

### 레퍼런스 타입 (Reference Types)

- <code>Object, Function, Array</code>
<br>레퍼런스 타입은 대상의 주소나 위치를 저장한다.

####  

    // x와 y는 같은 위치를 가리키므로(reference) y.value 도 20이다.
    let x = { value: 10 };
    let y = x;
    x.value = 20;

### 타입 알아내는 방법

    // primitive는 제대로 표시됨, object, array는 object로 표시됨
    typeof obj

    // 생성자 이름으로 비교 (null, undefined 는 없음)
    obj.constructor.name

    // primitive 체크
    obj === Object(obj)

### Primitive와 Object의 차이점

Primitive는 값을 복사하고, Object는 참조(reference)를 복사한다.
<br>함수의 인자로 값 타입을 전달하면 값이 복사되고, 객체는 참조 정보가 복사된다.

    function increase(number)
        number++;

    function increase(obj)
        obj.number++;

전자는 아무런 영향을 주지 않지만 후자는 객체 안의 값을 실제로 바꾼다.

### 레퍼런스 타입에서의 비교

- <code>===</code>
<br>참조값(주소)를 비교함
<br>값이 같은지를 비교하기 위해서는 모든 프로퍼티에 대해 직접 값을 비교해야 함

## 객체와 반복

객체는 반복 불가능하다 (not iterable)

    for (let key in circle) { ... }     // 가능
    for (let element of circle) { ... } // 불가

    for (let key of Object.keys(circle)) { ... }        // 가능, string key 반환
    for (let entry of Object.entries(circle)) { ... }   // 가능, key-value 배열 반환

    // in 연산자 보너스
    if ('radius' in circle) console.log('yes'); // 이런 활용법도 가능


## Built-in Constructor Function

선언하지 않아도 기본적으로 빌트인되어있는 생성자

    // 함수 정의
    function Object() { ... }

    // 호출할 때
    const x = { value: 1 }; // 객체 리터럴은 Object 함수를 호출하는 다른 방식일 뿐
    const x = new Object(); // 위와 같다

- <code>Object.keys(obj)</code>
<br>키들의 배열인 string[] 을 반환함
<br>Object Constructor Function도 객체이기 때문에 메서드를 가질 수 있다

- <code>Object.entries(obj)</code>
<br>키-값 쌍으로 이루어진 배열들의 배열을 반환함

## 객체 복사
### 옛날 방식

    for (let key in circle)
        another[key] = circle[key];

### 모던 자바스크립트

    const another = Object.assign({}, circle);

### 객체 앞에 프로퍼티 추가하고 싶을 때

    const another = Object.assign({
        color: yellow
    }, circle);

### Spread Operator

객체의 내용을 자동으로 복사해준다

    const another = { ...circle };

# 라이브러리와 Javascript의 객체들
## Math

수학적 계산을 지원해주는 라이브러리.
<br>자세한 내용은 MDN 참고.

    Math.PI
    Math.abs(x)
    Math.random()
    Math.round(x)
    Math.max(1, 2, 3, 4, 5)
    Math.min(1, 2, 3, 4, 5)

## String

두 타입의 문자열이 있다

    // String primitive
    const message = 'This is my first message';

dot notation으로 메서드를 호출하면 String object로 래핑한다

    // String object
    const another = new String('This is...'); // new + Constructor Function

### String Method
    message.length // 입력 수 최소값이나 제한을 둘 때 유용
    message[0]
    message.includes('hi')
    message.startsWith('This') // case-sensitive, return boolean
    message.indexOf('my')
    message.replace('first', 'second') // 새로운 string 반환
    message.toUpperCase()
    message.toLowerCase()
    message.trim() // 시작과 끝의 공백을 제거하고 반환'
    message.trimLeft()
    message.trimRight()
    message.split('str') // 특정 문자열을 기준으로 쪼개서 배열에 담아 반환

### Escape Notation

자바스크립트에서 특정한 의미를 가진 문자열을 <code>String</code> 안에서 사용하고 싶을 때

- <code>\n</code>
- <code>\\'</code>

### 템플릿 리터럴 (Template Literals)

엔터나 스트링 표기법 등 Escape Notation 없이 써줘도 쓴 대로 입력되는 문자열

- <code>``</code> 으로 표현한다.
- <code>${내용}</code> 으로 자바스크립트의 표현식을 사용할 수 있다
 <br>(in template literals, we can add a placeholder using a dollar sign, and curly brace. inside a curly brace, we can add a expression.)

####  

    // Object {}
    // Boolean true, flase
    // String '', ""
    // Template ``

    // Escape Notation
    const message =
    'This is my\n' +
    '\'first\' mesage';

    // Template Literal
    const another = `This is my
    'first' message`;

    const name = 'John';
    const another =  `Hi, ${name} ${2+3}`;

## Date

    const now = new Date();
    const date1 = new Date('May 11 2018 09:00'); // 여러 포맷으로 전달 가능 (MDN 참조)
    const date2 = new Date(2018, 4, 11, 9); // 달은 0이 1월. 입력하지 않은 항목은 0.

    now.setFullYear(2017);
    now.toDateString();
    now.toTimeString();
    now.toISOString(); // 웹앱에서 흔히 쓰는 포맷. 백엔드를 구축할때 써주면 좋다.