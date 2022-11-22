import { map, pipe } from 'ramda'
import { ENodeType } from '../types'
import { nodeTypeToClassname } from './util'

export const createNodeElement = (type: ENodeType) => {
  const node = document.createElement('div')
  node.setAttribute('class', `node ${nodeTypeToClassname(type)}`)
  return node
}

const createGridElement = () => {
  const grid = document.createElement('div')
  grid.setAttribute('class', 'grid')
  return grid
}

const createRowElement = () => {
  const row = document.createElement('div')
  row.setAttribute('class', 'row')
  return row
}

const addElementMatrixToDom = (elementMatrix: HTMLDivElement[][]) => {
  const gridElement = createGridElement()

  for (const row of elementMatrix) {
    const rowElement = createRowElement()
    for (const element of row) {
      rowElement.appendChild(element)
    }
    gridElement.appendChild(rowElement)
  }

  document.querySelector('#paths')?.appendChild(gridElement)
}

export const putMatrixToDom = pipe(
  map(map(createNodeElement)),
  addElementMatrixToDom
)
