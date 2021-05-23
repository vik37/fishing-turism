import { getFishBySpeaces } from '../service/fish_services.js';
import { convertedFishWeigh, convertedFishSize} from '../helper/helper.js';
import { cmToInAndKgToLbView } from './convert_component.js';
import { bubble } from './bubble_component.js';
// THIS FUNCTION IS TRIGGER FOR SELECT LIST BETWEEN CONVERTED AND NON CONVERTED(FISH SIZE AND WEIGH)
export const changeConvertedFishSizeWeigh = (e) =>{
    let conv = "--converted";
    if(e.target.value === "cm"){
        document.querySelector(".fish__detail__large").style.display = "flex";
        document.querySelector(".weigh").style.display = "block";
        document.querySelector(`.fish__detail__large${conv}`).style.display = "none";
        document.querySelector(`.weigh${conv}`).style.display = "none";
    }
    if(e.target.value === "in"){
        document.querySelector(".fish__detail__large").style.display = "none";
        document.querySelector(".weigh").style.display = "none";
        document.querySelector(`.fish__detail__large${conv}`).style.display = "block";
        document.querySelector(`.weigh${conv}`).style.display = "block";
    }
}
export const fishDetailView = (speaces) =>{
    // here we get fish by speaces from fish service
    let fish = getFishBySpeaces(speaces);
    // this obj destructore is used to convert this property and use to show like converted number in view
    const {average, max} = fish.size;
    const {weigh} = fish;
    const convertedSize = convertedFishSize({average,max});
    const convertedWeigh = convertedFishWeigh({weigh});
    //console.log(fish);
    const htmlFishDetail = `
                                <section id="${fish.species}" class="fish__detail">
                                    ${cmToInAndKgToLbView()}
                                    <div class="fish__detail__image">
                                        <img class="fish__detail__image__img" src="./images/fish/${fish.species}.jpg" 
                                            alt="fish-${fish.species}" />
                                    </div>
                                    <h5>Kind: ${fish.species}</h5>
                                    <ol class="fish__detail__large">Size: 
                                        <li>Average size: ${fish.size.average} cm</li>
                                        <li>Maximum size: ${fish.size.max} cm</li>
                                    </ol> 
                                    <ol class="fish__detail__large--converted">Size: 
                                        <li>Average size: ${convertedSize.average} inch</li>
                                        <li>Maximum size: ${convertedSize.max} inch</li>
                                    </ol> 
                                    <p class="weigh">Weight: ${fish.weigh} kg</p>
                                    <p class="weigh--converted">Weight: ${convertedWeigh.weigh} lbs</p>
                                    <p>Clutch Size: ${fish.clutchSize.toFixed(3)} eggs</p>
                                    <p>Life span: ${fish.lifespan} year</p>
                                    <div class="fish__btn">
                                        <button type="button" class="fish__btn__back-lakes">lakes</button>
                                        <button type="button" class="fish__btn__back-rivers">rivers</button>
                                    </div>                                   
                                </section>                                
                                ${bubble()}
                            `;  
                                                 
    return htmlFishDetail;                        
}