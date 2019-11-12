import { Component, OnInit } from '@angular/core';
import { Grouping, AngularGridInstance, Column, GridOption } from 'angular-slickgrid';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  angularGrid: AngularGridInstance;
  columnDefinitions: Column[];
  gridOptions: GridOption;
  dataset: any[];
  gridObj: any;
  dataviewObj: any;
  processing = false;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {

    // this.testData();
    this.prepareGrid();

    console.log(this.dataset);
  }


  prepareGrid() {
    this.columnDefinitions = [
      { id: 'id', name: 'Id', field: 'id',
        width: 70, minWidth: 50,
        sortable: true, filterable: true },
      { id: 'name', name: 'Nazwa', field: 'name',
        width: 70, minWidth: 50,
        sortable: true, filterable: true },
      { id: 'fiscalName', name: 'Nazwa fiskalna', field: 'fiscalName',
        width: 70, minWidth: 50,
        sortable: true, filterable: true },
      { id: 'basicUnit', name: 'Jednostka Podstawowa', field: 'basicUnit',
        width: 70, minWidth: 50,
        sortable: true, filterable: true },
      { id: 'salesCategory', name: 'Kat. sprz.', field: 'salesCategory',
        width: 70, minWidth: 50,
        sortable: true, filterable: true },
      { id: 'salesDept', name: 'Dept. sprz.', field: 'salesDept',
        width: 70, minWidth: 50,
        sortable: true, filterable: true },
      { id: 'vat', name: 'VAT SPRZ.', field: 'vat',
        width: 70, minWidth: 50,
        sortable: true, filterable: true },
      { id: 'basicPrice', name: 'Cennik Podstawowy', field: 'basicPrice',
        width: 70, minWidth: 50,
        sortable: true, filterable: true },
    ];


    this.gridOptions = {
      enableAutoResize: true,
      frozenColumn: 1,
      alwaysShowVerticalScroll: false,
      enableFiltering: true,
      enableGrouping: true,
    };

    this.defineGrid();

  }

  defineGrid() {
    this.restaurantService.getData().subscribe(
      response => {
        this.dataset = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;
    this.gridObj = angularGrid.slickGrid;
    this.dataviewObj = angularGrid.dataView;
  }

  groupByProduct() {
    this.dataviewObj.setGrouping({
      getter: 'name',
      formatter: (g) => `Nazwa produktu: ${g.value} <span style="color:green">(${g.count} items)</span>`,
    } as Grouping);
  }

  groupByCategory() {
    this.dataviewObj.setGrouping({
      getter: 'salesCategory',
      formatter: (g) => `Kategoria: ${g.value} <span style="color:green">(${g.count} items)</span>`,
    } as Grouping);
  }


}
