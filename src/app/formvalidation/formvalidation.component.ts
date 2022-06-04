import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  reactiveform!: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.reactiveform = formbuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
    {
      validators:this.match('password','confirmPassword')
    }
    );

  }

  get f() {
    return this.reactiveform.controls;
  }

  match(password: any, confirmPassword: any) {
    return (formgroup: FormGroup) => {
      const passwordControl = formgroup.controls[password];
      const confirmControl = formgroup.controls[confirmPassword];
      if (confirmControl.errors && !confirmControl.errors['match'])
        return;

        if(passwordControl.value!==confirmControl.value){
          confirmControl.setErrors({match:true});
        }
        else
        confirmControl.setErrors(null);


    }
  }


  ngOnInit(): void {
  }

}
