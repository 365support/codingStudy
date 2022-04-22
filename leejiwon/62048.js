function gcd(w, h) {    
  const tmp = w % h;
  if (tmp === 0) {
      return h;
  }
  return gcd(h, tmp);
}

function solution(w, h) {
  const newGcd = gcd(w, h);
  return w * h - (w + h - newGcd);
}

// 가로 + 세로 - (가로,세로의 최대 공약수)
// W 와 H를 나눈 나머지가 0이 나올때 까지 반복해서 최대공약수 구함
// 최대공약수를 빼줘서 리턴 
