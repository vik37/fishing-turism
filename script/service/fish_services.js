import { fish } from '../db/fish_db.js';

const getFishById = (id) =>{
    let fishById = fish.filter(f => f.id === id)
                           .find(f => f.id === id);
    return fishById;
}
//THIS FUNCTION GET ARRAY FROM LAKE OR RIVER FISH ID AND RETURN ARRAY OF FISH SPEACIES OR ERROR STRING MSG
export const getFishByLake = (arr) =>{
    let fishArr = [];
    if(arr instanceof Array){
        //console.log(arr);
        for(let f of arr){
            let fishFiletr = fish.filter(x => x.id === f)
                                    .map(x => x.species)
                                    .find(x => x);
            fishArr.push(fishFiletr);
        }
        return fishArr;
    }
    else{
        //console.log(-1);
        return "Sommething wrong";
    }   
    //console.log(fishArr);  
}
export const getFishBySpeaces = (speaces) =>{
    let fishSpeaces = fish.find(x => x.species === speaces);
    return fishSpeaces;
}