import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import styles from "./index.module.css";

function Product(){
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
                            <strong style={{color:"#ffb416", fontWeight:400}}>Tin tức</strong>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <aside className="col-3">
                            <Filter></Filter>
                        </aside>
                        <section className="main-container col-9">
                            <div className="sort-cate">
                                <div className="d-flex justify-content-end align-items-center">
                                    <label className="px-2">Sắp xếp theo:</label>
                                    <select className="form-select w-25" id="">
                                        <option value="1">Mặc định</option>
                                        <option value="2">Tên (A - Z)</option>
                                        <option value="3">Tên (Z - A)</option>
                                        <option value="4">Giá (Thấp &gt; Cao)</option>
                                        <option value="5">Giá (Cao &gt; Thấp)</option>
                                        <option value="6">Đánh giá (Cao nhất)</option>
                                        <option value="7">Đánh giá (Thấp nhất)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="products-view">
                                <div className="row py-3 my-2">
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/vmart/san_pham/OPPO-Reno-5-228x228.png" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/iphone-12-pro-max-xanh-duong-new-600x600-600x600-dd0d9c3f-a876-4254-b206-399a8a050fca-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/iphone-12-pro-max-xanh-duong-new-600x600-600x600-d4f1f529-b76d-4a27-b5fb-671f597248f9-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/a233de7dca2fbff7bbc6f8476e6ba7bf-56e2b026-8f61-4973-a17a-5a75ba5ec444-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-3 my-2">
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/600x600-crop-iphone-12-mini-128gb-xtmobile-c32e1960-40fd-414b-8144-fb8517a9de97-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/637170935875912528-ss-s20-ultra-den-1-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/galaxy-z-fold2-5g-1-da9cf703-d4eb-49c8-bb44-4b8c7a5d4c64-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/a233de7dca2fbff7bbc6f8476e6ba7bf-56e2b026-8f61-4973-a17a-5a75ba5ec444-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-3 my-2">
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/samsung-galaxy-note-20-ultra-vangdong-600x600-600x600-f0c78c2f-b405-432c-9b98-0be1184724fc-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/iphone-12-pro-max-xanh-duong-new-600x600-600x600-dd0d9c3f-a876-4254-b206-399a8a050fca-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/iphone-12-pro-max-xanh-duong-new-600x600-600x600-d4f1f529-b76d-4a27-b5fb-671f597248f9-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className={styles["product-item"]}>
                                            <Link className={styles["product-thumbnail"]} to="/">
                                                <img className={styles["lazyload"]} src="https://vmart.exdomain.net/image/cache/catalog/evo/a233de7dca2fbff7bbc6f8476e6ba7bf-56e2b026-8f61-4973-a17a-5a75ba5ec444-228x228.jpg" width={240} height="240"  alt="" />
                                            </Link>
                                            <div className={styles["product-action"]}>
                                                <Link className={styles["btn-wishlist"]} to="/">
                                                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className={styles["product-info"]}>
                                                <h3 className={styles["product-name"]}>
                                                    Điện thoại OPPO Reno5 (8GB|128GB)
                                                </h3>
                                                <div className={styles["price-box"]}>
                                                    <div className="price">8,690,000đ</div>
                                                    <div className={styles["action-cart"]}>
                                                        <button className={styles["btn-views"]}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                                                                <circle cx="7" cy="17" r="2"></circle>
                                                                <circle cx="15" cy="17" r="2"></circle>
                                                                <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
                                                                    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
                                                                    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;