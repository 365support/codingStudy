function solution(progresses, speeds) {
  let idx = 0;
  const answer = [];
  while (idx < progresses.length) {
      let completedProgress = 0;
      progresses = progresses.map((v, i) => v + speeds[i])
      for (; idx < progresses.length; idx++) {
          if (progresses[idx] >= 100) completedProgress++;
          else break;
      }
      if (completedProgress) answer.push(completedProgress)
  }
  return answer;
}