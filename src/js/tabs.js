'use ctrict'

    const MyTabs = () => {
        let tabs = document.querySelector('.tabs-container-js');


        let singles = Array.prototype.slice.call(tabs.children);
        singles.forEach((cell) => {
            let title = cell.querySelector('.tab-title-js')
            let span = title.querySelectorAll(' span');
            let hidden = cell.querySelector('.tab-hidden-js');
            let svg = cell.querySelector('.tab-title-js svg');
            hidden.style.cssText = " transform: scaleY(0);  transition:  all 0s ease-in-out"
            hidden.style.height = `0px`
            function openItems(e) {

                if (hidden.style.height === "0px") {
                    hidden.style.cssText = " transform: scaleY(1);  transition:  all .2s ease-in-out"
                    svg.style.cssText = "transform: translate(0, -50%) rotate(180deg); stroke: #282828;"
                    hidden.style.height = `${ hidden.scrollHeight }px`
                    for (let i = 0; i < span.length; ++i) { span[i].style.cssText = "color: #282828;" }
                    hidden.animate([
                        { height: '0px' },
                        { height: `${ hidden.scrollHeight }px` },
                    ], {
                        duration: 200,
                        easing: 'ease-in-out',
                    })

                } else {
                    hidden.style.cssText = " transform: scaleY(0);  transition:  all .2s ease-in-out"
                    svg.style.cssText = "transform: translate(0, -50%) rotate(0deg); stroke:  #B18223 ;"
                    for (let i = 0; i < span.length; ++i) { span[i].style.cssText = "color: #B18223;" }
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


    };
document.addEventListener('DOMContentLoaded', function(){
    MyTabs();
});



