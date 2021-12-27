import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Listfood = () => {
    const [listFood, setListFood] = useState([])
    const {name} = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(({data}) => setListFood(data.meals))
    }, [name])

    return (
        <div className="bg">
        <div className="container">
                <div className="row">
                    {
                        listFood.map(it => {
                            return (
                                <div key={it.idMeal} className="img col-sm-6 col-md-4 col-lg-3">
                                    <div className="box">
                                        <Link className="link-text" to={`/food/${it.idMeal}`}>
                                            <img className="img" src={it.strMealThumb} alt=""/>
                                            {it.strMeal}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default Listfood;