// select ele
// 

// var allEle = document.getElementsByClassName("card-of-ele")



// for(var i = 0 ; i<allEle.length;i++){
//     allEle[i].addEventListener("click",function(e){
//         console.log()
//     })
// }

var ele = document.querySelector(".cards");

var changeData = document.querySelector(".change")
ele.addEventListener("click",function(e){
    if(e.target.nodeName =="BUTTON"){
        var el=e.target
        changeData.innerHTML=el.parentNode.previousElementSibling.innerHTML;


        

    }
});

var closeBtn = document.querySelector(".closeB");
var validD=document.querySelector(".valid");
var Btn = document.querySelector(".visa");
Btn.addEventListener("click",function(e){
    
    if(e.target.nodeName =="BUTTON"){
        validD.classList.remove("d-none")
    };
});
var cartBay=document.querySelector(".cart-pay");
var ctrBuy=document.querySelector(".cart-buy");
ctrBuy.addEventListener("click",function(){
    cartBay.classList.remove("d-none")

});
closeBtn.addEventListener("click",function(){
    cartBay.classList.add("d-none")


})
