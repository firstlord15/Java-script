const obj = {
    name: "Ratmir",
    surname: "Ashimov",
    stack:["Python", "JavaScript", "React", "Bootstrap"]
}

// const json = "{'name':'Ratmir', 'surname':'Ashimov', 'stack':['Python', 'JavaScript', 'React', 'Bootstrap']}" // [1]

// JSON - это то что в ковычках[1], она передает информацию от пользователя к серверу, пишется так как указано выше.

console.log(JSON.stringify(obj)); // можно преоброзовать 'obj', в формат JSON

const json = JSON.stringify(obj);
console.log(JSON.parse(json)); // этот способ преобразования с JSOn формата, в объект или переменную