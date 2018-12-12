import { Component, OnInit } from '@angular/core';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  // selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
   private id : string = "";
  private load : boolean = false;
  private USER : any = [];

  constructor( private usersService : UsersService, private router : Router,private activatedRoute: ActivatedRoute) { 
  	     // this.id = params['id'];
  	      this.load = true;
     	  this.activatedRoute.params.subscribe((params: Params) => {
			this.id = params['id'];
			if(this.id != undefined){
			    this.get_result(this.id);
			}else{
				  this.get_result(this.id);
			}
	    });
}

  ngOnInit() {
  }


    get_result(n){
    	let number=n;
    	this.load = true;
     this.usersService.getUser(number).subscribe(resPages => {
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
	    	     //console.log(dataObj.data[0]['first_name']);
	    	
	    	}else{
	    		this.load = false;
	    	}
	    	this.ngOnInit();
	    }); 

    }
}
	