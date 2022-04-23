function solution(n) {
  let answer = "";
  while (n > 0) {
      const rest = n % 3;
      n = parseInt(n / 3);
      if (rest) answer = rest + answer;
      else {
          answer = 4 + answer;
          n--;
      }
  };
  return answer;
}