/**
 * A file for storing helpful functions.
 * Use it for those which do not directly belong
 * to anything else
 *
 * Might I suggest you create a function for generating
 * random IDs?
 * type generateId = () => number
 */
let id = 0;
export function createUniqueId() {
  const newId = id;
  id++;
  return newId;
}
