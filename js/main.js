
/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
 *
 *
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * Добавьте внизу цифры с текущим активным изображением.
 *
 * @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */


// var carousel = document.getElementsByClassName('carousel');
// var carousel = document.querySelectorAll('ul > li');
var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];
var main = document.getElementsByTagName('main')[0];
var div = document.createElement('div');
var index =0;
var current=0;
var lis = document.getElementsByTagName('li');
var img=document.images;

div.innerHTML = `<h1>img${img[current].alt}</h1>`;
main.style.overflow = 'visible';
main.append(div);


right.onclick = function() {
        index = img[current].alt - 1;  // 1, 2, 3   // index=1 ==> img[0].alt = 1
        if(index<lis.length-1) {
            lis[index+1].style.display = '';  //   lis[1].style.display = ''
            current++;
        }
        if(index>=lis.length-1) {
            for(let i=1; i<lis.length; i++) {
                lis[i].style.display = 'none';
            }
            lis[0].style.display = '';
            index=0;
            current=0;
        }
        div.innerHTML = `<h1> img${img[current].alt}</h1>`;       
}

left.onclick = function() {
        index = img[current].alt-1;
        if (index>0) {
        lis[index-1].style.display = '';
        lis[index].style.display = 'none';
        current--;    // 0+1
        }
        if(index<=0) {
            for(let i=0; i<lis.length-1; i++) {
                lis[i].style.display = 'none';
            }
            lis[lis.length-1].style.display = '';
            index=lis.length-1;
            current=lis.length-1;
        } 
        div.innerHTML = `<h1>img${img[current].alt}</h1>`;   
}







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
        var style = document.getElementsByTagName('style')[0];
        // style.innerHTML = `<style>{${styles}</style>`
        var qwerty = '';
        for (var key in styles) {
            console.log(styles[key]);
            qwerty += `${key}:${styles[key]};`;
            console.log(qwerty);
        }
        style.innerHTML = `${elem} {${qwerty}}`;
    }
}

// var someStyles = new Styles('MyStyles');
// someStyles.topStyles('span', {width:'10px', backgroundColor: 'red'});
// someStyles.getUrl2();









