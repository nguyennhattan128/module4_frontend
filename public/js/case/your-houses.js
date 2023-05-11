async function onloadYourHouses() {

    await addHTMLYourHouses();
    elementBindingYourHouses();
    addEventYourHouses();
}

async function addHTMLYourHouses() {
    // console.log(`URL changed to ${window.location.pathname}`);
    let html = `
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 id="page-name">Your Houses</h2>
                    <!-- Breadcrumbs -->
                    <nav id="breadcrumbs">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li>Yours</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div id="features" class="section wb">
        <div class="container">
            <div class="row" id="house-list">      
                
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->
`
    document.getElementById("page-content").innerHTML = html;

    removeActiveTopNav();
    document.getElementById("yours-nav").classList.add("active");

    if (localStorage.getItem('ACCESS_TOKEN')) {
        document.getElementById("login-logout").innerHTML = `
                <a href="#" onclick="logout()">Logout</a>
                `;
    } else {
        document.getElementById("login-logout").innerHTML = `
                <a href="#" onclick="onloadLogin()">Login</a>
                `;
    }

    await fetchYourHouses();

    $("a[data-rel^='prettyPhoto[gal]']").prettyPhoto();


}


function elementBindingYourHouses() {

}

function addEventYourHouses() {

}

async function fetchYourHouses () {
    let list = document.getElementById("house-list");
    const response = await fetch(`${BE_SERVER_PORT}/houses/yours`, defaultFetchOpts());
    const houseList = await response.json();
    console.log(houseList);
    if (houseList.success === false) {
        return false
    }
    houseList.data.forEach((item, index) => {
        console.log(index, item)
        list.innerHTML +=
            `<div class="col-md-4 col-sm-6 col-xs-12" style="margin-bottom: 10px">
                    <div class="service-widget">
                        <div class="property-main">
                            <div class="property-wrap">
                                <figure class="post-media wow fadeIn"  >
                                    <a href="${item.image[0].imageURL}" data-rel="prettyPhoto[gal]"
                                       class="hoverbutton global-radius"><i class="flaticon-unlink"></i></a>
                                    <img src="${item.image[0].imageURL}" alt="" class="img-responsive" 
                                    style="max-width: 30vw; aspect-ratio: 1/1; object-fit: cover">
                                    <div class="label-inner">
                                        <span class="label-status label">Popular</span>
                                    </div>
                                    <div class="price">
                                        <span class="item-sub-price"> ${item.area} m<sup>2</sup></span>
                                    </div>
                                </figure>
                                <div class="item-body">
                                    <h3 style="text-overflow: ellipsis; overflow: hidden "><a href="#" onclick="onloadHouseDetails(${item.id})">${item.brief}</a></h3>
                                    <h4>
                                        <span>Price: <span class="estate-x-size">${item.price}</span> <span class="estate-x-unit">VNĐ/tháng</span></span>
                                    </h4>
                                    <div class="adderess" style="text-overflow: ellipsis; overflow: hidden; height: 40px">
                                        <i class="fa fa-map-pin" aria-hidden="true"></i>
                                        ${item.phuong.name +", " + item.quan.name +", " + item.city.name}
                                    </div>
                                </div>
                            </div>
                            <div class="item-foot">
                                <div class="pull-left">
                                    <span class="prop-user-agent">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    ${item.user.name}
                                    </span>
                                </div>
                                <div class="pull-right">
                                    <button type="button" onclick="onloadHouseEdit(${item.id})"
                                        class="btn btn-light btn-radius btn-brd grd1 btn-block">Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div><!-- end service -->
                </div>`
    })
}
