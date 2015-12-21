## Урок 17

### Задачи за домашна работа

Домашно 17 е задължително!

##### Група 1

Да се направи регистрационна форма, която да има следните полета:  
`name`, `email`, `password`, `password confirmation`, `picture url`

Направете Javascript валидация за всички полета, като използвате регулярни изрази.

##### Група 2

1. Направете html регистрационна форма, която да има следните полета: `username`, `password`, `password_confirmation`, `email`, `avatar_url` и която да събмитва към `http://zenifytheweb.com/api/examples/register`
2. Използвайте Ajax за да направите асинхронен рикуест при `blur` на `username` полето към `check_username` ендпойнт-а на API-то
3. Използвайте отговора на API-то за да визуализирате резултата

Ето я и спецификацията на API-то:

#### API url: `http://zenifytheweb.com/api/examples`

##### Endpoint: `/check_username`

method: GET  
Params: username (String)  
Returns: json

Example request data:  
`{ username: username }`

Example response on success when the username is availavle:  
200 OK  
`"available"`

Example response on success when the username is NOT availavle:  
200 OK  
`"taken"`

Example response on failure:  
510 OK  
`{ error: "The error message comes here" }`

##### Endpoint: `/register`

method: POST  
Params: `username`, `password`, `password_confirmation`, `email`, `avatar_url`  
Returns: json

Example request data:  
`{ username: username, password: password, password_confirmation: password_confirmation, email: email, avatar_url: avatar_url }`

Example response on success:  
200 OK  
`{ status: success, msg: "Successfully registered" }`

200 OK  
`{ status: failure, msg: "Username is required" }`

Example response on failure:  
510 OK  
`{ error: "The error message comes here" }`


Можете да използвате примера от лекцията, който е качен тук:
http://zenifytheweb.com/courses/lessons/lesson17/example/index.html

Поздрави!  
Жени
