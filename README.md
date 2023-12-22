# Project for Web-final by Khon Konstantin IT2-2117
# Rentify Project with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

# Descriptor

- Create 8-10 HTML pages on your Web App. Project [1]

- Use heading elements, anchor tags, images, paragraph elements. [1]

- Use HTML 5 structure for design your web page. [1]

- Use Block & Inline elements <div> and <span>. Add <hr> & <br> tags. [1]

- Create and use tables: <tr>, <td>, <th>, <thead>, <tbody>, <tfoot> elements. [1]

- Create and tables: colspan & rowspan elements. [1]

- Create and implements the form elements: input types, buttons (radiobutton,
checkbox, submit/select) [1]

- Create menu, drop-down list for nested or hidden form of menu. [1]

- Connect and use external link for CSS and add styles for the web page. Use
color & background-color properties. Use RGB, Hexadecimal & Named
Color systems. [1]

- Use Common Text Properties and font size basics with pixels. Implement
font-family property. [1]

- Use different selectors like element, child, class, universal, id, pseudo-class
& pseudo-element type selectors. [1]

- Use CSS Box-Model: Width & Height, Border & Border-Radius,
Padding & Margin, the Display Property, CSS Units: ems & rems to
control spaces and indentation. [1]

- Implement CSS Properties: Opacity & The Alpha Channel, the Position
Property, CSS Transitions & Goole fonts. [1]

- Use Responsive CSS & Flexbox. Implement Flex-Direction, JustifyContent, Flex-Wrap, Align-Items, Align-Content & Align-Self. Use and
add Media Queries. [1]

- Connect and use Bootstrap framework to add style in webpage. Use
Including bootstrap & Containers, Bootstrap buttons. And Bootstrap
Typography & Utilities. Implement Responsive Bootstrap Grids. Bootstrap
Forms & Navbars. [1] Im used tailwind instaed [?]

- Use spread operator with Array Literals and Spread with Objects. Use
Rest params. [1]

- Create and use forEach and the Map methods. Use filter & reduce methods. [1]

- Use and implement Events. Use OnClick Property & implement
addEventListener. Use & add Keyboard events & Event Object. [1]

- Install and create an empty project React App and choose your own topic.
HTML, CSS, and Bootstrap use by default. [0]

- Use React JSX syntax and components, elements depend on your topic of
about 15-20 JavaScript files. Separate components into the external js files
and organize your Project structure. [1] Using React TSX [?]

- Create for React App functional and stateful (class-based) components by
props and states (as components). Use State and setState() for working with
events handling properties (for example: onClick, onBlur and etc.). [1]

- Manipulate and working with forms for controlled and uncontrolled
components. [1]

- Use React Fragments. For CRUD operations use setState() as function for
Add, Delete and Edit elements. Create Search and Filters components. [1]

- Choose API tools (Fetch API, axios, etc.) for work with REST HTTP
request and response Server connection. Create React API components for
API service. [1]

- Use and make transforming API data. Using appropriate methods and
JavaScript asynchrony libraries (async/await) and functions. [1]

- Add components for handling API errors. Use corresponding Error
handling functions/methods and display relevant information to the user. [1]

- Use React Lifecycle components and class-based approach implementation. [1]

- Create and Use React Lifecycle hook componentDidMount(), to perform
specific actions when a component is mounted (as lifecycle component
stages). [1]

- Create and Use React Lifecycle hook componentDidUpdate() to perform
actions when a component is updated or when its props or state change Also
create and use Lifecycle hook componentWillUnmount() for unmounting
component (as lifecycle component stages). [1]

- Create and Use React Lifecycle hooks for error boundaries/handling
componentDidCatch(), to catch and handle exceptions occurring in child
components. [1]

- Use React Patterns, Pass Functions as data sources. Use Render-function
and Implement children & Clone elements. [1]

- Implement and use React High-Order-Components (HOC) [1]

- Use and add for component HOC Composition of HOC. [1]

- Use and manage React Context API. Make Dynamic Context switch. [1]

- Implement and add Basic Routing work. [1]

- Create and implement React Routes (use 8-10pages). Use Routing in your
page. Use and add Relative paths. [1]

# Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Write POST and DELETE routes in route handlers (app/api)
- Fetch data in server react components by directly accessing database 
- Handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- Handle relations between Server and Child components!

# Problems and Solutions

- Возникла ошибка hydratation где контент не matchilsya s server-render 
Исправление при помощи кастом wrapped in ClientOnly.tsx 

- 'use client' для использования hooks ->
Каждыи компонент и страницы внутри app folder is a server component by default, из-за этого могут возникнуть hydration problems

- В Modal прописали время для задержки перехода и визуализацию <div> (300ms) 

- Hook — это специальная функция, которая позволяет «подцепиться» к возможностям React. Например, хук useState предоставляет функциональным компонентам доступ к состоянию React.

- Установка библиотеки zustand 
В основном он использует хуки как средство взаимодействия с состоянием. По своей сути Zustand придерживается концепции единого источника достоверной информации, при котором все состояние приложения хранится в централизованном хранилище. Это хранилище состоит из срезов состояния, которые представляют собой отдельные единицы состояния, представляющие различные части приложения. Каждый срез состояния определяется как отдельное хранилище, что обеспечивает модульность и инкапсуляцию связанных свойств состояния и связанных с ними действий. Работая с Zustand, вам понадобится меньше шаблонов, а управление его состоянием централизовано и основано на действиях.

- Функциональныи рендеринг в нашем случае React.FC<> позволил использовать наследование

- React-hot-toast для custom errors при axios. Реализована в папке providers, делаем wrapped for Client 

- Наша папка Inputs для визуализации выборки при добавении Properties(место жительства)

- bcrypt — адаптивная криптографическая хеш-функция формирования ключа, используемая для защищенного хранения паролей. 

- После обновления NextAuth не поддерживает app/api folder, так что создадим в новои папке pages/api/auth

- Axios Post call /api/register(creating post route) ->
In new ROUTE handlers we can finally define custom post get patch boot and the lid options, no longer need to use reguest method in a swith method

- Создадим action - server component где мы можем вызвать DB directly и даже не нужно создавать API call для этого 

- e: - react functon для написания собвытии при исключнии

- Устанавливает и Импортируем date-fns для резервации