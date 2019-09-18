document.getElementsByTagName("body")[0].setAttribute("id", "custom-scroll");


// // set timeout onDomReady
// $(function() {
//   setTimeout(delayedFragmentTargetOffset, 500);
// });

// // add scroll offset to fragment target (if there is one)
// function delayedFragmentTargetOffset(){
//   var offset = $(':target').offset();
//   if(offset){
//       var scrollto = offset.top - 80; // minus fixed header height
//       $('html, body').animate({scrollTop:scrollto}, 0);
//   }
// }