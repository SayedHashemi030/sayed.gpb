document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const city = document.getElementById('city').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;
        const status = document.getElementById('status').value;
        const nationality = document.getElementById('nationality').value;
        const message = document.getElementById('message').value;

        // Display form results
        document.getElementById('result').style.display = 'block';
        document.getElementById('greeting').textContent = Vielen Dank, ${name}!;
        document.getElementById('resultName').textContent = Name: ${name};
        document.getElementById('resultCity').textContent = City: ${city};
        document.getElementById('resultPhone').textContent = Phone: ${phone};
        document.getElementById('resultAddress').textContent = Address: ${address};
        document.getElementById('resultDob').textContent = Date of Birth: ${dob};
        document.getElementById('resultGender').textContent = Gender: ${gender};
        document.getElementById('resultStatus').textContent = Marital Status: ${status};
        document.getElementById('resultNationality').textContent = Nationality: ${nationality};
        document.getElementById('resultMessage').textContent = Message: ${message};

        // Submit the form
        event.target.submit();
    });
});