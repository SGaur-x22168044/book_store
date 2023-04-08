	  $(document).ready(function(){
			$("#nav-opt4").click(function(){
				  $(".container").hide();
				  $("#payment-div").show();
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
		let total=0;

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

		  total = 0;

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
				if(data!='')
				{document.getElementById("show-book-content-div").innerHTML = data+".";}
				else{document.getElementById("show-book-content-div").innerHTML = 'Not Available.';}
				document.getElementById("outer-div").style.display = 'block';

				const abi2 = [
					{
						"inputs": [
							{
								"internalType": "string",
								"name": "bookTitle",
								"type": "string"
							}
						],
						"name": "addRights",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [
							{
								"internalType": "string",
								"name": "bookTitle",
								"type": "string"
							}
						],
						"name": "checkRights",
						"outputs": [
							{
								"internalType": "bool",
								"name": "",
								"type": "bool"
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
					},
					{
						"inputs": [
							{
								"internalType": "bytes32",
								"name": "",
								"type": "bytes32"
							}
						],
						"name": "rights",
						"outputs": [
							{
								"internalType": "bool",
								"name": "",
								"type": "bool"
							}
						],
						"stateMutability": "view",
						"type": "function"
					}
				];
				const address2 = "0x9345a6eaaee3993a6f1b93cb6c34b7326802d930";

				window.contract = await new window.web3.eth.Contract(abi2, address2);
				const data2 = await contract.methods.checkRights(book).call(); 
				document.getElementById("show-book-content-div2").innerHTML = data2+".";
				document.getElementById("outer-div2").style.display = 'block';
				
			}


//--------------------------CONTACT US ----------------------------------------------------------------
const sendmessage = async() => {
var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	console.log(name);
	console.log(email);
	console.log(subject);
	console.log(message);

	let account;
	if(window.ethereum !== "undefined") {
		const accounts = await ethereum.request({method: "eth_requestAccounts"});
		account = accounts[0];
	}

const address = "0x82acfa9e1b005fb540a008c1a791f5e5f941432b";
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"name": "sendMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMessages",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subject",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct ContactUs.Message[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getMessage",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subject",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct ContactUs.Message",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumMessages",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const owner = "0x8F3d1A824CF79f0D67bC74341337a4Af7c0527De";
const rpcURL = 'https://sepolia.infura.io/v3/9af3d49403744c9c9a89c430f843dedc';
window.web3 = await new Web3(window.ethereum);
window.contract = await new window.web3.eth.Contract(abi, address);
await contract.methods.sendMessage(name, email, subject, message).send({from:account});
}

const getmessage = async() => {
	const address = "0x82acfa9e1b005fb540a008c1a791f5e5f941432b";
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "subject",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"name": "sendMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllMessages",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subject",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct ContactUs.Message[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getMessage",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subject",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct ContactUs.Message",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumMessages",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

	const rpcURL = 'https://sepolia.infura.io/v3/9af3d49403744c9c9a89c430f843dedc';
	window.web3 = await new Web3(rpcURL);
	window.contract = await new window.web3.eth.Contract(abi, address);

	const data = await contract.methods.getAllMessages().call();
	const datasize = await contract.methods.getNumMessages().call();
	const table = document.getElementById("table-id"); 
	i = 1 ;

	table.innerHTML = "";

	const headerRow = table.insertRow();
	const snoHeader = headerRow.insertCell(0);
	const nameHeader = headerRow.insertCell(1);
	const emailHeader = headerRow.insertCell(2);
	const subjectHeader = headerRow.insertCell(3);
	const msgHeader = headerRow.insertCell(4);

	snoHeader.innerHTML = "S.No.";
	nameHeader.innerHTML = "Name";
	emailHeader.innerHTML = "Email";
	subjectHeader.innerHTML = "Subject";
	msgHeader.innerHTML = "Message";

	data.forEach((obj) => {
		const row = table.insertRow();
		const snoCell = row.insertCell(0);
		const nameCell = row.insertCell(1);
		const emailCell = row.insertCell(2);
		const subjectCell = row.insertCell(3);
		const msgCell = row.insertCell(4);
		const timeCell = row.insertCell(5);
		
		const date = new Date(timeCell);
		
		snoCell.innerHTML = i;
		nameCell.innerHTML = obj.name;
		emailCell.innerHTML = obj.email;
		subjectCell.innerHTML = obj.subject;
		msgCell.innerHTML = obj.content;
		//timeCell.innerHTML = date;

		i++;
	});

}

//------------------------Payment------------------------------------------------------------------------------------

let account;
const connectMetamask = async() => {
	if(window.ethereum !== "undefined") {
		const accounts = await ethereum.request({method: "eth_requestAccounts"});
		account = accounts[0];
		document.getElementById("account").value = ` ${account}`;
	}
}

const connectContract = async() => {
	const ABI = [
		{
			"inputs": [],
			"name": "deposit",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address payable",
					"name": "_to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_amount",
					"type": "uint256"
				}
			],
			"name": "withdraw",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_address",
					"type": "address"
				}
			],
			"name": "getAccountBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getAddress",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getContractBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	];
	const Address = "0x16631159c2dcb368b0fb95051a873d49c83e6582"; // Taking Address from Remix 
	window.web3 = await new Web3(window.ethereum);
	window.contract = await new window.web3.eth.Contract(ABI, Address);
	document.getElementById("metamaskConnectStatus").value = "Connected to Contract";

}
const getContractAccount = async() => {
	console.log("get contract");
	const data = await window.contract.methods.getAddress().call();
	document.getElementById("contractAccount").value = data;
}
const getContractBal = async() => {
	connectMetamask();
	connectContract();
	console.log("get contract balance");
	const data = await window.contract.methods.getContractBalance().call();
	document.getElementById("Balance").value = data;
}
const SendEtherToContract = async() => {
	console.log("send ether");
	const amount = document.getElementById("depositAmount").value;
    await window.contract.methods.deposit().send({from: account, value: amount});
	getContractBal();
}
const payEther = async() => {
	console.log("pay ether");
	

}

const getAccountBal = async() => {
	connectMetamask();
	connectContract();
	const data = await window.contract.methods.getAccountBalance(account).call();
	document.getElementById("accountBal").value = data;
	console.log("getAccountBal > " +data);
}

const placeOrder=document.querySelector('#placeOrder');
placeOrder.addEventListener('click',()=>{
	cart.classList.remove('cart-active');
  });

const placeOrderbtn = async() => {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++){
        elements[i].style.display = 'none';
    }
	document.getElementById('payment-div').style.display = 'block';
	document.getElementById('WithdrawAmount').value = total;
}

