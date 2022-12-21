(function(){
    console.log("eheheheh")
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    
    const btnTheme = $('.btn-theme');
    btnTheme.onclick = function() {
        const app = $('body');
        const listIcon = $$('.icon-theme');
        listIcon.forEach(element => {
            element.classList.toggle('active');
        });
        app.classList.toggle('light-mode');
    }


})();
