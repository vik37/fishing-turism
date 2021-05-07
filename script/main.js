import { allNaturalLakesView,allArtificialLakesView, allRiversView } from './component/water_component.js';
//import { allArtificialLakes } from './service/water_service.js';

const showAllLakesView = (num) => {
    let main = document.querySelector('.lakes');
    let subtitle = document.getElementsByTagName('h2')[0];
    if(num === 0){       
        subtitle.innerText = "NATURAL LAKES";
        main.innerHTML = allNaturalLakesView();       
    }
    if(num === 1){
        subtitle.innerText = "ARTIFICIAL LAKES";        
        main.innerHTML = allArtificialLakesView();       
    }
    //console.log(num);
}

const checkRadio = () =>{
    showAllLakesView(0);
    let radio = document.querySelectorAll('.radio__input');           
    for(let i = 0;i < radio.length;i++){
        
        radio[i].addEventListener('change',function(){
            if(i == 0){
                document.querySelector('.radio__span__natural').style.display = "block";
                document.querySelector('.radio__span__artif').style.display = "none";
                //console.log(radio[i]);  
                showAllLakesView(i);        
            }
            if(i == 1){
                document.querySelector('.radio__span__natural').style.display = "none";
                document.querySelector('.radio__span__artif').style.display = "block";
                //console.log(radio[i]);   
                showAllLakesView(i);                                    
            }           
        })
    }  
}
checkRadio();

const showAllRiversView = () =>{
    let rivers = document.querySelector('.rivers');
    rivers.innerHTML = allRiversView();
}
showAllRiversView();

