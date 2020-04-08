document.querySelector('.download-pdf-table').onclick = function (e) {

    scrollPos = document.body.scrollTop;

    var w = document.getElementById("study-groups-adults").clientWidth;
    var h = document.getElementById("study-groups-adults").clientHeight;

    var doc = new jsPDF("p", "pt", "a0");

    //alert(document.querySelector(".table-prices table"));
    
    html2canvas(document.querySelector(".table-prices table"), {
        scale: 2,
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/png');
            var position = 0;
            doc.addImage(imgData, 'PNG', 0, 0, w, h);
            doc.output('arraybuffer');
            doc.save(Date.now() +'-table.pdf');
            window.scrollTo(0,scrollPos);    
        },
    });

    return false;
}

document.querySelector('.download-pdf').onclick = function (e) {

    scrollPos = document.body.scrollTop;

    var w = document.getElementById("study-groups-adults").clientWidth;
    var h = document.getElementById("study-groups-adults").clientHeight;

    var doc = new jsPDF("p", "pt", "a0");
    
    html2canvas(document.getElementById("study-groups-adults"), {
        dpi: 300,
        scale: 2,
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/png');
            var position = 0;
            doc.addImage(imgData, 'PNG', 0, 0, w, h);
            doc.output('arraybuffer');
            doc.save(Date.now() +'.pdf');
            window.scrollTo(0,scrollPos);    
        },
    });

    return false;
}