
document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementById('btn');
    btn.onclick = function() {

        let filmName = prompt('Введите название фильма латинскими буквами');
        if(filmName) {

            let request = fetch('https://www.omdbapi.com/?apikey=bbfde27a&t=' + filmName);

            request.then(function(response) {

                let jsonRespons = response.json();
                jsonRespons.then(function(data) {

                    if (!data.Error) {
                        alert('Премьера фильма состаялась в ' + data.Year + ' году');
                        console.log(data);
                    } else {
                        alert('Бред какой-то...');
                        console.log(data);
                    }

                });
            });

        } else {
            alert('Что-то пошло не так...');
        }
    };
});

// let request = fetch('https://www.omdbapi.com/?apikey=bbfde27a&t=Star+Wars')
//         request.then(function(response){
//             let jsonRespons = response.json();
//             jsonRespons.then(function(data){
//                 console.log(data.Year);
//             });
//         });