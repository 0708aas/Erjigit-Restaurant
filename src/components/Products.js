import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";


const Products = () => {

    const [ings, setIngs] = useState([])
    const {name} = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data}) => setIngs(data.meals))
    }, [name])

    return (
        <div className="bg">
            <div className="products">
                <img className="img-ings" src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt=""/>
                <div className="products-text">{name}</div>
            </div>


            <div className=" row">
                {
                    ings.map(it => {
                        return (
                            <div className="col-sm-6 col-md-4 col-lg-3 ">
                                <Link to={`/food/${it.idMeal}`}>
                                    <img className="img-info" src={it.strMealThumb} alt=""/>
                                    <div className="link-text">{it.strMeal}</div>
                                </Link>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
};

export default Products;