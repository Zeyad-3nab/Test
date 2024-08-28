class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    static compareScores(score1, score2) {
        if (score1 > score2) {
            return "Score 1 is higher.";
        } else if (score1 < score2) {
            return "Score 2 is higher.";
        } else {
            return "Both scores are equal.";
        }
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}


const teacher = new Teacher('John Doe', 40, 'Math');
const student = new Student('Jane Doe', 20, 'A');

console.log(teacher.introduce()); // Hi, my name is John Doe and I am 40 years old.
console.log(student.introduce()); // Hi, my name is Jane Doe and I am 20 years old.
console.log(Teacher.compareScores(85, 90)); // Score 2 is higher.