const idP = document.getElementById('idP');
const namaProgram = document.getElementById('namaProgram');
const wilayah = document.getElementById('wilayah');
const deskripsi = document.getElementById('deskripsi');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const showBtn = document.getElementById('showBtn');


const database = firebase.database();
const db = firebase.firestore();
const usersRef = database.ref('users');


var tabelUser = document.getElementById('tabelMember');
var rowdashboard = 1;

usersRef.once('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
		var childKey = childSnapshot.key;
		var childData = childSnapshot.val();
		
		var row = tabelUser.insertRow(rowdashboard);
		// var idProgram = row.insertCell(0);
		var nama_program = row.insertCell(0);
		var wilayah= row.insertCell(1);
		var deskripsi = row.insertCell(2);
		
		// idProgram.appendChild(document.createTextNode (childData.idProgram));
		nama_program.appendChild(document.createTextNode (childData.nama_program));
		wilayah.appendChild(document.createTextNode (childData.wilayah));
		deskripsi.appendChild(document.createTextNode (childData.deskripsi));
		
		rowdashboard = rowdashboard + 1;
	})
	
})

addBtn.addEventListener ('click', e => {
    e.preventDefault();
    usersRef.child(idP.value).set({
        nama_program: namaProgram.value,
        wilayah: wilayah.value,
        deskripsi: deskripsi.value
       
    });
 alert('Program added successfully!');
});

updateBtn.addEventListener('click', e => {
    e.preventDefault();
    const newData = {
    nama_program: namaProgram.value,
    wilayah: wilayah.value,
    deskripsi: deskripsi.value
    };
    usersRef.child(idP.value).update(newData);
 alert('Program Update successfully!');
 });

removeBtn.addEventListener ('click', e => {
    e.preventDefault();
    usersRef.child(idP.value).remove()
    .then(() => {
        console.log('user Deleted!');
    })
    .catch(error => {
        console.error(error);
    });
});