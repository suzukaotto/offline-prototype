// 모달 팝업 부분
const loginModalPopupBtn = document.getElementById('loginModalPopupBtn');
const loginModal = document.getElementById('loginModal');
const loginModalCloseBtn = document.getElementById('loginModalCloseBtn');

LoginModalPopupAnimation = "animate__fadeInDown"
LoginModalCloseAnimation = "animate__fadeOutUp"

loginModalPopupBtn.onclick = function () {
    setTimeout(() => {
        loginModal.classList.remove(LoginModalPopupAnimation);
    }, 1000);
    loginModal.style.display = 'block';
    loginModal.classList.add(LoginModalPopupAnimation);
}
loginModalCloseBtn.onclick = function () {
    setTimeout(() => {
        loginModal.style.display = 'none';
        loginModal.classList.remove(LoginModalCloseAnimation);
    }, 1000);
    loginModal.classList.add(LoginModalCloseAnimation);
}

window.onclick = function (event) {
    if (event.target == loginModal) {
        setTimeout(() => {
            loginModal.style.display = 'none';
            loginModal.classList.remove(LoginModalCloseAnimation);
        }, 1000);
        loginModal.classList.add(LoginModalCloseAnimation);
    }
}