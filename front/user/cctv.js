//cctv 위치 표시
// cctv 위치를 표시할 배열입니다
var positions = [
    {
        latlng: new kakao.maps.LatLng(37.48289633, 126.8868871),
        content: '<div class ="label"><span class="left"></span><span class="center">1</span><span class="right"></span></div>'
    },
];

// 커스텀 오버레이 생성
for (var i = 0; i < positions.length; i ++) {
    var marker = new kakao.maps.Marker({
        position: positions[i].latlng,
        content: positions[i].content,
        clickable: true   
    });
    // 커스텀 오버레이를 지도에 표시합니다
    marker.setMap(map);
    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다 
    var content = '<div class="wrap">' + 
    '<div class="info">' + 
    '<div class="title">' + 
    '서울특별시 구로구 가리봉동 89-99' + 
    '<div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
    '</div>' + 
    '<div class="body">' + 
    '<div class="desc">' + 
    '<div class="ellipsis">플라스틱: 3</div>' + 
    '<div class="ellipsis"><br>캔: 3</div>' + 
    '</div>' +    
    '</div>';


    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()       
    });
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 팝업창 등록
        overlay.setMap(map);
    });   
}




