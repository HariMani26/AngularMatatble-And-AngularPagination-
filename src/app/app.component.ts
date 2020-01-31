
import { Component,OnInit,ViewChild} from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'AngularMatTableAndPagination';
  displayedColumns: string[] = ['S.No','CarName','Model','Mileage','Color'];
  
  carDetails=[
    {carname:'Hummer',model:'H3',milleage:'196321',color:'Pink'},
    {carname:'Chevrolet',model:'1500 Silverado',milleage:'195310',color:'Blue'},
    {carname:'Infiniti',model:'M',milleage:'194846',color:'Puce'},
    {carname:'Kia',model:'Amanti',milleage:'189651',color:'Indigo'},
    {carname:'Audi',model:'S5',milleage:'644541',color:'white'},
    {carname:'GMC',model:'EnvoyXUV',milleage:'187960',color:'Turquoise'},
    {carname:'Honda ',model:'H3',milleage:'45435534',color:'Pink'},
    {carname:'Maruti ',model:'ado',milleage:'195310',color:'Blue'},
    {carname:'Honda ',model:'H',milleage:'4354356',color:'Puce'},
    {carname:'TataTigor ',model:'S6',milleage:'541554',color:'Pink'},
    {carname:'Mahindra',model:'Silver',milleage:'195310',color:'Black'},
    {carname:'RenaultKWID',model:'MH',milleage:'194846',color:'Fiery Red'},
    {carname:'MahindraKwe ',model:'M5',milleage:'196321',color:'Silver White'},
    {carname:'Chevrolet',model:'Silverado',milleage:'195310',color:'Blue'},
    {carname:'Infiniti',model:'M',milleage:'194846',color:'Puce'},
  ]





  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;

  ngOnInit() {

   this.getdetials()

  }

  getdetials()
  {
    this.dataSource = new MatTableDataSource();
    this.dataSource.data =this.carDetails;
    this.dataSource.paginator = this.paginator;
 
  }
}


