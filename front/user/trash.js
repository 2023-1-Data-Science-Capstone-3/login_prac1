//쓰레기통 위치와 주소를 표시
// 쓰레기통 위치를 표시할 배열입니다 
var positions = [
    {
        latlng: new kakao.maps.LatLng(37.482896, 126.886887),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 가리봉동 121-30</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.483873, 126.886325),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 가리봉동 88-18</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.484440, 126.885991),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 가리봉동 25-51</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.479118, 126.894832),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 가리봉동 137-4</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.482176, 126.886722),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 가리봉동 121-44</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.480359, 126.891423),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 가리봉동 134-114</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.480763, 126.891283),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 가리봉동 131-11</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.484850, 126.886577),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 가리봉동 89-99</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.495065, 126.858047),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 개봉동 416-146</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.500241, 126.851139),
        imageSrc: "../image/trash.png",
        content: '<div>서울특별시 구로구 개봉동 134-8</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.480161, 126.888695),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 가리봉동 125-16</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.482176, 126.886722),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 가리봉동 121-44</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.484850, 126.886577),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 가리봉동 89-99</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.501568, 126.847162),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 개봉동 492</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.501279, 126.845253),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 개봉동 63-35</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.501074, 126.843823),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 개봉동 60-101</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.501039, 126.845496),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 개봉동 66-32</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.499057, 126.851719),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 개봉동 139-61</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.497599, 126.855601),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 개봉동 156-5</div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.501568, 126.847162),
        imageSrc: "../image/recycle.png",
        content: '<div>서울특별시 구로구 개봉동 492</div>'
    },
];
 
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(30, 30); 
    
    // 쓰레기통 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(positions[i].imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image : markerImage // 마커 이미지 
    });

        // 마커에 표시할 인포윈도우를 생성합니다 
        var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
