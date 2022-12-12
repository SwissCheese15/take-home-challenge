import "./navHeaderStyles.css"


function NavHeader() {


    return (
        <>
            <div className="navHeaderMainDiv">
            <div></div>
                <div className="headerOption">
                    <div className="text">home</div>
                    <div className="angleDiv">
                        <img src="/images/angle.png"></img>
                    </div>
                    <span>
                        <img src="/images/triangle.png"></img>
                    </span>
                    <div class="space"></div>
                    <div id="dropdown">
                        <ul class="list">
                            <li><div className="hoverLine"/><a>Main Home</a></li>
                            <li><div className="hoverLine"/><a>Interior Design</a></li>
                            <li><div className="hoverLine"/><a>Studio Home</a></li>
                            <li><div className="hoverLine"/><a>Architecture Agency</a></li>
                            <li><div className="hoverLine"/><a>Design Company</a></li>
                            <li><div className="hoverLine"/><a>Home Video</a></li>
                            <li><div className="hoverLine"/><a>Home Full Screen</a></li>
                            <li><div className="hoverLine"/><a>Home One Page</a></li>
                            <li><div className="hoverLine"/><a>Home with Side Menu</a></li>
                        </ul>
                    </div>
                </div>
                <div className="headerOption">
                    <div className="text">pages</div>
                    <div className="angleDiv">
                        <img src="/images/angle.png"></img>
                    </div>
                    <span>
                        <img src="/images/triangle.png"></img>
                    </span>
                    <div class="space"></div>
                        <div id="dropdown">
                            <ul class="list">
                                <li><div className="hoverLine"/><a>Main Home</a></li>
                                <li><div className="hoverLine"/><a>Interior Design</a></li>
                                <li><div className="hoverLine"/><a>Studio Home</a></li>
                                <li><div className="hoverLine"/><a>Architecture Agency</a></li>
                                <li><div className="hoverLine"/><a>Design Company</a></li>
                                <li><div className="hoverLine"/><a>Home Video</a></li>
                                <li><div className="hoverLine"/><a>Home Full Screen</a></li>
                                <li><div className="hoverLine"/><a>Home One Page</a></li>
                                <li><div className="hoverLine"/><a>Home with Side Menu</a></li>
                            </ul>
                        </div>
                </div>
                <div className="headerOption">
                    <div className="text">services</div>
                    <div className="angleDiv">
                        <img src="/images/angle.png"></img>
                    </div>
                    <span>
                        <img src="/images/triangle.png"></img>
                    </span>
                    <div class="space"></div>
                        <div id="dropdown">
                            <ul class="list">
                                <li><div className="hoverLine"/><a>Main Home</a></li>
                                <li><div className="hoverLine"/><a>Interior Design</a></li>
                                <li><div className="hoverLine"/><a>Studio Home</a></li>
                                <li><div className="hoverLine"/><a>Architecture Agency</a></li>
                                <li><div className="hoverLine"/><a>Design Company</a></li>
                                <li><div className="hoverLine"/><a>Home Video</a></li>
                                <li><div className="hoverLine"/><a>Home Full Screen</a></li>
                                <li><div className="hoverLine"/><a>Home One Page</a></li>
                                <li><div className="hoverLine"/><a>Home with Side Menu</a></li>
                            </ul>
                        </div>
                </div>
                <div className="headerOption">
                    <div className="text">portfolio</div>
                    <div className="angleDiv">
                        <img src="/images/angle.png"></img>
                    </div>
                    <span>
                        <img src="/images/triangle.png"></img>
                    </span>
                    <div class="space"></div>
                        <div id="dropdown">
                            <ul class="list">
                                <li><div className="hoverLine"/><a>Main Home</a></li>
                                <li><div className="hoverLine"/><a>Interior Design</a></li>
                                <li><div className="hoverLine"/><a>Studio Home</a></li>
                                <li><div className="hoverLine"/><a>Architecture Agency</a></li>
                                <li><div className="hoverLine"/><a>Design Company</a></li>
                                <li><div className="hoverLine"/><a>Home Video</a></li>
                                <li><div className="hoverLine"/><a>Home Full Screen</a></li>
                                <li><div className="hoverLine"/><a>Home One Page</a></li>
                                <li><div className="hoverLine"/><a>Home with Side Menu</a></li>
                            </ul>
                        </div>
                </div>
                <div className="headerOption">
                    <div className="text">blog</div>
                    <div className="angleDiv">
                        <img src="/images/angle.png"></img>
                    </div>
                    <span>
                        <img src="/images/triangle.png"></img>
                    </span>
                    <div class="space"></div>
                        <div id="dropdown">
                            <ul class="list">
                                <li><div className="hoverLine"/><a>Main Home</a></li>
                                <li><div className="hoverLine"/><a>Interior Design</a></li>
                                <li><div className="hoverLine"/><a>Studio Home</a></li>
                                <li><div className="hoverLine"/><a>Architecture Agency</a></li>
                                <li><div className="hoverLine"/><a>Design Company</a></li>
                                <li><div className="hoverLine"/><a>Home Video</a></li>
                                <li><div className="hoverLine"/><a>Home Full Screen</a></li>
                                <li><div className="hoverLine"/><a>Home One Page</a></li>
                                <li><div className="hoverLine"/><a>Home with Side Menu</a></li>
                            </ul>
                        </div>
                </div>
                <div className="headerOption">
                    <div className="text">contacts</div>
                </div>
            </div>
            <div id="shoppingWithNumber">
                <p id="shoppingCount">
                    2
                </p>
                <img src="/images/shoppingBag.png" id="cartIcon"></img>
            </div>
            <img src="/images/search.png" id="searchIcon"></img>
            <img src="/images/hamburger.png" id="hamburgerIcon"></img>
        </>
    );
}

export default NavHeader;