firstName = prompt("Please input your firstname").trim();
lastName = prompt("Please input your lastname").trim();
email = prompt("Please input your email").trim();
email = email.toLowerCase();
yearOFBirth = prompt("Please input your year of birth").trim();
currentYear = new Date().getFullYear();
age = currentYear - yearOFBirth;

if (email.indexOf("@") === -1) {
    email = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if (email.indexOf("@") === 0) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.indexOf("@") === email.length - 1) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
}
document.write(`
<ul>
    <li>Full name: <b>${firstName} ${lastName}</b></li>
    <li>Email: ${email}</li>
    <li>Age: <b>${age}</b></li>
</ul>        
`);