## Programming Task

We've created a simple multiplayer card game called "Add 'Em Up" where 5 players are dealt 5 cards from a standard 52 card pack, and the winner is the one with the highest score. The score for each player is calculated by adding up the card values for each player, where the number cards have their face value, J = 11, Q = 12, K = 13 and A = 1 (not 11). In the event of a tie, the scores are
recalculated for only the tied players by calculating a "suit score" for each player to see if the tie can be broken (it may not). Each card is given a score based on its suit, with spades = 4, hearts = 3, diamonds = 2 and clubs = 1, and the player's score is the sum of the 5 values.

(Node application) that needs to do the following:

- Be invoked with the name of the input and output text files.
- Read the data from the input file, find the winner(s) and write them to the output file.
- Handle any problems with the input.

### Command Parameters

The command parameters can be in any order and are relative to the current folder, or absolute.
--in abc.txt --out xyz.txt

##### Input File Structure

The input file will contain 5 rows, one for each player's hand of 5 cards. Each row will contain the player's name separated by a colon then a comma separated list of the 5 cards. Each card will be 2 characters, the face value followed by the suit (S = Spades, H = Hearts, D = Diamonds and C = Clubs).

E.g.

    Name1:AH,3C,8C,2S,JD
    Name2:KD,QH,10C,4C,AC
    Name3:6S,8D,3D,JH,2D
    Name4:5H,3S,KH,AS,9D
    Name5:JS,3H,2H,2C,4D

##### Output File Structure

The output file should contain a single line, with one of the following 3 possibilities:
• The name of the winner and their score (colon separated).
• A comma separated list of winners in the case of a tie and the score (colon separated).
• "ERROR", if the input file had any issue.

E.g.

    NameX:40
    // or
    NameX,NameY:35
    // or
    ERROR

##### Application Execution

Your application will be tested using an automated test runner, so your application must run to completion without any user input.

##### JavaScript

The application will be expected to be in a single script called 'winner.js' and will be called as follows:

`node winner.js --in abc.txt --out xyz.txt`

### TODO

- [ ] Add tests
