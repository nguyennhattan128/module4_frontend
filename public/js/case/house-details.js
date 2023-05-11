async function onloadHouseDetails(id) {

    await addHTMLHouseDetails(id);
    elementBindingHouseDetail();
    addEventHouseDetails();
}

async function addHTMLHouseDetails(id) {
    let house = await fetchHouseDetail(id);
    // console.log(`URL changed to ${window.location.pathname}`);
    let html = `
<div class="all-title-box">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>House Details</h2>
                <!-- Breadcrumbs -->
                    <nav id="breadcrumbs">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li>Details</li>    
                       </ul>   
                </nav>
            </div>
        </div>
    </div>
</div>

    <div id="gallery" class="section wb">        
        <div class="container" style="min-width: 90%">
            
                <div class="row">
                    <div class="col-md-8">
                        <div id="da-thumbs" class="da-thumbs portfolio">
`

    house.image.forEach((item, index) => {
        console.log(index, item)
        html +=
            `                            
                            <div class="post-media_g pitem item-w1 item-h1 cat2">
                                <a href="${item.imageURL}" data-rel="prettyPhoto[gal]">
                                    <img src="${item.imageURL}" alt="" class="img-responsive"
                                    style="width: 30vw; aspect-ratio: 3/2; object-fit: cover">
                                    <div>
                                        <i class="flaticon-unlink"></i>
                                    </div>
                                </a>
                            </div>

`
    })

    html +=
        `
                        </div><!-- end portfolio -->
                    </div>
                    <div class="col-md-4">
                        <div class="right-content">
                            <h1 class="product-heading" style="font-size: 42px">${house.brief}</h1>
                            
                            <span class="prop-user-agent">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    ${house.user.name}
                                    </span>

                            <h3>Diện tích: <b>${house.area}</b> m<sup>2</sup></h3>

                            <h3>Giá thuê: <b>${house.price}</b> VNĐ/tháng</h3>

                            <h3 class="product-desc">
                                ${house.description}
                            </h3>
                            <form id="booking-form">
                            <input id="house-id" name="houseId" value="${house.id}" hidden="">
                                <fieldset class="row-fluid">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="input-group">
                                            <span class="input-group-addon">Từ tháng </span>
                                            <input type="month" name="startMonth" id="start" class="form-control"
                                                   style="margin-bottom: 0">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="input-group">
                                            <span class="input-group-addon">đến tháng </span>
                                            <input type="month" name="endMonth" id="end" class="form-control"
                                                   style="margin-bottom: 0">
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                            <fieldset class="row-fluid " style="margin-top: 15px">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center">
                                    <button class="btn btn-danger" onclick="submitBookingForm()" style="font-size: 25px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-plus" viewBox="0 0 16 16">
                                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                                          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z"/>
                                        </svg>
                                        Book Now!
                                    </button>
                                </div>
                            </fieldset>
                            <fieldset class="row-fluid " style="margin-top: 15px">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center" >
                                    <button class="btn btn-danger" style="font-size: 20px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text" viewBox="0 0 16 16">
                                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                                          <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                        Message Host
                                    </button>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
        </div><!-- end container -->
    </div><!-- end section -->

`
    document.getElementById("page-content").innerHTML = html;
    await loadScript("/js/portfolio.js")
    await loadScript("/js/hoverdir.js")
    removeActiveTopNav();
    // loadScript("/js/jquery.prettyPhoto.js")


//     document.body.innerHTML += `
//     <script type="text/javascript" charset="utf-8">
//     $(document).ready(function(){
//         $("a[data-rel^='prettyPhoto[gal]']").prettyPhoto();
//     });
// </script>
//
//     `
    $("a[data-rel^='prettyPhoto[gal]']").prettyPhoto();

}


function elementBindingHouseDetail() {

}

function addEventHouseDetails() {

}

async function fetchHouseDetail(id) {
    let list = document.getElementById("da-thumbs");
    const response = await fetch(`${BE_SERVER_PORT}/houses/${id}`, defaultFetchOpts());
    const data = await response.json();
    console.log("data:", data);
    if (data.success === false) {
        return false
    }
    return data.data

}


function submitBookingForm() {
    let uploadForm = document.getElementById("booking-form");
    let formData = new FormData(uploadForm);
    const plainFormData = Object.fromEntries(formData.entries());
    console.log(plainFormData)
    const formDataJsonString = JSON.stringify(plainFormData);
    console.log("formDataJsonString:", formDataJsonString);
    const uploadRequest = new Request(`${BE_SERVER_PORT}/contracts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
        },
        body: formDataJsonString,
        credentials: "include"
    });
    fetch(uploadRequest)
        .then((response) => response.json())
        .then((data) => {
            console.log("received data:", data);
            if (data.success) {
                // alert("Register successfully");
                document.getElementById("notification").innerHTML = `
                        <div class="alert alert-success alert-dismissible fade show notification" role="alert" id="success-register"
         hidden="">
        <i class="fa fa-exclamation-circle me-2"></i>Song is successfully create, check here <a href="/songs/your-songs">Your Songs</a>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
                    `;
                document.getElementById("success-register").removeAttribute("hidden");
                $('#success-register').alert();

                uploadForm.reset();
                console.log(new FormData(uploadForm).entries())
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
        .catch(error => {
            console.log(error);
            document.getElementById("notification").innerHTML = `
                        <div class="alert alert-success alert-dismissible show notification" role="alert" id="success-register"
         hidden="">
        <i class="fa fa-exclamation-circle me-2"></i>Song is successfully create, check here <a href="/songs/your-songs">Your Songs</a>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
                    `;
            document.getElementById("success-register").removeAttribute("hidden");
            console.log(document.getElementById("notification").innerHTML)
            // $('#success-register').alert();
        });
}
