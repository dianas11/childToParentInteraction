import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

// step 4  to be able to send the emit event out to the parent component we decorate with @Output
// what we are doing in the child component is listening to the button click event and then sending out a custom
// event called greetEvent. the parent component can now catch this event and execute any piece of code.
@Output() greetEvent = new EventEmitter();
name = 'TheMadMuse';
  
  constructor() { }

  ngOnInit(): void {
  }
  

  // step 3, from this method we need to be able to send a message to the parent 
  //component to ask the parent component to execute the greet method
  callParentGreet(){
    this.greetEvent.emit(this.name);
  }

}
