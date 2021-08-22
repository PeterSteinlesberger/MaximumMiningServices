let i = 1;


function changeBackgorundImage() {
    let backgroundImage =  document.getElementById('backgroundImage');

 backgroundImage.src = `img/number${i}.jpg`;  
console.log(i);
i++;
}