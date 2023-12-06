var productNameInput = document.getElementById('productName')
var productCatogaryInput = document.getElementById('productCatogary')
var productPriceInput = document.getElementById('productPrice')
var productDescriptionInput = document.getElementById('productDescription')

var productContainer = []

if(localStorage.getItem('products') != null){
    productContainer = JSON.parse(localStorage.getItem('products'))
    displayProducts(productContainer)
}

function addProduct()
{
    if (validateProductName() == true)
    {
        var productObj  = {
            name:productNameInput.value,
            catogary:productCatogaryInput.value,
            price:productPriceInput.value,
            description:productDescriptionInput.value,
        }
    
        productContainer.push(productObj);
        localStorage.setItem('products',JSON.stringify(productContainer))
        // console.log(productContainer);
    
        displayProducts(productContainer)
        clearInput()
    }else
    {
       confirm("product name invalid"+"\n"+"\n"+"press ok to clear form") ? clearInput() : ''
       
    }
   
}

function displayProducts(productContainer){
    var cartona = ``;
    const searchInput = document.querySelector("#search");
    const inSearch = searchInput.value != '';
    for (var i = 0 ; i<productContainer.length ; i++)
    {
        cartona += `
        <tr class="${inSearch ? 'matchedProduct' : ''}">
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].catogary}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].description}</td>
            <td><button onclick=deletProduct(${i}) class="btn btn-danger btn-sm">Delete</button></td>
            <td><button onclick=updateProduct(${i}) class="btn btn-success btn-sm">Update</button></td>
        </tr>
        `
    }

    document.getElementById('tbody').innerHTML = cartona ;
}

function clearInput()
{
    productNameInput.value = "";
    productCatogaryInput.value = "";
    productPriceInput.value = "";
    productDescriptionInput.value = "";
}

function deletProduct(i)
{
    productContainer.splice(i , 1)
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayProducts(productContainer)   
}

function updateProduct(Index)
{
    productNameInput.value = productContainer[Index].name
    productCatogaryInput.value = productContainer[Index].catogary
    productPriceInput.value = productContainer[Index].price
    productDescriptionInput.value = productContainer[Index].description
    localStorage.setItem("updateIndex", JSON.stringify(Index))
    submit.style.display = 'none'
    edite.style.display = "block"
    scroll({
        top:0,
        behavior:"smooth",
    })
}

function editeProduct()
{
    if (validateProductName() == true)
    {
        var Index = JSON.parse(localStorage.getItem("updateIndex"))
        productContainer[Index].name = productNameInput.value;
        productContainer[Index].catogary = productCatogaryInput.value;
        productContainer[Index].price = productPriceInput.value;
        productContainer[Index].description = productDescriptionInput.value;
        localStorage.setItem('products',JSON.stringify(productContainer));
    
        displayProducts(productContainer)
        clearInput()
        submit.style.display = 'block'
        edite.style.display = "none"
    }else{
        alert('something wrong')
    }
 
}

function searchProducts(term)
{
    var madtchedProducts = [];
    for(var i=0; i<productContainer.length ; i++)
    {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()) === true )
        {
            madtchedProducts.push(productContainer[i])
            console.log(madtchedProducts);
        }
    }
    displayProducts(madtchedProducts);
}

function validateProductName()
{
    const regex = /^[A-Z][a-z]{4,8}$/
    return regex.test(productNameInput.value);
   
    
}




// localStorage.clear()






































