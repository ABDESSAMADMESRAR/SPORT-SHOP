// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (10000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// const contanier = document.querySelector(".contanier" )


const teamsPremierLeague = document.querySelector(".teamsPremierLeague")
// teams
teams55.addEventListener("click", () => {


  const team = `



  <div class="England">
    
<img src="https://i8.amplience.net/i/jpl/england-4b8ea934701e360481b7ea2dae921010?qlt=80&fmt=webp" alt="">
<p>England</p>
</div>


<div class="Wales">
  <img src="https://i8.amplience.net/i/jpl/crest-9-120x120-215c2d47baf551693ab9141c5c1a18a1?qlt=80&fmt=webp" alt="">
  <p>Wales</p>
</div>

<div class="Belgium">
  <img src="https://i8.amplience.net/i/jpl/belgium-996bf343426ccbc45fab8c8af8c7c808?qlt=80&fmt=webp" alt="">
  <p>Belgium</p>
</div>
<div class="Spain">
  <img src="https://i8.amplience.net/i/jpl/spain-f6cd4c3e85e95e6ee5df3851ce630ec4?qlt=80&fmt=webp" alt="">
  <p>Spain</p>
</div>


`
  cc.classList.add("cc");
  cc2.classList.remove("cc2");
  cc3.classList.remove("cc3");

  b.classList.remove("b");
  // teamsPremierLeague2.style.display= "block";
  teamsPremierLeague.innerHTML = team;

});




const teamsPremier = document.querySelector(".teamsPremierLeague")
// teams
teams56.addEventListener("click", () => {





  const team2 = `


  <div class="Arsenal">
    
<img src="https://i8.amplience.net/i/jpl/arsenal-1cf7825db12de7d0b0669e83284bd0bd?qlt=80&fmt=webp" alt="">
<p>Arsenal</p>
</div>

<div class="Liverpool">
  
  <img src="https://i8.amplience.net/i/jpl/liverpool-645d1baf746945444113216eb9df6bed?qlt=80&fmt=webp" alt="">
  <p>Liverpool</p>
</div>

<div class="ManchesterCity">
  <img src="https://i8.amplience.net/i/jpl/manchester-city-6571a3735755f088f682f79dd6cf853d?qlt=80&fmt=webp" alt="">
  <p>Manchester City</p>
</div>

<div class="ManchesterUnited">
  <img src="https://i8.amplience.net/i/jpl/mu-d8896d326d7b6d3977283ca8d32a7ba9?qlt=80&fmt=webp" alt="">
  <p>Manchester United</p>
</div>


<div class="TottenhamHotspur">
  <img src="https://i8.amplience.net/i/jpl/ths-dd28d7bc34a13e7bbe2d2c51b7690f3d?qlt=80&fmt=webp" alt="">
  <p>Tottenham Hotspur</p>
</div>


`


  // teamsPremierLeague2.style.display= "block";
  teamsPremier.innerHTML = team2;
  cc.classList.remove("cc");

  cc2.classList.remove("cc2");
  cc3.classList.remove("cc3");

  b.classList.add("b");
});





const teams = document.querySelector(".teamsPremierLeague")
// teams
teams57.addEventListener("click", () => {





  const team3 = `


  <div class="Celtic">
    
    <img src="https://i8.amplience.net/i/jpl/layer2-2c5c39a98db11b707a17ed7f4e91657e?qlt=80&fmt=webp" alt="">
    <p>Celtic</p>
    </div>
    <div class="Rangers">
    <img src="https://i8.amplience.net/i/jpl/rangers-ecd8589bdbf111d717f7b938a52d8179?qlt=80&fmt=webp" alt="">
    <p>Rangers</p>
    </div>



`


  // teamsPremierLeague2.style.display= "block";
  teamsPremier.innerHTML = team3;
  cc.classList.remove("cc");
  cc2.classList.add("cc2");
  cc3.classList.remove("cc3");
  b.classList.remove("b");
});



const team = document.querySelector(".teamsPremierLeague")
// teams
teams58.addEventListener("click", () => {





  const team4 = `


  <div class="PSG">
    
    <img src="https://i8.amplience.net/i/jpl/psg-104de2cf774c9cdc7f9aea49f7775ebc?qlt=80&fmt=webp" alt="">
    <p>PSG</p>
    </div>
    <div class="BayernMunich">
    <img src="https://i8.amplience.net/i/jpl/bayern-edbe94b099bc9a705263e5fa522eb3d9?qlt=80&fmt=webp" alt="">
    <p>Bayern Munich</p>
    </div>
    <div class="FCBarcelona">
      
      <img src="https://i8.amplience.net/i/jpl/barcelona-ed50c503d85822d285871ed494059d08?qlt=80&fmt=webp" alt="">
      <p>FC Barcelona</p>
    </div>
    
    <div class="RealMadrid">
      <img src="https://i8.amplience.net/i/jpl/real-madrid-54b763e1f649dadec832bed78f36f18d?qlt=80&fmt=webp" alt="">
      <p>Real Madrid</p>
    </div>
    
    <div class="Juventus">
      <img src="https://i8.amplience.net/i/jpl/juventus-0507848fa2fc9ce1099123cb78a926cb?qlt=80&fmt=webp" alt="">
      <p>Juventus</p>
    </div>
    
    <div class="InterMilan">
      <img src="https://i8.amplience.net/i/jpl/inte-milan-394fd9634fc3ef37c27e0a24c0bf92ed?qlt=80&fmt=webp" alt="">
      <p>Inter Milan</p>
    </div>
    <div class="AFCAjax ">
      <img src="https://i8.amplience.net/i/jpl/ajax-7fb97b5e3e3a343b3d1b4630316b1fae?qlt=80&fmt=webp" alt="">
      <p>AFC Ajax </p>
    </div>
    <div class="BorussiaDortmund">
      <img src="https://i8.amplience.net/i/jpl/dortmund-edb76a4db4982f02e793d65d7fe5cbf1?qlt=80&fmt=webp" alt="">
      <p>Borussia Dortmund </p>
    </div>


`


  // teamsPremierLeague2.style.display= "block";
  teamsPremier.innerHTML = team4;
  cc.classList.remove("cc");
  cc2.classList.remove("cc2");
  cc3.classList.add("cc3");
  b.classList.remove("b");
});






var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination2",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    // type: "progressbar"
    clickable: true,
    // dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});














