import React from 'react';
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const Info = () => {
    const [foodInfo, setFoodInfo] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(({data}) => {
                const mealIngs = {...data.meals[0]}

                const ings = []
                for (let i = 1; i <= 20; i++) {
                    const ing = mealIngs[`strIngredient${i}`]
                    if (ing) ings.push(ing)
                }
                mealIngs.ings = ings
                setFoodInfo(mealIngs)
            })

    }, [id])


    return (
        <div className="info-bg">
            <div className="container">
                <img className="img-info" src={foodInfo.strMealThumb} alt=""/>
                <div className="row">
                    {
                        foodInfo.ings?.map((it, idx) => {
                            return (
                                <div key={foodInfo.title} className="col-3">
                                    <div className="ing-block" key={idx}>
                                        <Link className="link-text" to={`/product/${it}`}>
                                            <img className="img-ings"
                                                 src={`https://www.themealdb.com/images/ingredients/${it}-Small.png`}
                                                 alt=""/>
                                            <div className="ings">{it}</div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }


                <div className="link-text"><span className="ings">Category: </span> {foodInfo.strCategory}</div>
                <div className="link-text"><span className="ings">Meal:</span> {foodInfo.strMeal}</div>
                <div className="link-text"><span className="ings">Area:</span> {foodInfo.strArea}</div>
                <br/>
                <div className="link-text"><span
                    className="ings">Instructions : </span> {foodInfo.strInstructions}
                </div>

            </div>
        </div>
</div>
)
    ;
};

export default Info;