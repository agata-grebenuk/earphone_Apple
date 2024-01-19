const chooseColor = document.querySelectorAll('.choose-color-btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    


    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active')
    })
    target.classList.add('choose__color-btn--active')
    contentItem.forEach(function(item){
        item.classList.remove('content-item__active')
    })
    contentItem.forEach(function(item){
        if(item.classList.contains(button)){
            item.classList.add('content-item__active')
        }
    })
    

}

