/*
Istruzioni:
Creare un oggetto che descriva uno studente
con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti
gli studenti e stampare per ognuno nome e cognome.
Dare la possibilità all’utente attraverso
3 prompt di aggiungere un nuovo oggetto studente
inserendo nell’ordine: nome, cognome e età.
*/
$(function () {

  var esercizio = {
    repo : "js-oggetti-studenti",
    istruzioni: ["Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.", "Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", "Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età." ],
    augurio: "che la forza degli oggetti sia con voi 💪 "
  };
  console.log(esercizio);

  var student = {
    firstName: "Luca",
    lastName: "Bianchi",
    age: 35
  };

  for (var key in student) {
    console.log(key, student[key]);
  }

  var students = [
    {
      firstName: "Luca",
      lastName: "Bianchi",
      age: 35
    },
    {
      firstName: "Gianni",
      lastName: "Rossi",
      age: 49
    },
    {
      firstName: "Giulia",
      lastName: "Rizzi",
      age: 24
    }
  ];

  for (var key in students) {
    console.log(students[key].firstName, students[key].lastName);
  }

  var newStudent = {
    firstName: prompt("firstName"),
    lastName: prompt("lastName"),
    age: Number(prompt("age"))
  };

  students.push(newStudent);

  for (var key in students) {
    console.log(students[key].firstName, students[key].lastName);
  }

  for (var key in students) {
    console.log("Firstname:", students[key].firstName);
    console.log("Lastname:", students[key].lastName);
    console.log("Age:", students[key].age);
  }


});
