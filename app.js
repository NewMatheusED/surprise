const pass = 151221
var form = document.querySelector('form')
var span = $('span.submitRes')
var link = $('p.link')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    var result = document.querySelector('form input[type="password"]').value

    if(result == pass) {
        span.text('Certo!')
        span.css('backgroundColor' , '#C2D2F2')
        link.css('display', 'block')

    }else {
        span.text('Errado, tente novamente!')
        span.css('backgroundColor', '#F2B3B3')
    }
});
