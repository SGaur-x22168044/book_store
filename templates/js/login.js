const login =  async () => {
    
    const ABI1 = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "Name",
                    "type": "string"
                }
            ],
            "name": "setName",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                }
            ],
            "name": "setpassword",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getpassword",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "pass",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    ;
    const address1 = "0x03f53aeef5116b4b6f0c7d46c13f1a8884696cbe";
    const owner = "0x8F3d1A824CF79f0D67bC74341337a4Af7c0527De";
    const rpcURL = 'https://sepolia.infura.io/v3/9af3d49403744c9c9a89c430f843dedc';

    window.web3 = await new Web3(rpcURL);
    window.contract = await new window.web3.eth.Contract(ABI1, address1);
	var uname,pass; 
    uname = await contract.methods.getName().call(); 
    pass = await contract.methods.getpassword().call();
    console.log(uname+": "+pass);

    if(document.getElementsByName('uname')[0].value == uname && document.getElementsByName('psw')[0].value == pass){
        console.log("true");
      if(window.ethereum !== "undefined") {
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];
                //document.getElementById("userArea").innerHTML = `User Account: ${account}`;
                window.location.href = "/home.html";
            }
    }
    else{
      alert("Wrong credentials");
    }
  }