import { Link } from "react-router-dom";

function CategoryItem({category}){
    return (
        <Link to="" className="lazyload" title={category.name} style={{backgroundImage: `url(${category.logoUrl})`}}>
            {category.name}
            <i className="fa fa-angle-right"></i>
        </Link>
    )
}

export default CategoryItem;