document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.bestseller_block__tab-item');
    const tabPanes = document.querySelectorAll('.bestseller_block__tab1');

    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener('click', function() {
            // Убираем активный класс у всех табов и контента
            tabLinks.forEach(function(link) {
                link.classList.remove('activetab');
            });

            tabPanes.forEach(function(pane) {
                pane.classList.remove('active');
            });

            // Добавляем активный класс к выбранному табу и соответствующему контенту
            this.classList.add('activetab');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});