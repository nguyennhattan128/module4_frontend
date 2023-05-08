function onloadHouseCreate() {
    addHTMLHouseCreate();
    elementBindingHouseCreate();
    addEventHouseCreate();
}

function addHTMLHouseCreate() {
    console.log(`URL changed to ${window.location.pathname}`);
    let html = `
        <div class="container">
            <div class="section-title text-center">
                <h3>Request for Contact</h3>
                <p class="lead">Let us give you more details about the special offer website you want us. Please fill out the form below. <br>We have million of website owners who happy to work with us!</p>
            </div><!-- end title -->

            <div class="row">
                <div class="col-md-6">
                    <div class="contact_form">
                        <div id="message"></div>
                        <form id="contactform" class="row" action="" name="contactform" method="post">
                            <fieldset class="row-fluid">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="first_name" id="first_name" class="form-control" placeholder="First Name">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="last_name" id="last_name" class="form-control" placeholder="Last Name">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Your Email">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <label class="sr-only">Select Time</label>
                                    <select name="select_service" id="select_service" class="selectpicker form-control" data-style="btn-white">
                                        <option value="selecttime">Select Time</option>
                                        <option value="Weekdays">Weekdays</option>
                                        <option value="Weekend">Weekend</option>
                                    </select>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <label class="sr-only">What is max price?</label>
                                    <select name="select_price" id="select_price" class="selectpicker form-control" data-style="btn-white">
                                        <option value="$100 - $2000">$100 - $2000</option>
                                        <option value="$2000 - $4000">$2000 - $4000</option>
                                        <option value="$4000 - $10000">$4000 - $10000</option>
                                    </select>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea class="form-control" name="comments" id="comments" rows="6" placeholder="Give us more details.."></textarea>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <button type="submit" value="SEND" id="submit" class="btn btn-light btn-radius btn-brd grd1 btn-block">Get Appointment</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div><!-- end col -->
<div class="col-md-6">
<div class="right-box-contact">
<h4>Phone</h4>
<div class="support-info">
<div class="info-title">
<i class="fa fa-phone" aria-hidden="true"></i>
+ 11 2839 9988
<span>Booking Time: 0900 – 2000 Hrs</span>
</div>
</div>
</div>
<div class="right-box-contact">
<h4>Address</h4>
<div class="support-info">
<div class="info-title">
<i class="fa fa-map-marker" aria-hidden="true"></i>
Address
<span>PO Box 16122 Collins Street West Victoria 8007 Australia</span>
</div>
</div>
</div>
<div class="right-box-contact">
<h4>Your Feedback</h4>
<div class="support-info">
<div class="info-title">
<i class="fa fa-envelope" aria-hidden="true"></i>
info@yoursite.com
<span>Help Us Improve!</span>
</div>
</div>
</div>
</div><!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->

`
    document.getElementById("features").innerHTML = html;

}


function elementBindingHouseCreate() {

}

function addEventHouseCreate() {

}


let html = `
        <div class="container">
            <div class="section-title text-center">
                <h3>Request for Contact</h3>
                <p class="lead">Let us give you more details about the special offer website you want us. Please fill out the form below. <br>We have million of website owners who happy to work with us!</p>
            </div><!-- end title -->

            <div class="row">
                <div class="col-md-6">
                    <div class="contact_form">
                        <div id="message"></div>
                        <form id="contactform" class="row" action="" name="contactform" method="post">
                            <fieldset class="row-fluid">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="first_name" id="first_name" class="form-control" placeholder="First Name">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="last_name" id="last_name" class="form-control" placeholder="Last Name">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Your Email">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <label class="sr-only">Select Time</label>
                                    <select name="select_service" id="select_service" class="selectpicker form-control" data-style="btn-white">
                                        <option value="selecttime">Select Time</option>
                                        <option value="Weekdays">Weekdays</option>
                                        <option value="Weekend">Weekend</option>
                                    </select>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <label class="sr-only">What is max price?</label>
                                    <select name="select_price" id="select_price" class="selectpicker form-control" data-style="btn-white">
                                        <option value="$100 - $2000">$100 - $2000</option>
                                        <option value="$2000 - $4000">$2000 - $4000</option>
                                        <option value="$4000 - $10000">$4000 - $10000</option>
                                    </select>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea class="form-control" name="comments" id="comments" rows="6" placeholder="Give us more details.."></textarea>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <button type="submit" value="SEND" id="submit" class="btn btn-light btn-radius btn-brd grd1 btn-block">Get Appointment</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div><!-- end col -->
<div class="col-md-6">
<div class="right-box-contact">
<h4>Phone</h4>
<div class="support-info">
<div class="info-title">
<i class="fa fa-phone" aria-hidden="true"></i>
+ 11 2839 9988
<span>Booking Time: 0900 – 2000 Hrs</span>
</div>
</div>
</div>
<div class="right-box-contact">
<h4>Address</h4>
<div class="support-info">
<div class="info-title">
<i class="fa fa-map-marker" aria-hidden="true"></i>
Address
<span>PO Box 16122 Collins Street West Victoria 8007 Australia</span>
</div>
</div>
</div>
<div class="right-box-contact">
<h4>Your Feedback</h4>
<div class="support-info">
<div class="info-title">
<i class="fa fa-envelope" aria-hidden="true"></i>
info@yoursite.com
<span>Help Us Improve!</span>
</div>
</div>
</div>
</div><!-- end col -->
            </div><!-- end row -->
        </div><!-- end container -->

`