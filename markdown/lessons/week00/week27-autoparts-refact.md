**Project structure:**
```
autoparts_lab7_refactored/
├── server.js           ← replaces app.js
├── package.json        ← express only, no ejs or body-parser
├── .gitignore
└── views/
    ├── home.js         ← replaces home.ejs
    └── processorder.js ← replaces processorder.ejs v1/v2/v4
```

**To run:** `npm install && npm run dev`

---

**Key pedagogical decisions made:**

**EJS → template literal mapping is explicit** — `processorder.js` shows the EJS syntax for each version next to its template literal equivalent so students see exactly what changed and why, not just a finished product.

**Calculations moved out of the view** — the original EJS v4 did `Number(autoParts.tires) + Number(autoParts.bottlesOfoil) + ...` inside the template tag. The refactored version calculates everything in `server.js` and passes pre-computed values to the view function. This teaches separation of concerns — views display, routes calculate.

**All 4 EJS versions collapsed into one** — `processorder.js` shows the v1→v2→v4 evolution as comments, so the progression is visible without needing 4 separate files.

**`body-parser` removal explained inline** — students learn it was absorbed into Express 4.16, not just deleted without reason.

**PRG pattern comment** — the POST→redirect→GET is explained directly in the route where students encounter it, with the reason (prevent duplicate form submissions on refresh).

// ─────────────────────────────────────────────────────────────
// views/processorder.js — Order Results Page Builder
//
// REPLACES: views/processorder.ejs (v1, v2, v4)
//
// The original lab had 4 versions of this view, each adding
// more functionality. Instead of 4 separate files, this module
// exports ONE final function (buildProcessOrderPage) that
// incorporates everything from all versions.
//
// The EJS evolution is shown as comments below so you can see
// how each version mapped to the template literal equivalent.
//
// ── EJS → TEMPLATE LITERAL MAPPING ──────────────────────────
//
//   EJS                              Template Literal
//   ─────────────────────────────    ──────────────────────────
//   <%= new Date() %>                ${new Date().toLocaleString()}
//   <%= autoParts.tires %>           ${autoParts.tires}
//   <%= autoParts.bottlesOfoil %>    ${autoParts.bottlesOfoil}
//   <%= totalamount %>               ${subtotal.toFixed(2)}
//   <%= totalInclTax %>              ${totalInclTax.toFixed(2)}
//
// KEY DIFFERENCE:
//   EJS  <%= expression %> — embedded in .ejs file, processed server-side
//   JS   ${expression}     — embedded in template literal, plain JS
//   Both produce the same output — a string with the value inserted.
//   Template literals require no engine, no extra dependency.
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// VERSION 1 REFERENCE (processorder.ejs — original)
// The simplest version — just confirms order was processed.
// No data displayed at all.
//
//   EJS version:
//     <p>Order processed</p>
//
//   Template literal equivalent:
//     <p>Order processed</p>
//   (identical — no dynamic data needed)
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// VERSION 2 REFERENCE (processorder_v2.ejs)
// Added the order timestamp.
//
//   EJS version:
//     <p>Order processed at "<%= new Date() %>;</p>
//     NOTE: the original had a stray quote and semicolon — bug in original
//
//   Template literal equivalent (fixed):
//     <p>Order processed at: ${new Date().toLocaleString()}</p>
//
//   toLocaleString() formats the date for the user's locale.
//   new Date() alone gives: Thu Apr 24 2026 14:30:00 GMT...
//   toLocaleString() gives: 4/24/2026, 2:30:00 PM  (cleaner)
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// VERSION 4 REFERENCE (processorder_v4.ejs — the full version)
//
//   EJS version:
//     <li><%= autoParts.tires %> tires</li>
//     <li><%= autoParts.bottlesOfoil %> bottles of oil</li>
//     <li><%= autoParts.sparkPlugs %> spark plugs</li>
//     <p>Items ordered: <%= Number(autoParts.tires) + ... %></p>
//     <p>Subtotal: $<%= totalamount %></p>
//     <p>Total including tax: $<%= totalInclTax %></p>
//
//   Template literal equivalent:
//     <li>${autoParts.tires} tires</li>
//     <li>${autoParts.bottlesOfoil} bottles of oil</li>
//     <li>${autoParts.sparkPlugs} spark plugs</li>
//     <p>Items ordered: ${itemsOrdered}</p>
//     <p>Subtotal: $${subtotal.toFixed(2)}</p>
//     <p>Total with tax: $${totalInclTax.toFixed(2)}</p>
//
//   IMPROVEMENT: In the EJS version, Number() conversions and
//   arithmetic happened inside the template. In the refactored
//   version, ALL calculations happen in server.js before the
//   function is called. The view just displays pre-computed values.
//   This separation — calculate in the route, display in the view —
//   is cleaner and easier to test.
// ─────────────────────────────────────────────────────────────

/*
  buildProcessOrderPage(data)
  ───────────────────────────
  Takes a data object and returns a complete HTML page string.

  PARAMETER: data — an object with these properties:
    autoParts    → { tires, bottlesOfoil, sparkPlugs }
    itemsOrdered → total number of items (Number)
    subtotal     → price before tax (Number)
    totalInclTax → price after tax (Number)
    taxRate      → tax rate as decimal, e.g. 0.10 (Number)

  BEGINNER: Instead of passing many separate arguments, we pass
  one object. This makes the function signature cleaner and
  allows any property to be optional without breaking the call.
  We destructure the object inside the function to get each value.

  ADVANCED: This "data bag" pattern is common in view/template
  functions. It matches how React receives props:
    function OrderResults({ autoParts, subtotal, totalInclTax }) { ... }
  The refactored server.js passes data the same way:
    res.send(buildProcessOrderPage({ autoParts, subtotal, totalInclTax }))
*/
function buildProcessOrderPage({ autoParts, itemsOrdered, subtotal, totalInclTax, taxRate }) {

  // toFixed(2) formats a number to exactly 2 decimal places.
  // It returns a STRING: (9.5).toFixed(2) → "9.50"
  // This is important for displaying currency correctly.
  const subtotalFormatted     = subtotal.toFixed(2);
  const totalInclTaxFormatted = totalInclTax.toFixed(2);
  const taxPercent            = (taxRate * 100).toFixed(0); // 0.10 → "10"

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Bob's Auto Parts - Order Results</title>
    <style>
      body   { font-family: Arial, sans-serif; padding: 20px; }
      table  { border-collapse: collapse; margin-top: 10px; }
      td, th { padding: 8px 16px; border: 1px solid #ddd; }
      th     { background-color: #cccccc; }
      .total { font-weight: bold; font-size: 1.1rem; }
      .back  { display: inline-block; margin-top: 20px; padding: 8px 16px;
               background: #0066cc; color: white; text-decoration: none;
               border-radius: 4px; }
    </style>
  </head>
  <body>
    <h1>Bob's Auto Parts</h1>
    <h2>Order Results</h2>

    <!-- VERSION 2: timestamp added -->
    <!--
      new Date() creates a Date object for right now.
      toLocaleString() formats it as a human-readable string.
      The original EJS had a stray quote and semicolon — fixed here.
    -->
    <p>Order processed at: <strong>${new Date().toLocaleString()}</strong></p>

    <!-- VERSION 4: order details table -->
    <!--
      autoParts values are strings (form input is always strings).
      We display them directly — conversion to numbers happened
      in server.js for the calculations, not here.
    -->
    <h3>Your order:</h3>
    <table>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Line Total</th>
      </tr>
      <tr>
        <td>Tires</td>
        <td>${autoParts.tires}</td>
        <td>$100.00</td>
        <td>$${(Number(autoParts.tires) * 100).toFixed(2)}</td>
      </tr>
      <tr>
        <td>Oil (bottles)</td>
        <td>${autoParts.bottlesOfoil}</td>
        <td>$10.00</td>
        <td>$${(Number(autoParts.bottlesOfoil) * 10).toFixed(2)}</td>
      </tr>
      <tr>
        <td>Spark Plugs</td>
        <td>${autoParts.sparkPlugs}</td>
        <td>$4.00</td>
        <td>$${(Number(autoParts.sparkPlugs) * 4).toFixed(2)}</td>
      </tr>
    </table>

    <!--
      itemsOrdered, subtotal, totalInclTax were all calculated in
      server.js and passed in as arguments. The view just displays them.
      This is the "separation of concerns" principle — views display,
      routes calculate.
    -->
    <p>Total items ordered: <strong>${itemsOrdered}</strong></p>
    <p>Subtotal: <strong>$${subtotalFormatted}</strong></p>
    <p>Tax (${taxPercent}%): <strong>$${(totalInclTax - subtotal).toFixed(2)}</strong></p>
    <p class="total">Total including tax: <strong>$${totalInclTaxFormatted}</strong></p>

    <!-- link back to the order form -->
    <a href="/" class="back">Place Another Order</a>
  </body>
</html>`;
}

// Export the function so server.js can import it.
// Using a named export (object property) for consistency with home.js.
module.exports = { buildProcessOrderPage };
