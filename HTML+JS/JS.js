// Level 1

/*
//1
let text = document.getElementById("p1");
text.textContent = 'Текст первого тега';
*/

/*
//2
let text = document.getElementsByClassName("coolClass");
for (let i = 0; i < text.length; i++) {
    text[i].innerText = "Этот тег принадлежит классу coolClass";
}
*/

/*
//3
let ifClass = document.querySelector('.coolClass');
if (ifClass) {
    ifClass.className = 'notCoolClass';
}
*/

/*
//4
function submitFeedback() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
    })
        .then(response => {
            if (response.ok)
                console.log('Форма отправлена!');
            else
                console.log('Ошибка сервера');
        })
        .catch(error => {
            console.log('Ошибка сервера', error)
        });
}
*/

/*
//5
let background = document.getElementsByTagName("p");
for (let i = 0; i < background.length; i++) {
    background[i].style.backgroundColor = 'red';
}
*/

// Level 2

