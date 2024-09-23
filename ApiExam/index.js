const getData = async () => {

    let req = await fetch("https://dummyjson.com/products")

    let res = await req.json();
    console.log(res);
    mapper(res);

}
getData();

const mapper = (data) => {
    data.map((item) => {
        let title = document.createElement("h2");
        title.innerHTML = item.title;
        let price = document.createElement("h3");
        price.innerHTML = item.price;
        let category = document.createElement("h2");
        category.innerHTML = item.category;
        let images = document.createElement("img");
        images.src = item.images;
        let description = document.createElement("span");
        description.innerHTML = item.description;
        document.getElementById("productList").append(title,price,category,images,description,)
    })
}
const handleSort = (orderBy) => {
};

const handleCategory = (category) => {
    let temp = products.filter((ele) => ele.category == category);
    mapper(temp);
};
document
    .getElementById("lth")
    .addEventListener("click", () => handleSort("lth"));
document
    .getElementById("htl")
    .addEventListener("click", () => handleSort("htl"));

document
    .getElementById("men")
    .addEventListener("click", () => handleCategory("men"));
document
    .getElementById("women")
    .addEventListener("click", () => handleCategory("women"));

document
    .getElementById("electronics")
    .addEventListener("click", () => handleCategory("electronics"));

// searching

const search = (e) => {
    e.preventDefault();

    let searchValue = getValue("#search");
    let temp = products.filter((ele) => ele.title.toLowerCase().includes(searchValue.toLowerCase()));
    mapper(temp);

};

document.getElementById("searching").addEventListener("submit", search);


document.getElementById("search").addEventListener("keypress", (e) => {
if(e.key=="Enter"){