// модальное окно
let modal = document.getElementById('modal');

let btn = document.getElementById('button-modal');

let span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// массив с одногруппниками
let group = [
    "Abdrakhmanov Jalil",
    "Baryshnikov Andrey",
    "Buzuyev Nikita",
    "Vakilov Ilyas",
    "Vilgauk Anastasia",
    "Voitsekhovsky Artem",
    "Gulyaev Mikhail",
    "Kazantsev Maxim",
    "Kiselyov Mikhail",
    "Dmitry Koinov",
    "Kolybina Anna",
    "Lukyanov Evgeny",
    "Evgeny Manaev",
    "Misnik Elena",
    "Pakhomov Yaroslav",
    "Popov Sergey",
    "Privalov Volodya",
    "Starov Alexander",
    "Titenok Anastasia",
    "Tomashevsky Vladislav",
    "Falaleev Nikita",
    "Khairullin Arthur",
    "Chernyshev Nikolai",
];

let groupSpic = document.getElementById('group-spic');

//вывод массива списком 
let str = ' ';
for (let i = 1; i < group.length; i++) {
    if (group[i] !== undefined) str += i + ' - ' + group[i] + '<br>';
}

groupSpic.innerHTML = str;