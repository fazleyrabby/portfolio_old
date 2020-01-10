const body = document.getElementsByTagName("body")[0];
body.setAttribute("id", "custom-scroll");

// let navActive = document.querySelectorAll('nav ul li a');

// navActive.forEach(function(each){
//    each.addEventListener('click',function(e){
//     each.classList.toggle = "active";
// }) 
// })

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



