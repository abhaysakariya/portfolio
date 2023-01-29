console.log('Made by Abhay Sakariya');


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenelement = document.querySelectorAll('.hidden');

// hiddenelement.forEach((el) => observer.observe(el));



window.addEventListener('load', function(){
  const loadingdiv = document.getElementById('loading');
  
  loadingdiv.style.display = 'none';
  
  $('#maincontent').slideToggle(3000);
});