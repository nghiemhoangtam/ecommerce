import { Link } from 'react-router-dom';
import styles from './index.module.css'

function HeaderNav(){
    return (
        <nav class={styles["header-nav-main"]}>
            <div className="container d-flex align-items-center h-100">
                <div className={styles["mega-menu"]}>
                    <div className={`${styles["menu-title"]} h-100`}>
                        <span>Danh mục sản phẩm</span>
                    </div>
                    <div className={styles["menu-content"]}>
                        <ul className='p-0'>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Máy ảnh' style={{backgroundImage: `url("/images/icons/camera.png")`}}>
                                    Máy ảnh
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Máy chơi game' style={{backgroundImage: `url("/images/icons/gaming.png")`}}>
                                    Máy chơi game
                                    <i className="fa fa-angle-right"></i>
                                </a>
                                
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Loa để bàn' style={{backgroundImage: `url("/images/icons/speaker.png")`}}>
                                    Loa để bàn
                                    <i className="fa fa-angle-right"></i>
                                </a>
                                
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Tai nghe' style={{backgroundImage: `url("/images/icons/headphone.png")`}}>
                                    Tai nghe
                                    <i className="fa fa-angle-right"></i>
                                </a>
                                
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Smartwatch' style={{backgroundImage: `url("/images/icons/smartwatch.png")`}}>
                                    Smartwatch
                                    <i className="fa fa-angle-right"></i>
                                </a>
                                
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Chuột máy tính' style={{backgroundImage: `url("/images/icons/mouse.png")`}}>
                                    Chuột máy tính
                                    <i className="fa fa-angle-right"></i>
                                </a>  
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Bàn phím' style={{backgroundImage: `url("/images/icons/keyboard.png")`}}>
                                    Bàn phím
                                    <i className="fa fa-angle-right"></i>
                                </a>  
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Laptop' style={{backgroundImage: `url("/images/icons/laptop.png")`}}>
                                    Laptop
                                    <i className="fa fa-angle-right"></i>
                                </a>  
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload" title='Máy tính bảng' style={{backgroundImage: `url("/images/icons/tablet.png")`}}>
                                    Máy tính bảng
                                    <i className="fa fa-angle-right"></i>
                                </a>  
                            </li>
                            <li className='nav-item'>
                                <a href="" className="lazyload ps-2" title='Máy tính bảng' >
                                    <span className='d-inline-block ms-1 me-3'><i className="fa fa-plus-circle d-inline"></i></span>
                                    <span>Xem thêm</span>
                                </a>  
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-header-nav h-100">
                    <nav className={`${styles["header-nav"]} h-100`}>
                        <ul className='m-0 p-0 d-flex align-items-center h-100'>
                            <li className={styles["nav-item"]}>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/about">Giới thiệu</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/products">Sản phẩm </Link>
                                <i className={`fa fa-caret-down ${styles["icon-rotate"]}`}></i>
                                <ul className={styles["item-small"]}>
                                    <li>
                                        <a href="http://">Điện thoại</a>
                                    </li>
                                    <li>
                                        <a href="http://">Tai nghe</a>
                                    </li>
                                    <li>
                                        <a href="http://">Loa để bàn</a>
                                    </li>
                                    <li>
                                        <a href="http://">Bàn phím</a>
                                    </li>
                                    <li>
                                        <a href="http://">Chuột máy tính</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/news">Tin tức</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/career">Tuyển dụng</Link>
                            </li>
                            <li className={styles["nav-item"]}>
                                <Link to="/contact">Liên hệ</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </nav>
    )
}

export default HeaderNav;