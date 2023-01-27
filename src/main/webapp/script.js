if (typeof r === 'undefined') {
    r = -1;
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function draw() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let r = canvas.width / 3;
    let zero = canvas.width / 2;

    ctx.beginPath();
    ctx.arc(zero, zero, r / 2, -Math.PI / 2, 0);
    ctx.lineTo(zero, zero);
    ctx.fillStyle = "#0000ff";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(zero, zero);
    ctx.lineTo(zero, zero + r);
    ctx.lineTo(zero + r, zero);
    ctx.lineTo(zero, zero);
    ctx.fillStyle = "#0000ff";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(zero, zero);
    ctx.lineTo(zero - r, zero);
    ctx.lineTo(zero - r, zero - r / 2);
    ctx.lineTo(zero, zero - r / 2);
    ctx.lineTo(zero, zero);
    ctx.fillStyle = "#0000ff";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(zero, 0 + 10);
    ctx.lineTo(zero, canvas.height - 10);
    ctx.moveTo(zero, 0 + 10);
    ctx.lineTo(zero - 6, 20);
    ctx.moveTo(zero, 0 + 10);
    ctx.lineTo(zero + 6, 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvas.width - 10, zero);
    ctx.lineTo(10, zero);
    ctx.moveTo(canvas.width - 10, zero);
    ctx.lineTo(canvas.width - 20, zero - 6);
    ctx.moveTo(canvas.width - 10, zero);
    ctx.lineTo(canvas.width - 20, zero + 6);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(zero - 4, zero - r);
    ctx.lineTo(zero + 4, zero - r);
    ctx.moveTo(zero - 4, zero - r / 2);
    ctx.lineTo(zero + 4, zero - r / 2);
    ctx.moveTo(zero - 4, zero + r / 2);
    ctx.lineTo(zero + 4, zero + r / 2);
    ctx.moveTo(zero - 4, zero + r);
    ctx.lineTo(zero + 4, zero + r);

    ctx.moveTo(zero - r, zero - 4);
    ctx.lineTo(zero - r, zero + 4);
    ctx.moveTo(zero - r / 2, zero - 4);
    ctx.lineTo(zero - r / 2, zero + 4);
    ctx.moveTo(zero + r / 2, zero - 4);
    ctx.lineTo(zero + r / 2, zero + 4);
    ctx.moveTo(zero + r, zero - 4);
    ctx.lineTo(zero + r, zero + 4);
    ctx.stroke();

}

draw()
drawPoints()

canvas.onclick = function (event) {
    if (r === -1) {
        r_label = document.getElementById("r_label")
        r_label.innerText = "R is not selected"
        r_label.style.color = "red"

        setTimeout(() => {
            r_label.innerText = "R: "
            r_label.style.color = "white"
        }, 2000)
        return;
    }

    let xC = event.offsetX;
    let yC = event.offsetY;
    let rC = canvas.width / 3;
    let zero = canvas.width / 2;

    if (xC > zero - rC && xC < zero + rC && yC > zero - rC && yC < zero + rC) { //?
        let xValue = Math.round(((xC - zero) / rC) * r)
        let yValue = ((zero - yC) / rC) * r

        if (xValue < -4 || xValue > 4) {
            let x_label = document.getElementById("x_label");
            x_label.innerText = "X - input error on graph";
            x_label.style.color = "red";

            setTimeout(() => {
                x_label.innerText = "X: ";
                x_label.style.color = "white";
            }, 2000)
            return;
        }
        if (yValue < -3 || yValue > 3) {
            let y_label = document.getElementById("y_label");
            y_label.innerText = "Y - input error on graph";
            y_label.style.color = "red";

            setTimeout(() => {
                y_label.innerText = "Y: ";
                y_label.style.color = "white";
            }, 2000)
            return;
        }

        document.getElementById("x").value = xValue;
        document.getElementById("y").value = yValue;
        submit();
    }
}


function drawPoints() {
    let table = document.getElementById("result");
    let rows = table.rows;
    let rC = canvas.width / 3;
    let zero = canvas.width / 2;


    for (let i = 1; i < rows.length - 1; i++) {
        //parse numbers
        let x = parseFloat(rows[i].cells[0].innerText)
        let y = parseFloat(rows[i].cells[1].innerText)
        let r = parseFloat(rows[i].cells[2].innerText);
        let result = rows[i].cells[5].innerText;
        let xC = (x / r) * rC + zero;
        let yC = zero - (y / r) * rC;
        ctx.beginPath();
        ctx.arc(xC, yC, 5, 0, 2 * Math.PI);
        if (result === "true") {
            ctx.fillStyle = "#00ff00";
        } else {
            ctx.fillStyle = "#ff0000";
        }
        ctx.fill();
        ctx.stroke();
    }
}

function submit() {
    let y = document.getElementById("y").value;

    if (y === "") {
        let y_label = document.getElementById("y_label");
        y_label.innerText = "Y is not selected";
        y_label.style.color = "red";

        setTimeout(() => {
            y_label.innerText = "Y: ";
            y_label.style.color = "white";
        }, 2000)
        return;
    }

    if (y < -3 || y > 3) {
        let y_label = document.getElementById("y_label");
        y_label.innerText = "Y is not in range (-3...3)";
        y_label.style.color = "red";

        setTimeout(() => {
            y_label.innerText = "Y: ";
            y_label.style.color = "white";
        }, 2000)
        return;
    }

    if (!(y >= -3 && y <= 3)) {
        let y_label = document.getElementById("y_label");
        y_label.innerText = "Y is not a number";
        y_label.style.color = "red";

        setTimeout(() => {
            y_label.innerText = "Y: ";
            y_label.style.color = "white";
        }, 2000)
        return;
    }

    if (r === -1) {
        r_label = document.getElementById("r_label");
        r_label.innerText = "R is not selected";
        r_label.style.color = "red";

        setTimeout(() => {
            r_label.innerText = "R: ";
            r_label.style.color = "white";
        }, 2000)
        return;
    }


    let request = new XMLHttpRequest();
    request.open("POST", "controllerServlet?x=" + x.value + "&y=" + y + "&r=" + r, true);
    request.send();
    request.onload = function () {
        if (request.status == 200) {
            document.getElementById("result").innerHTML = request.responseText;
            drawPoints()
        } else {
            alert(request.statusText + ": " + request.responseText);
        }
    }
}

function reset() {
    let request = new XMLHttpRequest();
    request.open("POST", "controllerServlet?x=42&y=42&r=42", true);
    request.send();
    request.onload = function () {
        if (request.status == 200) {
            document.getElementById("result").innerHTML = request.responseText;
            draw()
        } else {
            alert(request.statusText + ": " + request.responseText);
        }
    }
}

function setR(value) {
    r = value;
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].value == value) {
            buttons[i].classList.add("active");
        } else {
            buttons[i].classList.remove("active");
        }
    }
}

document.getElementById("y").onblur = function () {
    let y = this.value;
    if (y == "") {
        this.classList.remove("valid");
        this.classList.remove("invalid");
        return;
    }

    if (y >= -3 && y <= 3) {
        this.classList.add("valid");
        this.classList.remove("invalid");
    } else {
        this.classList.add("invalid");
        this.classList.remove("valid");
    }
}
