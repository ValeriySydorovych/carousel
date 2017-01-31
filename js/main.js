
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

// console.log(carousel);
var index =0;
var current=0;
var lis = document.getElementsByTagName('li');
var img=document.images;

right.onclick = function() {
    // var idImg=document.images["img"+current];
    // console.log(img.alt`="${current}"`);
       
        console.log(img[current].alt);  // 1, 2, 3   //img[current] == img[0], img[1]
        index = img[current].alt;  // 1, 2, 3   // index=1 ==> img[0].alt = 1
        lis[index].style.display = '';  //   lis[1].style.display = ''
        console.log(lis[index].style.display);
        console.log(lis[index]);

        current++;    // 0+1
        if(current == 2) {
            current=0;
            for(let i=0; i<lis.length; i++) {
                index=i;
                lis[i].style.display = 'none';
                lis[i].style.backgroundColor = 'red';
                console.log(lis[i]);
            }
        }
    
}



// right.onclick = function() {
//     console.log('Hello');
//     carousel[0].style.display = 'none';
//     carousel[1].style.display = '';
// }





