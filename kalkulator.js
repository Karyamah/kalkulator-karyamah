$(function() {
    let input1 = "";
    let input2 = "";
    let operasiSelected = null;

    $(".tombol-angka").click(function () {
        let angka = $(this).text();

        if (operasiSelected == null) {
            let angkaSebelumnya = $("#input1").text();
            if (angkaSebelumnya == "...") angkaSebelumnya = "";
            input1 = angkaSebelumnya + angka;
            $("#input1").text(input1);
        } else {
            let angkaSebelumnya = $("#input2").text();
            if (angkaSebelumnya == "...") angkaSebelumnya = "";
            input2 = angkaSebelumnya + angka;
            $("#input2").text(input2);
        }
    });

    $(".tombol-dot").click(function () {
        if (operasiSelected == null) {
            let angkaSebelumnya = $("#input1").text();
            if (!angkaSebelumnya.includes(".")) {  // Cek apakah sudah ada desimal
                if (angkaSebelumnya == "...") angkaSebelumnya = "0";
                input1 = angkaSebelumnya + ".";
                $("#input1").text(input1);
            }
        } else {
            let angkaSebelumnya = $("#input2").text();
            if (!angkaSebelumnya.includes(".")) {
                if (angkaSebelumnya == "...") angkaSebelumnya = "0";
                input2 = angkaSebelumnya + ".";
                $("#input2").text(input2);
            }
        }
    });

    $(".tombol-operasi").click(function () {
        let newOperasi = $(this).text();
        if (operasiSelected == null) {
            $("#operasi-selected").text(newOperasi);
            operasiSelected = newOperasi;
        } else {
            // Perbarui operasi jika sebelumnya sudah ada
            $("#input1").text($("#hasil").text());
            $("#input2").text("...");
            $("#operasi-selected").text(newOperasi);
            operasiSelected = newOperasi;
        }
    });

    $(".toggle-negatif").click(function () {
        if (operasiSelected == null) {
            input1 = parseFloat($("#input1").text()) * -1;
            $("#input1").text(input1);
        } else {
            input2 = parseFloat($("#input2").text()) * -1;
            $("#input2").text(input2);
        }
    });

    $(".tombol-faktorial").click(function () {
        if (operasiSelected == null) {
            let angka = parseInt($("#input1").text());
            input1 = factorial(angka);
            $("#input1").text(input1);
            $("#hasil").text(input1);
        }
    });

    $("#btn-hitung").click(function () {
        if (operasiSelected != null && input1 !== "" && input2 !== "") {
            let hasil = hitung(input1, input2, operasiSelected);
            $("#hasil").text(hasil);  // Tampilkan hasil di kotak hasil
            $("#hasil-temporer").text("=");  // Menampilkan tanda "=" di kotak keempat
        }
    });

    $("#btn-clear").click(function () {
        $("#input1, #input2, #operasi-selected, #hasil, #hasil-temporer").text("...");
        input1 = "";
        input2 = "";
        operasiSelected = null;
    });

    function hitung(angka1, angka2, operasi) {
        let result;
        angka1 = parseFloat(angka1);
        angka2 = parseFloat(angka2);
        switch (operasi) {
            case "+": result = angka1 + angka2; break;
            case "-": result = angka1 - angka2; break;
            case "x": result = angka1 * angka2; break;
            case "/": result = angka1 / angka2; break;
            case "%": result = angka1 % angka2; break;
            case "^": result = Math.pow(angka1, angka2); break;
        }
        return result;
    }

    function factorial(n) {
        return (n <= 1) ? 1 : n * factorial(n - 1);
    }
});
