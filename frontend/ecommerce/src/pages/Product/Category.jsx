import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Category({categoryId, filter}){
    const [listProduct,setListProduct]=useState([]);
    // let productsFiltered=[...listProduct];
    const [products,setProducts]=useState(listProduct);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/categories/${categoryId}/products`)
        .then((response)=>{
            setListProduct(response.data);
            setProducts(response.data);
        });
    }, [categoryId]);
    useEffect(()=>{
        switch (parseInt(filter)) {
            case 2:
                setProducts(listProduct.slice().sort((a,b)=>a.name.localeCompare(b.name)));
                break;
            case 3:
                setProducts(listProduct.slice().sort((a,b)=>b.name.localeCompare(a.name)));
                break;
            case 4:
                setProducts(listProduct.slice().sort((a,b)=>{
                    return (a.price-b.price);
                }));
                break;
            case 5:
                setProducts(listProduct.slice().sort((a,b)=>{
                    return (b.price-a.price);
                }));
                break;
            default:
                break;
        }
    },[filter]);

    return (
        <div className="row py-3 my-2">
            {products.map((product) => (<div className="col-3" key={product.id}><ProductItem product={product} /></div>))}
            {/* {console.log(productsFiltered)} */}
        </div>
    );
}
export default Category;