const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "AntonSecond",
    course: 2,
    subjects: {
      statistics: [4, 5, 60, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 50],
      cosmology: [5, 5, 5, 5],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  }
];

//   /*1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
//   Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл*/
function getSubjects(numberStudent) {
  const findedStudent = students.find(
    (student) => students[numberStudent] == student
  );
  let words = Object.keys(students[numberStudent].subjects);
  return words.map(
    (subject) =>
      subject.charAt(0).toUpperCase() +
      subject.substr(1).replace("_", " ").split(words)
  );
}
console.log("Task№1:", getSubjects(0));
//   /*2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
//   Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)*/
function getAverageMark(numberStudent2) {
  const student = students[numberStudent2];
  let sum = 0;
  for (const subject in student.subjects) {
    sum += student.subjects[subject].reduce((acc, mark) => acc + mark);
  }
  const marks = Object.values(student.subjects).flat();
  return (sum / marks.length).toFixed(2);
}

console.log("Task№2:", getAverageMark(1));
//   /*3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту
//   (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.*/
function getStudentInfo(numberStudent3) {
  let totalInf = Object.assign({}, students[numberStudent3]);
  totalInf.averageMark = getAverageMark(numberStudent3);
  delete totalInf.subjects;
  return totalInf;
}
console.log("Task№3:", getStudentInfo(0));
//   /*4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку..*/
function getStudentsNames(students) {
  const namesAllStudents = students
    .map((nameOfStudent) => nameOfStudent.name)
    .sort();
  return namesAllStudents;
}
console.log("Task№4:", getStudentsNames(students));
/*5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки..*/
// function getBestStudent(students) {
//   let newStudents = [];
//   let max;
//   for (let i = 1; i < students.length + 1; i++) {
//     marks.push(getAverageMark(students(i)));
//     if (
//       getStudentInfo(students(i)).averageMark >=
//       getStudentInfo(students(i-1)).averageMark
//     ) {
//       max = getStudentInfo(students(i)).name;
//     }
//   }
//   return max;
// }
// console.log("Task№5:", getBestStudent());

// ----------------Variant №2----------------

function getBestStudent(students) {
  const infAllStudents = [{ ...getStudentInfo(0) }, { ...getStudentInfo(1) }, { ...getStudentInfo(2) }];
  let bestMark = infAllStudents
    .find((person) => person.averageMark > 4);
  return bestMark.name;
}
console.log("Task№5:", getBestStudent(students));

// console.log(getAverageMark(0), getAverageMark(1), getAverageMark(2));
//   /*6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень..*/
function calculateWordLetters(name) {
  name = name.split("");
  sum = 0;
  totalSum = name.map((begin, letter) => {
    if (name[letter] === name[letter] + 1) {
      return sum + 1;
    }
  });
  return sum;
}
const variableWord = calculateWordLetters("тест");
console.log("Task№6:", variableWord);
console.log("--------------------------");

// let a = [1,2,3,4,5];
// let b = a;
// b = [6,7,8,9,10];
// console.log("a - ", a);
// console.log("b - ", b);
// const a = {
//   a: 1,
//   b: 2,
//   c:3.
// };
// let b = a;
// b = {
//   a: 10,
//   b: 20,
//   c:30,
// };
// console.log("a - ", a);
// console.log("b - ", b);

/*-------------------------------------------------------------------*/

// const people = [
//   { name: "Peter", age: 25, budget: 40000 },
//   { name: "Helen", age: 17, budget: 3400 },
//   { name: "Ihor", age: 49, budget: 50000 },
//   { name: "Michael", age: 15, budget: 1800 },
//   { name: "Vasilisa", age: 24, budget: 25000 },
//   { name: "Victoria", age: 38, budget: 2300 },
// ];

// //------ForEach------

// people.forEach(person => console.log(person));

// //------Map------

// const newPeople = people.map((person) => `${person.name} - '${person.age}' `);
// console.log(newPeople);

// //------Filter------

// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// //------Reduce------

// const amount = people.reduce((total, person) => {
//   return (total += person.budget);
// }, 0);
// console.log(`Total budget is: ${amount}`);

// //------Find------

// const peter = people.find((person) => person.name == "Peter");
// console.log(peter);

// //------FindIndex------

// const ihorIndex = people.findIndex((person) => person.name === "Ihor");
// console.log(`Index - ${ihorIndex}`);

/*---------------------------------------------*/

// const newPeople = people
//   .filter((person) => person.budget > 3000)
//   .map((person) => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     };
//   });
// console.log(newPeople);

/*---------------------------------------------*/

const getBestStudentVolodia = (students) => {
  const studentMark = [];
  students.forEach((student, index) => studentMark.push({ index, mark: getAverageMark(index) }))
  studentMark.sort((student1, student2) => student2.mark - student1.mark);
  const higestMarkIndex = studentMark[0].index;
  return students[higestMarkIndex].name
}

console.log(getBestStudentVolodia(students))

function sayHi() {
  
}
