# CIS 242 - JavaScript

## Week 2

### Lesson Plan

1. Step 1. Lesson 2: Working with Variables and Data in JavaScript Assignment……2


#### Step 1
In your home location at Desktop/Quarter2/Labs folder create a folder with a name Lab2-1. Inside it create a file mortgage-calculator.html and copy/paste (at least type once the code is highly recommended). Open the file in your favorite browser. Enter data and check the output. Try clicking the button with no data. Try adding non numeric characters. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Optional Lab 2-2: Mortgage Calculator</title>
  </head>
  <body>
    <h1 style="text-align:center; color:blue">CIW JavaScript Specialist</h1>
    <h2 style="text-align:center; color:green">
      JavaScript Mortgage Calculator
    </h2>
    <hr />

    <div style="text-align:center">
      <form id="frm">
        <table>
          <tr>
            <td>Mortgage amount:</td>
            <td><input type="number" id="amt" min="0" step="0.01" /></td>
          </tr>
          <tr>
            <td>Yearly interest rate:</td>
            <td><input type="number" id="ir" min="0" step="0.01" /></td>
          </tr>
          <tr>
            <td>Term (in years):</td>
            <td><input type="number" id="term" min="1" step="1" /></td>
          </tr>
          <tr>
            <td colspan="2">
              <input
                type="button"
                id="calcBtn"
                value="Click to Calculate Monthly Payment"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2"><hr /></td>
          </tr>
          <tr>
            <td>Monthly payment:</td>
            <td><input type="text" id="payment" readonly /></td>
          </tr>
          <tr>
            <td>Total payments:</td>
            <td><input type="text" id="total" readonly /></td>
          </tr>
        </table>
      </form>
    </div>

    <script>

      function calcPayment() {
        const amt = Number(document.getElementById("amt").value);
        const  ir = Number(document.getElementById("ir").value / 1200);
        let  term = Number(document.getElementById("term").value);


        if (isNaN(amt) || isNaN(ir) || isNan(term)){
          alert("Please enter valid numbers in all fields.");
          return;
        }

        let total = 1;
        for (let i = 0; i < term; i++) {
          total *= 1 + ir;
        }

        const mp = (amt * ir) / (1 - 1 / total);

        document.getElementById("payment").value = Math.round(mp * 100) / 100;
        document.getElementById("total").value =
          Math.round(mp * term * 100) / 100;
      }

      document.getElementById("calcBtn").addEventListener("click", calcPayment);
    </script>
  </body>
</html>
```

### Challenge 1:

Modify mortgage-calculator.html to calculate the monthly payment with Term (in months). Remember to show your name.

*HINT*

```html
<tr>
    <td>Term (in years):</td>
  <td><input type="number" id="term" min="1" step="1" /></td>
</tr>
  <td>OR</td>
</tr>
<tr>
    <td>Term (in months):</td>
  <td><input type="number" id="termMonths" min="1" step="1" /></td>
</tr>
```
Modify function calcpayment(). Add the following code in your inside your script tag

```html
  <script>
    function calcPayment() {
     //........
      let termMonths =  Number(document.getElementById("termMonths").value);

        if (term !== ""){
            term = term * 12;
        }

        // ...............
    }
  </script>
```
