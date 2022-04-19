function solution(S) {
  if (S.length === 1) return 1;
const halfOfS = Math.floor(S.length / 2);

let answer = 1001;
for (let i = 1; i <= halfOfS; i++) {
  let index = 0;
  let result = 0;
  let duplicateCount = 1;
      const cutArr = [];
  do {
    cutArr.push(S.substr(index, i));
    index += i;
  } while (index + i <= S.length)
  result += S.length - index
  cutArr.reduce((acc, cur, idx, src) => {
    if (acc === cur) {
      duplicateCount++  
    } else {
      if (duplicateCount >= 2) {
          result += (duplicateCount + "").length;
          duplicateCount = 1
      }
      result += i
    }
      if (idx === src.length - 1) {
        duplicateCount >= 2 ? result += i + (duplicateCount + "").length : result += i;
      }
    return cur;
  })
  answer = Math.min(answer, result)
}
return answer;
}