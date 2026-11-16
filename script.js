const namaPria = document.getElementById("namaPria");

const namaWanita = document.getElementById("namaWanita");

const tanggal = document.getElementById("tanggal");

const canvas = document.getElementById("signatureCanvas");

const ctx = canvas.getContext("2d");

const clearButton = document.getElementById("clearSignature");

const createButton = document.getElementById("createWedding");

function setupCanvas() {

    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    ctx.lineWidth = 2;

    ctx.lineCap = "round";

    ctx.strokeStyle = "#333333";

}

setupCanvas();


let isDrawing = false;

let hasSignature = false;

canvas.addEventListener("pointerdown", function(event) {

    isDrawing = true;

    hasSignature = true;

    canvas.setPointerCapture(event.pointerId);

    const rect = canvas.getBoundingClientRect();

    ctx.beginPath();

    ctx.moveTo(
        event.clientX - rect.left,
        event.clientY - rect.top
    );

});


canvas.addEventListener("pointermove", function(event) {

    if (!isDrawing) return;

    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(
        event.clientX - rect.left,
        event.clientY - rect.top
    );

    ctx.stroke();

});


function stopDrawing() {

    isDrawing = false;

}


canvas.addEventListener("pointerup", stopDrawing);

canvas.addEventListener("pointercancel", stopDrawing);

clearButton.addEventListener("click", function() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    hasSignature = false;

});

createButton.addEventListener("click", function() {

    const pria = namaPria.value.trim();

    const wanita = namaWanita.value.trim();

    if (pria === "" || wanita === "") {

        alert("Nama kedua mempelai harus diisi!");

        return;

    }

    if (tanggal.value === "") {

        alert("Masukkan tanggal pernikahan!");

        return;

    }

    if (!hasSignature) {

        alert("Silakan buat tanda tangan terlebih dahulu!");

        return;

    }

    document.getElementById("hasilPria").textContent = pria;

    document.getElementById("hasilWanita").textContent = wanita;

    document.getElementById("hasilNama").textContent =
        pria + " & " + wanita;

    const formatTanggal = new Date(
        tanggal.value + "T00:00:00"
    );

    document.getElementById("hasilTanggal").textContent =
        formatTanggal.toLocaleDateString("id-ID", {

            day: "numeric",

            month: "long",

            year: "numeric"

        });

    document.getElementById("hasilTandaTangan").src =
        canvas.toDataURL("image/png");

    const result = document.getElementById("resultSection");

    result.style.display = "block";

    result.scrollIntoView({

        behavior: "smooth"

    });

});
