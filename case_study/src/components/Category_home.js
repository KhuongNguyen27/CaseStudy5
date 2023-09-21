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
        <section className="cta">
            <div className="auto-container">
                <div className="cta-container">
                    <div className="row">
                        {categories.slice(0, 6).map((category) => (
                            <div className="col-md-2 col-sm-4 col-6">
                                <div className="cta-content">
                                    <div className="cta-image">
                                        <img className="img-fluid" alt="parts" src={image + category.image} />
                                    </div>
                                    <div className="cta-info">
                                        <h5>
                                            {category.name}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Category_home;