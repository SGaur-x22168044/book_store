var aboutus= "<p>The Bookshelf is a family-owned online bookstore founded in 2021. Our mission is to provide book lovers with a wide selection of high-quality books at affordable prices. We believe that reading is not only a hobby, but also a way to expand your knowledge and enrich your life.</p> <p>At The Bookshelf, we pride ourselves on our knowledgeable and friendly staff. Whether you're looking for a specific book recommendation or just want to chat about your favorite author, we're always happy to help.</p> <p>We are proud to accept a variety of payment options, including credit cards, PayPal, and cryptocurrency. We believe that cryptocurrency is the future of online payments, and we're excited to offer this option to our customers. With cryptocurrency, you can make purchases quickly, securely, and without the need for a bank account or credit card.</p> <p>Thank you for choosing The Bookshelf as your go-to destination for all things books!</p>";
$(document).ready(function(){
		$("#aboutus-inner-div").html(aboutus);
	});
		$(document).ready(function(){
		  $("#nav-opt4").click(function(){
				$(".container").hide();
				$("#matmask-div").show();
		  });
	  });
        $(document).ready(function(){
		  $("#nav-opt5").click(function(){
				$(".container").hide();
				$("#sample").show();
		  });
	  });
	 $(document).ready(function(){
		  $("#nav-opt1").click(function(){
				$(".container").hide();
				$("#aboutus-div").show();
		  });
	  });
	  
	  $(document).ready(function(){
		  $("#nav-opt2").click(function(){
				$(".container").hide();
				$("#books-div").show();
		  });
	  });
	  
	  $(document).ready(function(){
		  $("#nav-opt3").click(function(){
				$(".container").hide();
				$("#contactus-div").show();
		  });
	  });

		const btnCart=document.querySelector('#cart-icon');
		const cart=document.querySelector('.cart');
		const btnClose=document.querySelector('#cart-close');

		btnCart.addEventListener('click',()=>{
		  cart.classList.add('cart-active');
		});

		btnClose.addEventListener('click',()=>{
		  cart.classList.remove('cart-active');
		});

		document.addEventListener('DOMContentLoaded',loadFood);

		function loadFood(){
		  loadContent();

		}

		function loadContent(){
		  //Remove Food Items  From Cart
		  let btnRemove=document.querySelectorAll('.cart-remove');
		  btnRemove.forEach((btn)=>{
			btn.addEventListener('click',removeItem);
		  });

		  //Product Item Change Event
		  let qtyElements=document.querySelectorAll('.cart-quantity');
		  qtyElements.forEach((input)=>{
			input.addEventListener('change',changeQty);
		  });

		  //Product Cart
		  
		  let cartBtns=document.querySelectorAll('.add-cart');
		  cartBtns.forEach((btn)=>{
			btn.addEventListener('click',addCart);
		  });

		  updateTotal();
		}


		//Remove Item
		function removeItem(){
		  if(confirm('Are Your Sure to Remove')){
			let title=this.parentElement.querySelector('.cart-book-title').innerHTML;
			itemList=itemList.filter(el=>el.title!=title);
			this.parentElement.remove();
			loadContent();
		  }
		}

		//Change Quantity
		function changeQty(){
		  if(isNaN(this.value) || this.value<1){
			this.value=1;
		  }
		  loadContent();
		}

		let itemList=[];

		//Add Cart
		function addCart(){
		 let food=this.parentElement;
		 let title=food.querySelector('.book-title').innerHTML;
		 let price=food.querySelector('.book-price').innerHTML;
		 let imgSrc=food.querySelector('.book-img').src;
		 //console.log(title,price,imgSrc);
		 
		 let newProduct={title,price,imgSrc}

		 //Check Product already Exist in Cart
		 if(itemList.find((el)=>el.title==newProduct.title)){
		  alert("Product Already added in Cart");
		  return;
		 }else{
		  itemList.push(newProduct);
		 }


		let newProductElement= createCartProduct(title,price,imgSrc);
		let element=document.createElement('div');
		element.innerHTML=newProductElement;
		let cartBasket=document.querySelector('.cart-content');
		cartBasket.append(element);
		loadContent();
		}


		function createCartProduct(title,price,imgSrc){

		  return `
		  <div class="cart-box">
		  <img src="${imgSrc}" class="cart-img">
		  <div class="detail-box">
			<div class="cart-book-title">${title}</div>
			<div class="price-box">
			  <div class="cart-price">${price}</div>
			   <div class="cart-amt">${price}</div>
		   </div>
			<input type="number" value="1" class="cart-quantity">
		  </div>
		  <ion-icon name="trash" class="cart-remove"></ion-icon>
		</div>
		  `;
		}

		function updateTotal()
		{
		  const cartItems=document.querySelectorAll('.cart-box');
		  const totalValue=document.querySelector('.total-price');

		  let total=0;

		  cartItems.forEach(product=>{
			let priceElement=product.querySelector('.cart-price');
			let price=parseFloat(priceElement.innerHTML.replace("ETH ",""));
			let qty=product.querySelector('.cart-quantity').value;
			total+=(price*qty);
			product.querySelector('.cart-amt').innerHTML="ETH "+(price*qty);

		  });

		  totalValue.innerHTML='ETH '+total;


		  // Add Product Count in Cart Icon

		  const cartCount=document.querySelector('.cart-count');
		  let count=itemList.length;
		  cartCount.innerHTML=count;

		  if(count==0){
			cartCount.style.display='none';
		  }else{
			cartCount.style.display='block';
		  }


		}