// 네브바 클릭시 화면 이동

const menu = document.querySelector(".menu");

menu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  const linkPosition = document.querySelector(link);
  if (link == null) {
    return;
  } else {
    linkPosition.scrollIntoView({ behavior: "smooth" });
  }
});

// 토글 버튼
const navbarToggleBtn = document.querySelector(".navbar_toggle_btn");

navbarToggleBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// Typeit 라이브러리

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt("#title")
    .pause(500) //멈춤
    .delete(5, { delay: 500 })
    // .pause(500) //멈춤
    .type("저 결혼합니다 :)") //타이핑
    .pause(500) //멈춤
    .delete(10, { delay: 800 })
    .type("홍길동 & 성춘향") //타이핑
    .go();
});

document.addEventListener("DOMContentLoaded", () => {});

// 스크롤 아웃 라이브러리
ScrollOut({
  onShown: (element) => {
    new TypeIt(element.querySelector("#comment_anime"), {
      startDelay: 1000,
      cursor: false,
    })
      .pause(2000)
      .go();
  },
});
