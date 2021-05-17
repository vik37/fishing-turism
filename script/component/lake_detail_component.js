import {  naturalLakeById, artificialLakeById } from '../service/water_service.js';
import { convertedLengthNaturalLake, convertedLengthArtificialLake,convertedDeptLake } from '../helper/helper.js';
import { kmToMileView} from './convert_component.js';
import { fishInWater } from './fishByWater_component.js';
// THIS FUNCTION IS TRIGGER FOR SELECT LIST BETWEEN CONVERTED AND NON CONVERTED(LONG AND DEEP LAKES)
export const changeConvertedNumbers = (e) =>{   
    let lakeType = document.querySelector(".lake__detail"); 
    console.log(lakeType.id);  
    let clases = ['long','wide','maind','maxd'];
    let str = '--converted';
    if(lakeType.id === 'type__natural')
    {
        if(e.target.value === 'mi'){
            for(let i = 0; i < clases.length;i++){
                document.querySelector(`.main-4 .lake__detail__${clases[i]}`).style.display = "none";
                document.querySelector(`.lake__detail__${clases[i]}${str}`).style.display = "block";
            }
        }
        if(e.target.value === 'km'){
            for(let i = 0; i < clases.length;i++){
                document.querySelector(`.main-4 .lake__detail__${clases[i]}`).style.display = "block";
                document.querySelector(`.lake__detail__${clases[i]}${str}`).style.display = "none";
            }
        }
    }
    if(lakeType.id === 'type__artificial'){
        if(e.target.value === 'mi'){
            document.querySelector(`.lake__detail__long`).style.display = "none";           
            document.querySelector(`.lake__detail__long${str}`).style.display = "block";
        }
        if(e.target.value === 'km'){
            document.querySelector(`.lake__detail__long`).style.display = "block";
            document.querySelector(`.lake__detail__long${str}`).style.display = "none";
        }
    }  
    //console.log(e.path[4]);
}

// THIS FUNCTION RETURN HTML TAG FOR DETAIL LAKE PAGE WITH ID AND TYPE OF LAKE (NATURAL OR ARTIFICIAL)
export const lakeDetailView = (id,typeOfLake) => {
    let htmlNaturalDetail = ``;
    let htmlArtificialDetail = ``;
    let someNum = id?id:1;
    if(typeOfLake === "natural"){
        // get natural lake by id from naturalLakeById from water_service
        let natural = naturalLakeById(id);
        
        // Here we get long wide property from natural obj for converting which we send in convertedLengthLake 
        // both with artificial long like 2nd argumend to get converted value
        const {long,wide} = natural;
        let convNaturalLake = convertedLengthNaturalLake({long,wide});
        //console.log(convLake); 
        // Here we get depth properties from natural obj for converting which we send in convertedLengthLake 
        // to get converted value  
        const { mainDepth, maxDepth} = natural;
        let convDepth = convertedDeptLake({mainDepth, maxDepth});   
        // html part for showing natural lake
       return htmlNaturalDetail = `                                
                                    <h2 class="subtitle">Lake ${natural.name}</h2>
                                    ${kmToMileView()}
                                    <section id="type__${natural.type}" class="lake__detail">    
                                        <div class="lake__detail__image">
                                            <img class="lake__detail__image__img" src="./images/lakes/natural/${natural.name}.jpg" />
                                        </div>                               
                                        <h5>Type: ${natural.type}</h5>
                                        <p class="lake__detail__maind">Main Depth: ${natural.mainDepth} m</p>
                                        <p class="lake__detail__maind--converted">Main Depth: ${convDepth.mainDepth} ft</p>
                                        <p class="lake__detail__maxd">Max Depth: ${natural.maxDepth} m</p>
                                        <p class="lake__detail__maxd--converted">Max Depth: ${convDepth.maxDepth} ft</p>
                                        <p class="lake__detail__long">Long: ${natural.long} km</p>
                                        <p class="lake__detail__long--converted">Long: ${convNaturalLake.long} mi</p>
                                        <p class="lake__detail__wide">Wide: ${natural.wide} km</p>
                                        <p class="lake__detail__wide--converted">Wide: ${convNaturalLake.wide} mi</p>
                                    </section>
                                    <section class="description">
                                        <p>${natural.text}</p>
                                    </section>
                                    <h5 class="speaces_sub">FISH SPEACES</h5>
                                    <section class="fish__section">                                    
                                        ${fishInWater(natural.fish)}
                                    </section>
                                    <button type="button" class="back"><span class="back__arrow">&#8612;</span>BACK</button>
                                `;       
            //console.log(connvArtifLake);
    }
    if(typeOfLake === "artificial"){
        // get artificial lake by id from artificialLakeById from water_service
        let artificial = artificialLakeById(id);
        let {long} = artificial;
        let convArtifLake = convertedLengthArtificialLake({long});
        // html part for showing artificial lake
       return htmlArtificialDetail = `                                
                                <h2 class="subtitle">Lake ${artificial.name}</h2>
                                <div class="kilometer">
                                    <label>choose a length:
                                        <select class="length" name="length">
                                            <option value="km">Kilometer, Meter...</option>
                                            <option value="mi">Mile, Feet...</option>
                                        </select>
                                    </label>
                                </div>
                                <section id="type__${artificial.type}" class="lake__detail">    
                                    <div class="lake__detail__image">
                                        <img class="lake__detail__image__img" src="./images/lakes/artificial/${artificial.name}.jpg" />
                                    </div>                               
                                    <h5>Type: ${artificial.type}</h5>
                                    <p class="lake__detail__long">Long: ${artificial.long} km</p>
                                    <p class="lake__detail__long--converted">Long: ${convArtifLake.long} mi</p>
                                    <p>River: ${artificial.river}</p>    
                                    <p>Build on: ${artificial.year !== 0?artificial.year : " / "} year</p>                                                                  
                                </section>
                                <section class="description">
                                    <p>${artificial.text}</p>
                                </section>
                                <h5 class="speaces_sub">FISH SPEACES</h5>
                                <section class="fish__section">                                    
                                    ${fishInWater(artificial.fish)}
                                </section>
                                <button type="button" class="back"><span class="back__arrow">&#8612;</span>BACK</button>
                            `;
    //console.log(natural);
    //console.log(artificial);
    }
}
//FUNCTION FOR CLICK BACK BUTTON TO RETURN IN PREVIOUS PAGE(ALL LAKES)
export const previousLakePage = () =>{
    let btnBack = document.querySelector('.back');
    console.log(btnBack);
    console.log(document.querySelector('.main-2'));
    btnBack.addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector('.main-4').style.display = 'none';
        document.querySelector('.main-2').style.display = 'block';
        document.querySelector('.nav').style.display = 'flex';        
    });
};

