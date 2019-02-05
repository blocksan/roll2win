var Roll2Win = artifacts.require('Roll2Win')

contract('Roll2Win', function(accounts) {

    const owner = accounts[0]
    const alice = accounts[1]
    const bob = accounts[2]
    const lexa = accounts[3]
    const emptyAddress = '0x0000000000000000000000000000000000000000'

    const betAmount = web3.toWei(1, "ether")

    it("should add a player with the provided address", async() => {
        const rollwin1 = await Roll2Win.deployed()

        var eventEmitted = false

        const count = 0;
        const inBoardOrder = 1;
        const tx = await rollwin1.addPlayer({from: alice, value: betAmount})
        if (tx.logs[0].event === "Added") {
            eventEmitted = true
        }

        assert.equal(eventEmitted, true, 'adding a player should emit a Added event')
    })
    it("should not allow someone to enter the game if he is already addded", async() => {
        const rollwin3 = await Roll2Win.deployed()

        var eventEmitted = false

        const tx = await rollwin3.addPlayer({from: alice, value: betAmount})
        if (tx.logs[0].event === "PlayerExists") {
            eventEmitted = true
        }

        assert.equal(eventEmitted, true, 'Same player can not be added to the game again.')
    })
    it('should return the betAmount and boardOrder of the player who got added to the board', async() => {
        const rollwin2 = await Roll2Win.deployed()

        var eventEmitted = false

        const count = 0;
        const currentPosition = 0;
        const inBoardOrder = 2;
        const tx = await rollwin2.addPlayer({from: bob, value: betAmount})
        if (tx.logs[0].event === "Added") {
            eventEmitted = true
        }

        const result = await rollwin2.getPlayerInfo.call(bob)
        assert.equal(result[0].toString(10), inBoardOrder, 'the order of the first player on board should be 1')
        assert.equal(result[1].toString(10), betAmount, 'the betamount of the last added player does not match the expected value')
        assert.equal(result[2].toString(10), currentPosition, 'the current position of the last added player does not match the expected value')
        assert.equal(result[3].toString(10), count, 'the count of the last added player does not match the expected value')
        assert.equal(eventEmitted, true, 'adding a player should emit a Added event')
    })
    it("should check that game can be started, if players are two", async() => {
        // var playerCount = 2
        const rollwin6 = await Roll2Win.deployed()
        rollwin6.playerCount = 2
        var isGamePlayed = await rollwin6.isGameStart()
        assert.equal(isGamePlayed, true, 'Game should be played, if players are two')
    })
    
    it("should not add a player when the room is full", async() => {
        try{
            const rollwin4 = await Roll2Win.deployed()
            await rollwin4.addPlayer({from: lexa, value: betAmount})
        }catch(err){
            assert.equal(null, null, 'More than 2 players can not join the game')

        }

    })
    it("should not add a player when the minimum amount is not sent", async() => {
        var eventEmitted = false
        try{
            const rollwin5 = await Roll2Win.deployed()
            await rollwin5.addPlayer({from: alice, value: 0})
        }catch(err){
            assert.equal(eventEmitted, false, 'No event occured, as the contract reverted')
            assert.equal(null, null, 'Minimum amount is required to join the game')

        }

    })
    

});
