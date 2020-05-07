const fs = require('fs')

fs.readFile('student.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
    const data = JSON.parse(fileContents)

    for(let i=0;i<data.length;i++){
        var name = data[i].name;
        var age= data[i].age;
        
        if(data.age>20){
            console.log(name + " 2 " + age )
        }else{
            console.log(name +' 1 ' +age)
        }
    }
})

