import { ENodeType } from '../types'

export const assertNever = (val: never) => {
  throw new Error('Unhandled type' + val)
}

export const nodeTypeToClassname = (type: ENodeType) => {
  switch (type) {
    case ENodeType.empty:
      return 'empty'
    case ENodeType.obstacle:
      return 'obstacle'
    case ENodeType.path:
      return 'path'
    default:
      return assertNever(type)
  }
}
