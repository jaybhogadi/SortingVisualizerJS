
//sizeRange
let sizeRange = document.querySelector("#myRange")       
sizeRange.addEventListener("input",createNewArray) 

//createNewArray for displaying bars without initial input
createNewArray()      

//create new array
function createNewArray(){
    deletePreviousArray()      
    inputSize = sizeRange.value      
    console.log(inputSize)
    let bars = document.querySelector("#bars")  
    bars.classList.add("barsStyle")    
    //create bars according to size
    for(let i = 0  ;  i < inputSize  ; i++ ){
        let bar_height = Math.floor(Math.random() * 100) + 1      
        let bar = document.createElement("div")      
        console.log(bar,bar_height)      
        bar.style.height = 4*bar_height+"px"   
    
        
    
        bar.style.backgroundColor="black"      
        bar.classList.add("barStyle") 

        // bar.classList.add("barStyle2")     
        bars.append(bar)   
        bars.childNodes[i].innerHTML=parseInt(bars.childNodes[i].style.height)  
        bars.childNodes[i].style.fontSize="10px"
    
        bars.childNodes[i].style.color="violet"
    }
}

// function setKey(height){
//     let key = document.querySelector('#key')
//     // key.classList.add(".keyStyle")
    
//     key.style.height = height+"px"
//     // key.style.backgroundColor='black'
// }


//delete previous array
function deletePreviousArray(){
    let bars = document.querySelector("#bars")      
    bars.innerHTML=""      
}

//eventlistener for generating new array
let newArray = document.querySelector(".b1")      
newArray.addEventListener("click",createNewArray)      

//swap
function swap(ele1,ele2){
    let temp = ele1.style.height
    ele1.style.height  = ele2.style.height
    ele2.style.height = temp
}

//speed
let speedRange = document.querySelector("#mySpeed")      
speedRange.addEventListener("input",del)
let ms = 500-5*parseInt(speedRange.value)      
console.log(ms)

function del(){
ms = 500-5*parseInt(speedRange.value)      
console.log(ms)
}

//delay
function delay(ms){
    console.log('in delay')
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

//comapre animation
function compAnimation(ele1,ele2){
    ele1.style.backgroundColor="yellow"
    ele2.style.backgroundColor="yellow"
}

//swap animation
function swapAnimation(ele1,ele2){
    ele1.style.backgroundColor="pink"
    ele2.style.backgroundColor="pink"
}
