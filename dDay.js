const remainTime = document.querySelector(".remain_time");

const diffTime = () => {
  const maryTime = new Date("2023-03-18");
  const currentTime = new Date();

  const diff = maryTime - currentTime;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));

  const diffHr = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffHr2digit = String(diffHr).padStart(2, "0");

  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffMin2digit = String(diffMin).padStart(2, "0");

  const diffSec = Math.floor((diff / 1000) % 60);
  const diffSec2digit = String(diffSec).padStart(2, "0");

  remainTime.innerText = `${diffDay}일 ${diffHr2digit}시간 ${diffMin2digit}분 ${diffSec2digit}초`;
};

diffTime();

setInterval(diffTime, 1000);
