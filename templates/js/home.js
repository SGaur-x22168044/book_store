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

	  $(document).ready(function(){
		$("#nav-opt5").click(function(){
			  $(".container").hide();
			  $("#content-div").show();
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


	//---------------------------------------------------------------------------------------------------------
			const getbookcontent = async() => {
				var book = document.getElementById('booktitle').value.toLowerCase();

				const address = "0x1143323236545f4f983649b2962c5143d04cbb1f";
				const abi = [
					{
						"inputs": [],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [
							{
								"internalType": "string",
								"name": "title",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "content",
								"type": "string"
							}
						],
						"name": "addBook",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "string",
								"name": "",
								"type": "string"
							}
						],
						"name": "books",
						"outputs": [
							{
								"internalType": "string",
								"name": "",
								"type": "string"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "string",
								"name": "title",
								"type": "string"
							}
						],
						"name": "getBook",
						"outputs": [
							{
								"internalType": "string",
								"name": "",
								"type": "string"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "owner",
						"outputs": [
							{
								"internalType": "address",
								"name": "",
								"type": "address"
							}
						],
						"stateMutability": "view",
						"type": "function"
					}
				]
				;
				
				const owner = "0x8F3d1A824CF79f0D67bC74341337a4Af7c0527De";
				const rpcURL = 'https://sepolia.infura.io/v3/9af3d49403744c9c9a89c430f843dedc';
				window.web3 = await new Web3(rpcURL);
				window.contract = await new window.web3.eth.Contract(abi, address);
				const data = await contract.methods.getBook(book).call(); 
				document.getElementById("show-book-content-div").innerHTML = data+".";
				document.getElementById("show-book-content-div").style.display = 'block';


				

			}
