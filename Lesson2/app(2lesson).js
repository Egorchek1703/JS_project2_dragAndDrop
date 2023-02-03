// Работаем с событиями для подвижного элемента
const item = document.querySelector('.item')
// console.log(item) // <div class="item" draggable="true">Перетащи меня</div>

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart (event){                     // когда мы запускаем функцию dragstart в нее передается объект, который называется event (событие)
//  console.log('drag start', event.target)     // через event.target мы можем получить сам объект и работать с ним
    event.target.classList.add('hold')
    setTimeout(()=>{
        event.target.classList.add('hide')
    }, 0)
}

function dragend (event){
//  console.log('drag end')
    event.target.classList.remove('hold','hide')
}

// Работаем с событиями для пустых ячеек в которые будет перемещаться подвижный div 
const placeholders = document.querySelectorAll('.placeholder')  // закинули в переменную placeholders узел из div-ов для установки item 

for (const elemUzla of placeholders){
    elemUzla.addEventListener('dragover', dragOverDo)
    elemUzla.addEventListener('dragenter', dragEnterDo)
    elemUzla.addEventListener('dragleave', dragLeaveDo)
    elemUzla.addEventListener('drop', dragDropDo)
}



function dragOverDo (event) {   // событие в которой задана эта функция, по умолчанию запрещает перемещать объект через append(), поэтому необходимо вызвать метод у 
    event.preventDefault()      // placeholder'а над которым мы drop-аем item метод preventDefault()
    event.target.classList.add('hovered')
    // console.log('drag over')
}
function dragEnterDo (event) {
    console.log('drag enter')
}
function dragLeaveDo (event) {
    console.log('drag leave')
    event.target.classList.remove('hovered')
}
function dragDropDo (event) {
    event.target.classList.remove('hovered')    // т.к. мы не при дропе мы не покидаем область (не вызывается функция dragLeaveDo) остается выделение от dragOverDo (class='hovered')
    event.target.append(item)                   // поэтому его необходимо убрать 
    console.log('drag drop')
}