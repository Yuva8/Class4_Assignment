var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

object1 = {};
object2 = {};


Object.keys(obj1).sort().forEach((key)=>{
  object1[key] = obj1[key]
})

Object.keys(obj2).sort().forEach((key1)=>{
    object2[key1] = obj2[key1]
  })
 console.log(object1)
 console.log(object2)
  console.log(JSON.stringify(object1) === JSON.stringify(object2));
  