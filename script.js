// 1
let text1 = "Live tutorial";
let text2 = "JavaScript";
let text3 = text1 +" " +"Of"+" " +text2;
console.log(text3);

// 2
console.log(text3);

// 3
let length =  text3.length;
console.log(length);

// 4
let text4 = text3.toUpperCase();
console.log(text4);

// 5
let text5 = text3.toLowerCase();
console.log(text5);

// 6
let str = "Sagar Rathod";
let part = str.substring(0,5);
console.log(part);

// 7
{
  let text = "Live tutorial Of JavaScript";
  let part = text.slice(0,4);
  console.log(part);
}

// 8
{
  let text = "Hello world ";
  let part = text.includes("world");
  console.log(part);
}

// 9
let text6 = "a,b,c,d";
let array = text6.split();
console.log(array);

// 10
let array1 = text3.split(" ")
console.log(array1);

// 11
{
  let text = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
  let array = text.split(",");
  console.log(array);
}

// 12
{
let text = "Live tutorial Of JavaScript";
let result = text.replace("JavaScript","Python")
console.log(result);
}

// 13
{
let text = "Live tutorial Of JavaScript";
let letter = text.charAt(15);
console.log(letter);
}

// 14
{
  let text = "Live tutorial Of JavaScript";
  let code = text.charCodeAt(16);
  console.log(code);
}

// 15
{
  let text = "Live tutorial Of JavaScript";
  let result = text.indexOf("a");
  console.log(result);
}

// 16
{
  let text = "Live tutorial Of JavaScript";
  let result = text.lastIndexOf("a");
  console.log(result);
}

// 17
{
  let text = "You cannot end a sentence with because because because is a conjunction";
  let result = text.indexOf("because");
  console.log(result);
}

// 18
{
  let text = "You cannot end a sentence with because because because is a conjunction";
  let result = text.lastIndexOf("because");
  console.log(result);
}

// 19
{
  let text = "You cannot end a sentence with because because because is a conjunction";
  let position = text.search("because");
  console.log(position);
}

// 20
{
  let text = "Live tutorial Of JavaScript";
  let result = text.trim();
  console.log(result);
}

// 21
{
  let text = "Live tutorial Of JavaScript";
  let result = text.startsWith("Live");
  console.log(result);
}

// 22
{
  let text = "Live tutorial Of JavaScript";
  let result = text.endsWith("Script");
  console.log(result);
}

// 23
{
  let text = "Live tutorial Of JavaScript";
  let result = text.match(/a/g);
  console.log(result);
}

// 24
{
  let text = "Live tutorial Of";
  let text1 = "JavaScript";
  let = result = text.concat(" "+text1);
  console.log(result);
}

// 25
{
  let text = "Live tutorial Of JavaScript";
  let result = text.repeat(2);
  console.log(result);
}
