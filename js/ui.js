(function(){
    
    var cards = document.querySelectorAll('.user-card');
    var btnSelectAll = document.getElementById('selectAll');

    var updateCount = updateCount;
    var countSelectedCards = countSelectedCards;

    cards.forEach((el, idx, nodes) => {
        el.addEventListener('click', onClickHandle, true);
    });

    function onClickHandle(event){
        this.classList.toggle('active');
        updateCount( countSelectedCards() );
    };

    function countSelectedCards(){
        var actives = document.querySelectorAll('.user-card.active');
        return actives.length;
    };

    function updateCount(){
        var countSelected = countSelectedCards()
        document.querySelector('.head-info span').innerHTML = _parseCountToHTML(countSelected);
        document.querySelector('.users-count span').innerHTML = Number(countSelected);
    }

    function _parseCountToHTML(num){
        return num + "/" + cards.length;
    };

    countSelectedCards();
    updateCount();

    btnSelectAll.addEventListener('click', onHandleSelectAll, true);

    function onHandleSelectAll(){

        if( countSelectedCards() == cards.length )
            return false;

        Array.from(cards).map((card, idx, items) => {
            card.classList.remove('active');
            onClickHandle.apply(card);
        })
    };
    
})();