## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
![wireframe for todo shopping list](/assets/Sign-in%20Page.png "sign in page")
![wireframe for todo shopping list](/assets/Main-page.png "main shopping list page")
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTMl main page:
    -header with 3 divs
        -1 div for menu (if time to make work)
        -1 div for search bar and button (search items in list)
        -1 div for image (logo)
    -body with 2 sections
        -section 1 (left section)
            -div with image in it 
            -form 
                -input for item (Formdata get('list-item'))
                -input for quantity of said item ( see above )
                -button for submit ( in case they want to submit instead of enter )
        -section 2
            -div to hold all list additions (add a scroll bar?)

## events main page:
-on load display all current items in shopping list
-when input data is submitted populate supabase table and have display fetch items and display them
-upon buying the item cross off list (toggle)
-search bar can find specific items in your shopping list
-maybe more depending on time.
-add animation on page load
