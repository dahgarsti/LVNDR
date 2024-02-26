const product = [
    {
        id: 0,
        image: 'https://lh5.googleusercontent.com/JARh6pa5ttq1JGP7Cm2aGiWQZX-XRQCm3vVTrjYyCQ8bihPXQvMR_GkENbjtbR1C1t4fX24Aeaasqzj3x1RMORG1tp5C32NwVKAQpmfP_lpsBzUNzgxuE5h-5qKvHaa6Ag=w1280',
        title: 'Mili Organics Rosemary and Peppermint Hair Oil',
        price: 50,
        description: 'Oil with natural and organic ingredients and essential oils to provide care that Your hair deserves it.',
        
        
        
    },
    {
        id: 1,
        image: 'https://lh5.googleusercontent.com/ZGof9gefgF0-XNodCNnbprGRe-Yew5ryno4E0ZWqtRjMxRh3iw64FnOsIxZJkXuLrjcTnjp8ykjV8FHEZ8b-XBf4y4wRcAOX-HgV_lV8K-2sMJIQn4AvgdkMXoN4X4QbKA=w1280',
        title: 'Triple Tea Tree Strengthening Shampoo',
        price: 59,
        description: 'Make your hair regain its nourishment and softness with the right hair shampoo All hair types from Giovanni.',
    },
    {
        id: 2,
        image: 'https://lh6.googleusercontent.com/rYt0OLUf0wSuWVZJkmB24ANDen9KGx90QaiiBPydaCKFLOgmQhWwc7NMZLnas8Bes5l3IxBlEslNItidofkDogTzKad1iacsApziUSQoFVqEgZEs_4yBc-0vHX9qm6PXhg=w1280',
        title: 'Giovanni 2 Check Frizz Be Gone Anti-Frizz Serum to',
        price: 75,
        description: 'A hair serum that gives you soft and shiny hair because it contains shea butter and oil Sweet almond.',
    },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/1fpuiMdBaDNPbl1X3fvihJ7rmR1-AmKgvroGtBjulkZWVhwpdvjV6XrsaXFyGKHwOx0mgeZqp-ahhMpYtbkswoFZaeEyoCNtAD1lKVdsgJljNEfftrUZYlJ-RbcgeSYJBg=w1280',
        title: 'Cantu Shea Butter & Coconut Curling Cream ',
        price: 55,
        description: 'Enjoy your hair natural curls and make it look attractive with Cantu moisturizing cream. ',
    },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/38Jhozfx6bF-cU8rxJFmZOpE6DX8u4ASKDOnxOkxnqmuKrIzkBXfoaD4qsa-AETTApk_tQtz7MsYVcam8fKULayMfFsn7JO-fDrLpTkjz1I335wVHbAeCHzkriKAeL1AJw=w1280',
        title: 'Giovanni Strong Hold Styling Gel - 200 ml',
        price: 61,
        description: 'Giovanni styling gel is specially formulated for all hair types.',
    },
    {
        id: 5,
        image: 'https://lh6.googleusercontent.com/6nlGZVjCYnAWOpEziEsyBwYIV4AD0_xJ8rwoF4cgvNVFssGt-FhXOEM35x1BARME1dI0e-9g30tnLeLVwZdcGNoH70OKRpsOKyKgmdYMeaZOTyMUvU24YgJZcgpG95oIyA=w1280',
        title: 'The Ordinary Multipeptide Hair Density Serum',
        price: 82,
        description: 'A concentrated serum with peptides to enhance hair density and health. ',
    },
    {
        id: 6,
        image: 'https://lh6.googleusercontent.com/0icpCf4hgLRN554YivzIx_BtuA47_J4qstjjRNmheldZGFJRiPVrB13oETTGL1vRFAOJ7wYVemgHwfVwuCsjJAXh6fJfCPE2C_tHXMwr3k57gjqceXmOsq2i20cytQ6Wmg=w1280',
        title: 'Garnier Leave In Ultra Doux Hair Cream with Milk -',
        price: 23,
        description: 'An intensely nourishing leave-in cream enriched with nourishing almond milk and natural ingredients',
    },
    {
        id: 7,
        image: 'https://lh3.googleusercontent.com/GBYTFcKPdMaZzIlIv2-ZQ48cGv6IjONQgb4EUgPrA8w6Me-ja-3JVL4bwjppYDB57oM_75aFEFTvxBhh_GCVPXsZzKo4pXGdKLbTRcquShImf2T2xDskGt1bJ3ZRvYaVxw=w1280',
        title: 'Matrix Conditioner for Blonde and Silver Hair',
        price: 85,
        description: 'So Silver Conditioner for blonde hair levels 7 and above. Ideal for making your dyed hair retain its blonde color and moisture. ',
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