
  /**
 * @typedef { Object } Todo
 * @property { number } id 
 * @property { string } contents
 * @property { boolean } isCompleted
 * @property { string } category
 * @property { string[] } [tags]
 */

/** @function _create
 * @param { string } id
 * @param { string } [contents]
 * @param { string } category
 * @param { string[] } [tags]
 */
function _create(id, contents, category, tags) {}

/** @function _read
 * @param { number } id
 * @returns { Todo } Todo
 */
function _read(id) { return Todo }

/** @function _update
 * @param { number } id
 * @param { string } [contents]
 * @param { boolean } [isCompleted]
 * @param { string } [category]
 * @param { number[] } [tagIndex]
 * @param { string[] } [tags]
 */
function _update(id, contents, isCompleted, category, tagIndex, tags) {}

 /** @function _delete
 * @param { number } id
 * @param { string[] } [tags]
 */
function _delete(id, tags) {}
