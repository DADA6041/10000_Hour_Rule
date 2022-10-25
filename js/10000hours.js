// js file

const resultBtn = document.querySelector('.btn-how');
const result = document.querySelector('.result-wrap');
const resultWarp = document.querySelector('.cont-result');
const modal = document.querySelector('.cheer-modal-wrap');
const openModal = document.querySelector('.btn-go');
const closeModal = document.querySelector('#btnClosed');
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
    } else if(timeVal.value == ''){
        alert('입력해주세요!');
        timeVal.focus();
    } else if(timeVal_int > 24 && timeVal_int < 0) {
        alert('1 ~ 24 사이의 값을 입력해주세요');
    }
    resultWarp.style.display = "block";
    result.style.display = "none";
    loading.style.display = "block";

    function loadTime(){
        result.style.display = "block";
        loading.style.display = "none";
    }

    setTimeout (loadTime, 2100);
}



resultBtn.addEventListener("click", calc);