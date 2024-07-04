import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  formData: any = {}; // Initialize formData object


  ngOnInit(): void {
    const data = localStorage.getItem('formdata');
    if (data) {
      this.formData = JSON.parse(data); // Parse the data into formData object
    }
  }
}
