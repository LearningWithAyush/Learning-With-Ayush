document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById('searicon');
    const searchPopup = document.getElementById('search-popup');

    searchIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        searchPopup.style.display = (searchPopup.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!searchPopup.contains(event.target) && event.target !== searchIcon) {
            searchPopup.style.display = 'none';
        }
    });
});
