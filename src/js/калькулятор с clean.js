"use strict"

const MyCalculator  = () => {
    const button  =   document.querySelector('.page-template-skaiiuokl-clean .calc__button ');
    const buttonNew  =   document.querySelector('.calc__button--2');
    const totalSpan  =   document.querySelector('.total-js-1 ');
    const totalSpan2 = document.querySelector('.total-js-2 ');
    let cards = document.querySelector('.popup__cards ');
    let singles = Array.prototype.slice.call(cards.children);
    let number =0;




// ++++++++++++++++++++++page1++++++++++++++++++++++++++++++++++++++++++
    const PAGE1 = () => {


        let page1 = document.querySelector('.page-template-skaiiuokl-clean');
        if(page1){
            page1.onload = () => {
                if(totalSpan){
                    localStorage.setItem('total',  200)
                    totalSpan.innerHTML =  localStorage.getItem('total')
                }
            }
        }


// -------------------------- назначение тарифов ---------------------------------
        function changeTotalSpan(i) {
            if(i===0){
                localStorage.setItem('total',  200)

            }else if(i===1){
                localStorage.setItem('total',  300)

            }else if(i===2){
                localStorage.setItem('total',  400)
            }

            totalSpan.animate([
                { fontSize: '0' },
                { fontSize: '30px' }
            ], {
                duration: 300,
                easing: 'ease-in-out',
            })
            totalSpan.innerHTML = localStorage.getItem('total')
        }
// ----------------------------------------------------------

        for (let i = 0; i < singles.length; ++i) {
            singles[i].addEventListener('click',() =>{
                changeTotalSpan(i)
            });
        }
// ----------------
        if(button){
            button.addEventListener('click',(e) =>{
                totalSpan.innerHTML = localStorage.getItem('total')
            });
        }
    };PAGE1();
// ++++++++++++++++++++++page2++++++++++++++++++++++++++++++++++++++++++


    const PAGE2 = () => {
        let page2 = document.querySelector('.page-template-skaiiuokl-clean-2');
        // ---------------------
        function  SetNewPrice(){
            totalSpan2.animate([
                { fontSize: '0' },
                { fontSize: '30px' }
            ], {
                duration: 300,
                easing: 'ease-in-out',
            })
            totalSpan2.innerHTML  = localStorage.getItem('total')

        }
        // ------------------

        if(page2){
            page2.onload = () => {
                SetNewPrice()
            }


            // ============input для range=====================
            let showRangeAmount  =   document.querySelector('#calculator-range-amount ');
            // =========== range=================
            const range = document.querySelector('#test1 ');
            range.value = 50;
            // ===========все  check=================
            const popupChecks = document.querySelector('.popup__checks ');
            const amounts = document.querySelectorAll('.popup__radio')
            // ===========================
            let sum = 0;

            // ------мапинг для range и инпута над ним------------
            function asigneValue(){
                showRangeAmount.value = range.value;
            }
            asigneValue();
            range.addEventListener('input',(e) =>{
                asigneValue();
            });

// -----------назначение ставок за один метр ------------
            const amountPrices = [
                {
                    name: 'one',
                    amount: 2
                },
                {
                    name: 'two',
                    amount: 4
                },
                {
                    name: 'three',
                    amount: 6
                },
                {
                    name: 'four',
                    amount: 8
                },
            ];
            // --------------------------------------------
            function changeTotal() {
                popupChecks.addEventListener('click', function (event) {
                    let et = event.target


                    if (!et.classList.contains('currentAmount') && et.checked) {
                        // возвращаем входное значение хранилища
                        let currentStorage = localStorage.getItem('total');
                        localStorage.setItem('total', currentStorage - sum);
                        console.log(currentStorage);

                        for (let i = 0; i < amounts.length; ++i) {amounts[i].classList.remove('currentAmount') }
                        et.classList.add('currentAmount')
                        let dataName = et.getAttribute("data-name")
                        for (let i = 0; i < amountPrices.length; ++i) {
                            if (amountPrices[i].name === dataName) {
                                sum = amountPrices[i].amount * range.value
                                let currentTotal = Number(localStorage.getItem('total'))
                                localStorage.setItem('total', currentTotal + sum)
                                SetNewPrice();
                            }
                        }
                    }
                });
            }
            changeTotal();
        }
    };

    PAGE2();

// ++++++++++++++++++++++page3 ++++++++++++++++++++++++++
    const PAGE3 = () => {

        let page3 = document.querySelector('.page-template-skaiiuokl-clean-3');
        const totalSpan3 =   document.querySelector('.total-js-3 ');
        // ---------------------
        function  SetNewPrice(){
            totalSpan3.animate([
                { fontSize: '0' },
                { fontSize: '30px' }
            ], {
                duration: 300,
                easing: 'ease-in-out',
            })
            totalSpan3.innerHTML  = localStorage.getItem('total')

        }
        // ------------------

        if(page3){
            page3.onload = () => {
                SetNewPrice()
            }
        }


    };PAGE3();


};MyCalculator();