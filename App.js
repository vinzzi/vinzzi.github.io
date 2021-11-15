var monButton = null;

window.addEventListener("load", ()=>{
    main();
});


function main(){
    header();
    footer();
}

function header() {
    // class="active"
    var header = document.getElementById("header");
    header.innerHTML= 
        '<a href="/index.html">'+
            '<img src="/images/VinzziLogoBlue.png" alt="logo">'+
        '</a>'+
        '<h1>Vincent Chalifoux</h1>'+
        '<h3>Développeur et intégrateur de jeux vidéo</h3>'+
        '<nav>'+
            '<a href="/index.html">À propos</a>'+
            '<a href="/projets.html">Portfolio</a>'+
            '<a href="/contact.html">Contact</a>'+
        '</nav>'+
        '<div class="filet"></div>';
}

function footer(){
    var footer = document.getElementById("footer");
    footer.innerHTML = '<p>©Tous droits réservés</p>';
}

window.addEventListener("load", () => {
    var main = document.getElementById("main");
    monButton = document.createElement("button");
    var spanButton = document.createElement("span");
    spanButton.classList.add("material-icons");
    spanButton.innerHTML = "arrow_upward";
    monButton.classList.add("topButton");
    monButton.appendChild(spanButton);
    main.appendChild(monButton);

    //monButton = document.getElementById("topButton");
    monButton.addEventListener("click", function() {
        topFunction();
    });
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(monButton !== null){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            monButton.style.display = "block";
        } else {
            monButton.style.display = "none";
        }
      }
    }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

