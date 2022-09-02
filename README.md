## 챌린지 과제 가이드

>요구 사항을 구현하지 않고 설계만합니다.

- Todo 앱을 JSDoc으로 문서화하는 챌린지 과제입니다.
- 모든 요구사항은 JSDoc을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-2로 생성해 주세요. (Public 권한 필요)
- 완성한 과제의 저장소 링크를 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정)
- 과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.
- JSDoc 환경 구성에 어색한 경우 [Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)를 이용하셔도 됩니다

## 📝 Requirements

### 필수 요구사항
>아래의 Todo 앱 요구사항을 참고하여

- 필요한 데이터를 모두 모델링한다.
- 사용되는 모든 함수를 `선언부만` 만든다.
  - 함수 및 클래스의 내부는 구현하지 않습니다.
- `JSDoc`을 활용해 문서화한다.
- `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}

/**
 * @typedef { Object } Todo
 * @property { number } id 
 * @property { string } contents
 * @property { boolean } isCompleted
 * @property { string } category
 * @property { string[] } [tags]
 */
```

#### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.
```js

/** @function _create
 * @param { string } id
 * @param { string } [contents]
 * @param { string } category
 * @param { string[] } [tags]
 */

function _create(id, contents, category, tags) {}
```
#### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.
```js
/** @function _read
 * @param { number } id
 * @returns { Todo } Todo
 */
function _read(id) { return Todo }
```
#### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.
```js

/** @function _update
 * @param { number } id
 * @param { string } [contents]
 * @param { boolean } [isCompleted]
 * @param { string } [category]
 * @param { number[] } [tagIndex]
 * @param { string[] } [tags]
 */
function _update(id, contents, isCompleted, category, tagIndex, tags) {}

```
#### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.
``` js
 /** @function _delete
 * @param { number } id
 * @param { string[] } [tags]
 */
function _delete(id, tags) {}

```


#### Modeling (Shape)

```js

Item {
  property(required),
  property(optional),
}
```

#### Reference

- [use JSDoc](https://jsdoc.app)
- [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)





