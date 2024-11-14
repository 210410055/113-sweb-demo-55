const p = document.querySelector('.show-classdemo')
console.log('show-classdemo', p)

function showDemo(item) {
  switch (item) {
    case 'w02_intro_55':
      p.innerHTML = `<iframe src='./w02-intro-55/w02.html' width="100%" height="100%" />`
      break
    case 'w03_card_55':
      p.innerHTML = `<iframe src='./w03_card_55/index.html' width="100%" height="100%" />`
      break
    case 'w06_blog_55':
      p.innerHTML = `<iframe src='./w06_blog_55/index.html' width="100%" height="100%" />`
      break
    case 'w09_quiz1_':
      p.innerHTML = `<iframe src='./w09_quiz1_xx/p5_xx.html' width="100%" height="100%" />`
      break
  }
}
