import { allNaturalLakesView,allArtificialLakesView, allRiversView } from './component/water_component.js';
import { lakeDetailView,changeConvertedNumbers,previousLakePage} from './component/lake_detail_component.js';
import { riverDetailView, changeConvertedRiverNumbers,previousRiverPage } from './component/river_detail_component.js';
import { fishDetailView, changeConvertedFishSizeWeigh } from './component/fish_detail_component.js';
//window.addEventListener('load',()=>{


// THIS FUNC. TRIGGER THE BUTTONS ON FISH DETAIL PAGE FOR BACT TO LIST OF RIVERS OR LAKES PAGES
const backFromFishPageToLakesOrRivers =()=>{
    let navbars = document.querySelectorAll('.nav__navbar');
    let active = document.querySelector('.active');
    document.querySelector('.fish__btn__back-lakes').addEventListener('click',()=>{              
        document.querySelector(".main-2").style.display = 'block';
        document.querySelector('.nav').style.display = 'flex';
        active.className = active.className.replace(" active","");
        navbars[1].className += " active";
        document.querySelector('.main-6').style.display = 'none';
    });
    document.querySelector('.fish__btn__back-rivers').addEventListener('click',()=>{            
        document.querySelector('.nav').style.display = 'flex';
        active.className = active.className.replace(" active","");
        navbars[2].className += " active";
        document.querySelector(".main-3").style.display = 'block';
        document.querySelector('.main-6').style.display = 'none';
    });
}
// THIS FUNC. SHOW FISH DETAIL PAGE 
const showFishDetailView = (kindOfFish) =>{
    let fish = fishDetailView(kindOfFish);
    document.querySelector(".main-6").innerHTML = fish;
    document.querySelector(".main-6 .centimeter").addEventListener("change", changeConvertedFishSizeWeigh);
    backFromFishPageToLakesOrRivers();
}
// THIS FUNC. IS BUTTONS OF FISH LIST FROM LAKE OR RIVER DETAIL PAGE AND USE FOR ENTER TO FISH DETAIL PAGE
const choiseFishDetail = ()=>{
    let fishBtns = document.querySelectorAll('.fish__li__btn');
    let detailpages = document.querySelectorAll('.main-4,.main-5,.main-6');
    for(let f of fishBtns){
        //console.log(f);
        f.addEventListener("click",(e)=>{
            if(window.getComputedStyle(detailpages[0]).display === 'none'){
                detailpages[1].style.display = 'none';
                detailpages[2].style.display = 'block';
                showFishDetailView(f.id);
            }
            if(window.getComputedStyle(detailpages[1]).display === 'none'){
                detailpages[0].style.display = 'none';
                detailpages[2].style.display = 'block';
                showFishDetailView(f.id);
            }
        })
    }
}

// FUNCTION FOR SHOW PAGE LAKE IN DETILE
const showDetailLakeView = (id,typeOfLake) =>{
    //console.log(id);
    let lake = document.querySelector('.lake');
    lake.innerHTML = lakeDetailView(id,typeOfLake);
    document.querySelector('.main-4 .length').addEventListener('change',changeConvertedNumbers);
    choiseFishDetail();
    previousLakePage();   
    
}

//FUNCTION FOR SHOW PAGE ALL LAKES 
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
//FUNCTION WITH BUTTONS FOR OPEN PAGE LAKE BY DETAIL
const choiseLakeDetail = ()=>{
    let btnsNat = document.querySelectorAll(`.lakes__cards__btn`);
    let btnsArtif = document.querySelectorAll(`.lakes__cards__btn`);
    if(document.getElementById('natural').checked){
        for(let i = 0;i < btnsNat.length;i++){
            btnsNat[i].addEventListener("click",(e)=>{
                            e.preventDefault();                       
                            document.querySelector(".main-4").style.display = "block";
                            document.querySelector(".main-2").style.display = "none";
                            document.querySelector(".nav").style.display = "none";
                            showDetailLakeView(i+1,"natural");
                        });
                    }
    }
    if(document.getElementById('artificial').checked){
        for(let i = 0;i < btnsArtif.length;i++){
            btnsArtif[i].addEventListener("click",(e)=>{
                //let id = e.target.id;
                            e.preventDefault();                          
                            document.querySelector(".main-4").style.display = "block";
                            document.querySelector(".main-2").style.display = "none";
                            document.querySelector(".nav").style.display = "none";
                            showDetailLakeView(i+1,"artificial");
                            //console.log(e.currentTarget.id);
                            //console.log(e.target.id);
                        });
        }
        
    }
}
// FUNCTION RADIO BUTTONS FOR CHANGE ARTIFICIAL OR NATURAL
const checkRadio = () =>{
    showAllLakesView(0);
    choiseLakeDetail();
    let radio = document.querySelectorAll('.radio__input');           
    for(let i = 0;i < radio.length;i++){      
        radio[i].addEventListener('change',function(){
            if(i == 0){
                document.querySelector('.radio__span__natural').style.display = "block";
                document.querySelector('.radio__span__artif').style.display = "none";
                //console.log(radio[i]);  
                showAllLakesView(i);  
                choiseLakeDetail();                                 
            }
            if(i == 1){
                document.querySelector('.radio__span__natural').style.display = "none";
                document.querySelector('.radio__span__artif').style.display = "block";
                //console.log(radio[i]);   
                showAllLakesView(i);  
                choiseLakeDetail();
            }           
        })
    }  
}
// FUNCTION FOR SHOW PAGE RIVER IN DETILE
const showDetailRiverView = (id) =>{
    let river = document.querySelector('.river');
    river.innerHTML = riverDetailView(id);
    document.querySelector('.main-5 .length').addEventListener('change',changeConvertedRiverNumbers);  
    choiseFishDetail();
    previousRiverPage();
}

//FUNCTION WITH BUTTONS FOR OPEN PAGE RIVER BY DETAIL
const choiceDetailRiver = ()=>{
    let riverBtn = document.querySelectorAll('.rivers__cards__btn');
    for(let i = 0;i < riverBtn.length;i++){
        //console.log(riverBtn[i]);
        riverBtn[i].addEventListener("click",()=>{
            //e.preventDefault();
            document.querySelector(".main-3").style.display = "none";
            document.querySelector(".nav").style.display = "none";
            document.querySelector('.main-5').style.display = 'block';
            showDetailRiverView(i+1);
        });
    }
}

// FUNCTION FOR SHOW PAGE ALL RIVERS 
const showAllRiversView = () =>{      
    let rivers = document.querySelector('.rivers');
    rivers.innerHTML = allRiversView();
    choiceDetailRiver();
}


//FUNCTION WITH CLICKING NAVIGATION MANU
const navigationManu = () =>{  
    let nav = document.querySelectorAll('.nav__navbar');
    Array.from(nav).forEach(navbar => {
        navbar.addEventListener('click', (e)=>{
            e.preventDefault();
            let selected = document.querySelector('.active');
            selected.className = selected.className.replace(" active", "");
            navbar.className += " active";
            //console.log(navbar);
            if(navbar.id === "home"){
                document.querySelector(".main-1").style.display = 'block';
                document.querySelector(".main-2").style.display = 'none';
                document.querySelector(".main-3").style.display = 'none';
            }
            if(navbar.id === "lake"){
                document.querySelector(".main-1").style.display = 'none';
                document.querySelector(".main-2").style.display = 'block';
                document.querySelector(".main-3").style.display = 'none';
                checkRadio();
            }
            if(navbar.id === "river"){
                document.querySelector(".main-1").style.display = 'none';
                document.querySelector(".main-2").style.display = 'none';
                document.querySelector(".main-3").style.display = 'block';
                showAllRiversView();
            }
        })
    })
       // console.log(document.querySelector(`.main-${i+1}`));
    
    //console.log(nav);  
}
navigationManu();

// THIS COMMENT FUNCTION IS FOR EXEMPLE FOR LONGER LASTING
// let load=()=>{
//     document.querySelector('.load').style.display = 'none';
//     document.querySelector('.load-text').style.display = 'none';
// };
// let int = setInterval(load,14000);

// console.log(int);
//clearInterval(int);
// EVENT LISTENER FOR LOADING ANUMATION
window.addEventListener('load',()=>{
    document.querySelector('.load').style.display = 'none';
    document.querySelector('.load-text').style.display = 'none';
});