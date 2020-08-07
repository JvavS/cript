* {
	margin: 0;
	padding: 0;
}

.ffht {
	width: 200px;
	height: 200px;
	position: relative;
	margin: 150px auto;
	/* perspective: 1000px; */
	/* 将平面图形转换为立体图形 */
	/*transform-style: preserve-3d;*/
	/* transform: rotateY(20deg) rotateX(150deg); */
				/* 动画名称 动画时长 延时时间 匀速 无限循环 逆播 */ 

	animation: changes 2s 0.2s linear infinite alternate;
}
.ffht:hover {
	animation-play-state: paused;/*鼠标放上去 暂停动画 */
}
						/*动画集名称*/
@keyframes changes {
	from {
		transform: translateX(0)
	}
	to {
		transform: translateX(300px)
	}
}