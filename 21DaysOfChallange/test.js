const post = [
    {title:'Post One', body:'This Is Post One'},{title:'Post Two',body:'This Is post Two'}];
    
function createPost(post,callback)
    {
        setTimeout(function(){
            post.push(post)
            callback();
        },2000)
    }
    
function getPost()
    {
        setTimeout(function(){
            let output = '';
            post.forEach(function(post){
                output +=  post.title ;
            },1000);
    }
    
    createPost([{title:'Post Three', body:'This is Post three'}],getPost());