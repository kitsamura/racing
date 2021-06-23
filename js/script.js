"use strict";

    const score = document.querySelector('.score'),
    btnStart = document.querySelector('.game__btn_start'),
    gameArea = document.querySelector('.game__area'),
    car = document.createElement('div');

    car.classList.add('car');

    const keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false,
        a: false,
        d: false,
        s: false,
        w: false, 
    };

    const setting = {
        start: false,
        score: 0,
        speed: 3,
    }

    btnStart.addEventListener('click', startGame);

    document.addEventListener('keydown', startRun);
    document.addEventListener('keyup', stopRun);


    function startRun(e){
        e.preventDefault();
        keys[e.key] = true;
    }

    function stopRun(e) {
        e.preventDefault();
        keys[e.key] = false;
    }


    function startGame() {
        btnStart.classList.add('hide');
        gameArea.appendChild(car);
        console.log('пошло поехало');
        requestAnimationFrame(playGame);
        setting.start = true;

    }

    function playGame() {   
        console.log('play');
        if(setting.start){
            requestAnimationFrame(playGame);
        }
    }
    