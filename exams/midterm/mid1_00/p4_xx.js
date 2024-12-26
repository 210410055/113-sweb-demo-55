const p = document.querySelector('.show-midterm-answer')
console.log('show-midterm-answer', p)

function showMidtermPage(item) {
  switch (item) {
    case 'p1_00':
      p.innerHTML = `<iframe src='./cards_00/p1_00.html' width="100%" height="100%" />`
      break
    case 'p2_xx':
      p.innerHTML = `<iframe src='./cards_xx/p2_xx.html' width="100%" height="100%" />`
      break
    case 'p3_xx':
      p.innerHTML = `<iframe src='./cards_xx/p3_xx.html' width="100%" height="100%" />`
      break
    case 'p4_xx':
      p.innerHTML = `<iframe src='./cards_xx/p4_xx.html' width="100%" height="100%" />`
      break
  }
}
