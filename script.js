function updateDateTime() 
{
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.getElementById("date-time").textContent = `Current Date & Time: ${dateTimeString}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();
document.getElementById("dob").max = new Date().toISOString().split("T")[0];
function calculateAge() 
{
  const dobInput = document.getElementById("dob").value;
  if (!dobInput) 
  {
    alert("Please enter your date of birth.");
    return;
  }
  const dob = new Date(dobInput);
  const today = new Date();
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();
  if (days < 0) 
  {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) 
  {
    years--;
    months += 12;
  }
  document.getElementById("result").textContent =
    `You are ${years} years, ${months} months, and ${days} days old.`;
}
