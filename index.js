// const input = document.getElementById('button');
// input.addEventListener('click', () => alert('I was clicked'))

function addingEventListener() {
    const input = document.getElementById('button')
    function clickAlert(){
        alert('I was clicked!')
    }
 input.addEventListener('click',clickAlert)
}