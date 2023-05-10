async function onloadContracts() {
    await addHTMLContracts();
    elementBindingContracts();
    addEventContracts();
}

async function addHTMLContracts() {
    // console.log(`URL changed to ${window.location.pathname}`);
    let html = `
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 id="page-name">Contracts</h2>
                    <!-- Breadcrumbs -->
                    <nav id="breadcrumbs">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li>Contracts</li>
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
                        <div class="col-md-12">
                            <fieldset class="row-fluid">
                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
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
                            </fieldset>
                            
                        </div>
                    </div>
                </div>
            </form>
        </nav>
        <div class="container">
            <div class="row" id="contract-list">      
                

            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end section -->
`
    document.getElementById("page-content").innerHTML = html;

    await fetchAllContracts();

    $("a[data-rel^='prettyPhoto[gal]']").prettyPhoto();


}


function elementBindingContracts() {
}

function addEventContracts() {

}

async function fetchAllContracts () {
    let list = document.getElementById("contract-list");
    const response = await fetch(`${BE_SERVER_PORT}/contracts`, defaultFetchOpts);
    const contractList = await response.json();
    console.log("contractList:", contractList);
    if (contractList.success === false) {
        return false
    }
    try {
        contractList.data.forEach((item, index) => {
            console.log(index, item)
            list.innerHTML +=`
                            <div class="col-md-12 col-sm-12 col-xs-12" style="margin-bottom: 20px">
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
                                            <span class="item-sub-price"> ${item.house.area} m<sup>2</sup></span>
                                        </div>
                                    </figure>
                                    
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div style="padding: 5px">
                                            <h3 style="text-overflow: ellipsis; overflow: hidden "><a href="#" onclick="onloadHouseDetails(${item.house.id})">${item.house.brief}</a></h3>
                                            <h4>
                                                <span>Price: <span class="estate-x-size">${item.price}</span> <span class="estate-x-unit">VNĐ/tháng</span></span>
                                            </h4>
                                            <div class="address">
                                                <i class="fa fa-map-pin" aria-hidden="true"></i>
                                                ${item.house.phuong.name +", " + item.house.quan.name +", " + item.house.city.name}
                                            </div>
                                            <br>
                                            <div class="money" style="font-size: 1.2em">
                                                <dl class="dl-horizontal">
                                                  <dt>${(localStorage.getItem("role") == 2)?"Tổng thu": "Tổng tiền"}</dt>
                                                  <dd>${item.cost} VNĐ</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-2 col-xs-2" style="align-items: end;min-height: 100%">
                                        <button type="button" onclick="cancelContract(${item.id})"
                                            class="btn btn-danger btn-radius btn-brd grd1 btn-block">Cancel
                                        </button>
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
                                    ${item.duration} month (s) from ${item.startMonth.toString().slice(0,7)} to ${item.endMonth.toString().slice(0,7)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div><!-- end service -->
                </div>
`
        })
    } catch (e) {
        console.log(e);
        list.innerHTML +=`
                            <div class="col-md-12 col-sm-12 col-xs-12" style="margin-bottom: 20px">
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
                                            <span class="item-sub-price"> {item.house.area} m<sup>2</sup></span>
                                        </div>
                                    </figure>
                                    
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div style="padding: 5px">
                                            <h3 style="text-overflow: ellipsis; overflow: hidden "><a href="#" onclick="onloadHouseDetails({item.id})">{item.brief}</a></h3>
                                            <h4>
                                                <span>Price: <span class="estate-x-size">{item.price}</span> <span class="estate-x-unit">VNĐ/tháng</span></span>
                                            </h4>
                                            <div class="address">
                                                <i class="fa fa-map-pin" aria-hidden="true"></i>
                                                {item.house.phuong.name +", " + item.house.quan.name +", " + item.house.city.name}
                                            </div>
                                            <br>
                                            <div class="money" style="font-size: 1.2em">
                                                <dl class="dl-horizontal">
                                                  <dt>{(localStorage.getItem("role") == 2)?"Tổng thu": "Tổng tiền"}</dt>
                                                  <dd>contract's total VNĐ</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-2 col-xs-2" style="align-items: end;min-height: 100%">
                                        <button type="button" onclick="cancelContract('{item.id}')"
                                            class="btn btn-danger btn-radius btn-brd grd1 btn-block">Cancel
                                        </button>
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
`
    }

}
function cancelContract(contractId) {
    console.log("trying cancel contract with id:", contractId)
    const cancelRequest = new Request(`${BE_SERVER_PORT}/contracts/${contractId}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json",
            'Authorization':  'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
        },
        credentials: "include"
    });

    fetch(cancelRequest)
        .then((response) => response.json())
        .then((data) => {
            console.log("received data:", data);
            if (data.success) {
                alert("Cancel Booking thanh cong!")
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