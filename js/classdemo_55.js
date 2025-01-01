const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w02_intro_55':
      p.innerHTML = `<iframe src='./demo/w02-intro-55/w02.html' width='100%' height='100%' />`;
      break;
    case 'w03_card_55':
      p.innerHTML = `<iframe src='./demo/w03_card_55/index.html' width='100%' height='100%' />`;
      break;
    case 'w06_blog_55':
      p.innerHTML = `<iframe src='./demo/w06_blog_55/index.html' width='100%' height='100%' />`;
      break;
    case 'w07_nav_55':
      p.innerHTML = `<iframe src='./demo/w07_55.html' width='100%' height='100%' />`;
      break;
  }
}
