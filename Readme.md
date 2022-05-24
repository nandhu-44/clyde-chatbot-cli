***Clyde is a chatbot - CLI build using JavaScript***


- Clone the project:    `git clone https://github.com/nandhu-44/clyde-chatbot-cli.git`

- Change directory to the project:    `cd clyde-chatbot-cli`

- Install dependencies:    `npm install`

- Run the project:    `npm start`

<h3><strong><u><i>Explanation</strong></i></u></h3>
<br>


> _`index.js`_


- Importing all the libraries.

<img src ='https://cdn.discordapp.com/attachments/978598537904406568/978598558561357824/unknown.png'>


- Clearing the console and setting up the environment variables.

<img src = 'https://cdn.discordapp.com/attachments/978598537904406568/978600847401422918/unknown.png'>


- Some animation for the first 4 seconds before starting.

<img src = 'https://cdn.discordapp.com/attachments/978598537904406568/978601756026077184/unknown.png'>


- Taking the url from env and if for some reason it doesnt exist, read from a text file `env.txt` .

<img src = 'https://cdn.discordapp.com/attachments/978598537904406568/978602108741910528/unknown.png'>


- Making an async function to fetch chatbot reponse from the API.

<img src = 'https://cdn.discordapp.com/attachments/978598537904406568/978603416374898718/unknown.png'>
<br>
<br>


> _`utils/inquirer.js`_


- Using the inquirer module to ask the user for the input.

<img src = 'https://cdn.discordapp.com/attachments/978598537904406568/978604584429817856/unknown.png'>



**If you dont have an apikey get it from [here](https://brainshop.ai/)**


Put it in the `.env` file like
```.env
url=YOUR_URL
```
or in the `env.txt` file like
```txt
YOUR_URL
```
A sample url would look like this 
```
http://api.brainshop.ai/get?bid={brainid}&key={apikey}&uid={uid}&msg=
```
You will get the values of brainid , apikey and uid from the above website.

Replace it with the sample url. (Dont use the curly braces).

The url they provide will end with a `=[msg]` . So make sure to remove it as we are appending it from user input.


**💡 Idea by: [Aadhu](https://github.com/AADHU2005)**

