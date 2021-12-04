'use ctrict'

    const MyTabs = () => {
        let tabs = document.querySelectorAll('.tabs-container-js');
        tabs.forEach((cell)=>{
            let singles = Array.prototype.slice.call(cell.children);

        singles.forEach((c) => {
            let title = c.querySelector('.tab-title-js')
            let span = title.querySelectorAll(' span');
            let hidden = c.querySelector('.tab-hidden-js');
            let svg = c.querySelector('.tab-title-js i');
            hidden.style.cssText = " transform: scaleY(0);  transition:  all 0s ease-in-out"
            hidden.style.height = `0px`
            function openItems(e) {

                if (hidden.style.height === "0px") {
                    hidden.style.cssText = " transform: scaleY(1);  transition:  all .2s ease-in-out"
                    svg.classList.add("is-active")
                    hidden.style.height = `${ hidden.scrollHeight }px`
                    hidden.animate([
                        { height: '0px' },
                        { height: `${ hidden.scrollHeight }px` },
                    ], {
                        duration: 200,
                        easing: 'ease-in-out',
                    })

                } else {
                    hidden.style.cssText = " transform: scaleY(0);  transition:  all .2s ease-in-out"
                    svg.classList.remove("is-active")
                    hidden.animate([
                        { height: `${ hidden.scrollHeight }px` },
                        { height: '0px' },
                    ], {
                        duration: 200,
                        easing: 'ease-in-out',
                    })
                    hidden.style.height = "0";
                }
            }


            title.addEventListener('click', openItems)

        })
        })

    };
document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.querySelectorAll('.tabs-container-js ');
    if(tabs.length){
        MyTabs();
    }

});



