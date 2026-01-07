# Various Pseudocode Styles for FizzBuzz
## From Eloquent JavaScript by Marijn Haverbeke page 41
1. ![Click here](file:///C:/Users/Public/Downloads/Full%20Stack%20Web%20Development/Readings/Digital%20Books/JavaScript/Eloquent_JavaScriptOLD.pdf)

## FizzBuzz
 Write a program that uses console.log to print all the numbers from 1
 to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
 instead of the number, and for numbers divisible by 5 (and not 3), print
 "Buzz" instead.

 When you have that working, modify your program to print "FizzBuzz",
 for numbers that are divisible by both 3 and 5 (and still print "Fizz" or
 "Buzz" for numbers divisible by only one of those).

 (This is actually an interview question that has been claimed to weed
 out a significant percentage of programmer candidates. So if you solved
 it, you’re now allowed to feel good about yourself.)

## **Style 1: Super Simple (Like Explaining to a Friend)**

```
Count from 1 to 100

For each number:
    If it divides evenly by both 3 and 5, say "FizzBuzz"
    Otherwise, if it divides evenly by 3, say "Fizz"
    Otherwise, if it divides evenly by 5, say "Buzz"
    Otherwise, just say the number
```

---

## **Style 2: Structured with Details**

```
PROGRAM FizzBuzz

FOR number FROM 1 TO 100 DO
    IF number divisible by 3 AND divisible by 5 THEN
        PRINT "FizzBuzz"
    ELSE IF number divisible by 3 THEN
        PRINT "Fizz"
    ELSE IF number divisible by 5 THEN
        PRINT "Buzz"
    ELSE
        PRINT number
    END IF
END FOR

END PROGRAM
```

---

## **Style 3: Step-by-Step (Very Detailed)**

```
Step 1: Start
Step 2: Set counter to 1
Step 3: While counter is less than or equal to 100:
        Step 3a: Check if counter divides evenly by 15 (both 3 and 5)
                 If yes: Print "FizzBuzz"
                        Go to Step 3f
        Step 3b: Check if counter divides evenly by 3
                 If yes: Print "Fizz"
                        Go to Step 3f
        Step 3c: Check if counter divides evenly by 5
                 If yes: Print "Buzz"
                        Go to Step 3f
        Step 3d: If none of the above, print the counter number
        Step 3e: Add 1 to counter
        Step 3f: Repeat from Step 3
Step 4: End
```

---

## **Style 4: Minimal/Compact**

```
FOR i=1 to 100:
    i%15=0 → "FizzBuzz"
    i%3=0 → "Fizz"
    i%5=0 → "Buzz"
    else → i
```

---

## **Style 5: Function-Based**

```
FUNCTION getFizzBuzz(number):
    IF number MOD 15 = 0:
        RETURN "FizzBuzz"
    ELSE IF number MOD 3 = 0:
        RETURN "Fizz"
    ELSE IF number MOD 5 = 0:
        RETURN "Buzz"
    ELSE:
        RETURN number

MAIN:
    FOR i FROM 1 TO 100:
        result = getFizzBuzz(i)
        PRINT result
```

---

## **Style 6: Flowchart-Style (Narrative)**

```
START
  ↓
[Set number = 1]
  ↓
<Is number ≤ 100?> ----NO---→ END
  |
  YES
  ↓
<number divisible by 15?> --YES-→ [Print "FizzBuzz"]
  |                                      ↓
  NO                                     |
  ↓                                      |
<number divisible by 3?> ---YES-→ [Print "Fizz"]
  |                                      ↓
  NO                                     |
  ↓                                      |
<number divisible by 5?> ---YES-→ [Print "Buzz"]
  |                                      ↓
  NO                                     |
  ↓                                      |
[Print number] ←-----------------------←-┘
  ↓
[Increment number by 1]
  ↓
[Go back to "Is number ≤ 100?"]
```

---

## **Style 7: Natural Language (Most Readable)**

```
When the program starts:
    Start counting at 1
    
    Keep going until you reach 100:
        Look at the current number
        
        Check these conditions in order:
            - Can the number be divided evenly by both 3 and 5?
              If yes, say "FizzBuzz" and move to the next number
            
            - Can the number be divided evenly by 3?
              If yes, say "Fizz" and move to the next number
            
            - Can the number be divided evenly by 5?
              If yes, say "Buzz" and move to the next number
            
            - If none of the above are true:
              Just say the number itself
        
        Move to the next number
    
    Done when you've checked all numbers from 1 to 100!
```

---

## **Style 8: Code-Like (Closest to Real Code)**

```pseudocode
FOR i ← 1 TO 100 DO
    IF i MOD 15 = 0 THEN
        OUTPUT "FizzBuzz"
    ELSIF i MOD 3 = 0 THEN
        OUTPUT "Fizz"
    ELSIF i MOD 5 = 0 THEN
        OUTPUT "Buzz"
    ELSE
        OUTPUT i
    ENDIF
ENDFOR
```

---

## **Style 9: Recipe-Style (Instructions)**

```
FizzBuzz Recipe:

Ingredients needed:
- Numbers from 1 to 100
- Division checker
- Output display

Instructions:
1. Start with the number 1
2. For each number up to 100:
   
   a) Test for "FizzBuzz":
      - Divide by 3, check if remainder is 0
      - Divide by 5, check if remainder is 0
      - If both have no remainder → serve "FizzBuzz"
      - Go to step 2
   
   b) Test for "Fizz":
      - Divide by 3, check if remainder is 0
      - If no remainder → serve "Fizz"
      - Go to step 2
   
   c) Test for "Buzz":
      - Divide by 5, check if remainder is 0
      - If no remainder → serve "Buzz"
      - Go to step 2
   
   d) If none of the above:
      - Serve the number itself

3. Move to next number
4. Repeat until you've served all 100
```

---

## **Style 10: Decision Tree**

```
For each number from 1 to 100:
│
├─ Divisible by 3?
│  ├─ YES → Divisible by 5?
│  │        ├─ YES → Output "FizzBuzz"
│  │        └─ NO → Output "Fizz"
│  │
│  └─ NO → Divisible by 5?
│           ├─ YES → Output "Buzz"
│           └─ NO → Output the number
```

---

## **Style 11: String Building Approach (Alternative Logic)**

```
FOR number FROM 1 TO 100:
    result = empty string
    
    IF number divisible by 3:
        add "Fizz" to result
    
    IF number divisible by 5:
        add "Buzz" to result
    
    IF result is empty:
        result = number
    
    PRINT result
END FOR
```

---

## **Style 12: Table/Truth Table Style**

```
For each number N from 1 to 100:

| Condition        | Action        |
|------------------|---------------|
| N % 15 = 0       | Print "FizzBuzz" |
| N % 3 = 0        | Print "Fizz"     |
| N % 5 = 0        | Print "Buzz"     |
| None of above    | Print N          |

(Check conditions from top to bottom, use first match)
```

---

## **Style 13: Bullet Point with Examples**

```
• Loop from 1 to 100
• For each number, apply these rules:
  • Divisible by 15 (3×5) → "FizzBuzz"
    Example: 15, 30, 45, 60, 75, 90
  • Divisible by 3 only → "Fizz"
    Example: 3, 6, 9, 12, 18, 21
  • Divisible by 5 only → "Buzz"
    Example: 5, 10, 20, 25, 35, 40
  • None of the above → the number itself
    Example: 1, 2, 4, 7, 8, 11
```

---

## **Style 14: Mathematical Notation**

```
∀n ∈ {1, 2, 3, ..., 100}:

output(n) = {
    "FizzBuzz"  if n ≡ 0 (mod 15)
    "Fizz"      if n ≡ 0 (mod 3)
    "Buzz"      if n ≡ 0 (mod 5)
    n           otherwise
}
```

---

## **Style 15: English Prose**

```
Begin by considering each integer starting at one and ending at one hundred.

For each such integer, evaluate the following:
Should the integer be evenly divisible by fifteen, output the word "FizzBuzz".
Otherwise, should it be evenly divisible by three, output the word "Fizz".
Otherwise, should it be evenly divisible by five, output the word "Buzz".
In all other cases, output the integer itself.

Proceed to the next integer and repeat until complete.
```

---

## **Key Insights About FizzBuzz:**

### **Order Matters!**
```
✅ CORRECT ORDER:
   Check 15 first (or 3 AND 5)
   Then check 3
   Then check 5

❌ WRONG ORDER:
   Check 3 first → Would print "Fizz" for 15, 30, etc.
   Never reach "FizzBuzz"!
```

### **Two Main Approaches:**

**Approach 1: Check 15 first**
```
if (n % 15 == 0) → "FizzBuzz"
else if (n % 3 == 0) → "Fizz"
else if (n % 5 == 0) → "Buzz"
```

**Approach 2: Build string**
```
result = ""
if (n % 3 == 0) result += "Fizz"
if (n % 5 == 0) result += "Buzz"
if (result empty) result = n
```

Both are correct! The string-building approach is considered more elegant and extensible.