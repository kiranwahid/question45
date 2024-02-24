//  -----Question 01-----
// console.log(`Hello World`);
//   -----Question 02-----
//  Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
// let person_name:string = "Kiran Wahid";
// console.log(`${person_name} would you like to learn some Python today? `);
//   -----Question 03-----
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName:string = prompt('Enter Your Name');
// let lower_case = personName.toLowerCase();
// let upper_case = personName.toUpperCase();
// let title_case = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
// console.log(`\n${lower_case}\n \n${upper_case}\n \n${title_case}`);
//   -----Question 04-----
//  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// let famous_quote:string = 'Success consist in moving from failure to failure without loss of enthusiam.';
// let author:string = "Quaid-e Azam Once Said.";
// console.log(`${author} "${famous_quote}"`);
//   -----Question 05-----
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let quote:string = "No nation can rise to the height of glory unless your women are side by side with you.";
// let famous_person:string = "Quaid-Azam";
// console.log(`${famous_person} once said "${quote}"`);
//   -----Question 06-----
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// -----white_space-----
// let personName:string = " \n\tAllama Iqbal \t\n";
// console.log(personName);
// // -----without_whitespace-----
// let person_name:string = personName.trim();
// console.log(person_name);
//   -----Question 07 & 08-----
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
//  You should create four lines that look like this:
// _______________________________________
// console.log(5 + 3)
// ----addition---
// let add:number = 5 + 3;
// console.log(`Addition of 5 + 3  is ${add}`);
// // ---subtraction----
// let sub:number = 10 - 2;
// console.log(`Subtraction of 11 - 3 is ${sub}`);
// // ---multiplication---
// let mul:number = 4 * 2;
// console.log(`multiplication of 4 * 2  is ${mul}`);
// // ----devision----
// let div:number = 16 / 2;
// console.log(`Devision of 16 / 2 is ${div}`);
//   -----Question 09-----
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let fav_num:number = 15;
// console.log(`My favourite number is ${fav_num}`);
//   -----Question 10-----
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
//----- programe 01----
// ----Comment----
// My name is kiran wahid
//  current date is 24-feb-24
// console.log(`Thank You Governer Of Sindh Kamran Khan Tessori.`);
//----- programe 02----
// ----Comment----
// My name is kiran wahid
//  current date is 24-feb-24
// console.log(`Multiplication of 10 * 10 is ${10*10}`);
//   -----Question 11-----
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let friend_names:string[] = ["Hafsa","Shahar Bano", "Dua","Noor Bano", "Kinza","Muskan"];
// for (let i = 0; i < friend_names.length; i++) {
//     console.log(friend_names[i])
// }
//   -----Question 12-----
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
// let friend_names:string[] = ["Hafsa","Shahar Bano", "Dua","Noor Bano", "Kinza","Muskan"];
// let greet:string = "let Start Codding.";
// for (let i = 0; i < friend_names.length; i++) {
//     console.log(`Hey ${friend_names[1]} ${greet}`)
// }
//   -----Question 13-----
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var fav_transport = ["Motercycle", "Car", "Scooty", "Train"];
for (var i = 0; i < fav_transport.length; i++) {
    console.log("I would like to own a ".concat(fav_transport[i]));
}
