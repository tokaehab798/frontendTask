import { Component } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs.service';
import { Program } from 'src/app/interfaces/program';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  Programs: Program[] = []; 
  constructor(private _ProgramsService:ProgramsService){}
    ngOnInit(): void {
    this._ProgramsService.getProgram().subscribe((data) => {
      console.log('Data received:', data);  
      this.Programs = data;
    }, error => {
      console.error('Error fetching data:', error);  
    });

  }


}
