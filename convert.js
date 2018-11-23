const json = require('./debateAtten.json');
const fs = require('fs');

let fileContents = 'Student ID,Name,School,Email,Dates,AttendanceNum\n';


for (let person in json) {
	if (!json.hasOwnProperty(person))
		continue;

	let line = person + ',' + json[person].username + ',' + json[person].school + ',' + json[person].email + ',';

	let dates = json[person].dates;
	let datesString = '';
	for (let i = 0; i < dates.length; i++) {
		datesString += dates[i];

		if (i !== dates.length - 1) {
			datesString += ', ';
		}
	}

	line += datesString + ',' + json[person].attendanceNum;

	fileContents += line + '\n';
}

fs.writeFileSync('./out.csv', fileContents);
