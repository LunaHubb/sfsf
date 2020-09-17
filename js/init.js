const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";

}




var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;


    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;


    });  
};

if(
  !window.location.href.endsWith("login.html") &&
  sessionStorage.getItem("logueado") !== "true") {
      window.location.href="login.html"
  }

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var username = document.getElementById("userbox")
var pw= document.getElementById("passwordLA")

function Store() {
  localStorage.setItem("user", username.value);
  localStorage.setItem("pw", pw.value);
}


function MyFunction(){
  var x= localStorage.getItem("user") 
  document.getElementById("arriba").innerHTML += `<div class="btn-group" >
  <button type="button" class="btn btn-danger"> <a href="my-profile.html">`+x+`</a></button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span class="sr-only" >Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <a class="dropdown-item" href="cart.html">Ver mi carrito</a>
  <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="login.html" id="cosita" onclick="localStorage.clear()">Cerrar sesion</a>
  </div>`;
  
}

document.addEventListener("submit", function(e){
  Store();
});


document.addEventListener("DOMContentLoaded", function(e){
  document.getElementById("cosita").innerHTML += `<a class="py-2 d-none d-md-inline-block" id="arriba" href="#"</a>`
  MyFunction();
}); 




