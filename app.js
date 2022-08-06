axios.request({
    url: `https://api-mobilespecs.azharimm.site/v2/brands`
}).then(successFunction).catch(failureFunction);

function successFunction (response333) {
    for(let i = 0; i < response333[`data`][`data`].length ;i++ ) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1> ${response333[`data`][`data`][i][`brand_name`]} <br>
    ${response333[`data`][`data`][i][`brand_slug`]} <br></h1>
    <details>${response333[`data`][`data`][i][`detail`]}</details>`);
    }
    console.log(`success`)

}

function failureFunction (error222) {
    document.body.insertAdjacentHTML(`afterbegin`, '<h1>Failed</h1>');

}