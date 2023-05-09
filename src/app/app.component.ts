import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    inputText = '';

    // Function that display value
 display(val: any) {
     this.inputText += val;
}

// Function that evaluates the digit and return result
 solve() {
     let x = this.inputText;
     let y = evaluate(x);
     this.inputText = y.toString();
}

// Function that clear the display
 clearAll() {
     this.inputText = '';
}

 clearLast() {
     let text = this.inputText;
	this.inputText = text.substring(0, text.length - 1);
}

// Equal sign, calulates what's in the input
 calculate() {

     let result = this.inputText;
	result = result.replace(/[a-zA-Z]/g, "");
	result = this.parse(result);
	this.inputText = result;
}

 parse(str: any) {
	return Function(`'use strict'; return (${str})`)()
}

 calculateSQRT() {
	this.calculate();
     let result: number = Number(this.inputText);
     this.inputText = (Math.sqrt(result)).toString();
}


 calculateInverse() {
	this.calculate();
	let result = this.inputText;
     this.inputText = (1 / Number(result)).toString();
}

    
changeSign(): void {
  let result = this.inputText;

  const transformedExpr = result.replace(/^([\+\-]?\d+)|([\+\-]\d+)/g, (fullMatch: string, p1: string, p2: string) => {
    if (p1) {
      return (p1.startsWith("-") ? "+" : "-") + p1.substring(1);
    } else {
      return (p2.startsWith("+") ? "-" : "+") + p2.substring(1);
    }
  });

  this.inputText = transformedExpr;
}
    
}
