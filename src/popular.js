
import a from "./udemy_img/c1 (1).jpg"
import b from "./udemy_img/c2.jpg"
import c from "./udemy_img/c3.jpg"
import d from "./udemy_img/c4.jpg"
import e from "./udemy_img/c3.jpg"
import f from "./udemy_img/c4.jpg"
import g from "./udemy_img/c2.jpg"
import h from "./udemy_img/c3.jpg"
function Popular(){
    return(
<div class="popular">
        <h1 class="popular__title">Most popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card__second">
                <img src={a}></img>
                <h3>2020 Python data visual masterclass</h3>
                <p>col steele</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>4000</del></p>
            </div>
            <div class="course-card__second">

                <img src={b}></img>
                <h3>Full stack developer by ala with projects</h3>
                <p>steve roggers</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>5999</del></p>
            </div>
            <div class="course-card__second">

                <img src={c}></img>
                <h3>Data visualization by jspider and qspider</h3>
                <p>pankaj mutha</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>6999</del></p>
            </div>
            <div class="course-card__second">

                <img src={d}></img>
                <h3>Devops masterclass by psa bangalore</h3>
                <p>advik</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card__second">

                <img src={e}></img>
                <h3>Data visualization by jspider and qspider</h3>
                <p>pankaj mutha</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>6999</del></p>
            </div>
            <div class="course-card__second">

                <img src={f}></img>
                <h3>Devops masterclass by psa bangalore</h3>
                <p>advik</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
            <div class="course-card__second">

                <img src={g}></img>
                <h3>Full stack developer by ala projects</h3>
                <p>steve roggers</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>5999</del></p>
            </div>
            <div class="course-card__second">

                <img src={h}></img>
                <h3>Data visualization by jspider and qspider</h3>
                <p>pankaj mutha</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>6999</del></p>
            </div>


        </div>
    </div>)}
    export default Popular