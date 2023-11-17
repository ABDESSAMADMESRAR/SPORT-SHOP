// add product javascript

const addprod = document.querySelector("#addprod");
const containerproduct = document.querySelector("#containerproduct");
addprod.addEventListener("click", (eo) => {
  const nawproduct = `
  <div class="card mycard" style="width: 20rem; height: 35rem ;">
  <div class="outer">
  <img style="border-radius : 5px; width: 20rem; height: 100%; object-fit: fill;""  src="../images/PREMIER LEAGUE TOTTENHAM/TOTTENHAM17.png" class="card-img-top" alt="...">
<div class="inner">
  <img  style="border-radius : 5px; width: 20rem; height: 100%; object-fit: fill;"  src="../images/PREMIER LEAGUE TOTTENHAM/TOTTENHAM18.png" class="card-img-top" alt="">
</div>
</div>
  <div class="card-body">
    <h5 class="card-title"><b>Nike Tottenham Hotspur FC Essential T-Shirt</b></h5>
    <!-- <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, voluptate cum magni dolorem nesciunt accusamus, dolores necessitatibus at repellendus eos illo quaerat laborum nihil ea.</p> -->
    <span  style="margin-left: 80px; "> <i class="bi bi-cart-plus-fill" style="margin-left: 130px; margin-bottom: 50px; font-size: 15px;" ><b>£24.00</b></i> </span> <br><br> 
    <a   href="#"  class="js-buy btn btn-primary" style="text-align: center; padding:10px 30px; width: 80%;">buy</a>
    <i class="fa-solid fa-heart  heart" id="heart"></i>
    </div>
</div>
<div class="card mycard" style="width: 20rem; height: 35rem ;">
  
  <div class="outer">
    <img style="border-radius : 5px; width: 20rem; height: 100%; object-fit: fill;"  src="../images/PREMIER LEAGUE TOTTENHAM/TOTTENHAM19.png" class="card-img-top" alt="...">
  <div class="inner">
    <img  style="border-radius : 5px; width: 20rem; height: 100%; object-fit: fill;"  src="../images/PREMIER LEAGUE TOTTENHAM/TOTTENHAM20.png" class="card-img-top" alt="">
  </div>
  </div>
  <div class="card-body">
    <h5 class="card-title"><b>    Nike Tottenham Hotspur FC 2023/24 Goalkeeper Shirt JNR</b></h5>
    <!-- <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum sed harum earum pariatur ea quod facere cumque non mollitia. Aliquid veritatis nesciunt eum harum.</p> <br> -->
    <span  style="margin-left: 80px; "> <i class="bi bi-cart-plus-fill" style="margin-left: 130px; margin-bottom: 50px; font-size: 15px;" ><b>£60.00</b></i> </span> <br><br> 
    <a   href="#"  class="js-buy btn btn-primary" style="text-align: center; padding:10px 30px; width: 80%;">buy</a> 
    <i class="fa-solid fa-heart  heart" id="heart"></i>
    </div>
</div>          
<div class="card mycard" style="width: 20rem; height: 35rem ;">
  <div class="outer">
    <img style="border-radius : 5px; width: 20rem; height: 100%; object-fit: fill;"   src="../images/PREMIER LEAGUE TOTTENHAM/TOTTENHAM21.png" class="card-img-top" alt="...">
  <div class="inner">
    <img  style="border-radius : 5px; width: 20rem; height: 100%; object-fit: fill;"  src="../images/PREMIER LEAGUE TOTTENHAM/TOTTENHAM22.png" class="card-img-top" alt="">
  </div>
  </div>
  <div class="card-body">
    <h5 class="card-title"><b>New Era Tottenham Hotspur FC Beanie

    </b></h5>
    <!-- <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eaque earum dolorum mollitia, at itaque pariatur debitis ducimus animi voluptate delectus aut iste molestias quas.</p> <br> -->
    <span  style="margin-left: 80px; "> <i class="bi bi-cart-plus-fill" style="margin-left: 130px; margin-bottom: 50px; font-size: 15px;" ><b>£21.00</b></i> </span> <br><br> 
    <a   href="#"  class="js-buy btn btn-primary" style="text-align: center; padding:10px 30px; width: 80%;">buy</a>
    <i class="fa-solid fa-heart  heart" id="heart"></i>
    </div>
</div>          
<div class="card mycard" style="width: 20rem; height: 35rem ;">
  <div class="outer">
    <img style="border-radius : 5px; width: 20rem; height: 100%; object-fit: fill;""  src="../images/PREMIER LEAGUE TOTTENHAM/TOTTENHAM23.png" class="card-img-top" alt="...">
  <div class="inner">
    <img  style="border-radius : 5px; width: 20rem; height: 100%; object-fit: fill;"  src="../images/PREMIER LEAGUE TOTTENHAM/TOTTENHAM24.png" class="card-img-top" alt="">
  </div>
  </div>
  <div class="card-body">
    <h5 class="card-title"><b>  Nike Tottenham Hotspur FC Tech Fleece Hoodie
    </b></h5>
    <!-- <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, temporibus, perferendis quia sed fugit commodi quaerat fuga eligendi, libero reiciendis corporis ipsa nobis consequatur dignissimos!</p> -->
    <span  style="margin-left: 80px; "> <i class="bi bi-cart-plus-fill" style="margin-left: 130px; margin-bottom: 50px; font-size: 15px;" ><b>£120.00</b></i> </span> <br><br> 
    <a   href="#"  class="js-buy btn btn-primary" style="text-align: center; padding:10px 30px; width: 80%;">buy</a>
    <i class="fa-solid fa-heart  heart" id="heart"></i>
    </div>
</div>          

  
  `;
  containerproduct.innerHTML += nawproduct;
  
});




