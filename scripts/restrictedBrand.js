let restrictedList = ["Burton", "Patagonia", "Ride", "Thule", "Yeti"];
let productNameElements = document.getElementsByClassName("product-name");

for(let i = 0; i < productNameElements.length; i++){
  productNameElements[i].addEventListener('click', function(e){
    restrictedBrands(e.target);
  })
}

function restrictedBrands(el){
  let productText = el.innerText;
  let productTextSplit = productText.split(' ');
  let brandText = productTextSplit[0];

  for(let i = 0; i < restrictedList.length; i++){
    if(brandText === (restrictedList[i])){
      displayRestrictionMessage(el, restrictedList[i]);
      break;
    }
  }
};

function displayRestrictionMessage(msg, brand){
  let message = msg.parentNode.previousElementSibling.childNodes[3];

  message.innerText = "Sorry, " + brand + " is restricted.";
  message.style.visibility = "visible";
};