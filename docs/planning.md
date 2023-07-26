# Simon - Project 1 Planning
>by: Lauren C. Mendoza
## Game Choice - Simon

>I'm planning on recreating Simon, but with my cat, Felix, at the top, who will help deliver the sequence with his meows. The game will be retitled "Felix Says" in his honor. 

## Screenshot for Wireframes
![Felix Says wireframe](https://github.com/laurencmendoza/felix-says-project-demo/assets/137251999/887e604b-8dda-411d-86cf-ccfbcc02a1dc)
## Psuedocode

1.  **Define required constants**

> - Game audio - during the demonstration of the computer's sequence & when user interacts with buttons
>   - red button
>   - green button
>   - yellow button
>   - blue button
>- State variables - variables that will be referenced regularly in the game
>   - score
>   - player sequence
>   - computer sequence
>- Image of Felix with his mouth closed
>- Image of Felix with his mouth open
>- Game over text image

2.  **Define required variables used to track the state of the game**

>- Score- the length of the last sequence the player has successfully repeated
>- Computer sequence- the sequence the computer demonstrates for the player to copy (an array)
>- Player sequence- the sequence of player input (an array)

3.  Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

>- Each button
>   - Red button
>   - Green button
>   - Yellow button
>   - Blue button
>   - Start over button
>- Score
>- Felix's word bubble of meows: 
>   - A word bubble appears next to the drawing of Felix and inside the word bubble will be "game over" when the player inputs the wrong sequence

4.  **Upon loading the app should:**

>- Display the title, buttons, and an image of Felix
>
>Upon pressing start, the app should: 
>
>- Initialize the state variables
>   - score: 0
>   - computer sequence = empty array
>   - player sequence = empty array
>- Render score value to the page
>- Add 1 random value to the computer sequence array (red, green, yellow, blue)
>- Render the computer sequence
>   - Change pic of Felix to one with his mouth open
>   - Play audio of Felix's meows
>- Wait for the user to click a button

5.  Handle a player clicking a button

>- Once the player clicks a button, their choice gets added to the player's sequence (an array storing their choices)
>- Then, this array gets compared the relevant values of the computer's sequence 
>   - Comparing only values of the computer sequence up to the length of the current player sequence array
>- If the player sequence does not match the computer sequence, they lose (game over screen)
>- Once the player's sequence matches the whole computer sequence, the computer will add one new random value to the sequence, and then repeat the sequence

6.  Handle a player clicking the start over button

>- If the player clicks the start over button, the game will reload and render a new computer sequence

<!-- Extra Information for Psuedo Code

1. What is the gameplay loop?
a. what does the user do to start the game?
b. how might the user interact with the game?
c. what will the player do (or not do) to lose the game?
d. how will the player restart the game?

   a & b: User starts by watching the computer sequence, then repeats the sequence by pressing the buttons. 
   
   c: Player will lose if they enter the wrong sequence. 

   d: Player will restart the game by clicking "Start Over" button. 

2. What data will you need to keep track of throughout your game?

   The computer sequence
   The player's inputted sequence
   The score (length of the last sequence correctly input by the player)

3. Which elements of the game will require event listeners?

   The buttons (red, green, yellow, blue)
   The 'Start Over' button

4. What is expected to happen after each interaction occurs? 

   a. When the player hits a button, that color is added to the player's sequence array. 

   b. Then, the player sequence array is compared to the computer sequence array, only looking at the values in the computer sequences array up to the length of current player sequence array

   c. If the arrays do not match, then the player gets a game over message

   f. If the player sequence array is equal to the total computer sequence array, then add one to the score, reset the player sequence array, and add a new randome value to the computer sequence array

-->

