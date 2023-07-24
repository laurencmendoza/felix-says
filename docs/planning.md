# Simon - Project 1 Planning
by: Lauren C. Mendoza
## Game Choice - Simon

I'm planning on recreating Simon, but with my cat, Felix, at the top, who will help deliver the sequence with his meows. The game will be retitled "Felix Says" in his honor. 

## Screenshot for Wireframes
![Felix Says wireframe](https://github.com/laurencmendoza/felix-says-project-demo/assets/137251999/887e604b-8dda-411d-86cf-ccfbcc02a1dc)
## Psuedocode

1.  Define required constants

- Game audio - during the demonstration of the computer's sequence & when user interacts with buttons
   - red button
   - green button
   - yellow button
   - blue button
- Initial state variables - variables that will always be the same at the start of the game
   - score: 0
- Length of time for player to input the next element of the sequence (5 seconds)

2.  Define required variables used to track the state of the game

- Score- keeping track of the longest sequence the player has successfully repeated

- Computer sequence- the sequence the computer demonstrates for the player to copy (an array)

- Player sequence- the sequence of player input (an array)

3.  Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

- Each button
   - Red button
   - Green button
   - Yellow button
   - Blue button
   - Start over button

- Score

- Felix's word bubble of meows: 
   - A word bubble appears next to the drawing of Felix and inside the word bubble will be "Meow" written in the same color as the button that is lit up on the Simon console

4.  Upon loading the app should:

- Initialize the state variables
   - score: 0
   - computer sequence (empty array)
- Render those values to the page 
- Add 1 random value to the computer sequence array (red, green, yellow, blue)
- Play the computer sequence
- Wait for the user to click a button

5.  Handle a player clicking a button

- Once the player clicks a button, their choice gets added to the player's sequence (an array)
- Then, their array gets compared the computer's sequence (another array) at the current index
- If the player sequence does not match the computer sequence, they lose (game over screen)
- Once the length of the player sequence and the content of the player sequence matches the computer sequence, the computer will repeat the sequence, and add one new random value to the sequence


6.  Handle a player clicking the start over button

- If the player clicks the start over button, the game will reload

<!-- Extra Information for Psuedo Code

1. What is the gameplay loop?
a. what does the user do to start the game?
b. how might the user interact with the game?
c. what will the player do (or not do) to lose the game?
d. how will the player restart the game?

   a & b: User starts by watching the computer sequence, then repeats the sequence by pressing the buttons. 
   
   c: Player will lose if they enter the wrong sequence or spend too long finishing the sequence (after each correct button press a timer will check if they will enter next part of the sequence within 5 seconds)

   d: Player will restart the game by clicking "Start Over" button

2. What data will you need to keep track of throughout your game?

   The computer sequence
   The player's inputted sequence
   The score (length of the last sequence correctly input by the player)
   The length of the computer sequence
   The length of the player's sequence

3. Which elements of the game will require event listeners?

   The buttons (red, green, yellow, blue)
   The 'Start Over' button

4. What is expected to happen after each interaction occurs? 

   a. When the player hits a button, that color is added to the player's sequence array. 

   b. Then, the player sequence array is compared to the computer sequence array at the current index (starting at 0)

   c. If the arrays do not match at the current index, then the player gets a game over message

   d. If the arrays do match, a timer is set for 5 seconds, and if the player does not add to their sequence within the time limit, the player gets a game over message

   e. If the player hits another button within the 5 seconds, then the process repeats from a. 

   f. If the length of the player sequence array is equal to the computer sequence array, then the score is equal to the length of the computer sequence array. 

   g. Then the computer plays the same sequence but adds one new random value to the end. Then the process starts over at a until f occurs again. 

-->

