var recipes = {obj:'0'}

var recipes = new Object
function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithAndValue(object, key, value)
