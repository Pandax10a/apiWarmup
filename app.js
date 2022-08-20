
axios.request({
    url: `https://api-mobilespecs.azharimm.site/v2/brands`
}).then(successFunction).catch(failureFunction);

// this is the 2nd axio request from on click.  the url is stored in an array accessed through passing the value of i 
function successNext (responseNext) {
    
    for(let i = 0; i < responseNext[`data`][`data`][`phones`].length;i++){
    document.body.insertAdjacentHTML(`beforeend`, `<h1> ${responseNext[`data`][`data`][`phones`][i][`phone_name`]}</h1> 
    <br>
    <img src = "${responseNext[`data`][`data`][`phones`][i][`image`]}">`)
    }
}

function failNext (errorNext) {
    console.log(`failed`);
}

function more_info (i) {
    axios.request ({
        url: vendor_ad[i]
    }).then(successNext).catch(failNext);
}

 let vendor_ad = [];
// the first function for the first axios.  onclick to call new funtion to access next axios request but also need to
// store the data into an array first so subsequent function can access it through index value
function successFunction(aresponse333) {
      
    for(let i = 0; i < aresponse333[`data`][`data`].length ;i++ ) {

        
        
    document.body.insertAdjacentHTML(`beforeend`, `<h1 id = "group${i}" onclick = "more_info(${i})"> 
    ${aresponse333[`data`][`data`][i][`brand_name`]} <br>
    ${aresponse333[`data`][`data`][i][`brand_slug`]} <br></h1>
    <details>${aresponse333[`data`][`data`][i][`detail`]}</details>
    
    `);
    vendor_ad.push(`${aresponse333[`data`][`data`][i][`detail`]}`)
    console.log(vendor_ad)
    }
}

 
function failureFunction (error222) {
    document.body.insertAdjacentHTML(`afterbegin`, '<h1>Failed</h1>');

}



