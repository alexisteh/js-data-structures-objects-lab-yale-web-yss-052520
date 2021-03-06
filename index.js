// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(obj, key, val){
    return Object.assign({}, obj, {[key]: val}) 
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
    return Object.assign(obj, {[key]: val})
}

function deleteFromDriverByKey(obj, key){
    let newObj = Object.assign({}, obj) 
    delete newObj[key] 
    return newObj 
} 

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]
    return obj 
} 