function calculate() {
    let a = document.getElementById("yourP").value;
    let b = document.getElementById("tS").value;
    let c = document.getElementById("yoursP").value;
    let d = document.getElementById("tsS").value;
    let e = document.getElementById("tn").value;
    let n = document.getElementById("name").value;
    let total = (a / 100) * b;
    let totals = (c / 100) * d;
    let both = total + totals;
    let sum = both / e;
    Swal.fire(
        n,
        'Your Percentage is: ' + sum + '%',
        'success'
    )
}