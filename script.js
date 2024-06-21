let web3;
let stakingContract;
let account;

async function initWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            return true;
        } catch (error) {
            console.error('User denied account access');
            return false;
        }
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        return false;
    }
}

async function connectWallet() {
    if (await initWeb3()) {
        const accounts = await web3.eth.getAccounts();
        account = accounts[0];
        document.getElementById('wallet-address').innerText = 'Connected: ' + account;
        document.getElementById('connect-btn').style.display = 'none';
        document.getElementById('disconnect-btn').style.display = 'block';
        stakingContract = new web3.eth.Contract(stakingContractABI, stakingContractAddress);
        getBalance();
    }
}

function disconnectWallet() {
    account = null;
    document.getElementById('wallet-address').innerText = '';
    document.getElementById('wallet-balance').innerText = '';
    document.getElementById('connect-btn').style.display = 'block';
    document.getElementById('disconnect-btn').style.display = 'none';
}

async function getBalance() {
    const balance = await web3.eth.getBalance(account);
    document.getElementById('wallet-balance').innerText = 'Balance: ' + web3.utils.fromWei(balance, 'ether') + ' ETH';
}

async function stakeTokens() {
    const amount = document.getElementById('stake-amount').value;
    const weiAmount = web3.utils.toWei(amount, 'ether');
    try {
        await stakingContract.methods.stake(weiAmount).send({ from: account });
        alert('Staked successfully!');
    } catch (error) {
        console.error('Error staking tokens:', error);
    }
}

async function unstakeTokens() {
    const amount = document.getElementById('unstake-amount').value;
    const weiAmount = web3.utils.toWei(amount, 'ether');
    try {
        await stakingContract.methods.unstake(weiAmount).send({ from: account });
        alert('Unstaked successfully!');
    } catch (error) {
        console.error('Error unstaking tokens:', error);
    }
}

async function claimRewards() {
    try {
        const reward = await stakingContract.methods.claim().send({ from: account });
        document.getElementById('rewards').innerText = 'Claimed Rewards: ' + web3.utils.fromWei(reward, 'ether');
        alert('Rewards claimed successfully!');
    } catch (error) {
        console.error('Error claiming rewards:', error);
    }
}

async function fetchMarketPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,chainlink,avalanche-2&vs_currencies=usd');
        const prices = await response.json();
        document.getElementById('btc-price').innerText = prices.bitcoin.usd + ' USD';
        document.getElementById('eth-price').innerText = prices.ethereum.usd + ' USD';
        document.getElementById('sol-price').innerText = prices.solana.usd + ' USD';
        document.getElementById('link-price').innerText = prices.chainlink.usd + ' USD';
        document.getElementById('avax-price').innerText = prices['avalanche-2'].usd + ' USD';
    } catch (error) {
        console.error('Error fetching market prices:', error);
    }
}

setInterval(fetchMarketPrices, 60000);

fetchMarketPrices();
