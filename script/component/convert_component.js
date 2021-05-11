
// THIS FUNCTION RETURN HTML VIEW FOR CHOISE KILOMETER, METER TO MILE, FEET OR REVERSE
export const kmToMileView = () =>{
    return `
        <div class="kilometer">
            <label>choose a length:
                    <select class="length" name="length">
                        <option value="km">Kilometer, Meter...</option>
                        <option value="mi">Mile, Feet...</option>
                    </select>
                </label>
            </div>
    `;
}

