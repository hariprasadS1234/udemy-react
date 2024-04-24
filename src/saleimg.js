import a from "./udemy_img/sales.jpg"
function Saleimg() {
    return (
        <div className="sale-image" >
        <img src={a} alt="no image"></img>
        <div class="sale_image_desc">
            <h1>Udemy offers just for one day!!! closes soon</h1>
            <p>save the best course by today and enjoy learning</p>
        </div>
    </div >)
}
export default Saleimg