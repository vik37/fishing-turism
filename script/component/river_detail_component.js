import { riverById } from '../service/water_service.js';
import { convertedRiverLong} from '../helper/helper.js';
import { kmToMileView } from './convert_component.js';
import { fishInWater } from './fishByWater_component.js';

// THIS FUNCTION IS TRIGGER FOR SELECT LIST BETWEEN CONVERTED AND NON CONVERTED(LONG RIVER)
export const changeConvertedRiverNumbers = (e) =>{   
    let conv = '--converted';
        if(e.target.value === 'mi'){          
                document.querySelector(`.river__detail__long`).style.display = "none";
                document.querySelector(`.river__detail__long${conv}`).style.display = "block";          
        }
        if(e.target.value === 'km'){           
                document.querySelector(`.river__detail__long`).style.display = "block";
                document.querySelector(`.river__detail__long${conv}`).style.display = "none";          
        }   
    console.log(e.path[4]);
}
// THIS FNCTION RETURN HTML FOR RIVER DETAIL PAGE BY ID
export const riverDetailView = (id) =>{
    // Here we get river data by id from riverById func. water_service
    const river = riverById(id);
    console.log(river);
    // Here we get length property from river obj for converting which we send in convertedRiverLong to get converted value
    const { length} = river;
    let riverConverted = convertedRiverLong({length});
    console.log(riverConverted);
    let htmlRiverDetail = `
                                <h2 class="subtitle">River ${river.name}</h2>   
                                ${kmToMileView()}                 
                                <section class="river__detail">    
                                    <div class="river__detail__image">
                                        <img class="river__detail__image__img" src="./images/rivers/${river.name}.jpg" />
                                    </div>                                                                  
                                    <p>Source: ${river.source}</p>                                 
                                    <p>Mouth: ${river.mouth} m</p>                                 
                                    <p class="river__detail__long">Length: ${river.length} km</p>   
                                    <p class="river__detail__long--converted">Length: ${riverConverted.length} km</p>                                                                  
                                </section>
                                <section class="description">
                                    <p>${river.text}</p>
                                </section>
                                <h5 class="speaces_sub">FISH SPEACES</h5>
                                <section class="fish__section">                                    
                                    ${fishInWater(river.fish)}
                                </section>
                            `;
    // this event listener is for change converted valuee of length prop. from river obj
    document.querySelector('.length').addEventListener('change',changeConvertedRiverNumbers);
    return htmlRiverDetail;
}