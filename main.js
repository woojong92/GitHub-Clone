// 즉시실행 함수
(function(window, document){
    `use strict`;

    const $toggles = document.querySelectorAll('.toggle'); // NodeList라는 유사배열
    const $toggleBtn = document.getElementById('toggle-btn');
    
    $toggleBtn.addEventListener('click', () => {
        toggleElements();
    });

    window.addEventListener('resize', () => {
        if(window.innerWidth > 1024){
            // Off toggle element
            offElements();
        }
    })

    function toggleElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.toggle('on');
        });
    }
    
    function offElements() {
        [].forEach.call($toggles, (toggle) => {
            toggle.classList.remove('on');
        });      
    }
})(window, document);