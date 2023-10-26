var first = true
function checkInternetConnection() {
    var status = document.getElementById("address");
    var online = navigator.onLine;

    if (online) {
        if (!first) {
            cuteToast({
                type: "success", // or 'info', 'error', 'warning'
                title: "인터넷에 다시 연결되었습니다.",
                message: "",
                timer: 4000,
            })
        }
        getNowLocationAddress()
    } else {
        first = false
        status.textContent = "인터넷 연결을 확인해주세요.";
        cuteToast({
            type: "error", // or 'info', 'error', 'warning'
            title: "인터넷 연결이 끊겼습니다.",
            message: "",
            timer: 4000,
        })
    }
}

// 페이지가 로드될 때와 인터넷 연결 상태가 변경될 때 확인
window.addEventListener('online', checkInternetConnection);
window.addEventListener('offline', checkInternetConnection);

// 초기 상태 확인
checkInternetConnection();