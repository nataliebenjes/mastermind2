export default class NumberCall {
  static codeSearch() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`;
      request.addEventListener("loadend", function () {
        console.log(this.responseText); // Log the raw response
        const response = (this.responseText).toString();
        console.log(response); // Log the raw response
        if (this.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}