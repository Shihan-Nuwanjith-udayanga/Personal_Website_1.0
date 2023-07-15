// prevent right click
document.oncontextmenu = () => {
    alert("Don't try right click")
    return false
}

// still anyone can inspect elements by F12 key. View page source by Ctrl + U key. copy by ctrl + c key. paste by ctrl + v key. let's prevent these

document.onkeydown = e =>{
    //prevent F12 key
    if(e.key == "F12"){
        alert("Don't try to inspect element")
        return false
    }

    // prevent showing page source by crl + u
    if(e.ctrlKey && e.key == "u"){
        alert("Don't try to view page sources")
        return false
    }

    // prevent copying anything from the page
    if(e.ctrlKey && e.key == "c"){
        alert("Don't try to copy page sources")
        return false
    }

    // prevent paste anything from other sources
    if(e.ctrlKey && e.key == "v"){
        alert("Don't try to paste anything to page")
        return false
    }
}