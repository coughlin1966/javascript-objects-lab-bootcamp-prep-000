var recipes = {Flour: 'Cake', Water: 'Cake', Dynamite: 'Not Food'}

function updateObjectWithKeyAndValue (list,ingrd,baked) {
  return Object.assign({}, list, {[ingrd]: baked} )
}
updateObjectWithKeyAndValue(recipes,eggs,'cake')









function deleteFromObjectByKey (list,ingrd) {
  var newlist = Object.assign ({},list)
  delete newlist[ingrd]
  return newlist
}
deleteFromObjectByKey(cake,'Vanilla')
