import a from "./udemy_img/c1 (1).jpg"
import b from "./udemy_img/c2.jpg"
import c from "./udemy_img/c3.jpg"
import d from "./udemy_img/c4.jpg"
function Recommended(){

return(
<div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p class="recommended__desc">pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={a}></img>
                <h3>2020 Python data visual masterclass</h3>
                <p>col steele</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>4000</del></p>
            </div>
            <div class="course-card">

                <img src={b}></img>
                <h3>Full stack developer by ala with projects</h3>
                <p>steve roggers</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>5999</del></p>
            </div>
            <div class="course-card">

                <img src={c}></img>
                <h3>Data visualization by jspider and qspider</h3>
                <p>pankaj mutha</p>
                <p>4.9⭐⭐⭐</p>
                <p>449 <del>6999</del></p>
            </div>
            <div class="course-card">

                <img src={d}></img>
                <h3>Devops masterclass by psa bangalore academy</h3>
                <p>advik</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>9999</del></p>
            </div>
        </div>
    </div>)}
    export default Recommended