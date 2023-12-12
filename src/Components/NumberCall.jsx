import React from 'react';

export default class NumberCall {
  static codeSearch() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`;
      request.addEventListener("loadend", function () {
        // console.log(this.responseText); // Log the raw response
        const lines = this.responseText.trim().split('\n').map(Number);
        // console.log(lines); // Log the array of numbers
        resolve(lines);
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}