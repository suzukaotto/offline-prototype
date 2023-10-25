import 'animate.css'
import { addAnimation, removeAnimation } from './animation-utils.js';

const elements = document.querySelectorAll(".list-element");
const shadow = document.getElementById("list-shadow")

console.log(elements)
console.log(shadow)

let isOpened = false;

const toggle = (data) => {
    if (isOpened) shadow.style.left = "0";
    else shadow.style.left = "30vw";
    isOpened = !isOpened;
}

for (const element of elements) {
    if (!(element instanceof HTMLLIElement)) continue;
    element.addEventListener("click", () => {
        toggle();
    })
}



// list element 추가 부분
// data
const items = [
    { title: "[BIG EVENT] 1+1 아이보리 니트" },
    { title: "[SALE] 여름 쿨링 팬츠" },
    { title: "[할인 이벤트] 가을 신상품 출시" },
];

const listElement = document.getElementById("list-element");

// 목록 생성 및 추가
items.forEach(itemData => {
    const listItem = document.createElement("li");
    listItem.classList.add("element");

    const titleElement = document.createElement("h1");
    titleElement.textContent = itemData.title;

    listItem.appendChild(titleElement);
    listElement.appendChild(listItem);
});