## Урок 14

### Задание за домашна работа

Здравейте, 

Като домашно, искам да си довършите задачите от лекцията днес.

Ето ги и условията им:

1. Напишете функция greeting, която приема параметър name и като резултат връща стринг, който поздравява. 

    Например:

    ```javascript
    greeting("Jeni"); // "Hello, Jeni!"
    ```
    
2. Напишете клас Person, който да задава собствено и фамилно име на конструираните обекти.

    Пример:

    ```javascript
    new Person("Бойко", "Борисов"); // Person { firstName: "Бойко", lastName: "Борисов" }
    ```

3. Направете втора функция, която да поздравява, но я кръстете personGreeting и вместо име й подавайте обект от тип Person.

    Пример:

    ```javascript
    personGreeting(new Person("Бойко", "Борисов")); // "Hello, Бойко Борисов!"
    ```

4. Направете така, че последната функция да приема още един параметър beFormal, който може да има стойност true или false. Ако е true, нека поздрава да е официялен (т.е. по двете имена на човека), а ако е false - да е само по първо име.

    Пример:

    ```javascript
    var person = new Person("Бойко", "Борисов");
    personGreeting(person, true); // "Hello, Бойко Борисов!"
    personGreeting(person, false); // "Hi, Бойко!"
    ```

5. Направете функция (метод) introduce в класа Person, която да връща стринг, който представя текущия обект (т.е. човека, който е инстанция на класа)

    Пример:

    ```javascript
    var person = new Person("Бойко", "Борисов");
    person.introduce(); // "Здравейте, казвам се Бойко Борисов!"
    ```

6. Добавете още едно поле (property) в класа Person, което се казва isPolite Нека при създаване на обект от този клас, това поле да се задава автоматично на true

    Пример:

    ```javascript
    var person = new Person("Бойко", "Борисов"); // Person { firstName: "Бойко", lastName: "Борисов", isPolite: true } 
    ```

7. Направете функция (метод) bePolite() в класа Person. Тя трябва да може да променя isPolite пропъртито по подаден параметър, който може да е true или false

    Пример:

    ```javascript
    var person = new Person("Бойко", "Борисов");
    
    person.isPolite; // true
    person.bePolite(false);
    person.isPolite; // false
    ```

8. Променете метода introduce, така че да връща учтиво представяне, когато isPolite полето е true и неформално представяне, когато isPolite е false

    Пример:

    ```javascript
    var person = new Person("Бойко", "Борисов");
    
    person.introduce(); // “Казвам се Бойко Борисов!”
    person.bePolite(false);
    person.introduce(); // "Аз съм Бойко!"
    ```

9. Направете функция (метод) greet() в класа Person, която получава като параметър друг човек (greet(otherPerson)) и която поздравява другия човек:

    Пример:

    ```javascript
    var boiko = new Person("Бойко", "Борисов");
    var lili = new Person("Лили", "Иванова");
    
    boiko.introduce(); // "Казвам се Бойко Борисов!"
    lili.bePolite(false);
    
    lili.greet(boiko); // "Здрасти, Бойко!"
    lili.introduce(); // "Аз съм Лили."
    ```

10. Променете метода introduce, така че да може да получава параметър от тип Person ( `introduce(otherPerson)` ). Kомбинирайте greet и introduce kato използвате резултата от `greet(otherPerson)` в introduce.  
Променете  greet, така че да проверява дали параметъра otherPerson е подаден ( `if (otherPerson != undefined) {..}` ). Ако да - тогава поздравете по име (използвайте съответно учтива и неучтива форма, както досега).  
Ако не е подаден параметър otherPerson, тогава просто върнете само поздрав без име ("Здрасти!" / "Здравейте!")

    Пример:

    ```javascript
    var boiko = new Person("Бойко", "Борисов");
    var lili = new Person("Лили", "Иванова");
    
    boiko.introduce(); // "Здравейте! Казвам се Бойко Борисов!"
    
    lili.bePolite(false);
    lili.introduce(boiko); // "Здрасти, Бойко! Аз съм Лили."
    ```

Поздрави!  
Жени
