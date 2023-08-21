document.getElementById('makeSure').addEventListener('click', function() {
    const modalPage = document.getElementById('modalCard');
     modalPage.classList.remove('hidden');
})

document.getElementById('home').addEventListener('click', function(){
    window.location.href = 'index.html';
})
