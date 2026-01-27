/* Function of banners */
let banners = [
  {
    img: "image/banner1.jpg",
    location: "Toronto, <span>Canada</span>",
    smallText: "Hurry!",
    bigText: "Get the Best Villa for you"
  },
  {
    img: "image/banner2.jpg",
    location: "Melbourne, <span>Australia</span>",
    smallText: "Be Quick!",
    bigText: "Get the Best Villa in Town"
  },
  {
    img: "image/banner3.jpg",
    location: "Miami, <span>South Flordia</span>",
    smallText: "Act Now!",
    bigText: "Get the highest level penthouse"
  }
];
let index = 0;

function showBanner() {
  document.getElementById("bannerImg").src = banners[index].img;
  document.getElementById("bannerLocation").innerHTML = banners[index].location;
  document.getElementById("bannerSmallerText").innerText = banners[index].smallText;
  document.getElementById("bannerBigText").innerText = banners[index].bigText;
}

function nextBanner() {
  index++;
  if (index >= banners.length) {
    index = 0;
  }
  showBanner();
}

function prevBanner() {
  index--;
  if (index < 0) {
    index = banners.length - 1;
  }
  showBanner();
}

/* Function of Featured-content */
const headings = document.querySelectorAll(".link h3");
    const paragraphs = document.querySelectorAll(".link p");

    headings.forEach(h3 => {
        h3.addEventListener("click", () => {

            paragraphs.forEach(p => p.style.display = "none");

            const para = h3.nextElementSibling;
            para.style.display = "block";
        });
    });
    /* Function of Deal-Info-button */
    const data = {
    apartment: {
        image: "image/img3.jpg",
        space: "185 m2",
        floor: "26th",
        rooms: "4",
        parking: "Yes",
        payment: "Bank",
        title: "Apartment Details",
        para1: "Modern apartment with sea view.<br>Best for families.",
        para2: "Located in city center.<br>Easy bank installment."
    },
    villa: {
        image: "image/img9.jpg",
        space: "250 m2",
        floor: "26th",
        rooms: "5",
        parking: "Yes",
        payment: "Bank",
        title: "Detail Info About Villa",
        para1: "Luxury villa with private garden.<br>Peaceful area.",
        para2: "Ideal for large families.<br>Cash payment only."
    },
    penthouse: {
        image: "image/img6.jpg",
        space: "320 m2",
        floor: "34th",
        rooms: "6",
        parking: "Yes",
        payment: "Bank",
        title: " Extra Info About Penthouse",
        para1: "Premium penthouse with skyline view.<br>Top-class living.",
        para2: "Private lift access.<br>High-end facilities."
    }
};

document.querySelectorAll(".deal-info-button button").forEach(btn => {
    btn.addEventListener("click", function () {

        // active button color
        document.querySelectorAll(".deal-info-button button")
            .forEach(b => b.style.background = "#000");

        this.style.background = "#f35525";

        const type = this.dataset.type;

        document.getElementById("dealImage").src = data[type].image;
        document.getElementById("space").innerText = data[type].space;
        document.getElementById("floor").innerText = data[type].floor;
        document.getElementById("rooms").innerText = data[type].rooms;
        document.getElementById("parking").innerText = data[type].parking;
        document.getElementById("payment").innerText = data[type].payment;
        document.getElementById("dealTitle").innerText = data[type].title;
        document.getElementById("dealPara1").innerHTML = data[type].para1;
        document.getElementById("dealPara2").innerHTML = data[type].para2;
    });
});
    /* Function of properties button */
    document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".deal-info-button button");
    const productRows = document.querySelectorAll(".property-row");
    const productContainer = document.querySelector(".product-properties");

    buttons.forEach(button => {
        button.addEventListener("click", function () {


            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            productRows.forEach(row => {
                const products = row.querySelectorAll(".product");
                let rowHasMatch = false;

                products.forEach(product => {
                    if (filter === "all" || product.dataset.category === filter) {
                        product.style.display = "block";
                        rowHasMatch = true;
                    } else {
                        product.style.display = "none";
                    }
                });

                row.style.display = rowHasMatch ? "flex" : "none";
            });

            if (filter === "all") {
                productContainer.style.height = "330vh";
            } else {
                productContainer.style.height = "40vh";
            }

            if (filter !== "all") {
                const firstVisible = productContainer.querySelector(".product[style*='display: block']");
                if (firstVisible) {
                    firstVisible.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }

        });
    });

});



/* function of loader*/
  window.addEventListener("load", function () {
    const preloader = document.getElementById("js-preloader");
    setTimeout(() =>{
    preloader.classList.add("loaded"); 
}, 2000);

  });

  data = {
    apartment: {
        image: "image/img3.jpg",
        space: "185 m2",
        floor: "26th",
        rooms: "4",
        parking: "Yes",
        payment: "Bank",
        title: "Apartment Details",
 para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
        para2: "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen."
    },
    villa: {
        image: "image/img9.jpg",
        space: "250 m2",
        floor: "26th",
        rooms: "5",
        parking: "Yes",
        payment: "Bank",
        title: "Detail Info About Villa",
        para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
        para2: "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo humblebrag swag franzen."
    },
    penthouse: {
        image: "image/img6.jpg",
        space: "320 m2",
        floor: "34th",
        rooms: "6",
        parking: "Yes",
        payment: "Bank",
        title: " Extra Info About Penthouse",
 para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
        para2: "Swag fanny pack lyf DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen."
    }
};
/* function of property detail */
document.querySelectorAll(".deal-info-button button").forEach(btn => {
    btn.addEventListener("click", function () {

        document.querySelectorAll(".deal-info-button button")
            .forEach(b => b.style.background = "#000");

        this.style.background = "#f35525";

        const type = this.dataset.type;

        document.getElementById("dealImage").src = data[type].image;
        document.getElementById("space").innerText = data[type].space;
        document.getElementById("floor").innerText = data[type].floor;
        document.getElementById("rooms").innerText = data[type].rooms;
        document.getElementById("parking").innerText = data[type].parking;
        document.getElementById("payment").innerText = data[type].payment;
        document.getElementById("dealTitle").innerText = data[type].title;
        document.getElementById("dealPara1").innerHTML = data[type].para1;
        document.getElementById("dealPara2").innerHTML = data[type].para2;
    });
});