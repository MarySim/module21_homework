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
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNodes = listNode.querySelectorAll("student");

const result = { list: [] };

studentNodes.forEach((studentNode) => {
  const nameNode = studentNode.querySelector("name");
  const first = nameNode.querySelector("first").textContent;
  const second = nameNode.querySelector("second").textContent;
  const age = studentNode.querySelector("age").textContent;
  const prof = studentNode.querySelector("prof").textContent;
  const lang = nameNode.getAttribute("lang");

  result.list.push({
    name: first + ' ' + second,
    age: Number(age),
    prof: prof,
    lang: lang
  });
});

console.log('result', result);