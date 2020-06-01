var conversas = document.getElementsByClassName('_1wjpf _3NFp9 _3FXB1');
Array.from(conversas).forEach(function(element){
    element.addEventListener('click', function(){
        document.getElementsByClassName('_2S1VP copyable-text selectable-text')[1].addEventListener('click', function(){
            document.getElementsByClassName('_2S1VP copyable-text selectable-text')[1].textContent = 'Darlan: ';
        });
    })
});