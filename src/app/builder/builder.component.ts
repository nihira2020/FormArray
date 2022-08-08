import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(private _builder:FormBuilder) { }

  ngOnInit(): void {
  }

  _control=this._builder.control('',Validators.required) //  new FormControl('');

  _group= this._builder.group({
 username:this._builder.control('',Validators.required),
 name:this._builder.control('',Validators.required)
  }); //new FormGroup({})

  _array=this._builder.array([
    this._builder.control('',Validators.required),
    this._builder.control('',Validators.required)
  ]);//new FormArray([]);

  _arraywithgroup=this._builder.array([
     this._builder.group({
     name: this._builder.control(''),
     username: this._builder.control('',Validators.required)
     }),
     this._builder.group({
      name: this._builder.control(''),
      username: this._builder.control('',Validators.required)
      }),
      // this._builder.array([
      //   this._builder.group({
      //      name: this._builder.control(''),
      //      username: this._builder.control('',Validators.required)
      //      }),
      // ])
  ]);

  Getvalue(){
   console.log(this._arraywithgroup.value);
   console.log(this._arraywithgroup.valid);
  }
  Setvalue(){
  //this._array.setValue(["Ramesh","Jhon"]);
  this._arraywithgroup.setValue([{name:'Test User',username:'testuser'},{name:'Admin User',username:'adminuser'}])
  }

}
