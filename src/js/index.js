// 상품 항목 추가 부분
// data
product_data = {
    "product_name" : "Product Name",
    "store_name" : "Store Name",
    "store_address" : "Store Address",
    "discount" : 10,
    "price"    : 25400,
    "distance" : 2.5,
}

// html
let htmlCode = `
    <div id="list-element-item" class="animate__animated animate__fadeInLeft">
        <div class="list-element">
            <!-- 이미지 -->
            <div id="list-element-image-container">
                <img id="list-element-image" src="https://flexible.img.hani.co.kr/flexible/normal/700/1040/imgdb/original/2021/0428/20210428504000.jpg">
            </div>
            <!-- 문구 -->
            <div id="list-element-info-container">
                <div class="list-element-info-product-name-container">
                    <p id="list-element-info-product-name">${product_data.product_name}</p>
                </div>
                <p id="list-element-info-store-name">${product_data.store_name}</p>
                <p id="list-element-info-store-address">${product_data.store_address}</p>
                <div id="list-element-info-product-price-container">
                    <p id="list-element-info-product-price">${product_data.discount}&#37;</p>
                    <p id="list-element-info-product-discount">${product_data.price.toLocaleString()}&#8361;</p>
                </div>
                <div id="list-element-info-distance-div">
                    <p id="list-element-info-distance-title">매장 거리</p>
                    <p id="list-element-info-distance">${product_data.distance}km</p>
                </div>
            </div>
        </div>
    </div>
  `;


let student = document.getElementById("list-element-item");

// html코드 div 안에 추가.
for(let i=0; i<20; i++) {
    document.getElementById("list-element").innerHTML += htmlCode;
}
