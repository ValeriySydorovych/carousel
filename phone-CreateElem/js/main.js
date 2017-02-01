/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Первый макет.
https://github.com/ilyaphilin/referenceBook/blob/dev/index.html
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/
// document.querySelector('form[name="search"]');



// Решил сначало делать объектом(так привычней), а потом переделать на класс - на класс переделать не успел))
//  Плюс ко всему непонятно почему SCRIPT  Bootstrap в BODY стоит ВСЕГДА выше моего кода (создал span c id
// в index.html выше script и туда засунул весь код - и всё равно ниже ), 
// поэтому, как мне кажется и проблема с иконками.

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
  icon: [
            {sp1: 'glyphicon glyphicon-search', sp2: 'tab-text', href: 'index.html', text: 'Contacts'},
            {sp1: 'glyphicon glyphicon-th', sp2: 'tab-text', href: 'keypad.html', text: 'Keypad'},
            {sp1: 'glyphicon glyphicon-pencil', sp2: 'tab-text', href: 'edit-contact.html', text: 'Edit contact'},
            {sp1: 'glyphicon glyphicon-user', sp2: 'tab-text', href: 'user.html', text: 'User'},
            {sp1: 'glyphicon glyphicon-plus', sp2: 'tab-text', href: 'add-user.html', text: 'Add user'}
        ],
    headerMethod() {
        const header = document.createElement("header");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        h2.textContent = "Contacts";
        div.appendChild(h2);
        header.className = 'header';
        div.className = 'container top-radius';
        header.appendChild(div);
        return header;
    },
    formMethod() {
        const form = document.createElement("form");
        form.className = 'form-inline search-form';
        const div = document.createElement("div");
        div.className = 'form-group';
        const label = document.createElement("label");
        label.className = 'sr-only';
        label.textContent = 'Search';
        const input = document.createElement("input");
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Search');
        input.className = 'form-control';
        input.id = 'search';
        div.append(label, input);
        form.append(div);
        return form;
    },
    footerMethod() {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        const div = document.createElement('div');
        div.className = 'container bottom-radius';
        const nav = document.createElement('nav');
        nav.className = 'main-nav';
        var a = document.createElement('a');

        for (let k=0; k<this.icon.length; k++) {
            a = document.createElement('a');
            a.className = 'tab active';
            var span1 = document.createElement('span');
            var span2 = document.createElement('span');
            span1.className = this.icon[k].sp1;
            span2.className = this.icon[k].sp2;
            span2.textContent = this.icon[k].text;
            a.append(span1, span2);
            // console.log(a);
            nav.append(a);
            console.log(nav);
        }
        // console.log(nav);
        div.append(nav);
        footer.append(div);
        return footer;
    },
    
    render() {
        const header = this.headerMethod();
        // main
        const main = document.createElement("main");
        const div = document.createElement("div");
        div.className = 'container';
        const form = this.formMethod();
        const table = document.createElement("TABLE");
        table.className ='table table-hover contacts';
        const thead = document.createElement("THEAD"); 
        var tr = document.createElement("TR"); 
        var th_d = null; 
        const th_dText = null; 
        var t = 1;
                // console.log(this.users.length); 
        for (var i = 0; i < 3; i++) {
            th_d = document.createElement("TH");
            th_d.textContent = 'Name';
            if (t == 2) th_d.textContent = 'Last Name';
                if (t == 3) th_d.textContent = 'Email';
            console.log(th_d);   
            tr.appendChild(th_d);
            t++;
        } 
        thead.appendChild(tr); 
        table.appendChild(thead); 
        const tBody = document.createElement("TBODY"); 
// debugger;
        for (let i = 0; i < this.users.length; i++) {
            t = 1;
            tr = document.createElement("TR"); 
            user = this.users[i];

            for (var j = 0; j < 3; j++) {
                th_d = document.createElement("TD"); 
                th_d.textContent = user.name;

                if (t == 2) th_d.textContent = user.lastName;
                    if (t == 3) th_d.textContent = user.email;
                tr.appendChild(th_d);
                t++; 
                } 
            tBody.appendChild(tr);
        } 
        // const first = document.getElementById('first');
        const footer = this.footerMethod();

        table.appendChild(tBody);
        div.append(form, table);
        main.append(div);
        document.body.append(header, main, footer);
        // first.append(header, main, footer); 
        // document.body.append(first); 
          
    }

}
PhoneBook.render();






/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"

*/

const solution = (str) => {
    const abc = 'qazwsxedcrfvtgbyhnujmikolp'.split('').sort((a,b)=>a-b).join('');
    return abc == str.split('').sort((a,b)=>a-b).join('');
}

// const solution = (str) => {
//     const sortStr = newStr => newStr.split('').sort((a,b)=>a-b).join('');
//     const abc = 'qazwsxedcrfvtgbyhnujmikolp';
//     return sortStr(abc) == sortStr(str);
// }

solution("bqwertyb"); // false
solution("qwertyuioplkjhgfdsazxcvbnm") // true
// solution("wyyga") // false
// solution("qwertyuioplkjhgfdsazxcvbnm") // true
// solution("ejuxggfsts") // false
// solution("qpwoeirutyalskdjfhgmznxbcv") // true
// solution("0123456789abcdefghijklmnop") // false
// function solution(str) {
//     // console.log(str);
//     // let etalon = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
//     let etalon = ['q','w','e','r','t','y'];
//     let newArr = str.split('');
//     let counter;
//     for (let i=0; i<newArr.length; i++) {
//         counter = 0;
//         let a = newArr[i];
//         for (let j=0; j<etalon.length; j++) {
//             let b = etalon[j];
//             if (a == b) {
//               counter++;
//               break;
//             }
//         }
//         if(!counter) {
//               console.log(false);
//               break;
//             } else console.log(true);
//     }
//     // console.log(true);
// }
