import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";


@Injectable()
export class EmployeeService{

    url : string = "http://localhost:3000/employees";

    constructor(private http: Http){
        
    }

    getEmployees(){
        return this.http.get(this.url).pipe(
            map(
                (response: Response) => {
                    return response.json();
                }
            )
        )
    }
}