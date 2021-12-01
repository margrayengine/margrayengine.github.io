var downloads = document.getElementById("downloads");
var docs = document.getElementById("docs");
var about = document.getElementById("about");
var home = document.getElementById("home");

function openDownloads() {
    window.location.assign("downloads.html")
}

function getFromURL(param){
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    if(urlParams.has(param)){
        return urlParams.get(param)
    }    
    else{
        return ""
    }
}

function getTheme(){
    return getFromURL("theme")
}
function setTheme(){
    if (getTheme() == "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("head").style.color = "rgb(255, 90, 49)"
    } else {
        if(document.body.classList.value.includes("dark-mode")) {
          document.body.classList.remove("dark-mode");
          
        }
        
    }
}
function hasTheme(){
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    if(urlParams.has('theme')){
        return true
    }
    else{
        return false
    }
}
function isTheme(theme){
    has = hasTheme()
    if(has){
        if(getTheme() === theme){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false;
    }
}
function setParam(param,value){
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set(param,value)
    return searchParams
}
function nwt(url="",toId=null,s=null){
    if(s === null){
        var theme
        if(document.body.classList.value.includes("dark-mode")){
            theme = "dark"
        }
        else{
            theme = "light"
        }
        if(toId!==null)window.location.assign(url+`?theme=${theme}#${toId}`)
        else window.location.assign(url+`?theme=${theme}`)
    }
    else{
        if(toId!==null)window.location.assign(url+`?theme=${s}#${toId}`)
        else window.location.assign(url+`?theme=${s}`)
    }
}
function localTheme(){
    var theme
    if(document.body.classList.value.includes("dark-mode")){
        theme = "dark"
    }
    else{
        theme = "light"
    }
    return theme
}
function navindocs(id){
    window.location.assign(`?theme=${localTheme()}#${id}`)
}
function openHome() {
    window.location.assign("home.html")
}

function openCredits() {
    window.location.assign("credits.html")
}

function openDocs() {
    window.location.assign("docs.html")
}

function openExample() {
    window.location.assign("example.html")
}

function openSideNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeSideNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

window.onload = function() {
    scrollFunction()

}
function giveWhite(){
    let heads = document.getElementsByClassName("sheading")
    for(var i=0;heads.length>i;i++){
        heads[i].style.color = "white"
    }
    document.getElementById("sheadhome").style.color = "white"
    let homeA = document.getElementsByClassName("mgp")
    if(homeA.length > 0){
        for(var i=0;homeA.length>i;i++){
            homeA[i].style.color = "white"
        }       
    }
}
function giveBlack(){
    let heads = document.getElementsByClassName("sheading")
    for(var i=0;heads.length>i;i++){
        heads[i].style.color = "black"
    }
    document.getElementById("sheadhome").style.color = "black"
    let homeA = document.getElementsByClassName("mgp")
    if(homeA.length > 0){
        for(var i=0;homeA.length>i;i++){
            homeA[i].style.color = "black"
        }       
    }
}
window.onscroll = function() {
    scrollFunction();
}
function toggleTheme(){
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.value === "dark-mode"){
        document.getElementById("heading").style.color = "rgb(255, 99, 49)"
        giveWhite()
        //window.location.assign("?"+setParam("theme","dark"))
    }
    else{
        document.getElementById("heading").style.color = "rgb(255, 59, 45)"
        //window.location.assign("?"+setParam("theme","light"))
        giveBlack()
    }

}

function scrollFunction() {
    var up_scroller = document.getElementById("up-scroller");
    var down_scroller = document.getElementById("down-scroller");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        up_scroller.style.display = "block";
        down_scroller.style.display = "none";
    } else {
        up_scroller.style.display = "none";
        down_scroller.style.display = "block";
    }
}

function scrollDocsHead() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function scrollExampleHead() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function scrollDocsDown() {
    window.location.href = "docs.html#down"
}

function scrollExampleDown() {
    window.location.href = "example.html#down"
}

function scrollInsHead() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function scrollInsDown() {
    window.location.href = "installer.html#down"
}

function scrollZipHead() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function scrollZipDown() {
    window.location.href = "zip.html#down"
}

function download(filename, file_path) {

    var element = document.createElement('a');
    element.setAttribute('href', file_path);
    element.setAttribute('download', filename);
    window.document.body.appendChild(element);
    element.click();
    //document.body.removeChild(element);
}

function lwpopup() {
    var modal = document.getElementById("Modal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("popup");
    var modalImg = document.getElementById("img01");
    var modalImg2 = document.getElementById("img02");
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = "linux.png";
        modalImg2.src = "win.png";
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function dwnlinux() {
    download("margray installer.zip", "margray installer linux.zip")
    var modal = document.getElementById("Modal");
    modal.style.display = "none";
}

function dwnlinux() {
    download("margray installer.zip", "margray installer win32.zip")
    var modal = document.getElementById("Modal");
    modal.style.display = "none";
}
