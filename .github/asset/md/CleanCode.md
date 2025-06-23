# Clean Code

## what is clean code?

1. It not about whether code works,is about whether code is easy read and understand.
2. Should be readable and meaningful
3. Should reduce cognitive load
4. Should be concise and "to the point"
5. Should avoid unintuitive names, complex nesting and big code blocks
6. Should follow common best practices and patterns
7. Clean Code vs Patterns & Principles vs Clean Architecture
   - Clean Code(**focus on single problem/file**): Write code which is readable & easy to understand
   - Patterns & Principles: Write code which is maintainable and extensible
   - Clean Architecture(**focus on a project as a whole**): About how to structure your project, how you sperate your entities, how you store your data, where to write which code.
8. Refacting is your key friend.

## Names

Names should be meaningful:It should transport what's stored in a variable or what a function or method does **without having to look at the code inside of the function or method** or without exploring the values stored in a variable.

### Name Casing

1. snake_case:Variables,Functions ,Methods
2. camelCase:Variables,Functions ,Methods
3. PascalCase:Classes
4. kebap-case:Custom HTML Elements

### Variables & Constants:Data Container

1. Use **nouns** or short phrases with **adjectives**.(eg:userData,isValid)
2. Value is an Object/Number/String:Describe the value.
3. Value is a Boolean :Answer a true or false question.(eg:isActiveUser,loggedIn)

### Functions / Methods: Commands or calculated values

1. Use **verbs** or short phrases with **adjectives**.(eg:sendData,inputIsValid)
2. Function performs an operation:Describe the operation with detail.
3. Function computes a Boolean:Answer a true or false question.(eg:isValid,isPaid)

### Classes: Use classes to create "things"

1. Use **nouns** or short phrases with **nouns**.(eg:User,ResponseBody)

## Structure & Comments

## Functions

## Conditionals & Error Handing

## Classes & Data Structure
