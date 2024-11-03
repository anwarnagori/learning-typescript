// let user: string = "Anwar";
// console.log(user)

// let user:string = "Anwar";
// user = "Muhammad Anwar";
// console.log(user)

// var num:number = 12345;
// console.log(num);

// var num:number = 12345;
// num = 12345678910;
// console.log(num);

// function greet(name: string, message:string): void {
//     console.log(`Hi ${name} ${message}`);
// }

// greet(`${prompt('Enter your name')}`, "How are you");

// function greetUser(name: string, msg: string): string {
//   return `Assalamu Alaikum ${userName}, ${msg}`;
// }

// let userName = "Anwar";
// let msg = "How are you";

// function greet() {
//   console.log(greetUser(userName, msg));
// }
// greet();

/*Union Types*/

// let userName: string | number = "Anwar";

// userName = 2610;

// console.log(userName);

// let arr: string[] = ['Mehran', 'Civic', 'Vitz'];

// console.log(arr);

/*Mix Array*/

// let mixArr: (string | number)[] = ['Apple', 'Banana', 6, 9];

// console.log(mixArr);

// let userName: any = 'Anwar';

// userName = 26;

// userName = true;

// console.log(userName);

/* Making custome types or aliases  */

// type Mixed = string | number | boolean;

// let userName: Mixed = "Anwar";

// let rollNum: Mixed = 29123;

// let isFeePaid: Mixed = true;

// console.log(userName, rollNum, isFeePaid);