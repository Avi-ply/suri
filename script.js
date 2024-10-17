window,onload = function(){
    const welcomeScreen = this.document.getElementById('welcome-screen');
    const content = this.document.getElementById('content');

    this.setTimeout(() => {
        welcomeScreen.style.display = 'none';
        content.style.display = 'block';
    }, 3000);
}
