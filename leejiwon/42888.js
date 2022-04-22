function solution(record) {
  var answer = [];
  
  let newArr = record.map((el)=> el.split(' '));
  
  let nickName = {};
  for(let i = 0; i < newArr.length; i++){
      if(newArr[i].length === 3){
          nickName[newArr[i][1]] = newArr[i][2]
      }
  }
  
  for(let i = 0; i < newArr.length; i++){
      if(newArr[i][0] === 'Enter'){
          answer.push(`${nickName[newArr[i][1]]}님이 들어왔습니다.`)
      }else if(newArr[i][0] === 'Leave'){
          answer.push(`${nickName[newArr[i][1]]}님이 나갔습니다.`)
      }
  }
  return answer;
}

// 마지막에 보이는 결과만 출력한다 
// leave는 닉네임이 변경되니 신경쓰지 않고 
// enter, change의 길이가 3인 것을 이용해 마지막 닉네임을 아이디와 매칭시킴
// 닉네임을 통해 한번에 출력한다 