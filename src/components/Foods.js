import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Foods = () => {

    const [food, setFood] = useState([])
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setFood(data.meals))
    }, [])

    return (
        <div className="bg">
            <div className="container">

                <div className="row">
                    {
                        food.map(it => {
                            return (
                                <div key={it.idMeal} className="col-sm-6 col-md-4 col-lg-3" >
                                    <div className="box">
                                        <Link className="link-text" to={`/food/${it.idMeal}`}>
                                            <img className="img" src={it.strMealThumb} alt=""/>
                                            <br/>
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


export default Foods;