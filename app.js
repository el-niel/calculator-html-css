const blog = document.querySelector('.blog');
const paras = document.querySelectorAll('p');
const link = document.querySelector('a');

// paras.forEach((para) => {
//     para.innerText += ' this is an updated version';
// });
// blog.innerText = 'Just updated my new blog post!!!';

console.log(link.getAttribute('href'));
link.setAttribute('href', 'http://danny.com');
console.log(link);
