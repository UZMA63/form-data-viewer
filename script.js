const getformbtn = document.getElementById("btn1");
getformbtn.onclick = function(){
    document.querySelector(".box").style.display = "flex";
}
const removeform = document.getElementById("cross1");
removeform.onclick = function(){
    document.querySelector(".box").style.display = "none";
}
const gettablebtn = document.getElementById("btn2");
gettablebtn.onclick = function(){
    document.querySelector("#tbl").style.display = "flex";
}

function add(){
    
   
    const table = document.getElementById('table1');
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Pasword = document.getElementById('Password').value;
    if(Name !== '' && Email !== '' && Pasword !== '')
        {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    const td1 = tr.appendChild(document.createElement('td'));
    const td2 = tr.appendChild(document.createElement('td'));
    const td3 = tr.appendChild(document.createElement('td'));
    const td4 = tr.appendChild(document.createElement('td'));
    td1.innerHTML = Name;
    td2.innerHTML = Email;
    td3.innerHTML = Pasword;
    //edit button
    const editbutton = document.createElement('button');
    editbutton.innerHTML = 'Edit';
    editbutton.onclick = function(){
        document.getElementById('name').value = td1.innerHTML;  //data table se form me aa gya
        document.getElementById('email').value = td2.innerHTML;
        document.getElementById('Password').value = td3.innerHTML;
        document.getElementById('gt_form').scrollIntoView({behavior:"smooth"});
        const submitbtn = document.getElementById('submit');
        submitbtn.onclick = function(){
            if(document.getElementById('name').value !== '' && document.getElementById('email').value !== '' && document.getElementById('Password').value !== ''){
            td1.innerHTML = document.getElementById('name').value;
            td2.innerHTML =  document.getElementById('email').value;
            td3.innerHTML =  document.getElementById('Password').value;
            document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('Password').value = '';
            }
            else{
                alert("Please enter something!");
            } //original add function restore ho rha hai
            submitbtn.onclick = add;
        };
    };
    //delete button
    const deletebutton = document.createElement('button');
    deletebutton.innerHTML = 'Delete';
    deletebutton.onclick = function(){
        table.removeChild(tr);
    };
    td4.appendChild(editbutton);
    td4.appendChild(deletebutton);
    //reset the the input field
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('Password').value = '';
    }
    else{
        alert('Enter something!');

    }
    
};