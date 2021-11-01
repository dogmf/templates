import Dexie from 'dexie'

export class MyAppDatabase extends Dexie {
  types: Dexie.Table<Type, number>

  constructor() {
    super('MyAppDatabase')

    //
    // Define tables and indexes
    // (Here's where the implicit table props are dynamically created)
    //
    this.version(1).stores({
      types: '++id, name, template'
    })

    // The following lines are needed for it to work across typescipt using babel-preset-typescript:
    this.types = this.table('types')
  }
}

// By defining the interface of table records,
// you get better type safety and code completion
export interface Type {
  id?: number
  name: string
  template: string
}
