
// var PhoneBook = {
//     tr: document.createElement('tr'),
//     users: [
//     { name: 'Иван', lastName: 'Петров', email: 'IvanPetrov@ec.ua' }, 
//     { name: 'Сергей', lastName: 'Сергеев', email: 'SergeiSergeev@ec.ua' }, 
//     { name: 'Иван', lastName: 'Иванов', email: 'IvanIvanov@ec.ua' },
//     { name: 'Александр', lastName: 'Александров', email: 'AlexAlex@ec.ua' },
//     { name: 'Алекс', lastName: 'Смирнов', email: 'AlexSmirnov@ec.ua' },
//     { name: 'Сергей', lastName: 'Волков', email: 'VolkovSergey@ec.ua' },
//     { name: 'Мария', lastName: 'Шарапова', email: 'MariyaSharapova@ec.ua' },
//     { name: 'Александр', lastName: 'Винник', email: 'AlexVinnik@ec.ua' },
//     { name: 'Дарий', lastName: 'Смирнов', email: 'DariySmirnov@ec.ua' },
//     { name: 'Елена', lastName: 'Лещенко', email: 'ElenaLeshenko@ec.ua' },
//     { name: 'Ольга', lastName: 'Новикова', email: 'OlgaNovikova@ec.ua' },
//     { name: 'Наталья', lastName: 'Яма', email: 'ShemyakinaN@ec.ua' },
//     { name: 'Влад', lastName: 'Яма', email: 'VladYama@ec.ua' },
//     { name: 'Кира', lastName: 'Воробьева', email: 'Kira1990@ec.ua' },
//     { name: 'Виктор', lastName: 'Кривенко', email: 'ViktorKriv@ec.ua' }
    
//   ],
//     render() {
//         const div = document.createElement("div");
//         const table = document.createElement("TABLE");
//         table.className ='table table-hover contacts';
//         const thead = document.createElement("THEAD"); 
//         var tr = document.createElement("TR"); 
//         var th_d = null; 
//         const th_dText = null; 
//         var t = 1;
              
//         for (var i = 0; i < 3; i++) {
//             th_d = document.createElement("TH");
//             th_d.textContent = 'Name';
//             if (t == 2) th_d.textContent = 'Last Name';
//                 if (t == 3) th_d.textContent = 'Email';
//             console.log(th_d);   
//             tr.appendChild(th_d);
//             t++;
//         } 
//         thead.appendChild(tr); 
//         table.appendChild(thead); 
//         const tBody = document.createElement("TBODY"); 

//         for (let i = 0; i < this.users.length; i++) {
//             t = 1;
//             tr = document.createElement("TR"); 
//             user = this.users[i];

//             for (var j = 0; j < 3; j++) {
//                 th_d = document.createElement("TD"); 
//                 th_d.textContent = user.name;

//                 if (t == 2) th_d.textContent = user.lastName;
//                     if (t == 3) th_d.textContent = user.email;
//                 tr.appendChild(th_d);
//                 t++; 
//                 } 
//             tBody.appendChild(tr);
//         } 
//         const elemContainer = document.getElementsByClassName('container');
//         console.log(elemContainer);
//         const lastContainer = elemContainer.lastChild;
//         console.log(lastContainer);
//         // const main = document.getElementsByTagName('main');
//         // console.log(main);

//         table.appendChild(tBody);
//         elemContainer[1].append(table);
//     }

// }
// PhoneBook.render();




var PhoneBook = {
    tr: document.createElement('tr'),
    users: [
    { name: 'Иван', lastName: 'Петров', email: 'IvanPetrov@ec.ua' }, 
    { name: 'Сергей', lastName: 'Сергеев', email: 'SergeiSergeev@ec.ua' }, 
    { name: 'Иван', lastName: 'Иванов', email: 'IvanIvanov@ec.ua' },
    { name: 'Александр', lastName: 'Александров', email: 'AlexAlex@ec.ua' },
    { name: 'Алекс', lastName: 'Смирнов', email: 'AlexSmirnov@ec.ua' },
    { name: 'Сергей', lastName: 'Волков', email: 'VolkovSergey@ec.ua' },
    { name: 'Мария', lastName: 'Шарапова', email: 'MariyaSharapova@ec.ua' },
    { name: 'Александр', lastName: 'Винник', email: 'AlexVinnik@ec.ua' },
    { name: 'Дарий', lastName: 'Смирнов', email: 'DariySmirnov@ec.ua' },
    { name: 'Елена', lastName: 'Лещенко', email: 'ElenaLeshenko@ec.ua' },
    { name: 'Ольга', lastName: 'Новикова', email: 'OlgaNovikova@ec.ua' },
    { name: 'Наталья', lastName: 'Яма', email: 'ShemyakinaN@ec.ua' },
    { name: 'Влад', lastName: 'Яма', email: 'VladYama@ec.ua' },
    { name: 'Кира', lastName: 'Воробьева', email: 'Kira1990@ec.ua' },
    { name: 'Виктор', lastName: 'Кривенко', email: 'ViktorKriv@ec.ua' }
    
  ],
  row(user) {
        let {name, lastName, email} = user;
        return `
        <tr>
            <td>${name}</td>
            <td>${lastName}</td>
            <td>${email}</td>
        </tr>`
    },
    render() {
        const div = document.createElement("div");
        const table = document.createElement("TABLE");
        table.className ='table table-hover contacts';
        const thead = document.createElement("THEAD"); 
        var tr = document.createElement("TR"); 
        const tBody = document.createElement("TBODY");   
        tr.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>`;
        thead.appendChild(tr);
        table.appendChild(thead); 
		
        for (var i = 0; i < this.users.length; i++) {
            tr = document.createElement("TR"); 
            var user = this.users[i];
            tr.innerHTML = `${this.row(user)}`;  // row(user) - строка tr
            tBody.appendChild(tr);
        }
        const elemContainer = document.getElementsByClassName('container');
        table.appendChild(tBody);
        elemContainer[1].append(table);
    }
}
PhoneBook.render();

