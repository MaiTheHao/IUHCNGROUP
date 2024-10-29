import React from "react";
import PIC1 from "../../assets/pics/HOMEPAGE-background.jpg";
import "./Home.scss";

const Home = () => (
	<div id="HomePage" className="WebPage">
		<header>
			<h2>Bạn muốn biến những ý tưởng 'điên rồ' nhất của mình thành hiện thực?</h2>
			<p>
				Hãy cùng chúng mình khám phá thế giới lập trình, nơi mà chỉ cần vài dòng code, bạn có thể tạo ra bất cứ điều gì
				mình muốn. Còn chần chờ gì nữa, hãy gia nhập cộng đồng 'hacker' chính hiệu của chúng mình ngay thôi!
			</p>
		</header>
		<main>
			<img src={PIC1} alt="EXAMPLE PIC" />
		</main>
	</div>
);

export default Home;
