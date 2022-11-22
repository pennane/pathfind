import Pathfinding, { Finder } from 'pathfinding'
import { TMatrix, TPoint } from '../types'

export const findPathTo =
  (startPoint: TPoint, endPoint: TPoint, matrix: TMatrix) =>
  (finder: Finder) => {
    return finder.findPath(
      startPoint[0],
      startPoint[1],
      endPoint[0],
      endPoint[1],
      new Pathfinding.Grid(matrix)
    ) as TPoint[]
  }
