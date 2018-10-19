import {
    MatCardModule, 
    MatButtonModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    exports: [
        MatCardModule,
        MatButtonModule
    ]
})
export class MaterialModule {}
