import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'table-basic-example',
  styleUrl: 'table-basic-example.css',
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatInputModule,MatFormFieldModule, FormsModule, MatIconModule, MatPaginatorModule],
})
export class TableBasicExample implements AfterViewInit{
  displayedColumns: string[] = ['league', 'player', 'payment_date', 'paid', 'comp'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  player: string;
  league: string;
  payment_date: string;
  paid: number;
  comp: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
  {league: 'Team League', player: 'Travis Kruse', payment_date: '01/02/2024', paid: 1.0, comp: 0.2},
  {league: 'Team League', player: 'Robert Sadduth', payment_date: '03/26/2024', paid: 0.5, comp: 0.10},
];