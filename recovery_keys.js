const { ethers } = require('ethers');

const mnemonic = "teste teste teste teste teste teste teste teste teste teste teste teste";

async function main() {
    const wallet = ethers.HDNodeWallet.fromPhrase(mnemonic);

    console.log("\nEndereço:", wallet.address);
    console.log("Private Key:", wallet.privateKey);

    // Verificação
    if (wallet.address.toLowerCase() === "0x037827832873287237823".toLowerCase()) {
        console.log("\nSUCESSO: O endereço corresponde ao esperado!");
    } else {
        console.log("\nAVISO: O endereço não corresponde ao esperado!");
    }
}

main().catch(console.error);