const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("mouseover",()=>{
card.style.boxShadow="0 15px 35px rgba(0,0,0,0.2)";
});
card.addEventListener("mouseleave",()=>{
card.style.boxShadow="0 10px 25px rgba(0,0,0,0.1)";
});
});
