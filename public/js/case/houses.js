async function onloadHouses() {

    await addHTMLHouses();
    elementBindingHouses();
    await fetchCity();
    addEventHouses();
}

async function addHTMLHouses() {
    // console.log(`URL changed to ${window.location.pathname}`);
    let html = `
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 id="page-name">Houses</h2>
                    <!-- Breadcrumbs -->
                    <nav id="breadcrumbs">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li>Houses</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div id="features" class="section wb">
        <nav class="megamenu navbar navbar-default" style=" padding: 20px 0; margin: 10px">
        
            <form id="search-form">
                <div class="container" style="min-width: 100%">
                    <div class="row-fluid">
                        <div class="col-md-6">
                            <fieldset class="row-fluid">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <select class="form-control" id="city" name="cityId" onchange="fetchQuanOptions()">
                                        <option disabled selected>Chọn thành phố</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <select class="form-control" id="quan" name="quanId" disabled onchange="fetchPhuongOptions()">
                                        <option disabled selected>Chọn quận/huyện</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <select class="form-control" id="phuong" name="phuongId" disabled>
                                        <option disabled selected>Chọn phường/xã</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset class="row-fluid" style="margin-top: 15px">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="input-group">
                                        <span class="input-group-addon">Từ tháng </span>
                                        <input type="month" name="start" id="start" class="form-control"
                                               style="margin-bottom: 0">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div class="input-group">
                                        <span class="input-group-addon">đến tháng </span>
                                        <input type="month" name="end" id="end" class="form-control"
                                               style="margin-bottom: 0">
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-md-6">
                            <fieldset class="row-fluid">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <select class="form-control" id="sort" name="sort">
                                        <option disabled selected value="0">Sắp xếp theo</option>
                                        <option value="1">Giá từ thấp đến cao</option>
                                        <option value="2">Giá từ cao đến thấp</option>
                                        <option value="3">Diện tích từ nhỏ đến lớn</option>
                                        <option value="4">Diện tích từ lớn đến nhỏ</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset class="row-fluid" style="margin-top: 15px">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">Min</span>
                                        <input type="number" name="priceLow" id="price-low" class="form-control"
                                               placeholder="price" style="margin-bottom: 0">
                                        <span class="input-group-addon">VNĐ</span>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">Max</span>
                                        <input type="number" name="priceHigh" id="price-high" class="form-control"
                                               placeholder="price" style="margin-bottom: 0">
                                        <span class="input-group-addon">VNĐ</span>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">Min</span>
                                        <input type="number" name="areaLow" id="area-low" class="form-control"
                                               placeholder="Area"
                                               style="margin-bottom: 0">
                                        <span class="input-group-addon">m<sup>2</sup></span>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">Max</span>
                                        <input type="number" name="areaHigh" id="area-high" class="form-control"
                                               placeholder="Area"
                                               style="margin-bottom: 0">
                                        <span class="input-group-addon">m<sup>2</sup></span>
                                    </div>
                                </div>
                            </fieldset>
                            
                        </div>
                        <div class="col-md-12 text-center">
                            <fieldset class="row-fluid" style="margin-top: 15px">
                                <button type="button" class="btn btn-success" id="search-button"
                                onclick="submitSearchForm()">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                    Find your preferences
                                </button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </nav>
        <div class="container">
            <div class="row" id="house-list">      
                
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->
`
    document.getElementById("page-content").innerHTML = html;

    if (localStorage.getItem('ACCESS_TOKEN')) {
        document.getElementById("login-logout").innerHTML = `
                <a href="#" onclick="logout()">Logout</a>
                `;
    } else {
        document.getElementById("login-logout").innerHTML = `
                <a href="#" onclick="onloadLogin()">Login</a>
                `;
    }

    await fetchAllHouses();

    $("a[data-rel^='prettyPhoto[gal]']").prettyPhoto();


}


function elementBindingHouses() {
    city = document.getElementById("city");
    quan = document.getElementById("quan");
    phuong = document.getElementById("phuong");
}

function addEventHouses() {

}

let a = ``


async function fetchAllHouses () {
    let list = document.getElementById("house-list");
    const response = await fetch(`${BE_SERVER_PORT}/houses`, defaultFetchOpts);
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
                                    <img src="${item.image[0].imageURL}" alt="" class="img-responsive" style="max-width: 30vw; aspect-ratio: 1/1; object-fit: cover">
                                    <div class="label-inner">
                                        <span class="label-status label">Popular</span>
                                    </div>
                                    <div class="price">
                                        <span class="item-sub-price"> ${item.area} m<sup>2</sup></span>
                                    </div>
                                </figure>
                                <div class="item-body">
                                    <h3 style="text-overflow: ellipsis; overflow: hidden "><a href="#" onclick="onloadHouseDetails(${item.id})">${item.brief}</a></h3>
                                    
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
function submitSearchForm(e) {
    let searchForm = document.getElementById("search-form");
    let formData = new FormData(searchForm);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    console.log("formDataJsonString:", formDataJsonString);

    const uploadRequest = new Request(`${BE_SERVER_PORT}/houses`, {
        method: "POST",
        headers: {"Content-Type": "application/json",
            'Authorization':  'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
        },
        body: formDataJsonString,
        credentials: "include"
    });

    let list = document.getElementById("house-list");
    fetch(uploadRequest)
        .then((response) => response.json())
        .then((data) => {
            console.log("received data:", data);
            if (data.success) {
                data.forEach((item, index) => {
                    console.log(index, item)
                    list.innerHTML +=
                        `<div class="col-md-4 col-sm-6 col-xs-12" style="margin-bottom: 10px">
                    <div class="service-widget">
                        <div class="property-main">
                            <div class="property-wrap">
                                <figure class="post-media wow fadeIn"  >
                                    <a href="${item.image[0].imageURL}" data-rel="prettyPhoto[gal]"
                                       class="hoverbutton global-radius"><i class="flaticon-unlink"></i></a>
                                    <img src="${item.image[0].imageURL}" alt="" class="img-responsive" style="max-width: 30vw; aspect-ratio: 1/1; object-fit: cover">
                                    <div class="label-inner">
                                        <span class="label-status label">Popular</span>
                                    </div>
                                    <div class="price">
                                        <span class="item-sub-price"> ${item.area} m<sup>2</sup></span>
                                    </div>
                                </figure>
                                <div class="item-body">
                                    <h3 style="text-overflow: ellipsis; overflow: hidden "><a href="#" onclick="onloadHouseDetails(${item.id})">${item.brief}</a></h3>
                                    <div class="info">
                                    <h4>
                                        <span>Price: <span class="estate-x-size">${item.price}</span> <span class="estate-x-unit">VNĐ/tháng</span></span>
                                    </h4>
                                        <p style="text-overflow: ellipsis; overflow: hidden; height: 40px">${item.description}</p>
                                    </div>
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
                                    <span class="prop-date">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    9 months ago
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><!-- end service -->
                </div>`
                })
            } else {
                // alert("Register unsuccessfully");
                document.getElementById("notification").innerHTML = `
                        <div class="alert alert-primary alert-dismissible fade show notification" role="alert" id="failed-register" hidden="">
                            <i class="fa fa-exclamation-circle me-2"></i>Search failed, try again
                            <button type="button" class="btn-close" aria-label="Close" onclick="$('#failed-register').alert('close')"></button>
                        </div>
                    `;
                document.getElementById("failed-register").removeAttribute("hidden");
                $('#failed-register').alert();
            }

        })
        .catch(console.error);
}