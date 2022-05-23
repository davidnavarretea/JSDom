const countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
const select = document.querySelector('#mySelect');
for(let i = 0; i < countries.length; i++){
    let country = countries[i];
    let option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
}
select.addEventListener('change', e => {
    alert(e.target.value);
})