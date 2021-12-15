import { Component, OnInit } from '@angular/core';
import { SidebarMenu } from '../../config/sidebar-menu';
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss',],
})
export class SidebarComponent implements OnInit {
  menuItems = SidebarMenu;
  selectedLink = "";

  constructor(
  ) { }

  ngOnInit(): void {
    this.jquerySmoothScroll();
  }

  jquerySmoothScroll() {
    const that = this;
    $(document).ready(function () {
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function (event) {
          console.log("event");
          const currentTarget: any = event.currentTarget;
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == currentTarget.pathname.replace(/^\//, '')
            &&
            location.hostname == currentTarget.hostname
            && that.selectedLink !== currentTarget.hash
          ) {
            // Figure out element to scroll to
            var target = $(currentTarget.hash);
            target = target.length ? target : $('[name=' + currentTarget.hash.slice(1) + ']');
            that.selectedLink = currentTarget.hash;
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top,
              }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };
              });
              window.location.hash = currentTarget.hash;
            }
          }
        });
    });
  }
}
