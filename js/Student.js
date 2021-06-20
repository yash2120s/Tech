class Student {
    constructor(){
      this.index = null;
    //  this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var studentCountRef = database.ref('studetCount');
      studentCountRef.on("value",(data)=>{
        studentCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        studentCount: count
      });
    }
  
    update(){
      var studentIndex = "students/student" + this.index;
      database.ref(studentIndex).set({
        name:this.name,
        //class:this.class
      });
    }
  
    static getstudentInfo(){
      var studentInfoRef = database.ref('students');
      studentInfoRef.on("value",(data)=>{
        allstudent = data.val();
      })
    }
  }
  