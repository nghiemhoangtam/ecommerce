import styles from "./index.module.css"

function Filter(){
    const toggleChecked=(e)=>{
        let inputTag=e.currentTarget.children[0];
        inputTag.checked = !(inputTag.checked);
    }
    return (
        <div className={styles["filter"]}>
            <div className="filter-head">
                <h2 className={styles["title-filter"]}>Lọc</h2>
            </div>
            <div className="filter-container px-2">
                <div className="filter-group">
                    <h2>Thương hiệu</h2>
                    <ul className="list-unstyled py-2">
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Apple</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Samsung</span>
                        </li>
                    </ul>
                </div>
                <div className="filter-group">
                    <h2>Giá</h2>
                    <ul className="list-unstyled">
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Tất cả</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Dưới 1 triệu</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Từ 1 đến 2 triệu</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Từ 2 đến 4 triệu</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Từ 4 đến 6 triệu</span>
                        </li>
                    </ul>
                </div>
                <div className="filter-group">
                    <h2>Bộ nhớ</h2>
                    <ul className="list-unstyled">
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">256GB</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">128GB</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">64GB</span>
                        </li>
                    </ul>
                </div>
                <div className="filter-group">
                    <h2>Màu sắc</h2>
                    <ul className="list-unstyled">
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Vàng</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Đỏ</span>
                        </li>
                        <li className={styles["filter-item"]} onClick={toggleChecked}>
                            <input type="radio" />
                            <i className={styles.fa}></i>
                            <span className="d-inline-block mx-4 px-2">Trắng</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Filter;