export const bubble = () =>{
    let htmlBubble = ``;
    for(let i = 0;i < 7;i++){
        htmlBubble += `<div class="bubble"></div>`;
    }
    return htmlBubble;
}