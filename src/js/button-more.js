'use strict';

const MyMore = () => {
    let reviews = document.querySelectorAll(".contentMore")
    reviews.forEach((cell)=> {
        let singles = Array.prototype.slice.call(cell.children);
        for (let i = 8; i < singles.length; ++i) {
            singles[i].classList.add("not-active")
        }
        let button = cell.nextElementSibling;
        let ToggleSpans = button.querySelectorAll('span');
        ToggleSpans.forEach((uno)=>{
            uno.classList.contains("visible-span-js") ? uno.style.cssText= "opacity: 1; font-size: 20px;" : uno.style.cssText= "opacity: 0; font-size: 0px;"
        })
        let flag = false
// ==========================

        button.addEventListener('click',(e) =>{
            e.preventDefault();
            function openAddition() {
                for (let i = 8; i < singles.length; ++i) {
                    singles[i].classList.add("is-active")
                }
                button.classList.add("is-active")
                ToggleSpans.forEach((uno)=>{
                    uno.classList.contains("visible-span-js") ? uno.style.cssText= "opacity: 0; font-size: 0px;" : uno.style.cssText= "opacity: 1; font-size: 20px;"
                })
            }

// ==========================

            function closeAddition() {
                for (let i = 8; i < singles.length; ++i) {
                    singles[i].classList.remove("is-active")
                }
                button.classList.remove("is-active")
                ToggleSpans.forEach((uno)=>{
                    uno.classList.contains("visible-span-js") ? uno.style.cssText= "opacity: 1; font-size: 20px;" : uno.style.cssText= "opacity: 0; font-size: 0px;"
                })
            }

// ====================

            if(flag === false){
                openAddition()
                flag = true
            }else{
                closeAddition()
                flag = false
            }
        })

    })

}

// --------------------------------------

let reviews = document.querySelectorAll('.contentMore');

if(reviews.length ) {
    MyMore();
}