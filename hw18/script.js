//эмблемки ролей
const rolesLogo = {
    Student: "https://cdn-icons-png.flaticon.com/512/1424/1424424.png",
    Admin: "https://cdn-icons-png.flaticon.com/512/1424/1424453.png",
    Lector: "https://cdn-icons-png.flaticon.com/512/1424/1424450.png",
};

//варианты личных аватаров
const userAvatars = [
    "https://cdn-icons-png.flaticon.com/512/2922/2922522.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922661.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922688.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922565.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922719.png",
];

//типа пользователь выбрал аватарку
//этот метод заменяется на метод позволяющий загружать свою аватаркуб, в классе User меняем одну строчку и готово
//проблемой несоответствия аватарок по гендеру пренебрег
function getRandomUserAvatar(){
    let num = Math.floor(Math.random() * userAvatars.length);
    return userAvatars[num];
}

//перевод оценки в словесный формат
function getGradeFromMark(mark){
    if (mark >= 20 && mark < 55) {
        return "Satisfactory";
    } else if (mark >= 55 && mark < 85) {
        return "Good";
    } else if (mark >= 85 && mark < 99) {
        return "Good";
    } else if (mark === 100) {
        return "Excellent";
    } else {
        return "Some trouble with mark!!!";
    }
}

//захотелось сделать наследование именно для курсов, чтоб масштабировать и добавлять новые варианты было проще
//так же появилась возможность одному пользователю иметь разные роли в разных курсах и каждый курс
//отрисуется соответственно роли пользователя конкретно в нем
//старался применить принципы SOLID
class Course {
    constructor(name, mark){
        this.name = name;
        this.mark = mark;
        this.grade = getGradeFromMark(mark);
    }

    //типа заглушка, отрисовывает курс не относящийся ни к кому, просто который допустим планируется
    courseToHTML(){
        return `<p class="user__courses--course student">${this.name} </p>`;
    }
}

class StudentCourse extends Course {
    constructor(name, mark){
        super(name, mark);
    }

    courseToHTML(){
        return `<p class="user__courses--course student">
                     ${this.name} 
                     <span class="${this.grade.toLowerCase()}">${this.grade}</span>
                </p>`;
    }
}

class AdminCourse extends Course {
    constructor(name, mark, lector){
        super(name, mark);
        this.lector = lector;
    }

    courseToHTML(){
        return `<div class="user__courses--course admin">
                    <p>Title: <b>${this.name}</b></p>
                    <p>Admin's score: <span class="${this.grade.toLowerCase()}">${this.grade}</span></p>
                    <p>Lector: <b>${this.lector}</b></p>
                </div>`;
    }
}

class LectorCourse extends Course {
    constructor(name, mark, averageStudMark){
        super(name, mark);
        this.averageStudMark = averageStudMark;
        this.averageStudGrade = getGradeFromMark(averageStudMark);
    }

    courseToHTML(){
        return `<div class="user__courses--course lector">
                    <p>Title: <b>${this.name}</b></p>
                    <p>Lector's score: <span class="${this.grade.toLowerCase()}">${this.grade}</span></p>
                    <p>Average student's score: <span class="${this.averageStudGrade.toLowerCase()}">${this.averageStudGrade}</span></p>
                </div>`;
    }

}

//сначала тоже хотел сделать наследование, но не стал, разница в основном в отрисовке курсов, а она возложена на сами курсы
//слегка напрягает наличие role в конструкторе, ошибка ввода может все сломать, но в реальности сделал бы выбор
//роли в каком нибудь контекстном меню из готовых вариантов, так что норм
//понимаю, что такая структура не позволяет вносить изменения в отдельные типы пользователей, но пусть пока что будет так
class User {
    constructor(name, age, role){
        this.name = name;
        this.age = age;
        this.role = role;
        this.avatar = getRandomUserAvatar();
        this.courses = [];
    }

    addCourse(course){
        this.courses.push(course);
    }

    allCorsesToHTML(){
        let coursesAsString = this.courses.map(
            function (item){
                return item.courseToHTML();
            },
        ).join("");

        return `<div class="user__courses ${this.role.toLowerCase()}--info">   
        ${coursesAsString}   
        </div>`;
    }

    userAsHTML(){
        return `
            <div class="user">
                <div class="user__info">
                    <div class="user__info--data">
                        <img src="${this.avatar}" alt="${this.name}" height="50">
                        <div class="user__naming">
                            <p>Name: <b>${this.name}</b></p>
                            <p>Age: <b>${this.age}</b></p>
                        </div>
                    </div>
                    <div class="user__info--role ${this.role.toLowerCase()}">
                        <img src="${rolesLogo[this.role]}" alt="${this.role}" height="25">
                        <p>${this.role}</p>
                    </div>
                </div>
                ${this.allCorsesToHTML()}
            </div>
    `;
    }
}

class School {
    constructor(name){
        this.name = name;
        this.users = [];
    }

    addUsers(...usersToAdding){
        for (let user of usersToAdding) this.users.push(user);
    }

    getNumOfUsers(){
        return this.users.length;
    }

    allUsersToHTML(){
        let usersAsString = this.users.map(
            function (item){
                return item.userAsHTML();
            },
        ).join("");

        return `<div class="users">   
                     ${usersAsString}   
                </div>`;
    }

    renderAllUsers(){
        document.write(this.allUsersToHTML());
    }
}


const student1 = new User("Jack Smith", 23, "Student");
student1.addCourse(new StudentCourse("Front-end Pro", 20));
student1.addCourse(new StudentCourse("Java Enterprise", 100));

const student2 = new User("Amal Smith", 20, "Student");

const student3 = new User("Noah Smith", 40, "Student");
student3.addCourse(new StudentCourse("Front-end Pro", 50));

const student4 = new User("Charlie Smith", 18, "Student");
student4.addCourse(new StudentCourse("Front-end Pro", 75));
student4.addCourse(new StudentCourse("Java Enterprise", 23));

const admin = new User("Emily Smith", 30, "Admin");
admin.addCourse(new AdminCourse("Front-end Pro", 10, "Leo Smith"));
admin.addCourse(new AdminCourse("Java Enterprise", 50, "David Smith"));
admin.addCourse(new AdminCourse("QA", 75, "Emilie Smith"));

const lector = new User("Leo Smith", 25, "Lector");
lector.addCourse(new LectorCourse("Front-end Pro", 78, 79));
lector.addCourse(new LectorCourse("Java Enterprise", 85, 85));

const hillel = new School("Hillel");
hillel.addUsers(student1, student2, student3 , student4, admin, lector);

hillel.renderAllUsers();
console.log(hillel.getNumOfUsers());




