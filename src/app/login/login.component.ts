import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from 'src/app/userService';
import { CommonService } from 'src/app/commonServices';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  
  constructor(private router: Router,private commonService: CommonService,private uService: userService) { }

  ngOnInit(): void {
  }
  
  Route(): void {

    if(this.password != null && this.username != null ){
    
    this.commonService.login(this.username,this.password).subscribe(res=>{
     
     if(res != null){
      this.uService.setValue(res.userId);
      this.router.navigate(['/posts']);
     }
     else{
       alert('Login Failed');
     }
    });
    
  }

}
}
