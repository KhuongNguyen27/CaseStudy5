import React, { useEffect, useState } from "react";
import CategoryModel from "../models/CategoryModel";

function Category_home(props) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        CategoryModel.getAll().then((res) => {
            setCategories(res);
        });
    }, []);
    const image = 'http://127.0.0.1:8000/';
    return (
        <div>
            {categories.map((category) => (
                <div className="cta-content">
                    <div className="cta-image">
                        <img style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="parts" src={image + category.image} />
                    </div>
                    <div className="cta-info">
                        <h5>
                            {category.name}
                        </h5>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Category_home;