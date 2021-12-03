'use strict'
const MySelect = () => {
    let  selects =   document.querySelectorAll('.select ');
    selects.forEach((cell)=>{

        const selectHeader = cell.querySelector('.select__header');
        const selectItem = cell.querySelectorAll('.select__item');

        selectHeader.addEventListener('click', selectToggle)

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
            this.closest('.select').querySelector('.select__icon').classList.toggle('is-active');

        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');
            this.closest('.select').querySelector('.select__icon').classList.toggle('is-active');
        }

    })

}
MySelect();