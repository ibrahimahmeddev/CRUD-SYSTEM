var boxContainer = document.getElementById('boxContainer');
var Close = document.getElementById('close');
var imgItem = Array.from(document.querySelectorAll(".item img"));
var boxItem = document.getElementById('boxItem');
var next = document.querySelector('#next')
var prev = document.querySelector("#prev")

Close.addEventListener('click',function(){
    boxContainer.style.display = "none"
})

// console.log(imgItem);
var imgIndex;
for(var i=0; i<imgItem.length; i++) {
    imgItem[i].addEventListener("click",function(event){
        imgIndex = imgItem.indexOf(event.target);
        boxItem.style.backgroundImage = `url(${event.target.src})`
        boxContainer.style.display = "flex"
    })
}

next.addEventListener("click",nextImg)
function nextImg(){
    imgIndex++
    if(imgIndex == imgItem.length)
    {
        imgIndex = 0
    }
    console.log(imgItem[imgIndex].src);
    boxItem.style.backgroundImage = `url(${imgItem[imgIndex].src})`
}
prev.addEventListener("click",prevImg)
function prevImg(){
    imgIndex--
    if(imgIndex < 0)
    {
        imgIndex = imgItem.length-1
    }
    console.log(imgItem[imgIndex].src);
    boxItem.style.backgroundImage = `url(${imgItem[imgIndex].src})`
}
document.addEventListener("keyup",function(e){
    console.log(e);
    if(e.key == "ArrowRight"){
        nextImg()
    }else if (e.key == "ArrowLeft"){
        prevImg()
    }else if(e.key == "Escape"){
        boxContainer.style.display = "none"
    }
})

boxContainer.addEventListener('click',function(){
    boxContainer.style.display = "none"
})
boxItem.addEventListener('click',function(e){
    e.stopPropagation()
})
