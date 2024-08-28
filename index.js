function rollDice(){
const input=document.getElementById("input").value;
const dice=document.getElementById("dice");
const diceimg=document.getElementById("diceimg");
const values=[];
const img=[];
for(let i=0;i<input;i++){
    const value=Math.floor(Math.random()*6)+1;
    values.push(value);
    img.push(`<img src ="images/${value}.png">`)

}
dice.textContent=`Dices: ${values.join(', ')}`;
diceimg.innerHTML=img.join('');
}