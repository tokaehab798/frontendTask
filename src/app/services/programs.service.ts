import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private _HttpClient:HttpClient) {}

    getProgram():Observable<any>{
      return this._HttpClient.get<any>(`https://mohanad-gadallah-mfyg726r7q-uc.a.run.app/programstask/1?name=None&city=None&Language=None&type=None&level=None&sort=None&school=None&category=None`)
    }

   
}
