import { getFishByLake } from '../service/fish_services.js';

// THIS FUNC. GET ARRAY OF FISH ID'S FROM LAKE AND RIVER WITH WHICH THEY MATCH WITH FISH ID'S FOR GET FISH
// which are found in that water (RIVER OR LAKE) (LIKE RELATIONAL DATABASE) AND RETURN WITH HTML VIEW
export const fishInWater = (arrOfFish) =>{
    let htmlFishBlock = ``;
    // Here we send array from get array of fish speacies
    let fish = getFishByLake(arrOfFish);
    if(fish instanceof String){
        htmlFishBlock = `
                            <h2>${fish}</h2>
                        `;
    }
    else{
        for(let f of fish){
            htmlFishBlock += `
                            <ul class="fish">
                                <li class="fish__li">
                                    <img class="fish__li__img" src="./images/fish/${f}.jpg" alt="${f}-fish" />
                                    <button type="button" id="${f}" class="fish__li__btn">${f}</button>                               
                                </li>
                            </ul>
                        `;
        }       
    }   
    //console.log(fish);
    return htmlFishBlock;
}
