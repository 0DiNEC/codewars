function killer(suspectInfo, dead) {
  for (const key in suspectInfo) {
    let voteCount = 0;
    for (let i = 0; i < dead.length; i++) {
      if (suspectInfo[key].includes(dead[i]))
        voteCount++

      if (voteCount === dead.length)
        return key

    }
  }
}


console.log(killer({ 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] }, ['Ben']));