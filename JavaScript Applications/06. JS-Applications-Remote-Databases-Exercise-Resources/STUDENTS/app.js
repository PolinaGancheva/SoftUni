import {get} from './requester.js';

const html ={
    'tbody':() => document.querySelector("#results > tbody"),

}
async function load(){
    const students = await get('appdata', 'students');
    students.sort((a,b) => a.id - b.id);
    students.forEach(student => {
        const tr = document.createElement('tr');
        const idTd = document.createElement('td');
        const firstNameTd = document.createElement('td');
        const lastNameTd = document.createElement('td');
        const facNumbTd = document.createElement('td');
        const gradeTd = document.createElement('td');

        idTd.textContent = student.id;
        firstNameTd.textContent = student.firstName;
        lastNameTd.textContent = student.lastName;
        facNumbTd.textContent = student.facultyNumber;
        gradeTd.textContent = student.grade;
        tr.append(idTd, firstNameTd, lastNameTd, facNumbTd, gradeTd);
        html.tbody().appendChild(tr);
    });
}
load();