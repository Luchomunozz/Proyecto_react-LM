import './../Nav_banner/Nav_banner.css'


function Navigation(){
    return(
        <nav className="banner_list">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;