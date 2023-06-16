function searchFunction() {
    var input, filter, ul, li, a, i, p, div;
    input = document.getElementById('show-search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('wrapper2');
    li = ul.getElementsByTagName('li');
    p = document.getElementById('show');
    var has = false;

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')
        [0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            has = true;
        }

        else{
            li[i].style.display = 'none';  
            
        }
    }
    if(has == false){
        p.style.display = 'block';  
    }else{
        p.style.display = 'none';  

    }

}
