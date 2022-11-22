import { lens } from 'ramda'
import { ENodeType, TMatrix, TPoint } from '../types'

const getPointFromMatrix =
  ([x, y]: TPoint) =>
  (g: TMatrix) =>
    g[y][x]

const setPointOfMatrix =
  ([x, y]: TPoint) =>
  (v: ENodeType, g: TMatrix) => {
    const grid: TMatrix = [...g]
    grid[y] = [...g[y]]
    grid[y][x] = v
    return grid
  }

export const lensPoint = (point: TPoint) =>
  lens(getPointFromMatrix(point), setPointOfMatrix(point))
