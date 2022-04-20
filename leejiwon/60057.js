function solution(s) {
  if (s.length === 1) {
      return 1;
  }
  let strings = [];
  let answer = 0;

  for(let i = 1; i <= parseInt(s.length / 2); i++) { 
      let cnt = 1;
      let string = '';
      for(let j = 0; j < s.length; j += i) {
          const currentStr = s.substr(j, i);  
          const nextStr = s.substr(j+i, i); 
          if(currentStr === nextStr) {
              cnt++;
          } else {
              string = cnt > 1 ? string + cnt + currentStr : string + currentStr;
              cnt = 1;
          }
      }
      strings.push(string.length);
  }
  return Math.min(...strings);
}

// 문자열 길이가 최대 1,000으로 제한이 크지 않기 때문에, 모든 방법을 탐색
// 문자열 길이가 N일 때, 길이가 N/2 보다 크게 잘랐을 때는 길이가 줄어들지 않음
// 1 ~ N/2 길이로 자르는 방법을 모두 탐색한 후 그중 가장 짧은 방법을 선택

// 이중 포문을 돌려서 1개 단위로 자른다고 생각했을때 
// aabbabbc 라면 a 와 a 비교 ...
// 2개 단위로 자른다면 aa bb 비교 ... 


