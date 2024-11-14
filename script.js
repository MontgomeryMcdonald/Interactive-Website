
let stylelist = ["scheme1", "scheme2", "scheme3", "scheme4", "scheme5", "scheme6", "scheme7", "scheme8", ]
let idlist = ["p1", "p2", "p3", "p4"]
document.getElementById("body").classList.toggle("dark")

function randomize(id){
    // removes all classes from the paragraph tag, then it randomly selects a new class to add. toggled by clicking the desired paragraph.
    for(i of document.getElementById(id).classList){
        document.getElementById(id).classList.remove(i)
    }
    document.getElementById(id).classList.add(stylelist[Math.floor(Math.random()*(7 - 0 + 1) + 1)])
}


function toggle(input){
    // checks to see if input is a special case. if its the hidden class, it specifically toggles the visibility of the image. input "none" removes all visibility
    // otherwise, it removes all classes and adds the new one. this prevents any override conflicts.
    if(input == "hidden"){
        document.getElementById("image").classList.toggle("hidden")
        return
    }
    if(input == "none"){
        for(i of document.getElementById("body").classList){
            document.getElementById("body").classList.remove(i)
        }
        return
    }
    for(i of document.getElementById("body").classList){
        document.getElementById("body").classList.remove(i)
    }
    document.getElementById("body").classList.toggle(input)
}