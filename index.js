// get html buttons and elements where the data will be injected
const launchModalButton = document.getElementById("launchModal")
const acceptButton = document.getElementById("acceptButton")
const declineButton = document.getElementById("declineButton")

const watchTitleDiv = document.getElementById("watchTitle")
const watchImgDiv = document.getElementById("watchImg")
const salePriceSpan = document.getElementById("salePrice")
const commissionSpan = document.getElementById("commission")
const sellerFeeSpan = document.getElementById("sellerFee")
const insuredShippingSpan = document.getElementById("insuredShipping")
const bezelAuthSpan = document.getElementById("bezelAuth")
const earningsSpan = document.getElementById("earnings")

launchModalButton.addEventListener("click", () => {
    // collect data from the GET request
    let watchTitle = "Rolex DeepSea Sea-Dweller James Cameron 116660"
    let watchYear = "New / 2014"
    let watchImgURL = "https://getbezel.mo.cloudinary.net/production/340e2d00-cb6e-46b0-97a3-1bd6807f33e9.png?tx=f_auto,c_limit,w_3840,q_auto"
    let watchSalePrice = "$17,945.00"
    let watchCommission = "$1556.75"
    let sellerFee = "$15.00"
    let insuredShipping = "Free"
    let bezelAuth = "Free"
    let totalEarnings = "$22,378.25"

    let isNautilus = false
    if (isNautilus) {
        watchTitle = "Nautilus"
        watchYear = "New / 1900"
        watchImgURL = "https://getbezel.mo.cloudinary.net/sandbox/1583bb64-0df2-4a69-a10d-119e464ab6fe.png"
        watchSalePrice = "$5,000.00"
        watchCommission = "$850.00"
        sellerFee = "$25.00"
        insuredShipping = "Free"
        bezelAuth = "Free"
        totalEarnings = "$4,550.00"
    }

    // inject watch sale data into html
    watchTitleDiv.innerHTML = `
        ${watchTitle}
        <p class="mt-10">${watchYear}</p>
    `

    watchImgDiv.innerHTML = `<img src=${watchImgURL}>`

    salePriceSpan.innerHTML = watchSalePrice

    commissionSpan.innerHTML = watchCommission

    sellerFeeSpan.innerHTML = sellerFee

    insuredShippingSpan.innerHTML = insuredShipping

    bezelAuthSpan.innerHTML = bezelAuth

    earningsSpan.innerHTML = totalEarnings
})

acceptButton.addEventListener("click", async () => {
    // send a POST request for the offer being accepted
    await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept", {
        method: "POST",
        headers: { "Content-Type":"application/json" }
    })
})

declineButton.addEventListener("click", async () => {
    // send a POST request for the offer being declined
    await fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline", {
        method: "POST",
        headers: { "Content-Type":"application/json" }
    })
})
