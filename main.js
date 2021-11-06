var downloads = document.getElementById("downloads");
var docs = document.getElementById("docs");
var about = document.getElementById("about");
var home = document.getElementById("home");

function openDownloads() {
    window.location.assign("downloads.html")
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
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("main").style.marginLeft = "320px";
    document.getElementById("heading").style.marginLeft = "320px";
    document.getElementById("anim").style.marginLeft = "320px";
    document.getElementById("head").style.marginLeft = "320px";
}

function closeSideNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("heading").style.marginLeft = "0";
    document.getElementById("anim").style.marginLeft = "0";
    document.getElementById("head").style.marginLeft = "0";
}

window.onload = function() {
    scrollFunction()
}
window.onscroll = function() {
    scrollFunction();
    console.log(document.body.scrollTop)
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

function download(filename, file_path) {

    var element = document.createElement('a');
    element.setAttribute('href', file_path);
    element.setAttribute('download', filename);
    document.body.appendChild(element);
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

function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
    document.getElementById("main").style.marginLeft = "320px";
    document.getElementById("heading").style.marginLeft = "320px";
    document.body.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/image.jpg')";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("heading").style.marginLeft = "0";
    document.body.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/image.jpg')";
}
