const item = document.querySelector('.item')
item.addEventListener('dragstart', forDragStart)
item.addEventListener('dragend', forDragEnd)

function forDragStart (event) {
    event.target.classList.add('carry') 
    setTimeout(() => {
        event.target.classList.add('hidden')   
    }, 0);
}
function forDragEnd (event) {
    event.target.classList.remove('hidden', 'carry')
}

//

const places = document.querySelectorAll('.placeForChoise')
for (const elementFromPlaces of places){
    elementFromPlaces.addEventListener('dragover', dragOver)
    elementFromPlaces.addEventListener('dragenter', dragEnter)
    elementFromPlaces.addEventListener('dragleave', dragLeave)
    elementFromPlaces.addEventListener('drop', dragDrop)
}
function dragOver (event) {
    event.target.classList.add('overPlace')
    event.preventDefault()
}
function dragEnter (event) {
    
}
function dragLeave (event) {
    event.target.classList.remove('overPlace')
}
function dragDrop (event) {
    event.target.append(item)
    event.target.classList.remove('overPlace')
}