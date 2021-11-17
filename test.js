
var plus = document.querySelectorAll(".pbtn");
var moin =document.querySelectorAll(".mbtn");
var price=document.querySelectorAll(".prixu");
var qt=document.querySelectorAll(".Quantité");
var newprice=document.querySelectorAll(".nprix");
var supprimer=document.querySelectorAll(".supp");
var table=document.querySelectorAll("table")
var btntostyle=document.querySelectorAll(".aime")
var total=document.getElementById("tot");

// total.value=parseInt(newprice[0].innerHTML)+parseInt(newprice[1].innerHTML)+parseInt(newprice[2].innerHTML)

for (let i = 0; i < plus.length; i++)
 {
  
  

    
  plus[i].addEventListener("click", function () {
    
    
    if (plus[i].previousElementSibling.innerHTML< 10)

      plus[i].previousElementSibling.innerHTML++;
      
      newprice[i].innerHTML=(price[i].innerHTML)*(qt[i].innerHTML);
     
Total()   
  });




  moin[i].addEventListener("click",function(){

    if(moin[i].nextElementSibling.innerHTML>0)
    moin[i].nextElementSibling.innerHTML--;
   
    newprice[i].innerHTML=(price[i].innerHTML)*(qt[i].innerHTML)
    
        // total.value=parseInt(newprice[0].innerHTML)+parseInt(newprice[1].innerHTML)+parseInt(newprice[2].innerHTML)
 Total()

});


btntostyle[i].addEventListener("click", function () {
  btntostyle[i].classList.toggle("newbtn");

});






supprimer[i].addEventListener("click", function () {
  
supprimer[i].parentElement.parentElement.parentElement.parentElement.parentElement.remove()

Total()
})
}

  function Total(){

    var newprice=document.querySelectorAll(".nprix");
var sum=0
for (let i=0; i<newprice.length;  i++){ 
      sum=sum+parseInt(newprice[i].innerHTML)}
      //sum=sum +Number(qt[i].innerHTML)*Number(price[i].innerHTML)}
     
    
    total.value=sum
  
  }



  












// });


//  }




/*for (let j = 0; j < plus.length; i++)
 {
  
  

    
  plus[j].addEventListener("click", function () {
   
    
    total.value=parseInt(newprice[j].innerHTML)+parseInt(newprice[1+j].innerHTML)+parseInt(newprice[2+j].innerHTML)
     
      
     
  });
 } 
*/


//console.log(supprimer[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
//console.log((price[i].innerHTML)*(qt[i].innerHTML))
  












