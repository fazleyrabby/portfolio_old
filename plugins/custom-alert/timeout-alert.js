const alertContent = document.querySelectorAll('[data-alert]');
const closeBtn = document.querySelectorAll('.closeBtn');

closeBtn.forEach(element => {
  element.addEventListener('click', (e)=>{
    closeAlert(e);
  });
});

window.addEventListener('click', closeOpenedAlert);

function closeAlert(alertToHide){
  alertToHide.target.closest('.tm-alert').style.display = 'none';
}

function closeOpenedAlert(e){
  alertContent.forEach(element => {
    let tmAlert = element.closest('.tm-alert').style.display;
    if (tmAlert === 'block' || tmAlert == '') {
      element.style.display = 'none';
    }
  });
}



function timeoutAlertInSeconds(timeout){
  let timeoutInSecond = timeout*1000;
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.querySelectorAll('.tm-alert').forEach(e=>{
        e.style.display = "none";
      })
   }, timeoutInSecond);
  });
}



let year = new Date();
document.getElementById('date').innerHTML = year.getFullYear();