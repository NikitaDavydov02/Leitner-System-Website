"use strict"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        console.log('Hi!');
        e.preventDefault();
        ///Check
        const checkbox = document.querySelectorAll('.req')[0];
        console.log(checkbox);
        console.log(checkbox.getAttribute("type"));
        if (checkbox.getAttribute("type") === "checkbox" && checkbox.checked === false) {
            alert('NO!');
            formAddError(checkbox);
        }
        else {
            //Send
            let formData = new FormData(form);
            alert('Sending');
            let response = await fetch('sendmail.php', { method: 'POST', body: formData });
            console.log(response);
            if (response.ok) {
                alert('Sent!');
                let result = await response.json();
                alert(result.message);
                form.reset();

            }
            else {
                alert('Error!');
            }
        }


    }
    function formAddError(input) {
        input.parentElement.classList.add('error');
        input.classList.add('error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('error');
        input.classList.remove('error');
    }
});