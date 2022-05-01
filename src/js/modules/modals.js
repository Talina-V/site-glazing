const modals = () => {
    function bindModal(trigerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.style.owerflow = "hidden"; 
                // document.body.classsList.add('modal-open');          
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = "none";
            // document.body.style.owerflow = "";
            document.body.classsList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                // document.body.style.owerflow = "";
                document.body.classsList.remove('modal-open');
            }
        });
    }
    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.owerflow = "hidden";
        }, time);
    }
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 3000);
};

export default modals;