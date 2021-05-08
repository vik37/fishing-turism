import {  naturalLakeById, artificialLakeById } from '../service/water_service.js';
import { convertedLengthLake, convertedDeptLake } from '../helper/helper.js';

export const changeConvertedNumbers = (e) =>{
    let long = 'long';
    let wide = 'wide';
    let maind = 'maind';
    let maxd = 'maxd';
    let str = '--converted';
    if(document.querySelector(`.detail__lake__${wide}`) != undefined){
        if(e.target.value === 'mi'){
            document.querySelector(`.detail__lake__${long}`).style.display = "none";
            document.querySelector(`.detail__lake__${wide}`).style.display = "none";
            document.querySelector(`.detail__lake__${maind}`).style.display = "none";
            document.querySelector(`.detail__lake__${maxd}`).style.display = "none";
            document.querySelector(`.detail__lake__${long}${str}`).style.display = "block";
            document.querySelector(`.detail__lake__${wide}${str}`).style.display = "block";
            document.querySelector(`.detail__lake__${maind}${str}`).style.display = "block";
            document.querySelector(`.detail__lake__${maxd}${str}`).style.display = "block";
        }
        if(e.target.value === 'km'){
            document.querySelector(`.detail__lake__${long}`).style.display = "block";
            document.querySelector(`.detail__lake__${wide}`).style.display = "block";
            document.querySelector(`.detail__lake__${maind}`).style.display = "block";
            document.querySelector(`.detail__lake__${maxd}`).style.display = "block";
            document.querySelector(`.detail__lake__${long}${str}`).style.display = "none";
            document.querySelector(`.detail__lake__${wide}${str}`).style.display = "none";
            document.querySelector(`.detail__lake__${maind}${str}`).style.display = "none";
            document.querySelector(`.detail__lake__${maxd}${str}`).style.display = "none";
        }
    }
    else{
        if(e.target.value === 'mi'){
            document.querySelector(`.detail__lake__${long}`).style.display = "none";           
            document.querySelector(`.detail__lake__${long}${str}`).style.display = "block";
        }
        if(e.target.value === 'km'){
            document.querySelector(`.detail__lake__${long}`).style.display = "block";
            document.querySelector(`.detail__lake__${long}${str}`).style.display = "none";
        }
    }
    
    console.log(e.path[4]);
}

export const naturalLakeDetailView = (id,typeOfLake) => {
    let natural = naturalLakeById(id);
    let artificial = artificialLakeById(id);
    const {long,wide} = natural;
    let convLake = convertedLengthLake({long,wide},artificial.long);
    console.log(convLake);   
    const { mainDepth, maxDepth} = natural;
    let convDepth = convertedDeptLake({mainDepth, maxDepth});
    let htmlNaturalDetail = `                                
                                <h2 class="subtitle">${natural.name}</h2>
                                <div class="kilometer">
                                    <label>choose a length:
                                        <select class="length" name="length">
                                            <option value="km">Kilometer, Meter...</option>
                                            <option value="mi">Mile, Feet...</option>
                                        </select>
                                    </label>
                                </div>
                                <section class="detail__lake">    
                                    <div class="detail__lake__block">
                                        <img class="lakes__cards__img" src="./images/lakes/natural/${natural.name}.jpg" />
                                    </div>                               
                                    <p>Type: ${natural.type}</p>
                                    <p class="detail__lake__maind">Main Depth: ${natural.mainDepth} m</p>
                                    <p class="detail__lake__maind--converted">Main Depth: ${convDepth.mainDepth} m</p>
                                    <p class="detail__lake__maxd">Max Depth: ${natural.maxDepth} m</p>
                                    <p class="detail__lake__maxd--converted">Max Depth: ${convDepth.maxDepth} m</p>
                                    <p class="detail__lake__long">Long: ${natural.long} km</p>
                                    <p class="detail__lake__long--converted">Long: ${convLake.long} km</p>
                                    <p class="detail__lake__wide">Wide: ${natural.wide} km</p>
                                    <p class="detail__lake__wide--converted">Wide: ${convLake.wide} km</p>
                                </section>
                                <section class="description">
                                    <p>${natural.text}</p>
                                </section>
                            `;       
        //console.log(connvArtifLake);
        let htmlArtificialDetail = `                                
                                <h2 class="subtitle">${artificial.name}</h2>
                                <div class="kilometer">
                                    <label>choose a length:
                                        <select class="length" name="length">
                                            <option value="km">Kilometer, Meter...</option>
                                            <option value="mi">Mile, Feet...</option>
                                        </select>
                                    </label>
                                </div>
                                <section class="detail__lake">    
                                    <div class="detail__lake__block">
                                        <img class="lakes__cards__img" src="./images/lakes/artificial/${artificial.name}.jpg" />
                                    </div>                               
                                    <p>Type: ${artificial.type}</p>
                                    <p class="detail__lake__long">Long: ${artificial.long} km</p>
                                    <p class="detail__lake__long--converted">Long: ${convLake.longArt} km</p>
                                    <p>River: ${artificial.river}</p>    
                                    <p>Build on: ${artificial.year === 0?artificial.year : " / "} year</p>                                                                  
                                </section>
                                <section class="description">
                                    <p>${artificial.text}</p>
                                </section>
                            `;
    console.log(natural);
    console.log(artificial);
    
    return typeOfLake === natural.type ? htmlNaturalDetail : htmlArtificialDetail;
}


