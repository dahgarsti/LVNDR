const product = [
    {
        id: 0,
        image: 'https://lh6.googleusercontent.com/dokoWVoD5io5xMggoCS0MoT4T9OE5ujrvV8RpklvfcbsN85T5O-S8qKeb8H7f8BrjJHPrdmGeKJOHn_KjYDB_tNyEeTGTXfCkm9ujf64HjT9qP1kthRlnwLz4QwQ6BkV1w=w1280',
        title: 'Musk perfume by Jovan',
        price: 25,
        description: 'perfume with gentle notes of jasmine, orange blossom and bergamot.',
        
        
        
    },
    {
        id: 1,
        image: 'https://lh6.googleusercontent.com/SDFniVzCB2RJWT855Fo-LfxNY4C_tGFreBakeyHpOvGEAO-ozYutX4KJSoYsCEZqqpo8ZsKXS2o0xw1Ja4e49fripQuGLK8QMhTC_gQ3Oj4D4ezP5eoTYdaCzM8woro0lQ=w1280',
        title: 'Musk Powder perfume by Blanco',
        price: 34,
        description: 'A musky fragrance suitable for both sexes.',
    },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/A5cWzFvb5w7Ryy0WXYjfsVqkOzsWkzYQXoCS-JqxMvMPGWbxNZxSnKWoTOBR0CTEDNmUorur3F6fFNSjKhd3pl5hjjVxDOpVKZPHK7lzA4h4dgaLuPz22wbLEPtQK_M2Gw=w1280',
        title: 'Bloom perfume by Gucci for women',
        price: 158,
        description: 'A distinctive floral women s perfume whose story began in 2017',
    },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/9YzJpJnXOhcED7SCDnY-fCKhrIJOATENek6c59NGHlGPrLAqUi3h9fBJm2zeTg1TjpfKSAHPFTgQJYRJaraD29QxOvGvnPteuQjEjCIrrjAf-l63E8lxQeFynsI2QaMmFg=w1280',
        title: 'Scandal by Night perfume by Jean',
        price: 77,
        description: 'The story of this fragrance from Jean Paul Gaultier began in 2018 to captivate and refresh your senses',
    },
    {
        id: 4,
        image: 'https://lh5.googleusercontent.com/rqOlht7vJbcfAsGn62cxzwxFtwuhwEOCcxGk-fQmOB8PYXGnAbTvw7xTpLK4T__acsvCpTIdAthPwCDZVeXPP5VAPsSjqWGksXDoaHlzPnsJVNeYUYh3n8vF4SIF4yL3EA=w1280',
        title: 'Chanel Chance Eau Tender Hair Mist',
        price: 398,
        description: 'A refreshing hair perfume characterized by its delicate scents',
    },
    {
        id: 5,
        image: 'https://lh4.googleusercontent.com/c9ZyP_wTBGlSXR0ug2Z-aeCaP5zVas2jxRGqWK2THLIgywonuhpDcIvSzSh3JZsFAEbUzxwhwVtCgfLAx0ZHXIOQdT65oFa86zjDlVxKH7f-jCRvIzQ6ISOiS3uEcqW-6g=w1280',
        title: 'Le Parfum by Elie Saab for women',
        price: 130,
        description: 'perfume for modern women with a clean, fragrant, elegant and seductive feminine scent.',
    },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/3Lgy1xiG9ZqW8Y_XhGEHK0neIpxPXAYYe3LWTwKl6Kl7Zj86Ylm8MpqcVHAeE_tKoSnY3keK6WdoduMZ3zOH1TUJmiu_m2oyezH04Fq5kt0ONb62E0uW0bbEqzLIrkgH2g=w1280',
        title: 'Hair perfume Musk Rose Al Baddah',
        price: 111,
        description: 'A distinctive hair perfume for men and women to give your hair an attractive scent all day long.',
    },
    {
        id: 7,
        image: 'https://lh4.googleusercontent.com/-yV9wfwUffz9o-N1yvcj3JF6Zjf5v_tn0uHMokcf0ESmUPIHSnUfLDEmq3cF4PrTOe83Js-MT8c8ooUR2isliH06QuVsMebe1kRhR-boEIh70WduA98Z2gPP0nvDmjxq5w=w1280',
        title: 'Teint de Neige by Lorenzo Villoresi ',
        price: 89,
        description: 'A hair perfume spray for women or men to give your hair an attractive scent all day long.',
    }
];

  
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )

}).join('')

// ... your existing code

const images = document.querySelectorAll('.images');

images.forEach((image, index) => {
  // Create the description element
  const description = document.createElement('div');
  description.classList.add('description'); // Add a class for styling
  description.textContent = product[index].description;
  description.style.opacity = 0; // Initially make it invisible

  // Append the description to the image container
  image.parentElement.appendChild(description);

  // Add event listener for image click
  image.addEventListener('click', () => {
    description.style.opacity = 1; // Toggle visibility on click
  });
  description.addEventListener('click', () => {
    description.style.opacity = 0; // Toggle visibility on click
  });
});

// ... further code



var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0; discount=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
        document.getElementById("dis").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;

            if (total > 1000) {
                discount = 0.09;
            } else if (total >= 500 && total <= 1000) {
                discount = 0.04;
            }else {
                discount = 0;
            }


            // Calculate total cost after applying discount
            var totalCost = total - (total * discount);


            document.getElementById("total").innerHTML = "$ "+total+".00";
            document.getElementById("dis").innerHTML = "$ "+totalCost+".00";

            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    

    
}