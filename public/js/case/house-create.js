let urlList, city, quan, phuong
async function onloadHouseCreate() {

    addHTMLHouseCreate();
    elementBindingHouseCreate();
    await fetchCity();
    addEventHouseCreate();
}

function addHTMLHouseCreate() {
    // console.log(`URL changed to ${window.location.pathname}`);
    let html = `
<div class="all-title-box">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 id="page-name">Host</h2>
                <!-- Breadcrumbs -->
                <nav id="breadcrumbs">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li>Host</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
<div id="features" class="section wb">
    <div class="container" style="min-width: 1600px">
        <div class="section-title text-center" id="create-title">
            <h3>Become a host!</h3>
            <p class="lead">
                Let us give you more details about the special offer website you want us. Please fill out the form
                below.
                <br>We have million of website owners who happy to work with us!</p>
        </div><!-- end title -->

        <div class="row">
            <div class="col-md-5">
                <div class="contact_form">
                    <div id="message"></div>
                    <form id="upload-form" class="row" action="" name="contactform" method="post">
                        <fieldset class="row-fluid">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input type="text" name="brief" id="brief-input" class="form-control"
                                       placeholder="Your Home Brief">
                            </div>
                        </fieldset>
                        <fieldset class="row-fluid">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="input-group">

                                    <input type="number" name="price" id="price" class="form-control"
                                           placeholder="Monthly Fee" style="margin-bottom: 0">
                                    <span class="input-group-addon">x 1.000VNĐ</span>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="input-group">
                                    <input type="number" name="area" id="area" class="form-control" placeholder="Area"
                                           style="margin-bottom: 0">
                                    <span class="input-group-addon">m<sup>2</sup></span>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="row-fluid" style="margin-top: 30px">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <select class="form-control" id="city" onchange="fetchQuanOptions()">
                                    <option disabled selected>Chọn thành phố</option>
                                </select>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <select class="form-control" id="quan" disabled onchange="fetchPhuongOptions()">
                                    <option disabled selected>Chọn quận/huyện</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset class="row-fluid">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <select class="form-control" id="phuong" name="phuong" disabled>
                                    <option disabled selected>Chọn phường/xã</option>
                                </select>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div class="form-group">
                                    <input type="hidden" name="image" id="image-url-list" value="[]">
                                    <label for="exampleInputFile">Picture upload</label>
                                    <input type="file" id="image-upload" onchange="uploadImage(event)"
                                    <p class="help-block">Add some nice pictures of your home</p>
                                </div>
                            </div>

                        </fieldset>
                        <fieldset class="row-fluid">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="progress" style="height: 20px">
                                    <div id="upload-progress"
                                         class="progress-bar progress-bar-striped progress-bar-animated"
                                         role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                         style="width: 0; min-width: 2em;" hidden="">0%
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea class="form-control" name="description" id="description" rows="10"
                                              placeholder="Description for your home "></textarea>
                            </div>
                        </fieldset>
                        <fieldset class="row-fluid">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <button type="button" value="SEND" id="submit" onclick="submitForm()"
                                        class="btn btn-light btn-radius btn-brd grd1 btn-block">Finish
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div><!-- end col -->
            <div class="col-md-7">
                <div class="right-box-contact">
                    <h4>Image</h4>
                    <div class="support-info" style="padding: 20px 40px">
                        <div class="info-title">
                            <fieldset class="row-fluid" id="image-box">

                            </fieldset>
                        </div>
                    </div>
                </div>
            </div><!-- end col -->
        </div><!-- end row -->
    </div><!-- end container -->
</div>
`
    document.getElementById("page-content").innerHTML = html;



}


function elementBindingHouseCreate() {
    urlList = document.getElementById("image-url-list");
    city = document.getElementById("city");
    quan = document.getElementById("quan");
    phuong = document.getElementById("phuong");
}

function addEventHouseCreate() {

}

function removeImage(imageIndex) {
    let urlArr = JSON.parse(urlList.value);
    // urlArr[imageIndex] = ""
    urlArr = urlArr.filter(item => item != imageIndex)
    // console.log("urlArr", urlArr)
    urlList.value = JSON.stringify(urlArr);
    // console.log(urlList.value)
    document.getElementById(`image-${imageIndex}`).remove();
}

async function fetchCity() {
    const response = await fetch(`${BE_SERVER_PORT}/city`, defaultFetchOpts);
    const cityList = await response.json();
    console.log(cityList);
    if (cityList.success === false) {
        return false
    }
    cityList.data.forEach(item => {
        city.innerHTML += `
            <option value="${item.id}">${item.name}</option>
        `
    })
}

async function fetchQuanOptions() {
    if (city.value > 0) {
        const response = await fetch(`${BE_SERVER_PORT}/quan?city=${city.value}`, defaultFetchOpts);
        const quanList = await response.json();
        console.log(quanList);
        if (quanList.success === false) {
            return false
        }
        quan.innerHTML = "<option disabled selected>Chọn quận/huyện</option>";
        quan.removeAttribute("disabled");
        quanList.data.forEach(item => {
            quan.innerHTML += `
                <option value="${item.id}">${item.name}</option>
        `
        })

        // let quanArr = getQuan(parseInt(city.value))
        // console.log(quanArr)
        // quan.innerHTML = "<option disabled selected>Chọn quận/huyện</option>";
        // quan.removeAttribute("disabled");
        // quanArr.forEach(item => {
        //     quan.innerHTML += `
        //         <option value="${item.id}">${item.name}</option>
        //     `
        // })
        console.log(quan)
    }
}

async function fetchPhuongOptions() {
    if (quan.value > 0) {
        console.log("current quan:", quan.value, quan.innerHTML)

        // let phuongArr = getPhuong(parseInt(quan.value))
        // console.log(phuongArr)
        // phuong.innerHTML = "<option disabled selected>Chọn quận/huyện</option>";
        // phuong.removeAttribute("disabled");
        // phuongArr.forEach(item => {
        //     phuong.innerHTML += `
        //         <option value="${item.id}">${item.name}</option>
        //     `
        // })
        // console.log(phuong)

        const response = await fetch(`${BE_SERVER_PORT}/phuong?quan=${quan.value}`, defaultFetchOpts);
        const phuongList = await response.json();
        console.log(phuongList);
        if (phuongList.success === false) {
            return false
        }
        phuong.innerHTML = "<option disabled selected>Chọn phường/xã</option>";
        phuong.removeAttribute("disabled");
        phuongList.data.forEach(item => {
            phuong.innerHTML += `
                <option value="${item.id}">${item.name}</option>
        `
        })
    }
}

function submitForm(e) {
    let uploadForm = document.getElementById("upload-form");
    let formData = new FormData(uploadForm);
    formData.append("jwt", getCookie("jwt"));
    const plainFormData = Object.fromEntries(formData.entries());
    console.log(plainFormData)
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
                // alert("Register successfully");
                document.getElementById("notification").innerHTML = `
                        <div class="alert alert-success alert-dismissible show notification" role="alert" id="success-register"
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
                        <div class="alert alert-primary alert-dismissible show notification" role="alert" id="failed-register" hidden="">
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