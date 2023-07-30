import readline from 'readline';
import { KnightTravails } from './knightTravails.js';
import { KnightTravailsDisplay } from './knightsTravailsDisplay.js';

class KnightsDriver {
    constructor() {
      this.rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }
  
    promptForPosition(promptText) {
      return new Promise((resolve) => {
        this.rl.question(promptText, (input) => {
          resolve(input);
        });
      });
    }
  
    async start() {
      const startX = parseInt(await this.promptForPosition('Enter the starting X coordinate: '));
      const startY = parseInt(await this.promptForPosition('Enter the starting Y coordinate: '));
      const endX = parseInt(await this.promptForPosition('Enter the ending X coordinate: '));
      const endY = parseInt(await this.promptForPosition('Enter the ending Y coordinate: '));
  
      const start = [startX, startY];
      const end = [endX, endY];
  
      const knightTravails = new KnightTravails(start, end);
      const knightTravailsDisplay = new KnightTravailsDisplay(knightTravails);
      knightTravailsDisplay.displayPath();
  
      this.rl.close();
    }
  }

const knight = new KnightsDriver();
knight.start();