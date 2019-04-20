import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
    selector: 'app-signup-screen',
    templateUrl: './signup-screen.component.html'
})
export class SignupScreenComponent implements OnInit{
    signupForm: FormGroup;

    ngOnInit() {
        this.signupForm = new FormGroup({
            nombres: new FormControl(null, Validators.required),
            apellidos: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
            ]),
            password: new FormControl(null, Validators.required),
            password2: new FormControl(null, Validators.required)
        })
    }

    onSubmit() {
        if(this.signupForm.valid){
            const { nombres, apellidos, email, password, password2 } = this.signupForm.value;
            if(password === password2){
                const user = new User(email,password,password2,nombres,apellidos);
                console.log("-----",user);
            } else{
                console.log("Las contraseñas deben ser iguales.");
            }
        }
    }
}