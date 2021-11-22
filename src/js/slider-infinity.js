const MyInfinity = () => {
    let infinity = document.querySelector('.infinity');
    let singles = Array.prototype.slice.call(infinity.childNodes);
    // let slides = singles.reverse();
    let slides = singles
    let slidesnew = [];
    for (let i = 0; i < slides.length; ++i) {
        slidesnew[i] = slides[i].innerHTML
        slides[i].remove();
    }
    let slidesToShow = 1
    let  w =   100/slidesToShow


    function drow() {
        for (let i = 0; i < slides.length; ++i) {
            let single = document.createElement('div');
            single.classList.add("single", "infinity__single")
            single.innerHTML = slidesnew[i];
            single.style.right= i * w +'%'
            infinity.appendChild(single)
        }
    }

    drow();

    let left = document.querySelector('.infinity__button--left');

    function drowLeft() {
        for (var i = 0; i < infinity.children.length; ++i) {
            infinity.children[i].style.right= i * w -w + '%'
            if (infinity.children.length <= 2) {
                drow();
            }
        }
        setTimeout(() => {
            infinity.removeChild(infinity.firstChild)
        }, 1000);
    }


    // не хватает памяти браузера
    // (function main(){
    //         drowLeft()
    //     setTimeout(main,5000);
    // })(0);
    //
    //
    left.onclick = drowLeft



    function addStyle() {
        const style = document.createElement('style');
        style.id = "sliderCarousel-style";
        document.head.appendChild(style);
        style.textContent = `
.infinity {
  margin: 50px auto 0;
  width: 50%;
  height: 200px;
  position: relative;
  border: 1px solid;
}

.single {
  position: absolute;
  top: 0;
  width: ${w}%;
  height: 200px;
  transition: all 1s ease-in-out;
}

.silgle__title {
  font-size: 40px;
  color: dimgrey;
  z-index: 4;
  position: relative;
}

.single__img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  min-height: 100%;
  width: 100%;
}

.infinity__button {
  font-size: 20px;
  font-weight: 700;
  color: royalblue;
  width: 40px;
  height: 40px;
  background: lime;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  margin: 10px;
  transition: all 0.2s ease-in-out;
}
.infinity__button:hover {
  background: #ccffcc;
  color: #99afef;
}
        `
    }

    addStyle();



    // let stepRight = 0;
    // let offsetRight = 0;
    //
    // function drowLeft() {
    //     let single = document.createElement('div');
    //     single.classList.add("single","infinity__single");
    //     single.innerHTML =   "<div  class = 'single-img' ><div class= 'imgs'></div></div>" ;
    //     let img = document.createElement('img');
    //     img.src = slidesImgs[stepRight];
    //     single.querySelector(".imgs").appendChild(img )
    //     infinity.appendChild(single)
    //     single.style.left  = -offsetRight *512 + 'px'
    //     offsetRight++;
    //     stepRight  ++;
    //     // if (stepRight < slides.length){
    //     //     stepRight = slides.length;
    //     // }else{
    //     //     stepRight++;
    //     // }
    // }
    //
    // for (var i = 0; i < slidesImgs.length; ++i) {
    //     drowLeft();
    // }


    //
    //  let left = document.querySelector('.infinity__button--left');
    //  let array = Array.prototype.slice.call(infinity.childNodes);
    //
    //
    // let offsetInfinityRight = 1
    //
    //  function moveLeft() {
    //      array.shift()
    //
    //      console.log(array);
    // array.forEach((cell)=>{
    //  array[0].style.left = 1*512 +'px'
    //  array[1].style.left = 0 +'px'
    //  array[2].style.left = -1*512 +'px'
    //  array.shift

    // offsetInfinityRight ++
    //  setTimeout(()=>{
    // array.shift
    // }, 1000);
    // });
    // console.log(offsetInfinityRight );
    // }

    // left.onclick = moveLeft;


    //

    //
    // function moveLeft() {
    //     // document.onclick = null;
    //     let slidesInfinity = document.querySelectorAll(".single")
    //     let offsetInfinity = 0;
    //     for (let i = 0; i < slidesInfinity .length; ++i) {
    //         slidesInfinity[i].style.left =  -512*offsetInfinity + 512 + "px"
    //         offsetInfinity ++
    //     }
    //     setTimeout(()=>{
    //         left .onclick = moveLeft;
    //         slidesInfinity[0].remove();
    //         drowLeft();
    //     }, 1000);
    // }
    //
    // left .onclick = moveLeft;


// let right = document.querySelector('.infinity__button--right');

    // function moveRight() {
    //     document.onclick = null;
    //     let slidesInfinity = document.querySelectorAll(".single")
    //     let offsetInfinity = 0;
    //     for (let i = 0; i < slidesInfinity .length; ++i) {
    //         slidesInfinity[i].style.left = 512*offsetInfinity - 512 + "px"
    //         offsetInfinity ++
    //     }
    //     setTimeout(()=>{
    //         right .onclick = moveRight;
    //         slidesInfinity[0].remove();
    //         drow();
    //         }, 1000);
    // }

    // drow();
    // drow();


    // right .onclick = moveRight;

};
MyInfinity();
