import './style.css'
import { ENodeType, TMatrix, TPoint } from './types'
import { findPathTo } from './lib/pathfinding'
import { map, pipe, reduce, set } from 'ramda'
import { lensPoint } from './lib/lensPoint'
import { putMatrixToDom } from './lib/dom'
import Pathfinding from 'pathfinding'

const MATRIX: TMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const START_POINT: TPoint = [5, 5]
const END_POINT: TPoint = [4, 2]

const finders = [
  new Pathfinding.AStarFinder(),
  // Old types in @types/Pathfinding
  // @ts-expect-error
  new Pathfinding.AStarFinder({ allowDiagonal: true }),
  new Pathfinding.DijkstraFinder(),
  // @ts-expect-error
  new Pathfinding.DijkstraFinder({ allowDiagonal: true })
]

const pointsToDom = pipe(
  map(lensPoint),
  reduce((matrix, lens) => set(lens, ENodeType.path, matrix), MATRIX),
  putMatrixToDom
)

const pathFind = pipe(findPathTo(START_POINT, END_POINT, MATRIX), pointsToDom)

pointsToDom([START_POINT, END_POINT])
map(pathFind, finders)
