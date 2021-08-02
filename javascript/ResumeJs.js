const fiix = "fiix"
const namsys = "namsys"

function moreDetailsClick(employer) {
    document.getElementById('resume').style.display = "block";

    if (employer == fiix) {
        __showFiixDetails__()
    } else {
        __showNamsysDetails__()
    }
}

function __showFiixDetails__() {
    var div = document.getElementById('resume-fiix')
    div.style.display = "block"

    var table = document.getElementById('resume-list')
    var row = table.insertRow(0)
    row.id = 'resume-fiix'
    row.appendChild(div)
}

function __showNamsysDetails__() {
    var div = document.getElementById('resume-namsys')
    div.style.display = "block"

    var table = document.getElementById('resume-list')
    var row = table.insertRow(0)
    row.id = 'resume-namsys'
    row.appendChild(div)
}

function closethis(id) {
    var table = document.getElementById('resume-list')

    for (var i = 0, row; row = table.rows[i]; i++) {
        console.log(row)
        if (row.id == id) {
            table.deleteRow(i)
            break
        }
    }
}