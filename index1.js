
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

//  XML:

// <list>
//   <student>
//     <name lang="en">
//       <first>Ivan</first>
//       <second>Ivanov</second>
//     </name>
//     <age>35</age>
//     <prof>teacher</prof>
//   </student>
//   <student>
//     <name lang="ru">
//       <first>Петр</first>
//       <second>Петров</second>
//     </name>
//     <age>58</age>
//     <prof>driver</prof>
//   </student>
// </list>

const parser = new DOMParser();

const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

let student = xmlDOM.querySelectorAll('student');
let list = [];
let result = {}

student.forEach(item => {
  let studentDict = {
      name: `${item.querySelector('first').textContent} ${item.querySelector('second').textContent}`,
      age: `${item.querySelector('age').textContent}`,
      prof: `${item.querySelector('prof').textContent}`,
      lang: `${item.querySelector('name').getAttribute("lang")}`
  }

  list.push(studentDict)
});

result['list'] = list;

console.log(result);



// JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }