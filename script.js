document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Collect form data
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var phone = document.getElementById('phone').value;
    var hobbies = document.getElementById('hobbies').value;
    var eyeColor = document.getElementById('eyeColor').value;
    var status = document.getElementById('status').value;

    // Show result
    document.getElementById('result').style.display = 'block';
    document.getElementById('greeting').textContent = 'Vielen Dank, ' + name + '!';
    document.getElementById('resultName').textContent = 'Name: ' + name;
    document.getElementById('resultAge').textContent = 'Alter: ' + age;
    document.getElementById('resultPhone').textContent = 'Telefonnummer: ' + phone;
    document.getElementById('resultHobbies').textContent = 'Hobbys: ' + hobbies;
    document.getElementById('resultEyeColor').textContent = 'Augenfarbe: ' + eyeColor;
    document.getElementById('resultStatus').textContent = 'Familienstand: ' + status;

    // Optional: you can uncomment below if you still want the form to send email via Formspree
    // this.submit();
});