1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
• getElementById = This JS Property select only one
element use ID.
• getElementsByClassName = This JS property select multiple elements and give (HtmlCollection).
• querySelector = this is a css selector. select only one element
• querySelectorAll = This is select all matching elements and give (NodeList).

2. How do you create and insert a new element into the DOM?

Ans:
const div = document.createElement("div");
div.textContent = "I Love JavaScript";
document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?

Ans:
• When clicket or triggered on child element than it gose child to perent, perent to Document and it's call Event Bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
• To manage child events, add an event listener to a parent element.
• this is dynami and give better performance.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault() = Stops default browser behavior.
stopPropagation() = Stops event bubbling.
