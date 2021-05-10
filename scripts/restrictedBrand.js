let restrictedList = ["Burton", "Patagonia", "Ride", "Thule", "Yeti"];

function restrictedBrands(el){
  let productText = el.innerText;

  for(let i=0; i < restrictedList.length; i++){
    if(productText.startsWith(restrictedList[i])){
      displayRestrictionMessage(el, restrictedList[i]);
      break;
    }
  }
};

function displayRestrictionMessage(msg, brand){
  let message = msg.previousElementSibling.childNodes[3];

  message.innerText = "Sorry, " + brand + " is restricted.";
  message.style.visibility = "visible";
};