// js file

const resultBtn = document.querySelector('.btn-how');
const result = document.querySelector('.result-wrap');
const resultWarp = document.querySelector('.cont-result');
const modal = document.querySelector('#cont-modal');
const openBtn = document.querySelector('.btn-go');
const closeBtn = document.querySelector('#btnClosed');
const shareBtn = document.querySelector('.btn-share');
const loading = document.querySelector('.img-wrap');

function calc() {
    const inpVal = document.querySelector('#inpWannabe');
    let timeVal = document.querySelector('#inpTime');
    let timeVal_int = parseInt(timeVal.value);


    const inpResult = document.querySelector('#inpResult');
    const timeResult = document.querySelector('#timeResult');

    if(inpVal.value == ''){
        alert('입력해주세요!');
        inpVal.focus();
        return false;
    } else if(timeVal.value == ''){
        alert('입력해주세요!');
        timeVal.focus();
        return false;
    } else if(timeVal_int > 24 || timeVal_int <= 0) {
        alert('1 ~ 24 사이의 값을 입력해주세요');
        return false;
    }
    resultWarp.style.display = "block";
    result.style.display = "none";
    loading.style.display = "block";

    function loadTime(){
        result.style.display = "block";
        loading.style.display = "none";
        inpResult.innerText = inpVal.value;
        timeResult.innerText = parseInt((10000/timeVal_int), 10);
    }

    setTimeout (loadTime, 1700);
}

function openModal() {
    modal.style.display = "flex"
}

function closeModal() {
    modal.style.display = "none";
}

function shareUrl(){
    let url    = window.location.href;
    let temp   = document.createElement("input");
    
    document.body.appendChild(temp);
    temp.value = url;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    
    alert('복사되었습니다!');
}

resultBtn.addEventListener('click', calc);
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
shareBtn.addEventListener('click', shareUrl);