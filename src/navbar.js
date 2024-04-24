function Navbar() {

    return (
        <div class="navbar">
            <div class="navbar__s1">
                <h1 class="navbar__s1__title">Udemy</h1>
            </div>
            <div class="navbar__s2"><i class="fa-solid fa-magnifying-glass" style={{color: "#020c1c"}}></i>
                <input placeholder="Search for any courses here..."></input>
            </div>
            <div class="navbar__s3">
                <p>Courses</p>
                <div class="navbar_section">
                    <p>My learning</p>
                    <div class="navbar_section__hover">
                        <p>no course have choosen yet</p>
                    </div>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-bell"></i>
                <i class="fa-solid fa-user"></i>

            </div>
            <div class="navbar__s4">
                <h1>☰</h1>
            </div>

        </div>)
}
export default Navbar