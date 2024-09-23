const getData = async () => {

    let req = await fetch("https://fakestoreapi.com/products");

    let res = await req.json();
    console.log(res);
    mapper(res)
}
getData()
const mapper = (data) => {
    data.map((item) => {
        let title = document.createElement("h2");
        title.innerHTML = item.title;
        let price = document.createElement("h3");
        price.innerHTML = item.price;
        let category = document.createElement("h2");
        category.innerHTML = item.category;
        let image = document.createElement("img");
        image.src = item.image;
        let description = document.createElement("span");
        description.innerHTML = item.description;
        document.getElementById("productList").append(title,price,category,image,description,)
    })
}

