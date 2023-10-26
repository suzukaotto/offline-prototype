
myNowLocationLatitudeLongitude = {"Latitude" : 0, "Longitude" : 0}

// 주소 받아오기 에러 횟수 (잘 되면 초기화)
getNowLocationAddressErrorCount = 0

// 새로고침 가능 여부
getNowLocationAddressRefreshPossible = true

function getNowAddressRefreshFunc() {
    document.getElementById('getNowAddressRefreshBtn').style.visibility = 'hidden';
    if (getNowLocationAddressRefreshPossible) {
        getCurrentPosBtn();
        getNowLocationAddress();

    }
}

function getNowLocationAddress() {
    document.getElementById("address").textContent = "주소를 불러오는 중 . . ."

    navigator.geolocation.getCurrentPosition(getNowLocation()
        .then(result => {
            document.getElementById("address").textContent = result;
            getNowLocationAddressErrorCount = 0

            cuteToast({
                type: "success", // or 'info', 'error', 'warning'
                title: "위치 정보 가져오기 성공",
                message: "",
                timer: 3000,
            })
        })
        .catch(error => {
            getNowLocationAddressErrorCount++
            console.log(error)

            // error msg 커스텀
            getNowLocationAddressErrorMsg = String(error)
            cleanErrorMsg = getNowLocationAddressErrorMsg.replace('Error: ', '')
            document.getElementById("address").textContent = cleanErrorMsg;

            cuteToast({
                type: "error", // or 'info', 'error', 'warning'
                title: "위치 정보 가져오기 실패",
                message: "",
                timer: 3000,
            })

            if (getNowLocationAddressErrorCount >= 3) {
                Swal.fire({
                    icon: 'error',
                    title: '위치 정보 가져오기 실패',
                    text: '잠시 기다리신 후 페이지를 새로고침해보세요.',
                    footer: ''
                })
            } else {
                if (getNowLocationAddressRefreshPossible) {
                    document.getElementById('getNowAddressRefreshBtn').style.visibility = 'visible';
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: '위치 정보 가져오기 실패',
                        text: '위치 권한을 확인하신 후 새로고침해보세요.',
                        footer: ''
                    })
                }
            }
        })
        , getNowLocationError);

    function getNowLocation() {
        return new Promise((resolve, reject) => {
            const timeout = 10000;

            const timer = setTimeout(() => {
                clearTimeout(timer);
                getNowLocationRejectError("주소를 불러올 수 없습니다.")
            }, timeout);

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    myNowLocationLatitudeLongitude.Latitude = latitude
                    myNowLocationLatitudeLongitude.Longitude = longitude

                    console.log(myNowLocationLatitudeLongitude)

                    var geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCvFIrXUBEoQBpjBygqSqO42m4I0X3tPpk`;

                    fetch(geocodingApiUrl)
                        .then(response => response.json())
                        .then(data => {
                            if (data.results.length > 0) {
                                var fullAddress = data.results[0].formatted_address;
                                // 주소에서 원하는 부분만 추출
                                var parts = fullAddress.split(" ");
                                var customAddress = parts.slice(1, 5).join(" ");

                                clearTimeout(timer);
                                resolve(customAddress)
                            } else {
                                getNowLocationRejectError("주소를 찾을 수 없습니다.");
                            }
                        })
                        .catch(error => {
                            getNowLocationRejectError("주소를 찾을 수 없습니다.");
                        });
                });

            } else {
                getNowLocationRejectError("브라우저가 위치 정보를 지원하지 않습니다.");
            }

            function getNowLocationRejectError(error_msg) {
                clearTimeout(timer);
                reject(new Error(error_msg));
            }
        });
    }
} 