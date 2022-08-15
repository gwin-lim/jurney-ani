// requestAnimationFrame 빌트인 함수 사용한 재귀 실행을 시작 하고
// cacelAnimationFrame을 호출하는 함수를 반환하는 함수
export function makeAnimation (callback, interval) {
  let cancelId = 0;
  let startTime = Date.now();

  const callbackWrapper = function() {
    if (Date.now() - startTime > interval) {
      startTime = Date.now();
      callback();
    }
    cancelId = requestAnimationFrame(callbackWrapper);
  };

  cancelId = requestAnimationFrame(callbackWrapper);

  return () => cancelAnimationFrame(cancelId);
};
