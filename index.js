import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from './utils/inquirer.js';
import fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';


dotenv.config();
console.clear();

let neon = chalkAnimation.neon('                       𝕮 𝐥 𝐲 𝐝 𝐞 𝕮 𝐡 𝐚 𝐭 𝐛 𝐨 𝐭               ');

setTimeout(() => {
    neon.stop()
    run();
}, 4000);

const url = process.env?.url ?? getEnv('./env.txt');

function getEnv(path)  {
    return fs.readFileSync(path, 'utf8');
}

const run = async () => {
    let inputData = '';
    while (!inputData?.content?.toLowerCase?.().includes('bye') && !inputData?.content?.toLowerCase?.().includes('exit')) {
        await inquirer.getChatInput().then(
            async (res) => {
                inputData = res;
                const response = await fetch(`${url}${inputData.content}`);
                const data = await response.json();
                var output = data.cnt;
                console.log(`${chalk.hex('#00ff00')('≫ ')} ${chalk.hex('#00ffee')(output)}`);
            }
        );
    }
};


/**
 * 
 * @copyright nandhu-44
 * 
 */
