//heading
let heading = document.querySelector("#heading")
// let stopbtn=document.querySelector(".stop");


//adding eventListener for bubbleSort
let BubbleSortElement = document.querySelector(".BubbleSort");


BubbleSortElement.addEventListener("click",disablefun);
BubbleSortElement.addEventListener("click",BubbleSort);

// let stopbtn=document.querySelector(".stop");
// stopbtn.addEventListener("click",disablefun);
async function enablefun(){
   if( i==length1-1)
    disablefun();
}
//disable function
async function disablefun(){
   const b=document.getElementsByTagName("button")
   for(let i=0;i<b.length;i++)
   {
      b[i].disabled=!b[i].disabled
   }
}
let i,j,length1=-1;

async function BubbleSort(){
   heading.innerHTML = "Bubble Sort"
   
   id2.innerHTML="Best:O(n)   Average : O(n^2)  Worst : O(n^2)"
   let bars = document.querySelector("#bars")
   let length = bars.childNodes.length
   length1=length
   for(i=0;i<length;i++)
   bars.childNodes[i].innerHTML=bars.childNodes[i].style.height
   for( i = 0 ; i < length-1 ; i++ ){      
        for( j = 0 ; j < length-i-1 ; j++ ){
         bars.childNodes[j].innerHTML=bars.childNodes[j].style.height
            let ele1 = bars.childNodes[j]
            let ele2 = bars.childNodes[j+1]
            //during comparision
            compAnimation(ele1,ele2)
            //delay
            await delay(ms)
            if(parseInt(ele1.style.height) > parseInt(ele2.style.height)){
               //swapping
               swapAnimation(ele1,ele2)
               await delay(ms)
               swap(ele1,ele2)
               
               bars.childNodes[j].innerHTML=parseInt(bars.childNodes[j].style.height)
             
               bars.childNodes[j+1].innerHTML=parseInt(bars.childNodes[j+1].style.height)

               
            }
            ele1.style.backgroundColor = 'black'
        }
        bars.childNodes[length-i-1].style.backgroundColor="green"
   }enablefun();
   bars.childNodes[0].style.backgroundColor="green"
   
}
