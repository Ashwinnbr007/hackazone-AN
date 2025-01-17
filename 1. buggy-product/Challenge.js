// versions would be a 1D array with either '0' or '1' as its elements.
// '0' indicates the version is bug-free and '1' indicates the version is buggy.
// (Ex - For input [0, 0, 1, 1, 1], the bug was introduced in version 2 and the function should return 1)

function lastBugFreeVersion(versions) {
  for (let i = 0; i < versions.length; i++) {
    if (versions[i] == 1)
      return 1
  }
  return 0
}
console.log(lastBugFreeVersion([0, 0, 1, 1, 1]));
