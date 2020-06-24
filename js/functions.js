/**
 * author : Rinor Maloku
 * Shkurt 2020
 */

function findObjectByKey(array, key, value) {
    var arr = [];
    var k = 0;
    for (var i = 0; i < array.length; i++) {
        //  arr[i] = array[i];
        if (array[i][key] == value) {
            arr[k++] = array[i];
        }
    }
    return arr;
}

function findObjectByKey2(array, key, value) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

function kolicat(kolicat) {
    var select = "Kolicat : <input class='form-control' id='kolica' name='kolica' required/>";
    $(".kolica").html(select);

}


function kolicatOld(kolicat) {
    var select = "Kolicat : <select class='form-control' id='kolica' name='kolica' required>";

    select += '<option value="">Zgjidh...</option>';
    for (i = 1; i <= kolica; i++) {
        select += '<option value="' + i + '">' + i + '</option>';
    }

    select += "<select>";
    $(".kolica").html(select);
}




function kategorit(kategoritArr, produktetArr) {
    var select = "Kategorit : <select class='form-control' id='kategorit' name='kategorit' required>";

    select += '<option value="">Zgjidh...</option>';
    $.each(kategoritArr, function(index, value) {
        select += '<option value="' + index + '">' + value + '</option>';
    });

    select += "<select>";
    $(".kategorit").html(select);




    $("#kategorit").on("change", function() {

        var kategorit = parseInt($("#kategorit").val());
        produktet(kategorit, produktetArr, kategoritArr);
    });




}



function produktet(kategorit, produktetArr, kategoritArr) {


    var obj = findObjectByKey(produktetArr, "kategoria", kategorit);
    //console.log(obj);



    var select = "Produktet : <select class='form-control' id='produktet' name='produktet' required>";
    select += '<option value="">Zgjidh...</option>';
    $.each(obj, function(key, val) {
        //console.log(val.emri);
        select += '<option value="' + val.id + '">' + val.emri + '</option>';

    })
    select += "</select>";
    $(".produktet").html();
    $(".produktet").html(select);


    $("#produktet").on("change", function() {
        var prod = parseInt($("#produktet").val());
        var produkt = findObjectByKey(obj, "id", prod);
        console.log(kategoritArr[produkt[0].kategoria]);
        $("#emri").val(produkt[0].emri);
        $("#kategoria").val(kategoritArr[produkt[0].kategoria]);
        $("#temperatura").val(produkt[0].temperatura);
        $("#lageshtia").val(produkt[0].lageshtia);
        $("#minuta").val(produkt[0].minuta);
        $("#sekonda").val(produkt[0].sekonda);
    });
}



function produktetNew(produktetArr) {
    var obj = produktetArr;
    //console.log(obj);

    var select = "Produktet : <select class='form-control' id='produktet' name='produktet' required='required'>";
    select += '<option value="">Zgjidh...</option>';
    $.each(obj, function(key, val) {
        //console.log(val.emri);
        select += '<option value="' + val.id + '">' + val.emri + '</option>';

    })
    select += "</select>";
    $(".produktet").html();
    $(".produktet").html(select);

    $("#produktet").on("change", function() {
        var prod = parseInt($("#produktet").val());
        var produkt = findObjectByKey(obj, "id", prod);
        $("#emri").val(produkt[0].emri);
        $("#temperatura").val(produkt[0].temperatura);
        $("#lageshtia").val(produkt[0].lageshtia);
        $("#minuta").val(produkt[0].minuta);
        $("#sekonda").val(produkt[0].sekonda);
    });
}


/** author: Esat BYLYKBASHI */
function countdown(element, minutes, seconds) {
    var el = $(".countdown" + element);
    el.addClass("bg-success");

    // Set the timer
    var interval = setInterval(function() {
        if (seconds == 0) {
            if (minutes == 0) {
                el.html("STOP!");
                clearInterval(interval);
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }

        if (minutes > 0) {
            //  var minute_text = minutes + ':';
            // var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
        } else {
            //  el.css("background-color", "red").fadeOut("slow").fadeIn("slow");
            el.addClass("bg-danger").fadeOut("slow").fadeIn("slow");
            //  var minute_text = '';
        }

        var second_text = seconds > 1 ? '' : '';
        var seconds_zero = seconds < 10 ? '0' : '';
        el.html(minutes + ':' + seconds_zero + '' + seconds + ' ' + second_text + '');
        seconds--;
    }, 1000);
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();

    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}