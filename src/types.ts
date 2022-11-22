export type TMatrix = ENodeType[][]
export type TPoint = [number, number]

export enum ENodeType {
  empty = 0,
  obstacle = 1,
  path = 2
}
