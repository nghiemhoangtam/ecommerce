import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import Category from "./Category";
import styles from "./index.module.css";

function Product({categoryId}){

    const [filter, setfilter] = useState(1);

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
                                    <select className="form-select w-25" value={filter} onChange={(e)=>setfilter(e.target.value)}>
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
                                <Category categoryId={categoryId} filter={filter} />
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;