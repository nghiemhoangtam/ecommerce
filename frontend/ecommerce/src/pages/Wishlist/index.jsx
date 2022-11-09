import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductItem from "../Product/ProductItem";
import styles from "./index.module.css"

function Wishlist(){
    const navigate = useNavigate();
    
    const [listProducts,setListProducts]=useState([]);
    useEffect(() => {
        const userStr=localStorage.getItem("user");
        if (userStr==null){
            navigate("/account")
        }
        const user=JSON.parse(userStr);
        axios.get(`http://localhost:8080/api/wishlists/users/${user.id}/products`)
            .then((response)=>{
                setListProducts(response.data);
            })
        return () => {
        };
    }, []);
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
                        <h1>DANH SÁCH YÊU THÍCH</h1>
                    </div>
                    <div className="content-page">
                        {listProducts.map((product)=>(<div key={product.id} className="col-3"><ProductItem product={product} /></div>))}                 
                    </div>
                </div>
                
            </section>
        </>
    )
}
export default Wishlist;