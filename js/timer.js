let timer, now = Math.ceil(new Date().getTime() / 1000);

if (!localStorage.getItem('timer')) {
  timer = 86400;
  localStorage.setItem('timer', now + 86400)
} else {
  timer = (localStorage.getItem('timer') - now)
}

setInterval(() => {
  timer--;

  let mins = Math.ceil(timer / 60 % 60 - 1),
    hours = Math.ceil(timer / 3600 - 1),
    secs = timer % 60;


  $('#timer')[0].innerText = `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`
}, 1000);




