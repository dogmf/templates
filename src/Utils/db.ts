import Dexie from 'dexie'

export class MyAppDatabase extends Dexie {
  types: Dexie.Table<Type, number>
  objects: Dexie.Table<ObjectItem, number>

  constructor() {
    super('MyAppDatabase')

    //
    // Define tables and indexes
    // (Here's where the implicit table props are dynamically created)
    //

    this.version(1).stores({
      types: '++id, name',
      objects: '++id, label'
    })

    // The following lines are needed for it to work across typescipt using babel-preset-typescript:
    this.types = this.table('types')
    this.objects = this.table('objects')

    this.on('populate', () => {
      DOGS.forEach((dog) => this.objects.add({ label: dog.name, data: dog }))
      TYPES.forEach((type) => this.types.add(type))
    })
  }
}

// By defining the interface of table records,
// you get better type safety and code completion
export interface Type {
  id?: number
  name: string
  template: string
  defaults: Object
}
export interface ObjectItem {
  id?: number
  label: string
  data: {
    [propName: string]: any
  }
}

const TYPES = [
  {
    name: 'dog',
    template:
      "<div\r\n  style='\r\n    padding: 0.3em 1em;\r\n    display: flex;\r\n    gap: 1em;\r\n    max-height: 140px;\r\n    overflow: hidden;\r\n  '\r\n>\r\n  <div>\r\n    <img style='height: 80px' src='{{photo}}' />\r\n  </div>\r\n  <div>\r\n    <span class='ant-tag'>dog</span>\r\n    {{#if good}}\r\n      <span class='ant-tag ant-tag-purple'>good</span>\r\n    {{/if}}\r\n    <div style='display:flex; align-items:baseline; gap: 1em'>\r\n      <h1 style='margin-bottom: 0'>\r\n        {{name}}\r\n      </h1>\r\n      <i>{{age}}</i>\r\n    </div>\r\n    <p>{{about}}</p>\r\n  </div>\r\n</div>",
    id: 3,
    defaults: {
      name: 'sparky',
      age: 22,
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqwgS0r8OYnN9EK6xtPA47NkDMquu9BSGSoGHrCq73UNWZ8ZGAj6ipV9LMhkiy2x6reg&usqp=CAU',
      about:
        'Vestibulum eget leo nec est pellentesque interdum at ac magna. Morbi eget condimentum velit. Donec quis mi molestie, vulputate leo eget, lobortis est. Nam lectus mauris, sodales et maximus eget, commodo quis turpis. Praesent scelerisque tellus nulla, in volutpat dolor vestibulum non. Donec ut mattis nulla, non bibendum justo. Fusce vestibulum hendrerit dui, ac vehicula lacus pretium sed.',
      good: true
    }
  },
  {
    name: 'template',
    defaults: {},
    template:
      "<div class='ant-card'>\r\n  <div class='ant-card-head'>\r\n    <div class='ant-card-head-wrapper'>\r\n      <div class='ant-card-head-title'>Card title</div>\r\n      <div class=\"ant-card-extra\"><span class=\"ant-tag ant-tag-green\">tag</span></div>\r\n    </div>\r\n  </div>\r\n  <div class='ant-card-body'>Card content</div>\r\n</div>",
    id: 5
  }
]

const DOGS = [
  {
    id: 0,
    picture: 'http://placehold.it/32x32',
    type: 'dog',
    age: 25,
    name: 'Robbins',
    gender: 'male',
    about:
      'Elit anim laboris et ipsum anim sit aliquip labore Lorem duis consequat. Magna sit elit Lorem nulla ut. Cupidatat mollit in laborum qui ea occaecat tempor ad aliquip dolor nulla magna ad enim. In non irure eiusmod ad.\r\n',
    tags: ['sunt']
  },
  {
    id: 1,
    picture: 'http://placehold.it/32x32',
    type: 'dog',
    age: 36,
    name: 'Carolina',
    gender: 'female',
    about:
      'Quis veniam quis nulla consectetur sunt voluptate non culpa amet qui cupidatat veniam consequat commodo. Id quis esse cillum laborum aute Lorem dolore culpa. Minim do commodo magna reprehenderit eu duis velit nisi minim. Nisi nulla nulla adipisicing excepteur do ad.\r\n',
    tags: ['et']
  },
  {
    id: 2,
    picture: 'http://placehold.it/32x32',
    type: 'dog',
    age: 23,
    name: 'Sloan',
    gender: 'male',
    about:
      'Magna officia veniam amet Lorem dolor ipsum anim proident aliqua non est voluptate. Tempor exercitation veniam aute dolor incididunt eiusmod. Pariatur sint minim consequat non aliquip laboris. Irure magna aute nulla amet. Voluptate eiusmod labore exercitation commodo quis dolore quis. Sint ex consequat aliquip deserunt nostrud et do proident id duis.\r\n',
    tags: ['dolore']
  },
  {
    id: 3,
    picture: 'http://placehold.it/32x32',
    type: 'dog',
    age: 27,
    name: 'Lorene',
    gender: 'female',
    about:
      'Adipisicing mollit reprehenderit est cupidatat velit laboris proident est. Sit ullamco consectetur aute deserunt occaecat commodo irure do ex est ex cillum voluptate. Duis labore nostrud in quis nostrud laborum est irure ullamco. Sint irure tempor reprehenderit id commodo magna.\r\n',
    tags: ['magna', 'ad', 'aliqua']
  },
  {
    id: 4,
    picture: 'http://placehold.it/32x32',
    type: 'dog',
    age: 37,
    name: 'Liza',
    gender: 'female',
    about:
      'Eiusmod fugiat consectetur in adipisicing reprehenderit occaecat in voluptate. Consequat labore laboris ad aute Lorem voluptate amet do nostrud. Qui excepteur elit velit cupidatat deserunt irure sunt quis ex ut cillum amet. Incididunt cupidatat amet nulla ullamco fugiat sit non culpa. Qui mollit reprehenderit cillum cupidatat proident culpa in cupidatat quis.\r\n',
    tags: ['sint']
  }
]
