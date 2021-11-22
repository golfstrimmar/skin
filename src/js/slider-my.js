const MySlider = () => {
let track = document.querySelector('.slider-track__track');
let slides = Array.prototype.slice.call(track.childNodes);
let slidesDouble = [];
    for (let i = 0; i < slides .length; ++i) {
        slidesDouble[i] = slides[i].innerHTML;
        slides[i].remove();
    }
 let  right =    document.querySelector('.slider-track__button--right');
 let  left =    document.querySelector('.slider-track__button--left');
 let slidesToShow  =    3
  let count= 0;
  let length = slidesDouble.length
  let  shift  = 200;
    let id = 0

// -------------drowRight--------------------------------
    const drowRight = function(i)  {
            let  create =   document.createElement('div');
            create.classList.add("slider-track__item")
            create.setAttribute("id", i+1)
            create.textContent = slidesDouble[i]
        track.append(create)
    };

    for (let i = 0; i < slidesToShow; ++i) {
        drowRight(i)
    }
    count=slidesToShow

// --------------drowLeft---------------------------------
    const drowLeft = function(i)  {
        let  create =   document.createElement('div');
        create.classList.add("slider-track__item")
        create.setAttribute("id", i+1)
        create.textContent = slidesDouble[i]
        track.prepend(create)
    };


// -----------------moveRight-----------------------------

    const moveRight  = () => {
        if (count>=length ){count=0}
        drowRight(count);
        track.style.cssText=` transform: translateX(-${shift }px)`
        setTimeout(()=>{
            id = track .firstChild.getAttribute("id")
            track .removeChild(track .firstChild);
            track.style.cssText=` transform: translateX(0px); transition: all 0s ease-in-out;`
        }, 1000);
        count++
        console.log(count);
        console.log(id);
    };

    right.onclick = moveRight;
// ----------------------------------------------

// ----------------------------------------------
    const  moveLeft  = () => {

        drowLeft(id)
        track.style.cssText=` transform: translateX(-${shift }px); transition: all 0s ease-in-out;`
        setTimeout(()=>{
        track.style.cssText=` transform: translateX(0px; transition: all 1s ease-in-out;)`
        }, 1);

        setTimeout(()=>{
            track .removeChild(track .lastChild);
        }, 1000);
        count--
        id--
        if (id<0){id=length-1}
        console.log(count);
        console.log(id);
    };
    left.onclick =  moveLeft;

};MySlider();






