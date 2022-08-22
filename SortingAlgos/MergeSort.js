let MergeSortElement = document.querySelector(".MergeSort")

MergeSortElement.addEventListener("click",MergeSort1)
MergeSortElement.addEventListener("click",disablefun)
async function disablefun(){
    const b=document.getElementsByTagName("button")
    for(let i=0;i<b.length;i++)
    {
       b[i].disabled=!b[i].disabled
    }
 }

 //heading


async function MergeSort1(){
    
    heading.innerHTML = "Merge Sort"
    id1.innerHTML=""
   id2.innerHTML="Best : O(nlog(n)) Average : O(nlog(n)) Worst : O(nlog(n))"
   id3.innerHTML=" "
    let bars = document.querySelector("#bars")
    length = bars.childNodes.length;
    let l=0;
    let r=length-1;
   
    await MergeSort(bars,l,r);
    disablefun();
}

async function MergeSort(bars,l,r)
{ 
    if(l>=r){

        return;
    }
    const m=Math.floor((r+l)/2);
    await MergeSort(bars,l,m);
    await MergeSort(bars,m+1,r);
    await Merge(bars,l,m,r);
}

async function Merge(bars,l,m,r)
{
    const n1=m-l+1;
    const n2=r-m;
    let left=[]
    let right=[]

    for(let i=0;i<n1;i++)
    {
        await delay(ms);
        bars.childNodes[l+i].style.backgroundColor='crimson';
        left[i]=bars.childNodes[l+i].style.height;
    }  
    for(let i=0;i<n2;i++)
    {
        await delay(ms);
        bars.childNodes[m+i+1].style.backgroundColor='crimson';
        right[i]=bars.childNodes[m+1+i].style.height;
    }   
    await delay(ms);

    let i=0,j=0,k=l;
    while(i<n1 && j<n2)
    {
        await delay(ms);
        if(parseInt(left[i])<parseInt(right[j]))
        {
            bars.childNodes[k].style.backgroundColor = 'green';
            bars.childNodes[k].style.height=left[i];
            bars.childNodes[k].innerHTML=parseInt(bars.childNodes[k].style.height)
            i++;
            k++;
        }else
        {
            {
                bars.childNodes[k].style.backgroundColor = 'green';
                bars.childNodes[k].style.height=right[j];
                  
               bars.childNodes[k].innerHTML=parseInt(bars.childNodes[k].style.height)
             
              
                j++;
                k++;
            }

        }
    

    }
    while(i<n1)
    {
        await delay(ms);

        bars.childNodes[k].style.backgroundColor='green';
        bars.childNodes[k].style.height=left[i];
        bars.childNodes[k].innerHTML=parseInt(bars.childNodes[k].style.height)
        i++;
        k++;
    }

    while(j<n2)
    {
        await delay(ms);

        bars.childNodes[k].style.backgroundColor='green';
        bars.childNodes[k].style.height=right[j];
        bars.childNodes[k].innerHTML=parseInt(bars.childNodes[k].style.height)
        j++;
        k++;
    }
    
       
}



    


