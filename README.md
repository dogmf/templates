# Templater

Mini app with test variant of resolving next problem...

### Problem

Table is not capable to show all properties of listed objects of different types. Templates of object cards must be tunable, to provide opportunity to fix visuals without touching frontend code.

### Solution

Give each type property - `template`. This field will be processed by templater and used in list on each item with it's features.

## Stack

- [react](https://reactjs.org/) - JavaScript app ui library
  - used [create-react-app](https://github.com/facebook/create-react-app)
- [antd](https://ant.design/) - React UI Kit
- [dexie](https://dexie.org/) - IndexedDB wrapper
- [handlebars](https://handlebarsjs.com/) - Template Engine
- [react-ace](https://github.com/securingsincity/react-ace) - React version of web code editor [Ace](https://ace.c9.io/)
- [react-query](https://react-query.tanstack.com/) - React hooks for querying and caching data. 
- [react-location](https://react-location.tanstack.com/) - React routing system