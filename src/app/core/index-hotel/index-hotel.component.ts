import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-index-hotel",
  templateUrl: "./index-hotel.component.html",
  styleUrls: ["./index-hotel.component.css"],
})

/***
 * Hotel Component
 */
export class IndexHotelComponent implements OnInit {
  /***
   * Nav Bg Light Class Add
   */
  navClass = "bg-white";

  /***
   * Current Date get
   */
  checkin = new Date();
  checkout = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  showNavigationArrows = true;
  showNavigationIndicators = false;

  /**
   * Services Data
   */
  servicesData = [
    {
      icon: "uil uil-wifi h1 text-primary",
      title: "Free WIFI",
      description:
        "Let's Connect. Me Bretta You? I need to know you, to grow you. Give me what you can, I am fully transparent in thought and creative idea, which requires steps. We need to build digital trust. I look forward to bright positive futures, cause I believe in what I can do.",
    },
    {
      icon: "uil uil-process h1 text-primary",
      title: "Relaxation",
      description:
        "This is the magic sauce. Could it be a simple landing page? Connected to 20 ad campaigns? or the other way round. All pathways are different, but all beginnings are the same. Buy now and lets get started.",
    },
    {
      icon: "uil uil-dumbbell h1 text-primary",
      title: "Spa & Fitness",
      description:
        "Let me take care of it. Peace of mind. You run your business, I'll run our holistic digital marketing approach and report the good news. Whattaya say? Buy Now and let's get started.",
    },
    {
      icon: "uil uil-restaurant h1 text-primary",
      title: "Restaurant",
      description:
        "Let's Connect. Me Bretta You? I need to know you, to grow you. Give me what you can, I am fully transparent in thought and creative idea, which requires steps. We need to build digital trust. I look forward to bright positive futures, cause I believe in what I can do.",
    },
    {
      icon: "uil uil-band-aid h1 text-primary",
      title: "Smooth Parallax",
      description:
        "This is the magic sauce. Could it be a simple landing page? Connected to 20 ad campaigns? or the other way round. All pathways are different, but all beginnings are the same. Buy now and lets get started.",
    },
    {
      icon: "uil uil-bed-double h1 text-primary",
      title: "Bedrooms",
      description:
        "Let me take care of it. Peace of mind. You run your business, I'll run our holistic digital marketing approach and report the good news. Whattaya say? Buy Now and let's get started.",
    },
  ];

  /**
   * Blog Data
   */
  blogData = [
    {
      image: "assets/images/hotel/bg01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/hotel/bg02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
    {
      image: "assets/images/hotel/bg03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Bretta Etc Ltd.",
      date: "13th August, 2019",
    },
  ];

  constructor(private modalService: NgbModal) {}

  /***
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 1,
      },
    },
    nav: false,
  };

  ngOnInit(): void {}

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
}
