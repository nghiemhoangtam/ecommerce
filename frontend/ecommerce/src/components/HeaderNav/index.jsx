import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';
import styles from './index.module.css'

function HeaderNav(){
    const [listCategories,setListCategories]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/categories")
        .then((response)=>{
            console.log(response);
            setListCategories(response.data);
        })
        .catch((response)=>{
            console.log(response);
        })
        return () => {
            
        };
    },[]);
    
    return (
        <nav class={styles["header-nav-main"]}>
            <div className="container d-flex align-items-center h-100">
                <div className={styles["mega-menu"]}>
                    <div className={`${styles["menu-title"]} h-100`}>
                        <span>Danh mục sản phẩm</span>
                    </div>
                    <div className={styles["menu-content"]}>
                        <ul className='p-0'>
                            {listCategories.map((category)=>(<li><CategoryItem category={category} /></li>))}
                            {console.log(listCategories)}
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