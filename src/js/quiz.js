

// if(window.location.pathname == '/') {//вызывается  только на главной странице

    const MyQuiz = () => {
        let Q = document.querySelector('.Q-js');
        let track = document.querySelector('.Quiz-bar__track');
        let step = 0;
        let parent = document.querySelector('.QContent__column');
        let QBlocks = Array.prototype.slice.call(parent.children);
        let Block = document.querySelectorAll('.QBlock')
        let Text = "25%";

        track.innerText = Text;


        Q.addEventListener('click', function (event) {

            // function initPopup() {
            //     let pop = document.querySelector('#popup');
            //     let close = document.querySelector('.popup__close');
            //     pop.style.cssText= " display: block; opacity:1; "
            //     document.querySelector("body").style.cssText= "overflow: hidden"
            //     let overlay =  document.querySelector('.popup__overlay');
            //     close.addEventListener('click',(e) =>{
            //         pop.style.cssText= "display: none; opacity: 0;  "
            //         document.querySelector("body").style.cssText= "overflow: visible"
            //     });
            //     overlay.addEventListener('click',(e) =>{
            //         if (e.target.classList.contains("popup__overlay")) {
            //             console.log('block-6-form__body')
            //             pop.style.cssText= "display: none; opacity: 0;  "
            //             document.querySelector("body").style.cssText= "overflow: visible"
            //         }
            //     });
            // }

            step++

            if (step === 3) {
                Q.innerText ="Узнать цену";
                track.innerText= "100%";
                track.style.cssText ="width: 100%;"

            }



            if (step === 4) {
                Q.style.cssText= " color: white; text-shadow: 0 0 3px rgba(0,0,0, .4); box-shadow:  0 0 8px rgba(0,0,0, .4);"
                Q.setAttribute("disabled", "disabled");
                Q.innerText ="Заполните форму выше";

                document.querySelector('.QContent__block-button span').style.cssText="font-size: 0;";
                track.innerText= "100%";
                track.style.cssText ="width: 100%;"
                let  myNode = document.getElementsByClassName("Person-card__icon");
                let el;
                while ((el = myNode[0])) {
                    el.parentNode.removeChild(el);
                }
                document.querySelectorAll('.Person-card__mask').forEach((cell)=>{cell.style.cssText= "opacity: 0;";    })
                document.querySelectorAll('.Person-card__text').forEach((cell)=>{cell.style.cssText= "color: #fff; font-size: 16px;text-shadow: 0 0 3px rgba(0,0,0, .8);";    });

                for (let i = 0; i < QBlocks.length; ++i) {
                    QBlocks[i].style.cssText = ` opacity: 0;`

                    setTimeout(() => {
                        for (var i = 0; i < Block.length; ++i) {
                            Block[i].classList.remove("QBlock-active")
                        }
                        QBlocks[step].classList.add("QBlock-active")
                        track.innerText = `100%`
                    }, 100);

                }

                setTimeout(() => {
                    QBlocks[step].style.cssText = ` opacity: 1;`
                }, 300);



            }else{

                for (let i = 0; i < QBlocks.length; ++i) {
                    QBlocks[i].style.cssText = ` opacity: 0;`
                    document.querySelector('.QContent__block-button span').style.cssText="font-size: 12px;";
                    setTimeout(() => {
                        for (let i = 0; i < Block.length; ++i) {
                            Block[i].classList.remove("QBlock-active")
                        }
                        QBlocks[step].classList.add("QBlock-active")
                        track.innerText = `${(step+1)*25}%`
                    }, 100);

                }

                setTimeout(() => {
                    QBlocks[step].style.cssText = ` opacity: 1;`
                }, 300);
                track.style.cssText = `width: ${(step + 1) * 25}% `;
                document.querySelector('.Person-card__mask').style.cssText= "opacity: 1;";
            }




            // if (step === 3) {
            //     Q.innerText ="Узнать цену";
            //     Q.style.cssText= " color: white; text-shadow: 0 0 3px rgba(0,0,0, .4); box-shadow:  0 0 8px rgba(0,0,0, .4);"
            //     track.innerText= "100%";
            //     track.style.cssText ="width: 100%;"
            //     let  myNode = document.getElementsByClassName("Person-card__icon");
            //     var el;
            //     while ((el = myNode[0])) {
            //         el.parentNode.removeChild(el);
            //     }
            //
            //     }

            // step++
            // } else {


            console.log(step);



            // --------------------

            // -----------------------------
            // === 3
            // }
            // === 4
            // }
            // });

            //----------- addEventListener
        })

        // -------/-------MyQuiz
    };
let Block = document.querySelectorAll('.QBlock')
if (Block.length) {
    MyQuiz();
}


// }


