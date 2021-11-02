import Dexie from 'dexie'
import { shuffle } from 'lodash'
import { INITIAL_OBJECTS, INITIAL_TYPES } from './db.helpers'

export class MyAppDatabase extends Dexie {
  types: Dexie.Table<TypeItem, number>
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
      this.objects.bulkAdd(
        shuffle(
          INITIAL_OBJECTS.map((dog) => ({ ...dog, label: dog.data.name }))
        )
      )
      this.types.bulkAdd(INITIAL_TYPES)
    })
  }
}

// By defining the interface of table records,
// you get better type safety and code completion
export interface TypeItem {
  id?: number
  name: string
  template: string
  defaults: Object
}
export interface ObjectItem {
  id?: number
  label: string
  type: string
  data: {
    [propName: string]: any
  }
}
