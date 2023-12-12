let currentStep = 1;
const form = document.getElementById("multi-form");
const stepPage = document.getElementById("step-page")
const loadingPage = document.querySelectorAll(".nav-dot");
function showStep(step){
    document.querySelectorAll('.card').forEach(s => s.classList.remove('active'));
    document.getElementById(`step${step}`).classList.add('active');
    stepPage.textContent = `Step ${step} of 3`;
    updateDot(step);
}



// select and unselect 
const mySelect = document.querySelectorAll('.interest');
mySelect.forEach(button => {
button.addEventListener('click', function() {
    this.classList.toggle('selected');
});
})
// show next card
const fillName = document.getElementById('name');
const fillEmail = document.getElementById('email');
function nextStep(){
    if (currentStep === 1){
        if (!fillName.checkValidity() || !fillEmail.checkValidity()){
            alert("Please fill in form")
            return;
        }
    }
    if (currentStep === 2){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const options = document.querySelectorAll('.interest');
    const selectedOption = Array.from(options).filter(option => option.classList.contains('selected'));
    const form2 = document.getElementById('step3');
    form2.innerHTML = `
    <div class="container">
    <span>Summary</span>
    <div class="data1">
        <p>Name: <span class="data-name">${name}</span></p>
        <p>Email: <span class="data-email">${email}</span></p>
    </div>
    <div class="data2">
    <ul class="topic">
        Topic:
       ${selectedOption.map(option => `
       
        <li>${option.textContent}</li>
        `).join('')}
    </ul>
</div>
    <button type="confirm" onclick=${confirmMessage()} >Confirm</button>
</div>`;
    }
    currentStep++;
    showStep(currentStep);
}
// nav-dot loading 
function updateDot(dot) {
    loadingPage.forEach((key, index) => {
        key.classList.remove('active', 'completed');
        if (index + 1 < dot){
            key.classList.add('completed')
        }else if (index + 1 === dot){
            key.classList.add('active');
        }
    }) 
}

// alert message 
function confirmMessage() {
   
        alert('✅ Success')
    
}
