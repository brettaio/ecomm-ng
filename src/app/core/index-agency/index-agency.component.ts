import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-agency",
  templateUrl: "./index-agency.component.html",
  styleUrls: ["./index-agency.component.css"],
})

/***
 * Agency Component
 */
export class IndexAgencyComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-edit-alt h1 text-primary",
      title: "Connect",
      description:
        "Let's Connect. Me Bretta You? I need to know you, to grow you. Give me what you can, I am fully transparent in thought and creative idea, which requires steps. We need to build digital trust. I look forward to bright positive futures, cause I believe in what I can do.",
    },
    {
      icon: "uil uil-vector-square h1 text-primary",
      title: "Build & Deploy",
      description:
        "This is the magic sauce. Could it be a simple landing page? Connected to 20 ad campaigns? or the other way round. All pathways are different, but all beginnings are the same. Buy now and lets get started.",
    },
    {
      icon: "uil uil-file-search-alt h1 text-primary",
      title: "Stratagy & Research",
      description:
        "Let me take care of it. Peace of mind. You run your business, I'll run our holistic digital marketing approach and report the good news. Whattaya say? Buy Now and let's get started.",
    },
  ];

  /**
   * Client Testimonial Data
   */
  testimonialData = [
    {
      profile: "assets/images/client/01.jpg",
      name: "Bretta Mullins",
      designation: "90's Rugby League Icon",
      message: `"I used to chip and chase around the market for a good digital marketer. I stopped looking and got a coder. It's unbeatable! Like the '94 Raiders."`,
    },
    {
      profile: "assets/images/client/02.jpg",
      name: "Brett Kenny",
      designation: "80's Rugby League Icon",
      message: `"It's probablly fair to say that because of my 86/87 seasons, Brett was the chosen name."`,
    },
    {
      profile: "assets/images/client/03.jpg",
      name: "Brett Kirk",
      designation: "AFL Legend - Honourary EKFC Member",
      message: `"Nothing more corageous than telling react to f**k off! Love it, mate!"`,
    },
    {
      profile: "assets/images/client/04.jpg",
      name: "Brett Farve",
      designation: "90's/00's/10's NFL Legend",
      message: `"You think I can throw some spiral? Wait til you watch Bretta whip up a app on dev server for you. All ways good reception!"`,
    },
    {
      profile: "assets/images/client/05.jpg",
      name: "Dean Tolle",
      designation: "Developer",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
    },
    {
      profile: "assets/images/client/06.jpg",
      name: "Jill Webb",
      designation: "Designer",
      message: ``,
    },
  ];

  /**
   * Blog Data
   */
  blogData = [
    {
      image: "assets/images/blog/01.jpg",
      title: "Design your apps in your own way",
      like: "102",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/blog/02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/blog/03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
  ];

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }
  openModal(content) {
    this.modalService.open(content, {
      windowClass: "dark-modal",
      size: "lg",
      centered: true,
    });
  }

  ngOnInit(): void {}
}
