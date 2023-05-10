let finishEditButton
async function onloadHouseEdit(id) {
    addHTMLHouseCreate();
    elementBindingHouseCreate()
    await fetchCity();

    await addHTMLHouseEdit(id);
    elementBindingHouseEdit();
    addEventHouseEdit();
}

async function addHTMLHouseEdit(id) {
    // console.log(`URL changed to ${window.location.pathname}`);

    document.getElementById("page-name").innerHTML = "House Edit";
    document.getElementById("breadcrumbs").innerHTML = `
    <ul>
        <li><a href="#">House</a></li>
        <li>Edit</li>
    </ul>
    `
    document.getElementById("create-title").innerHTML = "";

    let house = await fetchHouseDetail(id);
    console.log(house)
    document.getElementById("brief-input").value = house.brief;
    document.getElementById("price").value = house.price;
    document.getElementById("area").value = house.area;
    document.getElementById("city").value = `${house.city.id}`;
    await fetchQuanOptions()
    document.getElementById("quan").value = `${house.quan.id}`;
    await fetchPhuongOptions();
    document.getElementById("phuong").value = `${house.phuong.id}`;
    document.getElementById("description").value = house.description;
    document.getElementById("submit").setAttribute("onclick", `submitEditForm(${id})`);

    house.image.forEach(item => pushNewIMG(item.imageURL))

    $("html, body").animate({ scrollTop: 250 }, "slow");


}


function elementBindingHouseEdit() {
    finishEditButton = document.getElementById("submit")
}

function addEventHouseEdit() {

}

function submitEditForm(houseID) {
    let uploadForm = document.getElementById("upload-form");
    let formData = new FormData(uploadForm);
    formData.append("jwt", getCookie("jwt"));
    const plainFormData = Object.fromEntries(formData.entries());
    console.log(plainFormData)
    const formDataJsonString = JSON.stringify(plainFormData);
    console.log("formDataJsonString:", formDataJsonString);
    const uploadRequest = new Request(`${BE_SERVER_PORT}/houses/${houseID}`, {
        method: "PUT",
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
                onloadHouseDetails(houseID)
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