class App{
    constructor(){}
  
    getState(){
      var appStateRef  = database.ref('appState');
      appStateRef.on("value",function(data){
         appState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        appState: state
      });
    }
  
    async start(){
      if(appState === 0){
        student = new Student();
        var studentCountRef = await database.ref('student').once("value");
        if(studentCountRef.exists()){
          studentCount = studentCountRef.val();
          student.getCount();
        }
        form = new Form()
        form.display();
      }

    

     
    }
  
    play(){
      form.hide();
     // textSize(30);
      //text("Game Start", 120, 100)
      student.getstudentInfo();
  
      
    }


}     