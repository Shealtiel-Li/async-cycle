/**
 * Map over promises serially.
 * */
const asyncMap = async (iterator, mapper) => {
  const result = [];
  for (const value in iterator) {
    if (Object.prototype.hasOwnProperty.call(iterator, value)) {
      result.push(await mapper(iterator[value], value));
    }
  }
  return result;
};

module.exports = asyncMap;
