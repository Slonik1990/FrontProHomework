// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:
// 1) Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// 2) Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// 3) Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// 4) Вывести в html таблицу, которая состоит из ячеек с задачами в виде:


const amount = 100;
const monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
const tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];


const tableRows = monday.concat(tuesday)
    .map(
        function (task) {
            const taskCopy = task.slice();//доп переменная, чтобы не изменялись исходные массивы
            taskCopy[1] /= 60;
            return taskCopy;
        }
    ).filter(
        function (task) {
            return task[1] > 2;
        }
    )
    .map(
        function (task) {
            const taskCopy = task.slice();
            taskCopy.push(taskCopy[1] * amount);
            return taskCopy;
        }
    ).map(
        function (task) {
            return `<tr>
                <td>${task[0]}</td>
                <td>${task[1]} hours</td>
                <td>${task[2]}</td>
            </tr>`;
        }
    ).join("");

document.write(`
<table>
<thead>
    <th>Task name </th>
    <th>Taks duration, hours </th>
    <th>Task amount, $</th>
</thead>
<tbody>
${tableRows}
</tbody>
</table>
`)

document.write(``);
