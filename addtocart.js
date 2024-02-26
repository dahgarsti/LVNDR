const product = [
    {
        id: 0,
        image: 'https://lh3.googleusercontent.com/Z8b1VHFki6IA6Z1EGJxOz4ffNfnrT3rSwfnCU0JVo2J4kUzv-8TcGFgyrMYjn2R7r5ZzdCzzmrbLa94PPa4fCL9gQrJrJAxTHcKBaE_KxX4QYBhWfaY_dhDnAcOqJtSpuA=w1280',
        title: 'Revolution Iconic Fever',
        price: 145,
        description: 'The Eyeshadow Revolution Palette contains 15 shades.',
        
        
        
    },
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/oic3oGJ3IEJEAyZP0Kw2n-AGDqnbACHUIUdBjmC0A_2uiDlHml6vDXqsTtMQTNvrddP8_ROPAhxxdRJgA9EvIsXVgZaA-X5zaj_XnjqSfO2Xf8RBKkm2rS2i_YALgEPZrg=w1280',
        title: 'Cala Makeup Eyebrow Soap',
        price: 65,
        description: 'Transparent eyebrow soap from Cala Makeup, to fix and arrange hair Eyebrows.',
    },
    {
        id: 2,
        image: 'https://lh4.googleusercontent.com/g4_JCYHNDuu3npSNCFKotyE70xG0hw3NPiehPqHhVdZ0CXATdu_76eWN_DcjtXDLaLAUp1zgNO4H4hFVvDaohcQZw11y95XoCl2I0ZhQpuTmc84YHkqIY_jXfbFnm62dRQ=w1280',
        title: 'Cala Makeup Matte Lipstick-64-CM',
        price: 15,
        description: 'Enjoy a soft and comfortable lip look with the perfect lipstick from Cala Makeup with a soft, creamy texture',
    },
    {
        id: 3,
        image: 'https://lh5.googleusercontent.com/DvE7vci3XZhx_xiiPSDFfvuKSsPH2Ou8yyHS1KsEI_RxV5QgA_yQO98-NfVL97XHFxIsue83ObkoE0wZCcv58rJUV2TDxvV5ZYc_pC_ZBTQcRkQ5GtMi-eAhnBhnvAzTyw=w1280',
        title: 'Bourjois Twist Up Volume Mascara',
        price: 44,
        description: 'its brush is designed with fine bristles that reach all your lashes, from roots to tips, covering them with attractive, natural color.',
    },
    {
        id: 4,
        image: 'https://lh5.googleusercontent.com/S0tR-3TLB6rBJSBsR4x7820_y7ZOfLDANMcel4hB4ugoAcpUQetXFMD50btYnJANyjm6kPZJQLzsv-DAaNJ2rJQi-nTRczRXdU1BUTMuNMajSCdB6qjVJ3psmheqkAl0Qw=w1280',
        title: 'Concealer from Nars - 42',
        price: 150,
        description: 'high coverage, Soft and creamy texture that blends easily and lasts long.',
    },
    {
        id: 5,
        image: 'https://lh5.googleusercontent.com/Vx_Gi8lgUroPI_zCbA795ihqxm9gHE0w1497Cc8_ccbFivRjCRaiB_8KZlU_hQ_AP47-xvJn3BwwPohChdqLbXppgaQQUy5mlcGDE3DOghVnViRXqsMPav1DROlzmDmKzg=w1280',
        title: 'Kiko Rouge Lipstick-103',
        price: 79,
        description: 'Dual Rouge Liquid Lipstick with an exceptional blend of primary and Lip gloss.',
    },
    {
        id: 6,
        image: 'https://lh6.googleusercontent.com/3Y4H06RbCQZuZ30_ZkGGbFlNnAylJqcqPo0OnCcUMIC8hqsjeDqHQbMyxnu283LSTzcc3x5oc-oRDHNVelAjtAuPGh6VrE5VN8ui8hRDFDy7O0OfzkCF0RFIUKuKVWc1EQ=w1280',
        title: 'Cala Makeup Eyeliner',
        price: 15,
        description: 'Waterproof liquid eyeliner, with a precise tip that ensures you draw a thin line with every stroke Ease and professionalism.',
    },
    {
        id: 7,
        image: 'https://lh4.googleusercontent.com/u0aWtmnCiVHdCsLFjdTR7fQExI9lgdC3broe4MpYy5dM1h6dj9KZDC2AWkUiJudYou2AV_eFvXEQYqPcrP8Qi1zR19d137k0fAS2CA2H_4T0yCjaL-8O7ucWoiPVMAMRGg=w1280',
        title: 'Elf HD Setting Powder - Sheer',
        price: 42,
        description: 'Elf Loose Powder is a highly concentrated and translucent HD formula',
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