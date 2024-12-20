function openSideBar() {
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'visible';

    const hambergerMenuElement = document.getElementById('hamberger-menu');
    hambergerMenuElement.style.visibility = 'hidden';
}

function closeSideBar() {
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'hidden';

    const hambergerMenuElement = document.getElementById('hamberger-menu');
    hambergerMenuElement.style.visibility = 'visible';
}