document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

        // گرفتن اطلاعات از فرم
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const status = document.getElementById('status').value;
        const nationality = document.getElementById('nationality').value;
        const message = document.getElementById('message').value;

        // نمایش اطلاعات وارد شده
        document.getElementById('result').style.display = 'block';
        document.getElementById('greeting').textContent = Vielen Dank, ${name}!;
        document.getElementById('resultName').textContent = Name: ${name};
        document.getElementById('resultCity').textContent = Stadt: ${city};
        document.getElementById('resultPhone').textContent = Telefonnummer: ${phone};
        document.getElementById('resultAddress').textContent = Adresse: ${address};
        document.getElementById('resultDob').textContent = Geburtsdatum: ${dob};
        document.getElementById('resultGender').textContent = Geschlecht: ${gender};
        document.getElementById('resultStatus').textContent = Familienstand: ${status};
        document.getElementById('resultNationality').textContent = Nationalität: ${nationality};
        document.getElementById('resultMessage').textContent = Nachricht: ${message};

        // فرم ارسال می‌شود
        event.target.submit();
    });
});