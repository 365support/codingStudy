function solution(s) {
  const duplicateCheckArr = [];
  for (let i = 0; i < s.length; i++) {
      if (duplicateCheckArr[duplicateCheckArr.length - 1] === s[i]) duplicateCheckArr.pop()
      else duplicateCheckArr.push(s[i])
  }
  return duplicateCheckArr.length ? 0 : 1
}