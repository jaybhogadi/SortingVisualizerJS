let QuickSortElement = document.querySelector(".QuickSort")

QuickSortElement.addEventListener("click",QuickSort1)

async function QuickSort1(){
    heading.innerHTML = "Quick Sort"
    id1.innerHTML=""
   id2.innerHTML="Best : O(nlog(n)) Average : O(nlog(n)) Worst : O(n^2)"
   id3.innerHTML=""
    let bars = document.querySelector("#bars")
    let length = bars.childNodes.length
    for(let i = 0 ; i < length - 1 ; i++ ){
        let ele1 = bars.childNodes[i]
        ele1.style.backgroundColor = 'cyan'
        let min = ele1
        for(let j = i + 1 ; j < length ; j++ ){
            let ele2 = bars.childNodes[j]
            ele2.style.backgroundColor = 'red'
            await delay(ms)
            if(parseInt(ele2.style.height) < parseInt(min.style.height) ){
                if(min!=ele1)
                min.style.backgroundColor='black'
                min = ele2
                ele2.style.backgroundColor = 'red'
            }
            if(ele2!=min)
            ele2.style.backgroundColor = 'black'
        }
        if(ele1!=min)
        swapAnimation(ele1,min)
        await delay(ms)
        swap(ele1,min)
        min.style.backgroundColor='black'
        ele1.style.backgroundColor = 'green'
    }
    bars.childNodes[length-1].style.backgroundColor = 'green'
    

    disablefun();
}