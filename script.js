document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    if (!dob || dob > today) {
      document.getElementById('result').textContent = 'Please enter a valid date of birth.';
      return;
    }
  
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
  
    document.getElementById('result').textContent = `Your age is: ${age} years old.`;
  });
  