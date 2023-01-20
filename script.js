const countries = [
    {
        id: 0,
        title: "amerika"
    },
    {
        id: 1,
        title: "saqartvelo"
    },
]
const ul = document.getElementById('todolist'); 
const btn = document.getElementById('btn')
const inpt = document.getElementById('inpput')


var id=todolist.lengh +1
console.log(todolist,lengh)

function addCountry(Object){
    let li = document.createElement('li');
    li.innerHTML = Object.country +' <b> Id: <b/>' + Object.id;
    ul.appendChild(li);

    let but = document.createElement('button');
    but.addEventListener('click',()=>{
        let index = countries.indexOf(countries.find(i => i.id == Object.id))
        countries.splice(index,1)        
        removeAllCountries();
        renderCountries();
        console.log(addCountry)
    })
}



