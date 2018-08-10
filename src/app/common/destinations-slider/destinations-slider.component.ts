import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destinations-slider',
  templateUrl: './destinations-slider.component.html',
  styleUrls: ['./destinations-slider.component.scss']
})
export class DestinationsSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

jQuery(document).ready(function($) {
    $('.destination-slider[data-slick-slider]').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
