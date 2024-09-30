const imgs =document.querySelectorAll('.header-slider ul img'); //select the slider class, ul ,img

const prev_btn = document.querySelector('.control_prev');   //select the control prev btn class

const next_btn = document.querySelector('.control_next');   //select the control next btn class

let n=0;

function changeSlide(){
    for ( let i=0; i< imgs.length; i++){
        imgs[i].style.display ='none';
    }

    imgs[n].style.display ='block';


}
changeSlide();

prev_btn.addEventListener('click', (e)=>{    //slider prev_btn working
    if(n>0){
        n--;
    }
    else{
        n=imgs.length -1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{      //slider next_btn working
    if(n < imgs.length -1){
        n++;
    }
    else{
        n=0 ;
    }
    changeSlide();
})


const scrollContainer = document.querySelectorAll('.product');    //selecting product class

for (const item of scrollContainer) {
    item.addEventListener('wheel', (evnt)=>{
        evnt.preventDefault();
        item.scrollLeft += evnt.deltaY
    })
}




