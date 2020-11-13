const countdown = document.querySelector('.countdown');

//set the launch date
const launchDate = new Date('Dec 24, 2020 00:00:01').getTime();
//Update every second

const interval = setInterval(()=>{
  console.log('tick');
  const now = new Date().getTime();
  //from now to launch date
  const distance = launchDate - now;
  console.log(distance);
  //Time calculations

  const days = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const mins = Math.floor((distance % (1000*60*60))/(1000*60));
  const secs = Math.floor((distance % (1000*60))/(1000));
  console.log(days);
  console.log(hours);
  console.log(mins);
  console.log(secs);
  //Display result

  countdown.innerHTML = `
    <div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>
    <div><span>${mins} minutit</span></div>
    <div><span>${secs} sekundit</span></div>  
  `;

  //if launch date passed
  if(distance<0){
    //stop countdown
    clearInterval(interval);
    //style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = "Launched!";
  }
  
}, 1000);
