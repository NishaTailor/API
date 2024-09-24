let products = [];

const getData = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    products = res.products;
    console.log(products);
    mapper(products);
};

getData();

const mapper = (data) => {
    document.getElementById("productList").innerHTML = '';
    data.map((item) => {
        let title = document.createElement("h2");
        title.innerHTML = item.title;

        let description = document.createElement("span");
        description.innerHTML = item.description;

        let category = document.createElement("h2");
        category.innerHTML = item.category;

        let images = document.createElement("img");
        images.src = item.images;

        let price = document.createElement("h3");
        price.innerHTML = `Price: $${item.price}`;

        let rating = document.createElement("h4");
        rating.innerHTML = `Rating: ${item.rating}`;

        let brand = document.createElement("h4");
        brand.innerHTML = item.brand;

        document.getElementById("productList").append(title, description, category, images, price, rating, brand);
    });
};

// Sorting and filtering
const handleSort = (orderBy) => {
    let temp;
    if (orderBy === "lth") {
        temp = products.sort((a, b) => a.price - b.price);
    } else {
        temp = products.sort((a, b) => b.price - a.price);
    }
    mapper(temp);
};

const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category === category);
    mapper(temp);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
document.getElementById("beauty").addEventListener("click", () => handleCategory("beauty"));
document.getElementById("fragrances").addEventListener("click", () => handleCategory("fragrances"));
document.getElementById("furniture").addEventListener("click", () => handleCategory("furniture"));
document.getElementById("groceries").addEventListener("click", () => handleCategory("groceries"));

// Searching
const search = (e) => {
    e.preventDefault();
    let searchValue = document.querySelector("#search").value;
    let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(temp);
};

document.getElementById("searching").addEventListener("submit", search);
document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        search(e);
    }
});


