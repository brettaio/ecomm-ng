import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  @Input() servicesData!: {
    title: string;
    description: string;
  }[];

  constructor() {}

  ngOnInit(): void {}
}
