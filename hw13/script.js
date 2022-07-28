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

const TRs = [];
monday.concat(tuesday)
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
    ).map(
        function (task) {
            const taskCopy = task.slice();
            taskCopy.push(taskCopy[1] * amount);
            return taskCopy;
        }
    ).forEach(
        function (task) {
            TRs.push(`
            <tr>
                <td>Task name: ${task[0]}</td>
                <td>Taks duration: ${task[1]} hours</td>
                <td>Task amount: $${task[2]}</td>
            </tr>`)
        }
    )
document.write(`   <table>
   ${TRs.join("")}
   </table>
`);
console.log(monday)
console.log(tuesday)