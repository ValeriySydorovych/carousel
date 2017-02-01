/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*<style>{}</style>
* */


class Styles {   
    constructor(css) {
        // super();  
        let counter = 0;
        this.css = css;
        this.add = function() {
            console.log (++counter);
        } 
    }
    topStyles(elem, styles) {
        console.log(this.css);
        console.log(elem);
        var head = document.getElementsByTagName('head')[0];
        // var style = document.getElementsByTagName('style')[0];
        // style.innerHTML = `<style>{${styles}</style>`
        var qwerty = '';
        for (var key in styles) {
            console.log(styles[key]);
            qwerty += `${key}:${styles[key]};`;
            console.log(qwerty);
        }
        // style.innerHTML = `${elem} {${qwerty}}`;
        head.innerHTML = `<style>${elem} {${qwerty}}</style>`;
    }
}

var someStyles = new Styles('MyStyles');
someStyles.topStyles('span', {width:'10px', backgroundColor: 'red'});
