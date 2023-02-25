const form = document.getElementById('form');
const name = document.querySelectorAll('#lname');
const email = document.querySelectorAll('#email');
const campos = document.querySelectorAll('.required');

form.addEventListener('submit' , (event) => {
 event.preventDefault();
 nameValidate()
 emailValidate() 

});
function setError(index){
    campos[index].style.border = '2px solid #e63636';
}
function removeError(index){
    campos[index].style.border = ''
}
function nameValidate(){
    if(campos[0].value.length < 3){
       setError(0);
    }else{
        removeError(0);
    }
}

function emailValidate(){
    if(campos[1].value.length < 9){
        setError(1);
    }else{
        removeError(1);
    }
}