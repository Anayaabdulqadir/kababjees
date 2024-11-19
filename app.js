// Chapter 12-13 start
// Question no 1
// function checkCharacter(input) {
//     if (!isNaN(input) && input.trim() !== '') {
//         console.log("The input is a number.");
//     }
//     else if (input >= 'A' && input <= 'Z') {
//         console.log("The input is an uppercase letter.");
//     }
//     else if (input >= 'a' && input <= 'z') {
//         console.log("The input is a lowercase letter.");
//     } 
//     else {
//         console.log("The input is neither a number nor a letter.");
//     }
// }

// checkCharacter('A'); 
// checkCharacter('z'); 
// checkCharacter('5'); 
// checkCharacter('@'); 
// Question no 2
// function compareNumbers(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} is the larger number.`);
//     } else if (num2 > num1) {
//         console.log(`${num2} is the larger number.`);
//     } else {
//         console.log("Both numbers are equal.");
//     }
// }
// compareNumbers(10, 20); 
// compareNumbers(50, 50);  
// compareNumbers(100, 25); 
// Question no 3
// function checkNumber() {
//     let num = parseFloat(prompt("Enter a number:"));

//     if (num > 0) {
//         console.log("The number is positive.");
//     } else if (num < 0) {
//         console.log("The number is negative.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// checkNumber();
// Question no 4
// function isVowel(char) {
//     char = char.toLowerCase();
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isVowel('a')); 
// console.log(isVowel('b')); 
// console.log(isVowel('e')); 
// console.log(isVowel('o')); 
// console.log(isVowel('z')); 
// Question no 5
// function validatePassword() {
//     const correctPassword = "mySecret123"; 
//     let userPassword = prompt("Please enter your password:");

//     if (!userPassword) {
//         console.log("Please enter your password.");
//     } else {
//         if (userPassword === correctPassword) {
//             console.log("Correct! The password you entered matches the original password.");
//         } else {
//             console.log("Incorrect password.");
//         }
//     }
// }
// validatePassword();
// Question no 6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);
// Question no 7
// function checkTimeOfDay() {
//     let time = prompt("Enter the time in 24-hour format (HHMM):");
//     let hour = parseInt(time);

//     if (isNaN(hour) || hour < 0 || hour > 2359 || time.length !== 4) {
//         console.log("Please enter a valid time in 24-hour format (HHMM).");
//     } else {
//         if (hour >= 0 && hour < 1200) {
//             console.log("Good morning!");
//         } else if (hour >= 1200 && hour < 1700) {
//             console.log("Good afternoon!");
//         } else if (hour >= 1700 && hour < 2000) {
//             console.log("Good evening!");
//         } else {
//             console.log("Good night!");
//         }
//     }
// }

// checkTimeOfDay();
// Chapter 12-13 end
// Chapter 14-16 start
// Question no 1
// let studentNames = [];
// Question no 2
// let studentNames = [];
// Question no 3
// let stringArray = ["Alice", "Bob", "Charlie"];
// Question no 4
// let numbersArray = [10, 20, 30, 40, 50];
// Question no 5
// let booleanArray = [true, false, true, false];
// Question no 6
// let mixedArray = [42, "Hello", true, null, { key: "value" }, [1, 2, 3]];
// Question no 7
        // let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
        // document.write("<ol>");
        // for (let i = 0; i < qualifications.length; i++) {
        //     document.write("<li>" + qualifications[i] + "</li>");
        // }
        // document.write("</ol>");
// Question no 8
        // let studentNames = ["Michael", "John", "Tony"];
        // let studentScores = [320, 230, 480];
        // let totalMarks = 500;

        // for (let i = 0; i < studentNames.length; i++) {
        //     let percentage = (studentScores[i] / totalMarks) * 100;
        //     document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage.toFixed(2) + "%<br>");
        // }
// Question no 9
        // let colors = ["Red", "Green", "Blue", "Yellow"];
        // document.write("<h3>Initial Colors: </h3>" + colors.join(", ") + "<br><br>");
        // let colorToAddAtStart = prompt("Enter a color to add at the beginning:");
        // colors.unshift(colorToAddAtStart);
        // document.write("<h3>After adding a color to the beginning: </h3>" + colors.join(", ") + "<br><br>");
        // let colorToAddAtEnd = prompt("Enter a color to add at the end:");
        // colors.push(colorToAddAtEnd);
        // document.write("<h3>After adding a color to the end: </h3>" + colors.join(", ") + "<br><br>");

        // let color1 = prompt("Enter the first color to add at the beginning:");
        // let color2 = prompt("Enter the second color to add at the beginning:");
        // colors.unshift(color1, color2);
        // document.write("<h3>After adding two more colors to the beginning: </h3>" + colors.join(", ") + "<br><br>");

        // colors.shift();
        // document.write("<h3>After deleting the first color: </h3>" + colors.join(", ") + "<br><br>");
        // colors.pop();
        // document.write("<h3>After deleting the last color: </h3>" + colors.join(", ") + "<br><br>");
        // let indexToAdd = prompt("Enter the index where you want to add a color:");
        // let colorToAdd = prompt("Enter the color to add at index " + indexToAdd + ":");
        // colors.splice(indexToAdd, 0, colorToAdd);
        // document.write("<h3>After adding a color at index " + indexToAdd + ": </h3>" + colors.join(", ") + "<br><br>");
        // let indexToDelete = prompt("Enter the index where you want to delete color(s):");
        // let numToDelete = prompt("Enter how many colors you want to delete:");
        // colors.splice(indexToDelete, numToDelete);
        // document.write("<h3>After deleting " + numToDelete + " color(s) starting at index " + indexToDelete + ": </h3>" + colors.join(", ") + "<br>");
// Question no 10
// import java.util.Arrays;

// public class Main {
//     public static void main(String[] args) {
//         int[] scores = {320, 230, 480, 120};
//         Arrays.sort(scores);
//         System.out.print("Ordered Scores of Students: ");
//         for (int score : scores) {
//             System.out.print(score + " ");
//         }
//     }
// }
// // Question no 11
// public class Main {
//         public static void main(String[] args) {
//             String[] cities = {"Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"};
//             String[] selectedCities = new String[2];
    
//             selectedCities[0] = cities[2];
//             selectedCities[1] = cities[3]; 

//             System.out.println("Cities list:");
//             for (String city : cities) {
//                 System.out.print(city + " ");
//             }
    
//             System.out.println("\n\nSelected cities list:");
//             for (String selectedCity : selectedCities) {
//                 System.out.print(selectedCity + " ");
//             }
//         }
//     }    
// Question no 12
// Question no 13
// import java.util.LinkedList;
// import java.util.Queue;

// public class Main {
//     public static void main(String[] args) {
//         Queue<String> fifoQueue = new LinkedList<>();

//         fifoQueue.add("Apple");
//         fifoQueue.add("Banana");
//         fifoQueue.add("Cherry");
//         fifoQueue.add("Date");
//         System.out.println("Values in the order they were stored (FIFO):");
//         while (!fifoQueue.isEmpty()) {
//             System.out.println(fifoQueue.poll()); 
//         }
//     }
// }
// Chapter 14-16 end
// Chapter 17-20 start
// Question no 01
// public class Main {
//         public static void main(String[] args) {
//             int[][] multiArray = new int[3][3];

//             multiArray[0][0] = 1;
//             multiArray[0][1] = 2;
//             multiArray[0][2] = 3;
    
//             multiArray[1][0] = 4;
//             multiArray[1][1] = 5;
//             multiArray[1][2] = 6;
    
//             multiArray[2][0] = 7;
//             multiArray[2][1] = 8;
//             multiArray[2][2] = 9;
//             System.out.println("Multidimensional Array:");
//             for (int i = 0; i < multiArray.length; i++) {
//                 for (int j = 0; j < multiArray[i].length; j++) {
//                     System.out.print(multiArray[i][j] + " ");
//                 }
//                 System.out.println();
//             }
//         }
//     }    
// Question no 02