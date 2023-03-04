const imgs=document.querySelector(".img-container")
const leftBtn=document.querySelector(".left")
const rightBtn=document.querySelector(".right")
const img=document.querySelectorAll(".img-container img")

let idx=0;

const changeImage=()=>{
    if (idx>img.length-1) {
        idx=0;
    }else if (idx<0) {
        idx=img.length-1;
    }
    imgs.style.transform = `translateX(${-idx*500}px)`;
}

rightBtn.addEventListener("click",()=>{
    idx++
    resetInterval()
    changeImage()
})
leftBtn.addEventListener("click",()=>{
    idx--
    resetInterval()
    changeImage()
})

const run=()=>{
    idx++;
    changeImage()


}
const resetInterval=()=>{
    clearInterval(interval)
    interval=setInterval(() => {
        run()
    }, 3000); 
}
let interval=setInterval(() => {
    run()
}, 3000);

