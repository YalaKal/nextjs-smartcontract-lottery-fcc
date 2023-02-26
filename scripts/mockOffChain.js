const { ethers, network } = require("hardhat")

async function mockKeepers() {
    //   console.log("ChainId", network.config.chainId)
    //   const raffle = await ethers.getContract("Raffle")
    //   const checkData = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(""))
    //   const { upkeepNeeded } = await raffle.callStatic.checkUpkeep(checkData)
    const upkeepNeeded = true

    console.log("Upkeep", upkeepNeeded)
    if (upkeepNeeded) {
        // const tx = await raffle.performUpkeep(checkData)
        // const txReceipt = await tx.wait(1)
        // const requestId = txReceipt.events[1].args.requestId
        // console.log(`Performed upkeep with RequestId: ${requestId}`)
        if (network.config.chainId == 31337) {
            //   await mockVrf(requestId, raffle)
            await mockVrf()
        }
    } else {
        console.log("No upkeep needed!")
    }
}

// async function mockVrf(requestId, raffle) {

async function mockVrf() {
    console.log("We on a local network? Ok let's pretend...")
    //   const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
    //   await vrfCoordinatorV2Mock.fulfillRandomWords(requestId, raffle.address)
    //   console.log("Responded!")
    const recentWinner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" //await raffle.getRecentWinner()

    console.log(`The winner is: ${recentWinner}`)
}

mockKeepers()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

// const { ethers, network } = require("hardhat")

// async function mockKeepers() {
//     const raffle = await ethers.getContract("Raffle")
//     const checkData = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(""))
//     const { upkeepNeeded } = await raffle.callStatic.checkUpkeep(checkData)
//     if (upkeepNeeded) {
//         const tx = await raffle.performUpkeep(checkData)
//         const txReceipt = await tx.wait(1)
//         const requestId = txReceipt.events[1].args.requestId
//         console.log(`Performed upkeep with RequestId: ${requestId}`)
//         if (network.config.chainId == 31337) {
//             await mockVrf(requestId, raffle)
//         }
//     } else {
//         console.log("No upkeep needed!")
//     }
// }

// async function mockVrf(requestId, raffle) {
//     console.log("We on a local network? Ok let's pretend...")
//     const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
//     await vrfCoordinatorV2Mock.fulfillRandomWords(requestId, raffle.address)
//     console.log("Responded!")
//     const recentWinner = await raffle.getRecentWinner()
//     console.log(`The winner is: ${recentWinner}`)
// }

// mockKeepers()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error)
//         process.exit(1)
//     })
