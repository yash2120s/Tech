class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Confirm');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Tech");
      title.position(displayWidth/2);
  
      this.input.position(displayWidth/2-40, displayHeight/2-80);
      this.button.position(displayWidth/2+30,displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        student.name = this.input.value();
        studentCount+=1;
        student.index = studentCount;
        student.update();
       // student.updateCount(studentCount);
     //   this.greeting.html("Hello " + student.name)
       // this.greeting.position(displayWidth/2 - 70, displayHeight/4);
         app.update(1)
    });
  
    }
  }
  