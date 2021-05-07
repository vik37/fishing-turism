import { allNaturalLakes, allArtificialLakes, allRivers } from '../service/water_service.js';

export const allNaturalLakesView = () => {
    let count = 1;
    let htmlNaturalLakes = ``;
    let lakes = allNaturalLakes();   
    for(let lake of lakes){
        //console.log(lake);
        htmlNaturalLakes += `<div class="lakes__cards">
                           <h3>_${count}_</h3>
                            <img class="lakes__cards__img" src="./images/lakes/natural/${lake.name}.jpg" />                            
                            <h4>Name: ${lake.name}</h4>
                            <p>Type: ${lake.type}</p>
                            <p>Long: ${lake.long} km</p>
                            <p>Wide: ${lake.wide} km</p>
                            <p>Main Depth: ${lake.mainDepth} m</p>
                            <p>Max Depth: ${lake.maxDepth} m</p>                           
                            <button class="lakes__cards__btn" class="detail">${lake.name} Detail</button>
                            </div>
                        `;
        count++;
    }
    return htmlNaturalLakes;
}
export const allArtificialLakesView = () => {
    let htmlArtificialLakes = ``;
    let lakes = allArtificialLakes(); 
    let count = 1;  
    for(let lake of lakes){
        //console.log(lake);
        htmlArtificialLakes += `<div class="lakes__cards">
                            <h3>_${count}_</h3>
                            <img class="lakes__cards__img" src="./images/lakes/artificial/${lake.name}.jpg" />                          
                            <h4>Name: ${lake.name}</h4>  
                            <p>Type: ${lake.type}</p>                        
                            <p>Made on River: ${lake.river}</p>                            
                            <p>Long: ${lake.long} km</p>                           
                            <button class="lakes__cards__btn" class="detail">${lake.name} Detail</button>                        
                            </div>
                        `;
        count++;
    }
    return htmlArtificialLakes;
}
export const allRiversView = () =>{
    let htmlRivers = ``;
    let rivers = allRivers();
    let count = 1;
    for(let river of rivers){
        htmlRivers += `
                        <div class="rivers__cards">
                            <h3>_${count}_</h3>
                            <img class="rivers__cards__img" src="./images/rivers/${river.name}.jpg" />                          
                            <h4>Name: ${river.name}</h4>                          
                            <p>Length: ${river.length}</p>
                            <p>Source: ${river.source}</p> 
                            <p>Mouth: ${river.mouth}</p>
                            <button class="rivers__cards__btn">${river.name} Detail</button>
                        </div>
                    `;
                    count++;
    }
    return htmlRivers;
}