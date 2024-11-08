// script.js

function calculateBMI() {
    const height = document.getElementById('height').value / 100; // Convert cm to meters
    const weight = document.getElementById('weight').value;
    const bmi = (weight / (height * height)).toFixed(2);
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi} (${category}).`;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});
