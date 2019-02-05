# ROll2Win : Roll the dice to win the game

This smart contract is simple contract written for the two player game, where each player compete with each other 
to win the game and win the bet amount. For the simplicity of the game, only two player can join the game at a time.
Same player can not join the game to make it fair among the participants.
Before joining the game the player has to select the amount he wants to bet.
After winning the game the game, the winning player gets the bet amount of the losing player.
When two player join the game, in the UI it will show that two player has joined by different address.

There are multiple events have been implemented in the smart contract like :
    /**
    All different kinds of events which will get generated in the game
     */

    event Added(address player);
    event Won(address player);
    event Lost(address player);
    event Rolling(address player);
    event Done(address player);

    //when there is no sufficient balance then you can not play
    event NotSufficientBalance(address player, uint money);

    //when owner tried to enter into the game
    event OwnerNotAllowed(address player);
    
    //event if room is full
    event RoomIsFull(uint totalPlayers);

    //when other person is rolling, then other can not roll in the same room
    event NoRollingAllowed(address player, uint money);
    
    //event for the boardstatus change
    event BoardStatusEvent(Status boardstatus, address player);
    
    //event for the number after rolling the dice
    event DiceRolled(uint8 diceNumber);
    
    //event if player already exists in the system
    event PlayerExists();
    
    //event if not enough players in the room, then wait
    event WaitForPlayers();

Each player has to roll the dice to get some number. The progress will be shown on the UI for each move.
UI contains the player info as well, so that user can see their progress.

#steps to run this project

there are two parts for this project. 
    1.Smart Contract Repo
    2.Frontend Repo

part -1 (smart contract deployment)
1. This project requires the specific version of the solidity and truffle to compile and deploy to the ganache-cli.
   1. Truffle version - Truffle v4.1.14 (core: 4.1.14)
   2. Solidity version - Solidity v0.4.24 (solc-js)
   3. Node version - v8.9.4
    
2. After installing the required versions of the packages, please follow the below the steps to compile and test the smart contract.
   1. to deply the smart contract on ganache/ganache-cli
       "truffle migrate"

   2. to deply the smart contract on ganache/ganache-cli with resetting the network
       "truffle migrate --reset"

   3. to test the testcases after deploying to the network
       "truffle tests"

   4. to debug the test cases based on the hash of the transaction 
    "truffle debug "hash of transaction"

part - 2 ( frontend deployment)
1. clone the repository 
2. install the node dependencies using npm i
3. this also requires bower to install the frontend dependencies
4. install the bower dependencies using bower i
5. install grunt and then run grunt in the root folder
6. npm start - to start the frontend project

## You should see the project starting at localhost:3000 and here you can interact with smart contract as per the need
