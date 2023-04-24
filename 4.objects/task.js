function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}
Student.prototype.addMarks = function(...marksToAdd) {
	if (this.hasOwnProperty('marks')) {
		this.marks.push(...marksToAdd);
	} else {
		console.log("Студент отчислен, добавление оценок невозможно.")
	}
}


Student.prototype.getAverage = function() {
	if (this.marks && this.marks.length > 0) {
		let sum = this.marks.reduce((acc, val) => acc + val);
		return sum / this.marks.length;
	} else {
		return 0;
	}
}
Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}
