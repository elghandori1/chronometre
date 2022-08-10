let ms = document.getElementById("ms");
let s = document.getElementById("s");
let m = document.getElementById("m");
let h = document.getElementById("h");
let mili = 0;
let sec = 0;
let min = 0;
let hour = 0;
let interval = 0;
function conteur(){
    if(mili===100){
        sec++
        s.innerHTML=sec+' s'
        if(sec == 60){
            min++
            m.innerHTML=min +' min'
            if(min == 60){
                hour++
                h.innerHTML=hour+' h'
                min=0
            }
            sec=0
        }
        mili=0
    } else {
        mili++
        ms.innerHTML = mili + " ms"
    }
}

function start() {
    if(!interval){
        interval = setInterval(conteur, 10)
     }
     h.style=''
     m.style=''
     s.style=''
     ms.style=''
   
}
function stop() {
    if(interval){
        clearInterval(interval)
        interval = null;
        h.style='color:#2bc1d8'
        m.style='color:#2bc1d8'
        s.style='color:#2bc1d8'
        ms.style='color:#2bc1d8'
    }
  
}
function reset() {
    stop()
    mili=sec=min=hour = 0;
    h.innerHTML = hour + " h"
    ms.innerHTML = mili + " ms"
    m.innerHTML = min + " min"
    s.innerHTML = sec + " s"
    h.style=''
    m.style=''
    s.style=''
    ms.style=''
}
