function getCoordinates(event, board) {
  if (event.destination === null) return {}

  const columnSource = { fromPosition: event.source.index }
  const columnDestination = { toPosition: event.destination.index }

  if (isAColumnMove(event.type)) {
    return { source: columnSource, destination: columnDestination }
  }

  return {
    source: { ...columnSource, fromColumnId: getColumn(board, event.source.droppableId).id },
    destination: { ...columnDestination, toColumnId: getColumn(board, event.destination.droppableId).id }
  }
}

function isAColumnMove(type) {
  return type === 'BOARD'
}

function getCard(board, sourceCoordinate) {
  const column = board.columns.find(column => column.id === sourceCoordinate.fromColumnId)
  return column.cards[sourceCoordinate.fromPosition]
}

function getColumn(board, droppableId) {
  return board.columns.find(({ id }) => String(id) === droppableId)
}

function isValidColumnCoordinates(coordinates) {
  return coordinates.source.fromPosition !== coordinates.destination.toPosition
}

export { getCard, getCoordinates, isAColumnMove, isValidColumnCoordinates }
