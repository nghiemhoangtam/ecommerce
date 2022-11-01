import styles from "./index.module.css";

function Footer(){
    return (
        <footer>
            <div className="footer__location">
                <div className="container">
                    <div className="row ">
                        <div className="col-4">
                            <h4 className={styles["title-menu"]}>THIÊN ĐƯỜNG MUA SẮM VMART</h4>
                            <ul className="list-unstyled mt-4">
                                <li>Công ty cổ phần thương mại VMart</li>
                                <li>Địa chỉ: A12, Đinh Tiên Hoàng, Q. Hoàn Kiếm, Hà Nội </li>
                                <li>Điện thoại:&nbsp;
                                    <a href="tel:19006750">0123456789</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h4 className={styles["title-menu"]}>VMART</h4>
                            <ul className="list-unstyled mt-4">
                                <li>
                                    <a href="http://">
                                        <i className="fa fa-map-marked"></i>
                                        &nbsp;
                                        Xem bản đồ đường đi
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        <i className="fa fa-map-marker-alt"></i>
                                        &nbsp;
                                        Điện thoại: +84123456789
                                    </a>
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-flip-horizontal"></i>
                                    &nbsp;
                                    Địa chỉ: [ A12, Đinh Tiên Hoàng ] Hoàn Kiếm-Hà Nội
                                </li>
                                <li>
                                    <a href="http://">
                                        <i className="fa fa-envelope"></i>
                                        &nbsp;
                                        Email: contact@yourdomain.com
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        <i className="far fa-clock"></i>
                                        &nbsp;
                                        Giờ mở cửa: Các ngày trong tuần: 9h00 - 22h00
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h4 className={styles["title-menu"]}>CỬA HÀNG</h4>
                            <ul className="list-unstyled mt-4">
                                <li>
                                    <a href="http://">
                                        <i className="fa fa-map-marked"></i>
                                        &nbsp;
                                        Xem bản đồ đường đi
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        <i className="fa fa-map-marker-alt"></i>
                                        &nbsp;
                                        Điện thoại: +84123456789
                                    </a>
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-flip-horizontal"></i>
                                    &nbsp;
                                    Địa chỉ: [ A12 Phan Đình Phùng, ] Ba Đình-Hà Nội
                                </li>
                                <li>
                                    <a href="http://">
                                        <i className="fa fa-envelope"></i>
                                        &nbsp;
                                        Email: contact@yourdomain.com
                                    </a>
                                </li>
                                <li>
                                    <a href="http://">
                                        <i className="far fa-clock"></i>
                                        &nbsp;
                                        Giờ mở cửa: Các ngày trong tuần: 9h00 - 22h00
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </footer>
    );
}

export default Footer;