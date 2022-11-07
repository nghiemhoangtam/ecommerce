import { Link } from "react-router-dom";
import styles from "./index.module.css"

function Career(){
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
                            <strong style={{color:"#ffb416", fontWeight:400}}>Tuyển dụng</strong>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="information-page">
                <div className="container">
                    <div className={styles["title-block-page"]}>
                        <h1>TUYỂN DỤNG</h1>
                    </div>
                    <div className="content-page">
                        <p>
                            <strong>VMART TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG FULLTIME TOÀN HÀ NỘI & HCM </strong>
                            <br />
                            <em>**</em>
                        </p>
                        <p>
                            <img style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src="https://bizweb.dktcdn.net/100/429/689/files/thungantrangtri-b4d1efe6-29e4-4629-afe7-61c2089a1580.jpg?v=1623588978620" data-thumb="original" />
                        </p>
                        <p>
                            <strong>MÔ TẢ CÔNG VIỆC</strong>
                            <br />
                            <span>- Tính tiền quản lý thu chi trong ca làm việc</span>
                            <br />
                            <span>- Tiếp nhận hàng, trưng bày hàng hóa đúng quy tắc</span>
                            <br />
                            <span>- Vệ sinh sạch sẽ siêu thị, quầy thu ngân</span>
                            <br />
                            <span>- Chủ động hỗ trợ, phục vụ khách hàng</span>
                            <br />
                            <span>- Tư vấn giải đáp thắc mắc,yêu cầu của khách hàng khi tham quan mua sắm</span>
                        </p>
                        <p>
                            <strong>YÊU CẦU ỨNG VIÊN:</strong>
                            <br />
                            <span>- Nam/Nữ</span>
                            <br />
                            <span>- Tốt nghiệp THPT trở lên. kỹ năng giao tiếp tốt</span>
                            <br />
                            <span>- Có khả năng làm việc xoay ca (không làm chết ca):</span>
                            <br />
                            <span>+ Ca sáng (6:00 - 14:00)</span>
                            <br />
                            <span>+ Ca chiều (13:30:00 - 22:00)</span>
                            <br />
                            <span>= &gt; Đăng ký ca trước làm 1 tuần</span>
                        </p>
                        <p>- Chăm chỉ, trung thực, khỏe mạnh, nhanh nhẹn, hòa đồng</p>
                        <p>
                            <strong>QUYỀN LỢI NHÂN VIÊN:</strong>
                        </p>
                        <p>
                            <strong>_- Lương cứng thử việc 4.8 triệu + Thưởng_</strong>
                            <br />
                            <em>
                                <b>- Lương chính thức: 5,4tr (đã bao gồm bảo hiểm) + Các phúc lợi + Các khoản thưởng KPIs</b>
                            </em>
                            <br />
                            <span>*- Tổng thu nhập 6 - 9 triệu + Chế độ đầy đủ*</span>
                            <br />
                            <span>- 1 tuần nghỉ 1 ngày báo quản lí</span>
                            <br />
                            <span>- Được đóng đầy đủ 03 loại bảo hiểm BHXH, BHYT, BHTN và gói bảo hiểm sức khỏe Bảo Việt chế độ cao</span>
                            <br />
                            <span>- Có cơ hội thăng tiến lên Cửa hàng Phó trong vòng 06 tháng, cửa hàng trưởng sau 4 tháng tiếp</span>
                        </p>
                        <p>Loại hình công việc: Toàn thời gian</p>
                        <p>Lương: 6.000.000₫ - 9.000.000₫ một tháng</p>
                    </div>
                </div>
                
            </section>
        </>
    );
}
export default Career;