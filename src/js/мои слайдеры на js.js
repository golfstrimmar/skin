



// ==============.galery-arrows================



// ============MyGalaryAutoPlay======бесконечно двигающийся слайдер===============
const MyGalaryAutoPlay   = () => {
    let Galerys = document.querySelectorAll('.galery');

    // ----------- Galery foreach
    Galerys .forEach((Galery)=> {
        let  chost = [];
        let  singles =  [];
        singles = Array.prototype.slice.call(Galery.children);
        let count = 0;

        if(singles.length >= 4){
            singles.splice(0, 1000 )
            chost.splice(0, 1000 )
        }

        for (let i = 0; i < singles.length; ++i) {
            chost[i] = singles[i].innerHTML;
            singles[i].remove();
        }


        function double() {
            for (let c = 0; c < singles.length; ++c) {
                let picture = document.createElement('div');
                picture.classList.add("galery__item");
                picture.innerHTML = chost[c]
                Galery.append(picture)
            }
        }
        double();
        double();
        double();


// -----MoveTrack--------
        let GalerySingles = Array.prototype.slice.call(Galery.children);
        let countSingles = GalerySingles.length - 1
        let    LastChild = 0

        function MoveTrack(){
            if (countSingles === -1){
                countSingles = GalerySingles.length - 1;
                for (let i = 0; i < GalerySingles.length; ++i) { GalerySingles[i].style.cssText=  `order: ${i+1}`; }
            }
            LastChild = GalerySingles[countSingles]
            countSingles = countSingles-1
            LastChild.style.cssText= " order: -1  ";
            Galery.animate([
                { transform:  'translate(-210px)'},
                { transform:  'translate(0px)'},
            ], {
                duration: 5000,
            })
            setTimeout(()=>{
                Galery.style.cssText= `transform: translate(0px); `;}, 1);
        }

// -----/MoveTrack--------

// -------- main---------------
        function main( ){
            if(count === 1){
                count--
                MoveTrack()
            }else{
                count++
                MoveTrack()
            }
            setTimeout(main,5000);
        }
// ---------
        main();

        // Galery.addEventListener('click',(e) =>{
        //     MoveTrack()
        // });

    })
// -----/Galery foreach--------------


};

MyGalaryAutoPlay();

// ------------------------------картинки появляются по клику-------------------------
const MyPosts = () => {
    let slider = document.querySelector('.slider-posts ')
    let singlesRevers = Array.prototype.slice.call(slider.children);
    let singlesP = singlesRevers.reverse()
    let countP = 0;
    let  prevP = document.querySelector('.slider-prev');
    let nextP = document.querySelector('.slider-next');
    let   currentP= 0;


    function ResetOpacity(){
        for (const item of singlesP){
            item.style.cssText= " opacity: 0;   ";
        }
    }

    function StartOrder(){

        for (let i = 0; i < singlesP.length; ++i) {
            singlesP[i].style.cssText=  `z-index: ${i+1}; `  ;

        }
        ResetOpacity()
        for (let i = 0; i < singlesP.length; ++i) {
            singlesP[singlesP.length-1].style.opacity = "1";
        }
    }
    StartOrder();



// -----prev------
    prevP.addEventListener('click',(e) =>{
        countP++
        currentP =  singlesP.length - 1 - countP

        for (const item of singlesP){
            item.style.opacity = "0";
        }

        if(currentP === -1){

            ResetOpacity()
            StartOrder();
            currentP = 0
            countP = 0;
        }else{
            for (let i = 0; i < singlesP.length; ++i) {
                if(i === currentP){
                    setTimeout(()=>{
                        singlesP[i].style.cssText= `z-index: ${singlesP.length}; opacity: 1; transition: all .4s ease-in-out`
                    }, 200);
                }
            }
        }

    });

// ----/-prev------

// ---------next------------

// nextP.addEventListener('click',(e) =>{
//     countP++
//     console.log(countP)
//     for (let i = 0; i < singlesP.length; ++i) {
//         console.log(singlesP[countP])
//     }
// });
// --------/-next------------



};
MyPosts();

























