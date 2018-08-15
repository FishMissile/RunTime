function Remaining() {
    var date = new Date()
    var min = date.getMinutes()
    var hour = date.getHours()

    poundsLeft = document.getElementById("poundsLeft").value;
    pph = document.getElementById("pph").value;
    hours = poundsLeft / pph
    roundedhours = Math.floor(hours)
    minutes = hours * 60
    for (i = minutes; i >= 60; i -= 60) { }
    minuteRemainder = Math.floor(i)

    date.setMinutes(date.getMinutes() + minutes)

    //draw results
    document.getElementById("demo").innerHTML = "Finish Date: " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear()
    document.getElementById("demo2").innerHTML = "Finish Time: " + ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2);
    document.getElementById("demo3").innerHTML = "Total Run Time: " + ("0" + roundedhours).slice(-2) + ":" + ("0" + minuteRemainder).slice(-2)
}