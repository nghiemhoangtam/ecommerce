import { Link } from "react-router-dom";
import styles from "./index.module.css"

function About(){
    return (
        <>
            <section>
                <div className="container px-3">
                <ul className="d-flex list-unstyled py-1">
                        <li>
                            <Link to="/">
                                <span className={styles["home-link"]}> Trang chủ </span>
                                &nbsp;
                                /
                                &nbsp;
                            </Link>
                        </li>
                        <li>
                            <strong style={{color:"#ffb416", fontWeight:400}}>Về chúng tôi</strong>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="information-page">
                <div className="container">
                    <div className={styles["title-block-page"]}>
                        <h1>Về chúng tôi</h1>
                    </div>
                    <div className="content-page">
                        <p>
                            <strong>VMART </strong>
                            là hệ thống siêu thị thuộc tập đoàn <strong>EGO</strong>, Việt Nam. Hệ thống này khai trương ngày tháng 11 năm 2019. Theo thống kê của Vietnam Report, tính đến tháng 11/2020, PocoMart nằm top 2 nhà bán lẻ được người tiêu dùng quan tâm nhất và top 4 trên bảng xếp hạng 10 nhà bán lẻ uy tín năm 2020
                        </p>
                        <p>
                            Tháng 5 năm 2021, VMart có khoảng 40 siêu thị và khoảng hơn 600 cửa hàng Vmart trên gần 50 tỉnh thành với tổng diện tích mặt bằng kinh doanh hơn 300.000 m2, số lượng nhân viên khoảng hơn 3.000 người.
                        </p>
                        <p>Các sản phẩm của VMart bao gồm thực phẩm tươi sống, thực phẩm sơ chế, quần áo, mỹ phẩm, đồ gia dụng, văn phòng phẩm, đồ chơi, v.v.</p>
                    </div>
                </div>
                
            </section>
        </>
    );
}
export default About;