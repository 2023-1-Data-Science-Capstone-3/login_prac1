//cctv 위치 표시
// cctv 위치를 표시할 배열입니다
var positions = [
    {
        latlng: new kakao.maps.LatLng(37.484440, 126.885991),
        videoSrc: "./video/pop1.html"
    },
    {
        latlng: new kakao.maps.LatLng(37.479118, 126.894832),
        videoSrc: "./video/pop2.html"
    
    },
    {
        latlng: new kakao.maps.LatLng(37.484850, 126.886577),
        videoSrc: "./video/pop3.html"
    
    },
    {
        latlng: new kakao.maps.LatLng(37.501568, 126.847162),
        content: '<div class ="label"><span class="left"></span><span class="center">4</span><span class="right"></span></div>',
        videoSrc: "./video/pop4.html"
    
    },
    {
        latlng: new kakao.maps.LatLng(37.487850, 126.887577),
        videoSrc: "./video/pop5.html"
    
    }
];

for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(30, 30);
    // 마커 이미지의 주소 
    var imageSrc = '../image/cctv.png'
    // 쓰레기통 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image : markerImage // 마커 이미지 
    });
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', (function (src) {
        return function () {
            var popupWidth = 600;
            var popupHeight = 400;
            var popupX = Math.ceil(( window.screen.width - popupWidth )/2);
            var popupY = Math.ceil(( window.screen.height - popupHeight )/2); 
            window.open(src, 'cctv'+i, 'width=' + popupWidth + ',height=' + popupHeight + ',left='+ popupX + ', top='+ popupY);
        };
    })(positions[i].videoSrc));

}




