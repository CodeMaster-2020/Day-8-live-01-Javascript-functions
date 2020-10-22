function main() {
  //   var name = "pippo";
  //   const test = name => {
  //     console.log(name);
  //   };
  //   function prova(name) {
  //     console.log(name);
  //   }
  //   test("mele");
  //   prova();
}

function foo() {
  var a = 2;
  this.bar();
}

function bar() {
  console.log(this.a);
}

foo(); //undefined

var cat = {
  lives: 9,
  jumps: function() {
    lives--;
    console.log(lives);
  }
};

name = "Arrow function";
let me = {
  name: "Regular function",
  thisInArrow: () => {
    console.log("Example of " + this.name); //no 'this' binding here
  },
  thisInRegular() {
    console.log("Example of " + this.name); //'this' binding works here
  }
};
me.thisInArrow();
me.thisInRegular();

// main();

let myFunc = {
  showArgs() {
    console.log(arguments);
  }
};

var john = {
  name: "John",
  greet: function(person) {
    console.log("Hi " + person + ", my name is " + this.name);
  }
};

john.greet("Mark"); // Hi Mark, my name is John

var fx = john.greet;
fx("Mark"); // Hi Mark, my name is

myFunc.showArgs(1, 2, 3, 4);

// console.log(cat.jumps());

function sum() {
  var total = 0;

  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];

    arg = arg.split(",");

    if (Array.isArray(arg)) {
      for (let k = 0; k < arg.length; k++) {
        total += parseFloat(arg[k]);
      }
    } else {
      const numberToAdd = parseFloat(arg);

      if (!Number.isNaN(numberToAdd)) {
        total += numberToAdd;
      }
    }
  }

  return total;
}

// console.log(sum(1, 3, 5, 6, 7, 8));
// console.log(sum(2.4, 3.5, 4.9));
// console.log(sum("1", "3", "5", "ciao", "7", "8"));
// console.log(sum([4, 6, 7, 88], [3, 6, 1], 5, 7, "6", "7"));
// console.log(sum("1,5,6,78,9"));

function download(url, callback) {
  setTimeout(function() {
    callback(url);
  }, 3000);
}

download("url1", image => {
  console.log(image);
  download("url2", image2 => {
    console.log(image2);
    download("datiDaGoogle", googleResponse => {
      console.log(googleResponse);
    });
  });
});

function downloadImage(url, imageName, callback) {
  setTimeout(() => {
    callback(url + imageName);
  }, 5000);
  // richiesta API a url + imageName
  // chiamataServer(url+imageName, (image) => {
  // callback(image)
  //   })
}

downloadImage("https://unsplash.com/photos/", "BfphcCvhl6E", image => {
  console.log(image);
});
