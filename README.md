# Cat Shopfront 
This project was undertaken as part of a Code Nation bootcamp. Working as a team of 3 junior devs, we were tasked with creating a basic shopfront for selling cats.

## Structure
- Pictures of cats come from an API
- Information about each cat comes from the Faker library.
- Cat pictures and information are stored in an array of "Cat Product Objects"
- This array is stored as a state within React. 
- The state is referenced by every other component on the page.

## Components
- Each Cat Product Object is used to generate a card as part of a card display.
- Each of those cards contains a button that can change the CPO's "selected" attribute, this attribute determines membership in the storefront's basket.
- The basket is designed as a modal.

## Styling
- Styling is undertaken in vanilla CSS.
