
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
// THIS FUNCTION RETURN HTML VIEW FOR CHOISE CENTIMETER, KILO TO PUND, INCH OR REVERSE
export const cmToInAndKgToLbView = () =>{
    return `
        <div class="centimeter">
            <label>choose cm,kg or inch, lb:
                    <select class="size" name="size">
                        <option value="cm">Centimeter, Kilogram...</option>
                        <option value="in">Inch, Pound...</option>
                    </select>
                </label>
            </div>
    `;
}
