//adding eventListener for bubbleSort
let InsertionSortElement = document.querySelector(".InsertionSort")
InsertionSortElement.addEventListener("click",InsertionSort)
InsertionSortElement.addEventListener("click",disablefun)
async function disablefun(){
    const b=document.getElementsByTagName("button")
    for(let i=0;i<b.length;i++)
    {
       b[i].disabled=!b[i].disabled
    }
 }

async function InsertionSort(){
    //heading
    heading.innerHTML = "Insertion Sort"
    id1.innerHTML=""
   id2.innerHTML=" Best : O(n) Average : O(n^2) Worst : O(n^2)"
   id3.innerHTML=""
    let bars = document.querySelector("#bars")
    length = bars.childNodes.length
    bars.childNodes[0].style.backgroundColor = 'green'
    for(let i = 1 ; i < length ; i++){
        let key = bars.childNodes[i].style.height
        //display current element
        //span.style.height = key
        //setKey(parseInt(key))
        let j = i-1
        // compAnimation(bars.childNodes[i],bars.childNodes[j])
        // await delay(ms)
        while(j >= 0 && parseInt(key) < parseInt(bars.childNodes[j].style.height)){
            bars.childNodes[j].style.backgroundColor='cyan'
            await delay(ms)
            bars.childNodes[j+1].style.height = bars.childNodes[j].style.height
             
            bars.childNodes[j+1].innerHTML=parseInt(bars.childNodes[j+1].style.height)
        
            //await delay(ms)
            bars.childNodes[j].style.height=0+'px'
              
            bars.childNodes[j].innerHTML=parseInt(bars.childNodes[j].style.height)
             
         
            await delay(ms)
            bars.childNodes[j].style.backgroundColor = 'green'
            j--
            bars.childNodes[i].style.backgroundColor = 'green'
        }
        for(let k = i ; k >=0 ;k-- )
        bars.childNodes[k].style.backgroundColor = 'green'
        bars.childNodes[j+1].style.height = key
             
        bars.childNodes[j+1].innerHTML=parseInt(bars.childNodes[j+1].style.height)
        console.log(j)

    }   
    
          disablefun();
}