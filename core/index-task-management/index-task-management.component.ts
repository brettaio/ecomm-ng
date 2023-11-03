import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index-task-management",
  templateUrl: "./index-task-management.component.html",
  styleUrls: ["./index-task-management.component.css"],
})

/***
 * Task Management Component
 */
export class IndexTaskManagementComponent implements OnInit {
  /***
   * nav bg color add
   */
  navClass = "nav-light";

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-airplay h1 text-primary",
      title: "Easy To Use",
      description:
        "Let's Connect. Me Bretta You? I need to know you, to grow you. Give me what you can, I am fully transparent in thought and creative idea, which requires steps. We need to build digital trust. I look forward to bright positive futures, cause I believe in what I can do.",
    },
    {
      icon: "uil uil-envelope-shield h1 text-primary",
      title: "Secure",
      description:
        "This is the magic sauce. Could it be a simple landing page? Connected to 20 ad campaigns? or the other way round. All pathways are different, but all beginnings are the same. Buy now and lets get started.",
    },
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Flexible",
      description:
        "Let me take care of it. Peace of mind. You run your business, I'll run our holistic digital marketing approach and report the good news. Whattaya say? Buy Now and let's get started.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
