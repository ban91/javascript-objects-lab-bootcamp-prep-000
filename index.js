var recipes = {
  breakfast: "oatmeal",
lunch: "salad",
dinner: "steak"}

function updateObjectWithKeyAndValue(obj, key, value){
 return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(recipes, key){
  var newObj = Object.assign({}, recipes);
  delete newObj.key;
 return newObj;
}