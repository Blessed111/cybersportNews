const people = [
    { name: 'google', link: "https://www.google.com/"},
    { name: 'Youtube', link: "https://www.youtube.com/"},
    { name: 'Tubeyou', link: "https://www.youtube.com/"},
    { name: 'Electronic', link: "https://www.youtube.com/"},
    { name: 'S1mple', link: "https://www.youtube.com/"},
    { name: 'JW', link: "https://www.youtube.com/"},
    { name: 'Stew2K', link: "https://www.youtube.com/"},

];
    
    const list = document.getElementById('list');
    
    function setList(group) {
        clearList();
        for (const person of group) {
            var item = document.createElement('a');
            item.href = person.link;
            item.classList.add('list-group-item');
            const text = document.createTextNode(person.name);
            item.appendChild(text);
            list.appendChild(item);
        
            
        }
        if (group.length === 0){
        setNoResults();
        }
    }
    
    
    function clearList() {
        while(list.firstChild){
        list.removeChild(list.firstChild);
        }
    
    
    }
    
    function setNoResults() {
            const item = document.createElement('li');
            item.classList.add('list-group-item');
            const text = document.createTextNode("No results found");
            item.appendChild(text);
            list.appendChild(item);
    }
    
    function getRelevancy(value,searchTerm) {
        if (value === searchTerm) {
        return 2;
        } else if (value.starsWith(searchTerm)) {
        return 1;
        } else if (value.includes(searchTerm)) {
        return 0;
        }
    }
    
    
    const searchInput = document.getElementById('search');
    
    searchInput.addEventListener('keyup', (event) => {
    let value = event.target.value;
        if (value && value.trim().length > 0) {
            value = value.trim().toUpperCase();
            setList(people.filter(person =>{
                return person.name.includes(value);
            }).sort((personA, personB) => {
                return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
            
            }));
        
        } else {
        clearList();
        }
    });