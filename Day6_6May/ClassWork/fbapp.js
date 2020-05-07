var fs = require('fs')
const faceBookNotification = 'fbNotification.txt'
const faceBookMessages = 'fbmsgs.txt';

fs.exists(faceBookNotification , function(exists){
    if(exists){
        fs.stat(faceBookNotification,function(err,statCheck){
            if(statCheck.isFile()){
                fs.readFile(faceBookNotification,function(err,data){
                    if(err){
                        throw err;
                    }
                })
            }
        })
    }else{
        throw 'File doesnt exist';
    }
})


fs.exists(faceBookMessages , function(exists){
    if(exists){
        fs.stat(faceBookMessages,function(err,statCheck){
            if(statCheck.isFile()){
                fs.readFile(faceBookMessages,function(err,data){
                    if(err){
                        throw err;
                    }
                })
            }
        })
    }else{
        throw 'File doesnt exist';
    }
})

