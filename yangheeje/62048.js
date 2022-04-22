function solution(w, h) {
  let answer = w * h;

  for (let x = 1; x <= w; x++) {
      answer -= Math.ceil(h * x / w) - Math.floor(h * (x - 1) / w);
  }
  return answer;
}

// 해결 안됨