let colorForm = document.getElementById("color-form");

colorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let colorMode = document.getElementById("color-mode").value;
  let colorPicker = document.getElementById("color-picker").value.substring(1);
  var url =`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorMode}`
  let htmlColor = ""
  let htmlFotter = ""
  fetch(url)
    .then(res => res.json())
    .then(data => {
        for(col of data.colors){
            htmlColor+=`
            <div style="background-color: ${col.hex.value};  height: 300px;"></div>`
            htmlFotter+=`<button data-colorid=${col.hex.value} id=${col.hex.value}>${col.hex.value}</button>`
        }
        document.getElementById("grid").innerHTML=htmlColor
        document.getElementById("footer-grid").innerHTML=htmlFotter
    })
  });
document.addEventListener('click', function(e){
    if(e.target.dataset.colorid){
        navigator.clipboard.writeText(e.target.dataset.colorid)
        alert("Copied the text: " + e.target.dataset.colorid)
    }
})
