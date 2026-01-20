export default function appendToEachArrayValue(array, appendString) {
  let text = '';
  const myArray = [];
  for (const x of array) {
    text = appendString + x;
    myArray.push(text);
  }
  return myArray;
}
