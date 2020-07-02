const namaRelawan = document.getElementById('namaRelawan');
const email = document.getElementById('email');
const telepon = document.getElementById('telepon');
const pilihan = document.getElementById('pilihan');
const kota = document.getElementById('kota');
const addBtn = document.getElementById('addBtn');

const database = firebase.database();
const db = firebase.firestore();
const usersRef = database.ref('relawan');

addBtn.addEventListener ('click', e => {
    e.preventDefault();
    usersRef.child(namaRelawan.value).set({
        nama_relawan: namaRelawan.value,
        email: email.value,
        telepon: telepon.value,
        pilihan: pilihan.value,
        kota: kota.value
    });
    alert('Data added successfully!');
});

updateBtn.addEventListener('click', e => {
    e.preventDefault();
    const newData = {
        email: email.value,
        telepon: telepon.value,
        pilihan: pilihan.value,
        kota: kota.value
    };
    usersRef.child(idP.value).update(newData);
    });

removeBtn.addEventListener ('click', e => {
    e.preventDefault();
    usersRef.child(namaRelawan.value).remove()
    .then(() => {
        console.log('user Deleted !');
    })
    .catch(error => {
        console.error(error);
    });
});