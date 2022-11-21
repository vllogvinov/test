window.onload = function () {
    button = document.getElementById('blueButton')
    button.onclick = function()
    {
        services = document.getElementsByClassName('services_items_wrapper')[0];
        services.insertAdjacentHTML("beforeend","<div class='services_item'>" +
            "<div class='pic'><img src='images/project.png'></div>" +
            "<div class='text'>" +
            "<p> Cоздание сайтов </p>" +
            "<h3>" +
            "<p> Lorem Ipsum - это текст- \'рыба\', часто используе в печати и вэб-дизайне.</p>" +
            "</h3>" +
            "</div>" +
            "</div>")
    }
}
