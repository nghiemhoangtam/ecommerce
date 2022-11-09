import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import styles from "./index.module.css";

function ProductItem({product}){
    const navigate=useNavigate();
    const addToWishlist=()=>{
        const userStr=localStorage.getItem("user");
        if (userStr==null){
            navigate("/account");
        }
        const user=JSON.parse(userStr);
        const data={
            "userId":user.id,
            "productId": product.id
        }
        const headers={
            'Content-Type': 'application/json',
            "Authorization":("Bearer "+user.accessToken)
        }
        const config={
            headers
        }

        axios.post("http://localhost:8080/api/wishlists",data,config)
            .then((response)=>{
                console.log(response);
            });
    }
    return(
        <div className={styles["product-item"]}>
            <Link className={styles["product-thumbnail"]} to="/">
                <img className={styles["lazyload"]} src={product.imgUrl} width={240} height="240"  alt="" />
            </Link>
            <div className={styles["product-action"]}>
                <div className={styles["btn-wishlist"]} onClick={addToWishlist}>
                    <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlns="http://www.w3.org/2000/svg">
                        <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z"></path>
                    </svg>
                </div>
            </div>
            <div className={styles["product-info"]}>
                <h3 className={styles["product-name"]}>
                    {product.name}
                </h3>
                <div className={styles["price-box"]}>
                    <div className="price">{product.price}đ</div>
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
    );

}

export default ProductItem;