// add an event listener to the button
document
    .getElementById('addButton')
    .addEventListener('click', handleAddButtonClick);

// define function declared in the the event listener
function handleAddButtonClick(){
    let studentName = document.getElementById('sName').value;
    if(studentName.length === 0){
        window.alert("Name field can not be empty.");
    } else{ 
        let age = document.getElementById('age').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;

        let table = document.getElementById('studentData');

        let htmlElement = `<tr id="${phone}"><td>${studentName}</td><td>${age}</td>
                <td>${phone}</td><td>${address}</td><td><button class="deleteRow">Delete</button></td></tr>`;
        table.insertAdjacentHTML("beforeend", htmlElement);
        clearAllFields();
    }  
}

function clearAllFields(){
    document.getElementById('sName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value= '';
    document.getElementById('address').value = '';
}

// adding an event listener in the elements inside student data table which has an id of studentData.
var elementsInStudentData = document.querySelector('#studentData');
elementsInStudentData.addEventListener('click', removeRow);

function removeRow(e){
    if(e.target.className === 'deleteRow'){
        var row = e.target.parentElement.parentElement;
        e.target.parentElement.parentElement.parentElement.remove(row);
    }
}
