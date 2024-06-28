# Discrete Staking Rewards UI

This project provides a user interface for staking tokens and earning rewards using Ethereum smart contracts. The UI also includes a market feed for cryptocurrency prices and a live video stream.

## Features

- Connect and disconnect your Ethereum wallet
- Stake and unstake tokens
- Claim staking rewards
- Display live cryptocurrency prices (BTC, ETH, SOL, LINK, AVAX)
- Stream live video

## Technologies Used

- HTML5 and CSS3
- JavaScript
- Web3.js
- CoinGecko API for price feeds

## Setup and Usage

### Prerequisites

- Node.js and npm installed
- MetaMask extension installed in your browser

### Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/totalingarc/staking-rewards-ui.git
    cd staking-rewards-ui
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

### Configuration

1. **Update Contract Address**
    - Open `script.js` and replace `'YOUR_STAKING_CONTRACT_ADDRESS_HERE'` with your actual staking contract address.

2. **Update Video Source**
    - Open `index.html` and replace `'YOUR_VIDEO_SOURCE_URL'` with the URL of your video stream.

3. **Update ABI**
    - Open `abi.js` and replace the placeholder with the ABI of your staking contract.

### Running the Application

1. **Start a local server**
    You can use any local server to serve the files. For example, using `http-server`:
    ```sh
    npx http-server
    ```
    Navigate to `http://localhost:8080` in your browser to view the application.

### Usage

1. **Connect Wallet**
    - Click on the "Connect" button to connect your MetaMask wallet.
    - Your wallet address and balance will be displayed.

2. **Stake Tokens**
    - Enter the amount of tokens you wish to stake and click "Stake".

3. **Unstake Tokens**
    - Enter the amount of tokens you wish to unstake and click "Unstake".

4. **Claim Rewards**
    - Click on the "Claim" button to claim your staking rewards.

5. **Market Feed**
    - The market feed displays the latest prices for BTC, ETH, SOL, LINK, and AVAX.

6. **Live Stream**
    - A live video stream is displayed in the designated box.



