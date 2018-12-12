import { Component,OnInit } from '@angular/core';
import {UsersService} from './services/users.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './home.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersService]
})


export class homepageComponent {
  title = 'myApp';
  //private data :any[];
  private load : boolean = false;
  private USER : any = [];
  private page_no:number;

      constructor(private usersService : UsersService,private router : Router){
      		this.load = true;
     	  this.get_result(1);

	}

	ngOnInit(){
	
	}

  
   next(n){
    this.get_result(n);
   }
    get_result(n){
	let number=n;
	this.load = true;
    this.usersService.getUserResult(number).subscribe(resPages => {
		    if(resPages)
	    	{
	    		this.load = false;
	    		//this.USER = resPages;
	    		 //this.USER = JSON.parse(resPages);
				var res = Object.keys(resPages)
				// iterate over them and generate the array
				.map(function(k) {
				// generate the array element 
				return [resPages[k]];
				});
				var s =res[0][0];
				 let dataObj = JSON.parse(s);
				 this.USER=dataObj.data;
                 this.page_no=dataObj.page;
	    	     //console.log(dataObj.data[0]['first_name']);
	    	
	    	}else{
	    		this.load = false;
	    	}
	    	this.ngOnInit();
	    }); 

    }
    get_user(n){
    	let number=n;
     this.usersService.getUser(number).subscribe(resPages => {
		    if(resPages)
	    	{
	    		//this.USER = resPages;
	    		 //this.USER = JSON.parse(resPages);
				var res = Object.keys(resPages)
				// iterate over them and generate the array
				.map(function(k) {
				// generate the array element 
				return [resPages[k]];
				});
				var s =res[0][0];
				 let dataObj = JSON.parse(s);
				 this.USER=dataObj.data;
	    	     //console.log(dataObj.data[0]['first_name']);
	    	
	    	}
	    	this.ngOnInit();
	    }); 

    }
    
}

