let time1 = document.getElementById('clockBlockFirst');
let time2 = document.getElementById('clockBlockSecond');
let time3 = document.getElementById('clockBlockThird');

class MainClock {
    constructor (clock) {
        this.clock = clock;
        this.clock.addEventListener('click', () => this.clock.classList.toggle('isFull'));
    }
    render() {
        this.clock.innerHTML = this.getTime();
    }
    getTime() {
        let isFullTime = this.clock.classList.contains('isFull');
        const time = new Date();
        const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
        const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
        const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
        if(isFullTime) {
            return `${hours}:${minutes}`
        } else {
            return `${hours}:${minutes}:${seconds}`
        }
    }
    
}

class FirstClock extends MainClock {
    getTime() {
        let isFullTime = this.clock.classList.contains('isFull');
        const time = new Date();
        const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
        const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
        const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
        
        if(isFullTime) {
            return `${hours}:${minutes}:${seconds}`
        } else {
            return `${hours}:${minutes}`
        }
    }
}

class SecondClock extends MainClock {
    getTime() {
        let isFullTime = this.clock.classList.contains('isFull');
        const time = new Date();
        const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
        const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
        const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();
        const miliseconds = (time.getMilliseconds() < 100) ? '0' + time.getMilliseconds() : time.getMilliseconds();

        if(isFullTime) {
            return `${hours}:${minutes}:${seconds}:${miliseconds}`
        } else {
            return `${hours}:${minutes}`
        }
    }
}


//Смена короткого формата на полный
let mainClock = new MainClock(time1);
setInterval(() => mainClock.render(), 250);
console.log(mainClock)

//Смена полного формата на короткий
let firstClock = new FirstClock(time2);
setInterval(() => firstClock.render(), 250);
console.log(firstClock)

//Смена полного формата с миллисекундами на короткий формат часов
let secondClock = new SecondClock(time3);
setInterval(() => secondClock.render(), 200);
console.log(secondClock)