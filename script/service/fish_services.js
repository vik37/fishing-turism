import { fish } from '../db/fish_db.js';

const getFishById = (id) =>{
    let allFish = fish;
    let fishById = allFish.filter(f => f.id === id)
                           .find(f => f.id === id);
    return fishById;
}