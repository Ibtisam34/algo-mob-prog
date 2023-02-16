function findDuplicates(arr) {
  let duplicates = [];
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (seen[num]) {
      duplicates.push(num);
    } else {
      seen[num] = true;
    }
  }
  return duplicates;
}
module.exports = findDuplicates
