export const triggerGameOver = (answer, listener) => {
  localStorage.setItem(`lastSolvedAnswer`, answer);
  localStorage.setItem('solvedToday', Date.now());
  document.removeEventListener("keydown", listener);
}

export const setGuess = (num, guess) => {
  localStorage.setItem(`guess${num}`, guess);
}

export const getGuess = num => {
  return localStorage.getItem(`guess${num}`)
}

export const resetGuesses = () => {
  localStorage.setItem(`lastSolvedAnswer`, "");
  for (var i = 0; i < 6; i++) {
    localStorage.setItem(`guess${i}`, "")
  }
}

export const getLastSolved = () => localStorage.getItem('solvedToday')

export const getLastSolvedAnswer = () => localStorage.getItem('lastSolvedAnswer')