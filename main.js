const container = document.querySelector('.container');
const text = document.querySelector('#text');
const playTime = 7500;
const breatheOut = (playTime / 5) * 2;
const hold = playTime / 3.75;
const error = 1500;
/*
Tutorial Code: 

function play() {
    text.innerHTML = `Breathe In(${totalTime})`;
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = `Hold(${breatheTime})`;
        setTimeout(() => {
            text.innerText = `Breathe Out(${holdTime})`;
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

play();
setInterval(play, totalTime);
*/

function play() {

    text.innerHTML = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';
        container.className = 'container grow';
    }, hold);

    setTimeout(() => {
        text.innerText = 'Breathe Out!';
        container.className = 'container shrink';
    }, breatheOut);

}

play();
setInterval(play, (playTime + error));

