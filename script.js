document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از ارسال پیش‌فرض

    // گرفتن اطلاعات از فرم
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var hobbies = document.getElementById('hobbies').value;
    var eyeColor = document.getElementById('eyeColor').value;
    var status = document.getElementById('status').value;

    // نمایش اطلاعات وارد شده
    document.getElementById('result').style.display = 'block';
    document.getElementById('greeting').textContent = 'Vielen Dank, ' + name + '!';
    document.getElementById('resultName').textContent = 'Name: ' + name;
    document.getElementById('resultAge').textContent = 'Alter: ' + age;
    document.getElementById('resultPhone').textContent = 'Telefonnummer: ' + phone;
    document.getElementById('resultHobbies').textContent = 'Hobbys: ' + hobbies;
    document.getElementById('resultEyeColor').textContent = 'Augenfarbe: ' + eyeColor;
    document.getElementById('resultStatus').textContent = 'Familienstand: ' + status;

    // فرم ارسال می‌شود
    event.target.submit();
});