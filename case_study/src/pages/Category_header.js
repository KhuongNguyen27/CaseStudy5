import React, { useEffect, useState } from "react";
import CategoryModel from "../models/CategoryModel";

function Category_header(props) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        CategoryModel.getAll().then((res) => {
            setCategories(res);
        });
    },[]);
    return (
        <div>
            {categories.map((category) => (
                <li><a href="#" style={{ color:"black"}}>{category.name}</a></li>
            ))}
        </div>
    );
}

export default Category_header;