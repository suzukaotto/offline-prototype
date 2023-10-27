// 상품 항목 추가 부분
// data
product_data = [
    {
        "image_url": "https://flexible.img.hani.co.kr/flexible/normal/700/1040/imgdb/original/2021/0428/20210428504000.jpg",
        "product_name": "지구를 지키는 옷",
        "store_name": "샤트렌",
        "store_address": "김량장동 90-1",
        "discount": 10,
        "price": 25400,
        "distance": 2.5,
        
    },
    {
        "image_url": "https://image.msscdn.net/images/goods_img/20230614/3364208/3364208_16867332441714_500.jpg",
        "product_name": "가젤 인도어",
        "store_name": "아디다스",
        "store_address": "김량장동 133-91",
        "discount": 3,
        "price": 169000,
        "distance": 3.2,
    },
    {
        "image_url": "https://www.muji.com/wp-content/uploads/sites/12/2021/02/026.jpg",
        "product_name": "MUJI Labo",
        "store_name": "큰옷빵빵",
        "store_address": "김량장동 24번지 1호",
        "discount": 15,
        "price": 32000,
        "distance": 3.2,
    },
    {
        "image_url": "https://image.msscdn.net/images/goods_img/20230907/3539176/3539176_16944138071759_500.jpg",
        "product_name": "워셔블 투 톤 크루넥...",
        "store_name": "트릴리온",
        "store_address": "김량장동 123-1",
        "discount": 44,
        "price": 29300,
        "distance": 4.9,
    },
    {
        "image_url": "https://image.msscdn.net/images/goods_img/20230524/3321155/3321155_16849997967407_500.jpg",
        "product_name": "LETTERING SATIN...",
        "store_name": "날개옷가게",
        "store_address": "수원시 영통구 영통동 1000-18번지..",
        "discount": 15,
        "price": 68919,
        "distance": 21.6,
    },
]

console.log(product_data[2]);


let list_element_div = document.getElementById("list-element");

// html코드 div 안에 추가.
for (let i = 0; i < product_data.length; i++) {
    let product_data_for = product_data[i];
    // 할인가 계산 및 소수점 반올림
    let product_data_discount_price = Math.round(product_data_for.price - product_data_for.price * (product_data_for.discount / 100))
    console.log("할인가 " + Math.round(product_data_discount_price))

    let htmlCode = `
    <div id="list-element-item" class="animate__animated animate__fadeInLeft">
    <div class="list-element">
    <!-- 이미지 -->
    <div id="list-element-image-container">
    <img id="list-element-image" src=${product_data_for.image_url} onerror="this.onerror=null; this.src='src/media/img/noImg.png';">
    </div>
    <!-- 문구 -->
    <div id="list-element-info-container">
    <div class="list-element-info-product-name-container">
    <p id="list-element-info-product-name">${product_data_for.product_name}</p>
    </div>
    <p id="list-element-info-store-name">${product_data_for.store_name}</p>
    <p id="list-element-info-store-address">${product_data_for.store_address}</p>
    <div id="list-element-info-product-price-container">
    <div id="list-element-info-product-discount-container">
    <p id="list-element-info-product-discount">${product_data_for.discount}&#37;</p>
    <p id="list-element-info-product-price">${product_data_for.price.toLocaleString()}원</p>
    </div>
    <p id="list-element-info-product-discount-price">${product_data_discount_price.toLocaleString()}원</p>
    </div>
    <div id="list-element-info-distance-div">
    <p id="list-element-info-distance-title">매장 거리</p>
    <p id="list-element-info-distance">${product_data_for.distance}km</p>
    </div>
    </div>
    </div>
    </div>
    `;


    // 할인율이 0이라면 아예 안보이게
    // let productPriceElement = document.querySelectorAll("#list-element-info-product-discount")[i];
    // console.log("alpdmamwpdamd "+productPriceElement)
    // let discount = product_data_for.discount;

    // if (discount === 0) {
    //     productPriceElement.style.display = "none";
    // }


    document.getElementById("list-element").innerHTML += htmlCode;
}


let list_info_div = document.getElementById("product-info");

listInfoPopupAnimation = "animate__fadeInLeft"
listInfoCloseAnimation = "animate__fadeOutLeft"

listInfoMovementTrue = true
listInfoPopupTrue = false;

list_element_div.addEventListener("click", function () {
    setTimeout(() => {
        list_info_div.classList.remove(listInfoPopupAnimation);

        listInfoMovementTrue = true;
    }, 1000);

    if (!listInfoMovementTrue || listInfoPopupTrue) return;
    listInfoMovementTrue = false;
    listInfoPopupTrue = true;

    list_info_div.classList.add(listInfoPopupAnimation)
    list_info_div.style.display = "block";
});

let list_info_close_btn = document.getElementById("product-info-close-btn");

list_info_close_btn.addEventListener("click", function () {
    setTimeout(() => {
        list_info_div.classList.remove(listInfoCloseAnimation);
        list_info_div.style.display = "none";

        listInfoMovementTrue = true;
        listInfoPopupTrue = false;
    }, 1000);

    if (!listInfoMovementTrue) return;
    listInfoMovementTrue = false;

    list_info_div.classList.add(listInfoCloseAnimation)
});

