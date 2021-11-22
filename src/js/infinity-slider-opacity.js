const MyInfinity = () => {
    let infinity = document.querySelector('.infinity');
    let singles = Array.prototype.slice.call(infinity.childNodes);
    let current = 0
    let left =  document.querySelector('.infinity__button--left');
    let right =  document.querySelector('.infinity__button--right ');


  function  slider() {
      for (var i = 0; i < singles.length; ++i) {
          singles[i].classList.add('opacity')
      }
      singles[current ].classList.remove('opacity')
    }

    slider();

    left.onclick = function(){
        if (current-1 === -1){
            current= singles .length-1
        }else{
            current--
        }
        slider()
    }

    right.onclick = function(){
        if (current+1 === singles .length){
            current= 0
        }else{
            current++
        }
        slider()
    }

//
// var countActive = true
//     function main(){
// if(countActive ===true){
//         slider()
//         if (current+1 === singles .length){
//             current= 0
//         }else{
//             current++
//         }
//         setTimeout(main,5000);
//     console.log(countActive );
// }
//     }
//     main();





};
MyInfinity();

