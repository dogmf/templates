import { useMemo } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { MyAppDatabase, TypeItem } from '../../Utils/db'

export const useTypeQuery = (): UseQueryResult<TypeItem[]> => {
  return useQuery<TypeItem[]>(
    ['types'],
    async () => {
      let db = new MyAppDatabase()
      return await db.types.toArray()
    },
    {}
  )
}

export const useSingleTypeQuery = (
  typeName: string
): UseQueryResult<TypeItem> => {
  const query = useTypeQuery()
  const type = useMemo(
    () =>
      query.data ? query.data.find((t) => t.name === typeName) : undefined,
    [query.data, typeName]
  )
  return { ...query, data: type } as UseQueryResult<TypeItem>
}
