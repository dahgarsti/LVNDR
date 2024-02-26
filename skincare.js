const product = [
    {
        id: 0,
        image: 'https://lh6.googleusercontent.com/cxIGuY63nBga4v1v0u_D2WzjLvzaR7ePA-MdMGfm8wTIl0SpdR948HLm0c9xh2glBjCqA52FfexySH3BgIb_OlbhNIC39JFxWLqIiXlzQkvJPufkrnr-9FvzFixH1NahTA=w1280',
        title: 'QV Skin Cream - 500g',
        price: 150,
        description: 'protect your skin from exposure For dryness with QV Moisturizer.',
        
        
        
    },
    {
        id: 1,
        image: 'https://lh5.googleusercontent.com/V3u19uYbwMPUfWuU3FzFrDnMT19z1I-bqGZIz07YFEGprL9NNa1zmRCps2SIFsBm-BrUrhmqXOuUJcHk9F49gVzcASwPRSXRSAXrP2pkwOlnMJ998bAoonvkKZXe-EUA6Q=w1280',
        title: 'Neutrogena Skin Water Gel - 50 ml',
        price: 65,
        description: 'A gel with an effective formula designed to intensely moisturize the skin.',
    },
    {
        id: 2,
        image: 'https://lh4.googleusercontent.com/AXPGDky1Fes6c3Y6HtGhf0h0yjKwH0x7cpWe5w0XZq0Bv0x47-NXz5Hh44oacbq1G7Zi5WZA2jqxkEXUeqzdsnLA6ARkKPvbH6fzAp8CWuoDuXOG42NhIGYvk8wn1pQ5tQ=w1280',
        title: 'Body Blends Growth Serum',
        price: 43,
        description: 'Get more vibrant, beautiful and healthy eyelashes and eyebrows with Body Blends.',
    },
    {
        id: 3,
        image: 'https://lh4.googleusercontent.com/wT8ACTXT1QA6NsHvR2HHJ_aNqFnhBZp3rtTmfb9CB8nWYpU26wHDm_53uzebW0kykS4_pRBgBNKqqbmqg5kvaiLgmcVEdxEpVRbnxShEUy2lY_mAvYf7tjiZ0bTcBTp64w=w1280',
        title: 'LOreal Paris Hyaluron Expert ',
        price: 89,
        description: 'LOreal Paris Hyaluron Expert Serum to enhance skin elasticity, concentrated with 1.5% hyaluronic acid.',
    },
    {
        id: 4,
        image: 'https://lh5.googleusercontent.com/skYA5fR1mN4vPlKrcV-WMTAwyzWujzNuWCBam2zWqOqkmfFDgbQDP3f13X7lblM-2VYM-U7dflLcnzs5RukI7cmus_NW7TA4bFd0NilEY-C-FIsfGJm4OCoAYkDRnuBqOQ=w1280',
        title: 'Sugar scrub lavender - 600 g',
        price: 32,
        description: 'Global Star Sugar and Lavender Facial and Body Scrub.',
    },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/9Ul-NMImC08W1lssfn9FaeQ4tvmzu0jDQLxQ-A6BSalYsEtCtsH9Pj-KBYdVXo7F8TQ22hqhFkRiY9BShvrEtABD-BqHpvCNaNCwadwg1SAXveT5D7j74TFIVeF2yl4Usg=w1280',
        title: 'Madagascar Centella Hyalo-Cica',
        price: 60,
        description: 'A sunscreen that protects the skin from ultraviolet rays Effectively violet.',
    },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/DkD1omuxkWsCkFHUAuvT5wj99VsODM3A9CIKp6JCszNQN0L105c3qxC6dB1S3gNaPPLy6R5no4PWPboy96ewe6rql_h1hYGcyWXD5RwMrDxvgJ5ckzUT69XxqU2kZXm9Ow=w1280',
        title: 'Vaseline lip balm and moisturizer',
        price: 20,
        description: 'Vaseline Lip Therapy lip balm soothes dry and dull lips And soothes cracked skin instantly.',
    },
    {
        id: 7,
        image: 'https://lh5.googleusercontent.com/LN7xbRB9pWOBlx82YmXlFHIzQasYQ6KrihMk44iO7--Z6uPvJhX00kVkwrxok8SBpch8uQHEfJ6maSKInqYuINUR85k1P_q0i3RVYedppwRSDxONJ3YdgGWozg0ouJDDTg=w1280',
        title: 'Elishakoy Collagen Sleeping Mask',
        price: 34,
        description: 'Elishakoy Skin Care Collagen Night Mask contains beautifying ingredients while you sleep',
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