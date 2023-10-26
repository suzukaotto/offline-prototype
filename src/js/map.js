var mapContainer = document.getElementById('mapDiv'), // 지도를 표시할 div 
    mapOption = {
        // 37.240878, 127.216365 덕영고 운동장
        center: new kakao.maps.LatLng(37.240878, 127.216365), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 맵 생성
var map = new kakao.maps.Map(mapContainer, mapOption);
getCurrentPosBtn(); // 내 좌표로 위치 설정

// 줌 컨트롤
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


function locationLoadSuccess(pos) {
    // 현재 위치 받아오기
    var currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

    // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
    map.panTo(currentPos);
};

function locationLoadError(pos) {
    cuteToast({
        type: "warning", // or 'info', 'error', 'warning'
        title: "내 위치를 확인하려면 위치 권한을 수락해주세요.",
        message: "",
        timer: 4000,
    })
    getNowLocationAddressRefreshPossible = false;
};

// 위치 가져오기 버튼 클릭 시
function getCurrentPosBtn() {
    navigator.geolocation.getCurrentPosition(locationLoadSuccess, locationLoadError);
    map.setLevel(3);
};

// 로그인 버튼 클릭 시
function loginBtn() {
    Swal.fire({
        icon: 'error',
        title: '구현 중입니다',
        text: '',
        footer: ''
    })
}