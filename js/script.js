const search=document.querySelector(".search");
const input=search.querySelector('input');
const suggestions=search.querySelector('.search_autocombox');

// const avion=document.querySelector('.search__button');

// avion.addEventListener('onclick') {
//     htt
// }

//Cuando el usuario presiona una tecla
input.onkeyup=(e)=> {
    console.log(e.target.value);

    let escrito=e.target.value;
    let emptyArray=[];
    if(escrito){
        emptyArray=suggestionsArray.filter((data)=>{
            return data.toLocaleLowerCase().startsWith((escrito).toLocaleLowerCase());
        });
        console.log(emptyArray);
        emptyArray=emptyArray.map((data)=>{
            return data='<li>' + data + '</li>';
        });
        console.log(emptyArray);

        //para mostrarlos en el div
        search.classList.add('active');//muestra el div con el autocompletado
        mostrarSugerencias(emptyArray);
        let allList=suggestions.querySelectorAll('li');

        for (let index = 0; index < allList.length; index++) {
            //agregando el evento onclick a c/li
            allList[index].setAttribute('onclick', 'seleccionarCapital(this)');            
        }
    }else{
        search.classList.remove('active');//esconde el div con el autocompletado
    }
}

function seleccionarCapital(capital){
    let paisSelect=capital.textContent;
    console.log(paisSelect);//lo que seleccionó el usuario
    //pasando al input lo que el usuario seleccionó
    input.value=paisSelect;
}

function mostrarSugerencias(lista){
    let listData;
    if(!lista.length){
        escrito=input.value;
        listData='<li>' + escrito + '</li>';
    }else{
        listData=lista.join('');
    }
    suggestions.innerHTML='<p>Hoteles en </p>'+listData;
}