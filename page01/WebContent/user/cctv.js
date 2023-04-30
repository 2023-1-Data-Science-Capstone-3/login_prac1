//cctv 위치 표시
// cctv 위치를 표시할 배열입니다
var positions = [
    {
        latlng: new kakao.maps.LatLng(37.484440, 126.885991),
        content: '<div class ="label"><span class="left"></span><span class="center">1</span><span class="right"></span></div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.479118, 126.894832),
        content: '<div class ="label"><span class="left"></span><span class="center">2</span><span class="right"></span></div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.484850, 126.886577),
        content: '<div class ="label"><span class="left"></span><span class="center">3</span><span class="right"></span></div>'
    },
    {
        latlng: new kakao.maps.LatLng(37.501568, 126.847162	),
        content: '<div class ="label"><span class="left"></span><span class="center">4</span><span class="right"></span></div>'
    }
];

var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

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
    
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 팝업창 등록
    var popupWidth = 600;
    var popupHeight = 400;
    var popupX = Math.ceil(( window.screen.width - popupWidth )/2);
    var popupY = Math.ceil(( window.screen.height - popupHeight )/2); 
    
    window.open('list.html', 'cctv', 'width=' + popupWidth + ',height=' + popupHeight + ',left='+ popupX + ', top='+ popupY);
    });   
}




