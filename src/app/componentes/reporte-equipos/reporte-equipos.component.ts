import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, Label } from 'ng2-charts';
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { drawRoundedEdges } from '../fijos/chart/chartjs-round-bars'
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-reporte-equipos',
  templateUrl: './reporte-equipos.component.html',
  styleUrls: ['./reporte-equipos.component.css']
})
export class ReporteEquiposComponent implements OnInit{

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public chartLabels: Label[] = ['Equipo 1', 'Equipo 2', 'Equipo 3', 'Equipo 4'];
  public colors = '#4DB380'
  public chartData: ChartDataSets[] = [
    {data: [26,	21, 35, 42], label: 'Age then', backgroundColor: this.colors, hidden: false, hoverBackgroundColor:'#aef5d2'}
  ];
  private color = '#b3afaf';
  public chartOptions: ChartOptions = {
    // @ts-ignore
    isDoubleSideRounded: false,
      scales: {
        xAxes: [{
          gridLines: {
            color: this.color
          },
          ticks: {
            fontColor: '#545353'
          }
        }],
        yAxes: [{
          gridLines: {
            color: this.color
          },
          ticks: {
            beginAtZero: true,
            fontColor: this.color
          }
        }]
      }
  };

  constructor(private crudservice: CrudService) {
    Chart.defaults.global.defaultFontFamily = "'Helvetica Neue', sans-serif";
    Chart.elements.Rectangle.prototype.draw = drawRoundedEdges;
  }

  ngOnInit(): void {    
    
  }
}