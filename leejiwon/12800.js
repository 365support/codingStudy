function solution(n) {
  let num = 0;
  let answer = '';
  
  while(n > 0){
      num = n % 3;
      n = Math.floor(n/3);
      if(num === 0){
          n -= 1;
          num = 4
      }
      answer = num + answer
  }
  return answer;
}

console.log(solution(33))

// 1 2 4 
// 3가지의 숫자가 반복되며 나타나고 
// 3으로 나눴을 때 나머지가 1이면 1 
// 2면 2 , 0이면 4가 나타난다 
// 나머지가 0이 아닐 경우에는 나온 값을 넣어주고
// 0이라면 몫에 1을 빼준뒤 4로 바꿔준다 