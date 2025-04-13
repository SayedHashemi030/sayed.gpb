document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از ارسال پیش‌فرض

    // گرفتن اطلاعات از فرم
    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var status = document.getElementById('status').value;
    var nationality = document.getElementById('nationality').value;

    // نمایش اطلاعات وارد شده
    document.getElementById('result').style.display = 'block';
    document.getElementById('greeting').textContent = 'Vielen Dank, ' + name + '!';
    document.getElementById('resultName').textContent = 'Vollständiger Name: ' + name;
    document.getElementById('resultCity').textContent = 'Stadt: ' + city;
    document.getElementById('resultPhone').textContent = 'Telefonnummer: ' + phone;
    document.getElementById('resultAddress').textContent = 'Adresse: ' + address;
    document.getElementById('resultDob').textContent = 'Geburtsdatum: ' + dob;
    document.getElementById('resultGender').textContent = 'Geschlecht: ' + gender;
    document.getElementById('resultStatus').textContent = 'Familienstand: ' + status;
    document.getElementById('resultNationality').textContent = 'Nationalität: ' + nationality;

    // ارسال فرم
    event.target.submit();
});