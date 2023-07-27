# Simon - Project 1 Planning
by: Lauren C. Mendoza
## Game Choice - Simon

I am creating the game Simon, but with my cat, Felix, who will show at the top of the screen and help deliver the sequence with his meows. The game will be retitled "Felix Says" in his honor. 

## Screenshot for Wireframes
![Felix Says wireframe](https://github.com/laurencmendoza/felix-says-project-demo/assets/137251999/887e604b-8dda-411d-86cf-ccfbcc02a1dc)
## Psuedocode

1.  **Define required constants**

 - Game audio - during the demonstration of the computer's sequence & when user interacts with buttons
   - red button
   - green button
   - yellow button
   - blue button
   - level up
   - game over
   - win
- State variables - variables that will be referenced regularly in the game
   - score
   - player sequence
   - computer sequence
- Images 
   - Felix with his mouth closed
   - Felix with his mouth open
   - Felix smiling
   - Game over text
   - Winner text
   - Image for audio on
   - Image for audio muted
- Winning score

2.  **Define required variables used to track the state of the game**

- Score- the length of the last sequence the player has successfully repeated
- Computer sequence- the sequence the computer demonstrates for the player to copy (an array)
- Player sequence- the sequence of player input (an array)

3.  **Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.**

- Each button
   - Red button
   - Green button
   - Yellow button
   - Blue button
   - Start over button
   - Mute button
- Score
- Image of Felix
- Felix's word bubble of meows: 
   - A word bubble appears next to the drawing of Felix which will display a message of "game over" if the player gets the sequence wrong or "winner!" if the player finishes the sequence correctly
- Overlay for win screen
- Winning score in the overlay

4.  **Upon loading the app should:**

- Display the title, buttons, and an image of Felix
- Wait for the user to click "Start"

   4a. **Upon pressing start, the app should:**
- Initialize the state variables
   - score: 0
   - computer sequence = empty array
   - player sequence = empty array
- Render score value to the page
- Hide the word bubble containing either "game over" or "winner!"
- Update image of Felix to Felix with his mouth closed
- Change the start button text to "Start Over"
- Add an event listener to the game buttons
- Add 1 random value to the computer sequence array (red, green, yellow, blue)
- Render the computer sequence
   - Disable the player's buttons
   - Change pic of Felix to one with his mouth open
   - Play audio of Felix's meows
   - Iterate over computer sequence and flash the button at an interval of 1s each

5.  **Handle a player clicking a button**

- Once the player clicks a button, their choice gets added to an array of the player's choices
- Then, this array gets compared the relevant values of the computer's sequence 
   - Comparing only values of the computer sequence up to the length of the current player sequence array
- If the player sequence does not match the computer sequence, they lose (game over screen)
- Once the player's sequence matches the whole computer sequence:
   - The player will see a "winner!" message appear
   - The computer will add one new random value to the sequence, and then render the new sequence

6.  **Handle a player clicking the start over button**

- If the player clicks the start over button, the game will reload and render a new computer sequence, with a length of 1

