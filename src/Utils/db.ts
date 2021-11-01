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
  }
}

// By defining the interface of table records,
// you get better type safety and code completion
export interface Type {
  id?: number
  name: string
  template: string
}
export interface ObjectItem {
  id?: number
  label: string
  data: {
    [propName: string]: any
  }
}
