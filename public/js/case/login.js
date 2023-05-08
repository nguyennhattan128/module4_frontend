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
                        <div class="col-md-5">
                            <fieldset class="row-fluid">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <select class="form-control" id="city" name="cityId" onchange="getQuanOptions()">
                                        <option disabled selected>Chọn thành phố</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <select class="form-control" id="quan" name="quanId" disabled onchange="getPhuongOptions()">
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
                        <div class="col-md-7">
                            <fieldset class="row-fluid">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <select class="form-control" id="price-asc" name="priceAsc">
                                        <option disabled selected>Sắp xếp theo giá</option>
                                        <option value="true">Giá từ thấp đến cao</option>
                                        <option value="false">Giá từ cao đến thấp</option>
                                    </select>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <select class="form-control" id="area-asc" name="areaAsc">
                                        <option disabled selected>Sắp xếp theo diện tích</option>
                                        <option value="true">Diện tích từ nhỏ đến lớn</option>
                                        <option value="false">Diện tích từ lớn đến nhỏ</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset class="row-fluid" style="margin-top: 15px">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">Min</span>
                                        <input type="number" name="priceLow" id="price-low" class="form-control"
                                               placeholder="price" style="margin-bottom: 0">
                                        <span class="input-group-addon">x 1.000VNĐ</span>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">Max</span>
                                        <input type="number" name="priceHigh" id="price-high" class="form-control"
                                               placeholder="price" style="margin-bottom: 0">
                                        <span class="input-group-addon">x 1.000VNĐ</span>
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
            
                
                
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="service-widget">
                        <div class="property-main">
                            <div class="property-wrap">
                                <div class="container-fluid">
                                    <figure class="post-media wow fadeIn col-md-4 col-sm-6 col-xs-12" style="padding: 0">
                                        <img src="uploads/estate_01.jpg" alt="" class="img-responsive">
                                        <div class="label-inner">
                                            <span class="label-status label">Popular</span>
                                        </div>
                                        <div class="price">
                                            <span class="item-sub-price">$5.550/sq ft</span>
                                        </div>
                                    </figure>
                                    
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div style="padding: 5px">
                                            <h3>Spacious and Large Garden</h3>
                                            <div class="adderess">
                                                <i class="fa fa-map-pin" aria-hidden="true"></i>
                                                House's address
                                            </div>
                                            <br>
                                            <div class="money" style="font-size: 1.2em">
                                                <dl class="dl-horizontal">
                                                  <dt>Tổng thu</dt>
                                                  <dd>contract's total VNĐ</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-foot">
                                <div class="pull-left">
                                    <span class="prop-user-agent">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    Tenant's name
                                    </span>
                                </div>
                                <div class="pull-right">
                                    <span class="prop-date">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                    1 month (s) from ... to ...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><!-- end service -->
                </div>

            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->
`
    document.getElementById("page-content").innerHTML = html;

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
    houseList.forEach((item, index) => {
        console.log(index, item)
        list.innerHTML +=
            `<div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="service-widget">
                        <div class="property-main">
                            <div class="property-wrap">
                                <figure class="post-media wow fadeIn">
                                    <a href="uploads/estate_01.jpg" data-rel="prettyPhoto[gal]"
                                       class="hoverbutton global-radius"><i class="flaticon-unlink"></i></a>
                                    <img src="uploads/estate_01.jpg" alt="" class="img-responsive">
                                    <div class="label-inner">
                                        <span class="label-status label">Popular</span>
                                    </div>
                                    <div class="price">
                                        <span class="item-sub-price"> ${item.price}/sq ft</span>
                                    </div>
                                </figure>
                                <div class="item-body">
                                    <h3>${item.brief}</h3>
                                    <div class="info">
                                    <h4>
                                        <span>Area: <span class="estate-x-size">${item.area}</span> <span class="estate-x-unit">m<sup>2</sup></span></span>
                                    </h4>
                                        <p><span>Bedroom: 4</span> <span>Bathroom: 2</span> <span>Area: <span
                                                        class="estate-x-size">${item.area}</span> <span class="estate-x-unit">m<sup>2</sup></span></span>
                                            <span>Building Size: <span class="estate-x-size">2400</span> <span
                                                        class="estate-x-unit">square</span></span></p>
                                    </div>
                                    <div class="adderess">
                                        <i class="fa fa-map-pin" aria-hidden="true"></i>
                                        ${showAddress(item)}
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
    fetch(uploadRequest)
        .then((response) => response.json())
        .then((data) => {
            console.log("received data:", data);
            if (data.success) {
                document.getElementById("notification").innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show notification" role="alert" id="success-register"
                         hidden="">
                        <i class="fa fa-exclamation-circle me-2"></i>Song is successfully create, check here <a href="/songs/your-songs">Your Songs</a>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    `;
                document.getElementById("success-register").removeAttribute("hidden");
                $('#success-register').alert();

                searchForm.reset();
                console.log(new FormData(searchForm).entries())
            } else {
                // alert("Register unsuccessfully");
                document.getElementById("notification").innerHTML = `
                        <div class="alert alert-primary alert-dismissible fade show notification" role="alert" id="failed-register" hidden="">
                            <i class="fa fa-exclamation-circle me-2"></i>Song creation unsuccessfully
                            <button type="button" class="btn-close" aria-label="Close" onclick="$('#failed-register').alert('close')"></button>
                        </div>
                    `;
                document.getElementById("failed-register").removeAttribute("hidden");
                $('#failed-register').alert();
            }

        })
        .catch(console.error);
}