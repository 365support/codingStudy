function solution(record) {
  const user = {};
  const result = [];
  for (let message of record) {
    const content = message.split(" ");
    if (content[0] === "Enter") {
      user[content[1]] = content[2]
      result.push([content[1], "님이 들어왔습니다."])
    } else if (content[0] ==="Leave") {
      result.push([content[1], "님이 나갔습니다."]);
    } else {
      user[content[1]] = content[2];
    }
  }  
  return result.map(v => user[v[0]] + v[1]);
}