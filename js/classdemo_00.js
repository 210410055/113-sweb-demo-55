const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w02_intro_00':
      p.innerHTML = `<iframe src='./demo/w02-intro-00/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_card_00':
      p.innerHTML = `<iframe src='./demo/w03_card_00/' width='100%' height='100%' />`;
      break;
    case 'w06_blog_00':
      p.innerHTML = `<iframe src='./demo/w06_blog_00/' width='100%' height='100%' />`;
      break;
  }
}
