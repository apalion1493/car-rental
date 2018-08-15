# CarRental

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


 В качестве основной системы разработки проекта используется фреймворк от компании Google — Angular 6. Система строиться по принципу конструктора Лего. Для этого будет использоваться базовая структура файлов проекта от самой системы сборки Angular, описанной в её документации
Для написания понятного кода для Front-end части проекта используется методология BEM разработанная компанией Yandex и получившая недавно широкое распространение в мире. Данный подход позволяет подключать к проекту дополнительных разработчиков, которые без особых затруднений смогут быстро начать свою работу. А также в случае, если первоначальные разработчики по какой-то причине не могут сопровождать проект, то при передаче проекта новой команде она также имеет возможность быстро разобраться в проекте благодаря хорошо описанной документации данной методологии, которую можно найти в интернете.
В качестве препроцессоров (т.е. систем, которые облегчают написание и понимание кода, а также ускоряют разработку) используется: SCSS - для преобразования в CSS, TypeScript - для преобразования в JavaScript.
Для общих стилей и в целом для всего шаблона проекта используется Bootstrap 4 — очень популярная система написания шаблонов. Она применяется как основа для всех стилей, причем будет использоваться не классический способ с подключением и переопределением стилей файлов CSS, а более сложный, но правильный метод написания и изменения файлов SCSS, которые также идут в сборке с данной технологией. Данный метод подразумевает переопределение большого количества переменных, которые находятся в основном файле переменных, количество строк которых чуть менее 900. Для каждой из них нужно исследовать шаблон дизайнера и одну за одной приводить в соответствие с дизайном.
Так как работа была прекращена в процессе разработки другие технологии и плагины не использовались.
