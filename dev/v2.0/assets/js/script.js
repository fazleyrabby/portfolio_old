const body = document.getElementsByTagName("body")[0];

body.setAttribute("id", "custom-scroll");

const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.5
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
const topScrollBtn = document.getElementById("myBtn");
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topScrollBtn.style.display = "block";
    } else {
        topScrollBtn.style.display = "none";
    }
}

topScrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})




let observer = new IntersectionObserver(navCheck, options);

function navCheck(elms){
    elms.forEach(elm => {
       const id = elm.target.getAttribute('id');
       const activeAnchor = document.querySelector(`[data-page=${id}]`);
       if (elm.isIntersecting) {
         activeAnchor.classList.add('active');
       }else{
         activeAnchor.classList.remove('active');
       }
    })
}

sections.forEach(section =>{
    observer.observe(section);
})