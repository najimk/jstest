function changeText() {
    let paragraph = document.getElementsByTagName("p")
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.fontStyle = 'italic'
    }
}