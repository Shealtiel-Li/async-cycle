/**
 * Map over promises serially.
 * */
const asyncWhile = async (iterator, mapper) => {
  for (const value in iterator) {
    if (Object.prototype.hasOwnProperty.call(iterator, value)) {
      const result = await mapper(iterator[value], value);
      if (result) {
        return result;
      }
    }
  }
};
module.exports = asyncWhile;
