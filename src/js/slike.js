'use strict';

import { initPopupCommon} from './popup.js';




const SLIKEuno  = () => {

    // -----параметры----------
    let duration = 800

    // --/---параметры----------
    let Slider= document.querySelector('.slike-uno .slike__track')
    let children =   Array.prototype.slice.call(Slider.children);
    let singles = [];
    let  prev = document.querySelector('.slike-uno .slike-arrow-left');
    let next = document.querySelector('.slike-uno .slike-arrow-right');


    function Order() {
        for (let i = 0; i < children.length ; ++i) {
            singles[i] = children[i].innerHTML
            children[i].remove();
        }
    }Order()


    let count = singles.length;
    let share = 100


// ----------StartOrder----------------------
    function StartOrder() {
        for (let i = 0; i < children.length ; ++i) {
            let newEl = document.createElement('li')
            newEl.classList.add("slike__item")
            newEl.innerHTML =  singles[i]
            newEl.style.flex = `1 0 ${share}%`
            Slider.append(newEl);
        }
    }
    StartOrder()
    // ---------/-- StartOrder--------




// -----MoveTrackRight--------
    function MoveTrackRight(){
        if(count === 0){
            count = singles.length;
        }


        // {{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}
        let newEl = document.createElement('li')
        newEl.classList.add("slike__item")
        newEl.style.flex = `1 0 ${share}%`
        for (let i = 0; i < singles.length; ++i) {
            if(i === count-1){
                newEl.innerHTML =  singles[count-1]
            }
        }
        Slider.insertBefore(newEl, Slider.firstChild)
        // {{{{{{{{{{{{}}}}}}}}}}}}
        Slider.style.transition = 'all 0s ease-in-out'
        Slider.style.transform=  `translate(-${share}%)`
        // {{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}
        setTimeout(()=>{
            Slider.style.transition = 'all .8s ease-in-out'
            Slider.style.transform=  `translate(0%)`
        }, 1);
        // {{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}
        setTimeout(()=>{
            Slider.lastElementChild.remove();  }, duration);
        count--
    }

// -----/--MoveTrackRight--------

// // --------------- MoveTrackLeft---------------
    count =0


    function  MoveTrackLeft() {
        if(count === singles.length ){
            count = 0;
        }
        let temp =   count
        console.log("добавится элемент "+count)
        let newEl = document.createElement('li')
        newEl.classList.add("slike__item")
        newEl.style.flex = `1 0 ${share}%`
        for (let i = 0; i < singles.length; ++i) {
            if(i === temp){
                newEl.innerHTML =  singles[temp]
            }
        }
        // // let popupNew =  newEl.querySelector('.popup-init-js ');
        // // popupNew.addEventListener('click',(e) =>{
        // //     initPopupCommon();
        // // });
        //
        Slider.append(newEl);
        //

        // {{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}
        Slider.style.transition = 'all .8s ease-in-out'
        Slider.style.transform=  `translate(-${share}%)`

        // {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}

        setTimeout(()=>{
            Slider.firstElementChild.remove();
        }, duration );

        // {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

        setTimeout(()=>{
            Slider.style.transform=  'translate(0%)';
            Slider.style.transition = 'all 0s linear'
            //
        }, duration );

        count++

    }

// -------------/-- MoveTrackLeft---------------


// // -----prev------
    prev.addEventListener('click',(e) =>{
        MoveTrackRight();
    });
// ----/-prev------
//
// // ---------next------------
    next.addEventListener('click',(e) =>{
        MoveTrackLeft();
    });
// --------/-next------------


};

let ALL = document.querySelectorAll('.slike-uno .slike__track');
if(ALL.length){
    SLIKEuno();
}


// ==========================================
// ==========================================
// ==========================================
// ==========================================
// ==========================================
// ==========================================
// ==========================================
const SLIKE  = () => {

    // -----параметры----------
    let duration = 800

    // --/---параметры----------
    let Slider= document.querySelector('.slike .slike__track')
    let children =   Array.prototype.slice.call(Slider.children);
    let singles = [];
    let  prev = document.querySelector('.slike .slike-arrow-left');
    let next = document.querySelector('.slike .slike-arrow-right');


    function Order() {
        for (let i = 0; i < children.length ; ++i) {
            singles[i] = children[i].innerHTML
            children[i].remove();
        }
    }Order()


    let count = singles.length;
    let share = 100/singles.length


// ----------StartOrder----------------------
    function StartOrder() {
        for (let i = 0; i < children.length ; ++i) {
            let newEl = document.createElement('li')
            newEl.classList.add("slike__item")
            newEl.innerHTML =  singles[i]
            newEl.style.flex = `1 0 ${share}%`
            let popupNew =  newEl.querySelector('.popup-init-js ');
            popupNew.addEventListener('click',(e) =>{
                initPopupCommon();
            });
            Slider.append(newEl);
        }
    }
    StartOrder()
    // ---------/-- StartOrder--------




// -----MoveTrackRight--------
    function MoveTrackRight(){
        if(count === 0){
            count = singles.length;
        }
        let newEl = document.createElement('li')
        newEl.classList.add("slike__item")
        newEl.style.flex = `1 0 ${share}%`
        for (let i = 0; i < singles.length; ++i) {
            if(i === count-1){
                newEl.innerHTML =  singles[count-1]
            }
        }
        let popupNew =  newEl.querySelector('.popup-init-js ');
        popupNew.addEventListener('click',(e) =>{
            initPopupCommon();
        });
        Slider.insertBefore(newEl, Slider.firstChild)

        // {{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}
        Slider.style.transition = 'all 0s ease-in-out'
        Slider.style.transform=  `translate(-${share}%)`
        // {{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}
        setTimeout(()=>{
            Slider.style.transition = 'all .8s ease-in-out'
            Slider.style.transform=  `translate(0%)`
        }, 1);


        // {{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}

        setTimeout(()=>{
            Slider.lastElementChild.remove();  }, duration);


        count--

    }

// -----/--MoveTrackRight--------

// // --------------- MoveTrackLeft---------------
    count =0


    function  MoveTrackLeft() {
        if(count === singles.length ){
            count = 0;
        }
        let temp =   count
        console.log("добавится элемент "+count)
        let newEl = document.createElement('li')
        newEl.classList.add("slike__item")
        newEl.style.flex = `1 0 ${share}%`
        for (let i = 0; i < singles.length; ++i) {
            if(i === temp){
                newEl.innerHTML =  singles[temp]
            }
        }
        let popupNew =  newEl.querySelector('.popup-init-js ');
        popupNew.addEventListener('click',(e) =>{
            initPopupCommon();
        });
        //
        Slider.append(newEl);
        //

        // {{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}
        Slider.style.transition = 'all .8s ease-in-out'
        Slider.style.transform=  `translate(-${share}%)`

        // {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}

        setTimeout(()=>{
            Slider.firstElementChild.remove();
        }, duration );

        // {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

        setTimeout(()=>{
            Slider.style.transform=  'translate(0%)';
            Slider.style.transition = 'all 0s linear'
            //
        }, duration );

        count++

    }

// -------------/-- MoveTrackLeft---------------


// // -----prev------
    prev.addEventListener('click',(e) =>{
        MoveTrackRight();
    });
// ----/-prev------
//
// // ---------next------------
    next.addEventListener('click',(e) =>{
        MoveTrackLeft();
    });
// --------/-next------------


};

SLIKE();















