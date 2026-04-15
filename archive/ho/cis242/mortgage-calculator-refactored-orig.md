
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Optional Lab 2-2: Mortgage Calculator</title>
</head>
<body>
  <h1 style="text-align:center; color:blue">CIW JavaScript Specialist</h1>
  <h2 style="text-align:center; color:green">JavaScript Mortgage Calculator</h2>
  <hr>

  <div style="text-align:center">
    <form id="frm">
      <table>
        <tr>
          <td>Mortgage amount:</td>
          <td><input type="number" id="amt" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td>Yearly interest rate:</td>
          <td><input type="number" id="ir" min="0" step="0.01"></td>
        </tr>
        <tr>
          <td>Term (in years):</td>
          <td><input type="number" id="term" min="1" step="1"></td>
        </tr>
        <tr>
          <td colspan="2">
            <input type="button" id="calcBtn" value="Click to Calculate Monthly Payment">
          </td>
        </tr>
        <tr><td colspan="2"><hr></td></tr>
        <tr>
          <td>Monthly payment:</td>
          <td><input type="text" id="payment" readonly></td>
        </tr>
        <tr>
          <td>Total payments:</td>
          <td><input type="text" id="total" readonly></td>
        </tr>
      </table>
    </form>
  </div>

  <script>
    /*
      Calculates the monthly mortgage payment and total payments.
      Formula: M = P * r / (1 - (1 + r)^-n)
        P = principal, r = monthly rate, n = number of payments
    */
    function calcPayment() {
      const amt  = parseFloat(document.getElementById("amt").value);
      const ir   = parseFloat(document.getElementById("ir").value) / 1200;
      const term = parseInt(document.getElementById("term").value) * 12;

      if (isNaN(amt) || isNaN(ir) || isNaN(term)) {
        alert("Please enter valid numbers in all fields.");
        return;
      }

      let total = 1;
      for (let i = 0; i < term; i++) {
        total *= (1 + ir);
      }

      const mp = amt * ir / (1 - (1 / total));

      document.getElementById("payment").value = Math.round(mp * 100) / 100;
      document.getElementById("total").value   = Math.round(mp * term * 100) / 100;
    }

    document.getElementById("calcBtn").addEventListener('click', calcPayment);
  </script>
</body>
</html>
