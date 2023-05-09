async function onloadLogin() {

    await addHTMLLogin();
    elementBindingLogin();
    await fetchCity();
    addEventLogin();
}

async function addHTMLLogin() {
    // console.log(`URL changed to ${window.location.pathname}`);
    let html = `
<ul class='slideshow'>
    <li>
        <span>Summer</span>
    </li>
    <li>
        <span>Fall</span>
    </li>
    <li>
        <span>Winter</span>
    </li>
    <li>
        <span>Spring</span>
    </li>
</ul>

<div class="parallax first-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6 wow slideInLeft hidden-xs hidden-sm">
                <div class="contact_form">
                    <h3><i class="fa fa-envelope-o grd1 global-radius"></i> Sign in </h3>
                    <form id="login-form" class="row">
                        <fieldset class="row-fluid">
                            <div>
                                <input type="text" name="username" id="username" class="form-control" placeholder="Username to login">
                            </div>
                            <div >
                                <input type="text" name="password" id="password" class="form-control" placeholder="Password">
                            </div>   
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <button type="button" class="btn btn-light btn-radius btn-brd grd1 btn-block" onclick="submitLoginForm()">Login</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="big-tagline clearfix">
                    <h2>Rent a house with CITY Real Estate</h2>
                    <p class="lead">Hello, if you don't have an account, please register for a new account </p>
                    <a data-scroll href="#" class="btn btn-light btn-radius grd1 btn-brd" onclick="onloadRegister()">Register</a>
                </div>
            </div>
        </div><!-- end row -->
    </div><!-- end container -->
</div><!-- end section -->
`
    document.getElementById("page-content").innerHTML = html;

}


function elementBindingLogin() {
}

function addEventLogin() {

}

function submitLoginForm() {
    let searchForm = document.getElementById("login-form");
    let formData = new FormData(searchForm);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    console.log("formDataJsonString:", formDataJsonString);
    const uploadRequest = new Request(`${BE_SERVER_PORT}/users/login`, {
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
                    <div class="alert alert-info alert-dismissible show notification" role="alert" id="success-register"
                         >
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
                        <div class="alert alert-primary alert-dismissible show notification" role="alert" id="failed-register" >
                            <i class="fa fa-exclamation-circle me-2"></i>Song creation unsuccessfully
                            <button type="button" class="btn-close" aria-label="Close" onclick="$('#failed-register').alert('close')"></button>
                        </div>
                    `;
                document.getElementById("failed-register").removeAttribute("hidden");
                $('#failed-register').alert();

                localStorage.setItem('ACCESS_TOKEN', data);
                onloadHouses();
            }

        })
        .catch(console.error);
}