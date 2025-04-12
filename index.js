document.addEventListener("DOMContentLoaded", () => {
    createBox();
    
})

function numPerSide(){
    let squaresPerSide = prompt('Create a square grid with size length of?');
    createBox(squaresPerSide)
}

function createBox(numPerSide = 16){    
    resetPage();
    const containerDiv = document.querySelector(".container");
    for(let j=0; j<numPerSide; j++){
        const row = document.createElement('div');
        containerDiv.appendChild(row);
        row.classList.add('row')
        for (let i = 0; i<numPerSide; i++) {
            const newDiv = document.createElement('div')
            row.appendChild(newDiv);
            newDiv.append(`${i+1}`)
            newDiv.classList.add('square')
        }
    }
}

function resetPage(){
    const containerDiv = document.querySelector(".container");
    containerDiv.remove();
    let container = document.createElement('div');
    const body = document.querySelector('Body');
    body.appendChild(container);
    container.classList.add('container')

}