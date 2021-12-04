let count1 = document.getElementById('counter1');
let count2 = document.getElementById('counter2');
let count3 = document.getElementById('counter3');

function counterAnimation(counterNum, start, end, duration){
    let startTimestamp = null;
    function step(timestamp){
        if(!startTimestamp ){
            startTimestamp = timestamp;
        }
        let progress = Math.min((timestamp - startTimestamp) / duration, 1);
        counterNum.innerText = Math.floor(progress * (end - start) + start);
        if(progress < 1){
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

counterAnimation(count1, 0, 86, 2000)
counterAnimation(count2, 0, 289, 4500)
counterAnimation(count3, 0, 135, 3000)