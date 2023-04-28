<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>MyPage.jsp</title>
	<link rel="stylesheet" type="text/css" href="style_myPage.css">
</head>
<body>
	<header>
		<h1 class="logo">MyPage</h1>
		<div class="buttons-container">
			<div class="buttons">
				<button class="mypage-btn">마이페이지</button>
				<button class="logout-btn">로그아웃</button>
			</div>
		</div>
	</header>

	<div class="content">
		<h2>포인트</h2>
		<p>현재 보유 포인트: <span class="point">1000</span>점</p>
		<h2>활동 내역</h2>
		<div class="activity-list">
			<div class="activity">
				<h4>활동 제목</h4>
				<p>진행 상태: <span class="status">완료</span></p>
				<p>획득 포인트: <span class="earned-point">100</span>점</p>
			</div>
			<!-- 다른 활동들 -->
		</div>
		<button class="back-btn">메인 홈페이지로 돌아가기</button>
	</div>
</body>
</html>
