    var grid =['item1','item2','item3','item4','item5','item6','item7','item8','item9'];
    var arr1 =[];
    var arr2 =[];
    var arr3 =[];
    var arr4 =[];
    var arr5 =[];
    var arr6 =[];
    var arr7 =[];
    var arr8 =[];
    var success;
    var gameOver = false;
    var arr =[];
    var clicked = 0;
    var choice = 9;
    var playerScore=0;
    var cpuScore=0;
    
    var player={
        name:'Player 1',
        team:'',
        arr : []
    };
    var cpu = {
        name:'computer',
        team:'',
        arr: []
    };

    $('-cpu-score').html(cpuScore);
    $('-you-score').html(playerScore);

    function findElemet(check){
        arr1 = ['item1','item2','item3'];
        arr2 = ['item4','item5','item6'];
        arr3 = ['item7','item8','item9'];
        arr4 = ['item1','item4','item7'];
        arr5 = ['item2','item5','item8'];
        arr6 = ['item3','item6','item9'];
        arr7 = ['item1','item5','item9'];
        arr8 = ['item3','item5','item7'];
    }
    




    (function() {
    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    function choiseCase(id) {

    }

    // Vide le contenu de toute les cases
    function rest() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }

})();