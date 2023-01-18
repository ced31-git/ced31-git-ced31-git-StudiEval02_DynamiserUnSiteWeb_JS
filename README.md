## **Evaluation 02: Boosting your websites with Javascript**

### _Theme: Creating a browser game => Pig Game_

---

## _**The subject**_

---

### _**Deliverable expected for this evaluation :**_

Creation of a small web browser game using the DOM.  
At the end of the service, the client must receive the following elements :  
\- A working game  
\- A readable interface that corresponds to the model provided.  
This involves several global functionalities:  
On the front-desk (client side):  
\- The ability to create a new game  
\- The ability to retain the current score  
\- The ability to roll the die  
\- The possibility to have 2 players

---

### _**Rules :**_

The game is played by two players on one screen.  
Each player has a temporary score **(ROUND)** and a global score **(GLOBAL)**. At each turn, the player's ROUND is set to 0 and he can roll a die as many times as he wants. The result of a roll is added to the ROUND.  
During his turn, the player can decide at any time to: 

*   Click on the "Hold" option, which sends the points from the ROUND to the GLOBAL. This will be the other player's turn 
*   Roll the die. If he rolls a 1, his ROUND score is lost and his turn is over.  
    The first player to reach 100 points on the global wins the game.
    
![Capture d’écran 2023-01-12 152036](https://user-images.githubusercontent.com/85100991/213177603-c1102fec-bab5-4496-ad08-9812a1046834.png)

---

### _**Terms and Restrictions :**_

*   Your code will be structured
*   The game must be functional
*   The resources will be available in an image folder
*   The font will be Lato (google font): [https://fonts.google.com/specimen/Lato](https://fonts.google.com/specimen/Lato)
*   The CSS Framework of your choice

---

### _**Evaluation scale and criteria :**_

1.  Know and use a development environment (2 points).
2.  Write an algorithm and integrate it into a web page using event-driven scripts and a client-side scripting language (5 points).
3.  Use of ECMAScript (JS) and DOM standards (5 points).
4.  Connaissance et utilisation d’un framework de présentation de type adaptatif (5 points).
5.  Déploiement de la réalisation en ligne (3 points).

---

## _**The realisation of the project**_

--


Organisation and implementation of the project :

Reading and understanding the project.
Discovery and choice of the CSS framework .
Implementation of the project.
Find the different images used during the project.
Installing the CSS framework.
Build the architecture of the page and insert the style.
Work on the responsiveness of the project.
Thinking about logic.
Write the different logics.
Trying and testing the project.
Deploy the project.



Choice of CSS framework :

I chose to start with the TailwindCSS framework in order to discover and practice it throughout a project.



Implementation of the project :

Initializing the project with a JSON file

npm init

Creating a GitHub repository
Initialising the project with git

git init

Link the local git project with the GitHub repository

echo "# Project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ced31-git/Project.git
git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/ced31-git/Project.git
git branch -M main
git push -u origin main



Installing the CSS framework :

I followed the procedure of xpharsh (https://gist.github.com/xpharsh/929e39f23b2d005c966aa795b6013b02).



Reflection on the logic of the project :

Creating a UML diagram (activity diagram).

![activityDiagram](https://user-images.githubusercontent.com/85100991/213178794-52e1433f-9901-4bf4-bfbd-9eafd53a18cc.png)


Deployment of the project :

In order to continue my exploration, I decided to put my project online via Netlify .
