export class checkingAnswers {
  answerChecking(wrongArray, checkArray, value) {
    if (!wrongArray.includes(value)) {
      if(!checkArray.includes(value)) {
        checkArray.push(value)
      }
    } else {
      wrongArray.splice(wrongArray.indexOf(value), 1)
      if (!checkArray.includes(value)) {
        checkArray.push(value)
      }
    }
    return checkArray
  }

  answerIsWrong(wrongArray, checkArray, value) {
    if (!checkArray.includes(value)) {
      if(!wrongArray.includes(value)){
        wrongArray.push(value)
      }
    } else {
      checkArray.splice(checkArray.indexOf(value), 1)
      if (!wrongArray.includes(value)) {
        wrongArray.push(value)
      }
    }
    return wrongArray
  }
}