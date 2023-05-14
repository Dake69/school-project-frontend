import React from "react";
import '../styles/index.css'
import {useParams, Link} from "react-router-dom";
import scroll from "../functions/scroll";
import heroes_full from '../../assets/heroes_full.jpg'
const Index = () => {

    const {'*': value} = useParams();
    console.log(value)

    scroll(value)
    return (
        <section className="main">
            <div className="main-content">
                <div>
                    <h1>DotaWiki</h1>
                </div>
                <div>
                    <p>На нашому сайті ви знайдете всю інформацію для початку гри в Доту, а можливо навіть це допоможе
                        стати кращім в цій грі.<br/>Тут є Глоссарій (це місцевий довідник), сітка героів та артефактів і
                        их характеристики</p>
                </div>
                <Link to="/glossary/basics">
                    <p>Глоссарій</p>
                </Link>
            </div>
        </section>
    );
}
export default Index;