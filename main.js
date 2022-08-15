import { makeAnimation } from "./makeAnimation.js";

const $btn = document.querySelector('.btn');
const $display = document.querySelector('.display');
let isRunning = false;
let cancelAnimation;

// $display 엘리먼트에 타임스탬프를 입력하는 함수
const displayTimestamp = () => {
  $display.innerText = Date.now();
};

// 애니메이션의 실행상태에 따라 버튼의 캡션을 off 또는 on으로 바꿔주는 함수
const toggleButtonCaption = (isRunning) => {
  $btn.innerText = isRunning ? 'off' : 'on';
};

// 버튼의 이벤트 리스너
$btn.addEventListener('click', () => {
  if(isRunning){
    isRunning = false;
    cancelAnimation();
  } else {
    isRunning = true;
    cancelAnimation = makeAnimation(displayTimestamp, 100);
  };
  toggleButtonCaption(isRunning);
});
