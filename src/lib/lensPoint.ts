import { lens, path } from 'ramda'
import { ENodeType, TMatrix, TPoint } from '../types'

const getPointFromMatrix =
  ([x, y]: TPoint) =>
  (matrix: TMatrix) =>
    path([y, x], matrix)

const setPointOfMatrix =
  ([x, y]: TPoint) =>
  (value: ENodeType, matrix: TMatrix) => {
    const grid: TMatrix = [...matrix]
    grid[y] = [...matrix[y]]
    grid[y][x] = value
    return grid
  }

export const lensPoint = (point: TPoint) =>
  lens(getPointFromMatrix(point), setPointOfMatrix(point))
