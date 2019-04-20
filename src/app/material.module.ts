import { NgModule } from '@angular/core';

import { MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatInputModule,
    MatButtonModule, 
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatRadioModule } from '@angular/material';


const modules =  [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule
];

@NgModule({
    imports:modules,
    exports: modules
})

export class MaterialModule { }