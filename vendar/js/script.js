   // swiper function single images showing only

    header_bg();
    testimonal_slider();
    function header_bg()
    {
      var swiper = new Swiper(".slider_bg", {

      slidesPerView: 1,
      spaceBetween: 30,
      activeIndex:true,
      loop: true,
      autoplay: { delay: 3500 },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    }
    );
      // anything slider value changes need this one
      swiper.on('slideChange', function () {
          if(this.activeIndex== 3)
           {
             $('.trade_mark_header_button').css('display','none');
             $('.social_media_icons').css('display','none');
          }
          
          else
          {
            $('.trade_mark_header_button').css('display','block');
             $('.social_media_icons').css('display','block');
          }
      });
        

     //about-bg
    var swiper = new Swiper(".about_bg_slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: { delay: 3500 },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
     // swiper pagination 2

      
   }
   function testimonal_slider()
   {
    var swiper = new Swiper(".testimonal_bg_Slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: { delay: 3500 },
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
       breakpoints: {
           390: {
          slidesPerView: 1,
          spaceBetween:10,
        },

        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
       
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: -60,
        },
         1920: {
          slidesPerView: 3,
          spaceBetween: 0,
        },

      }
    });
   }

    // model box js
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("modelbox");
    var span = document.getElementsByClassName("close-model")[0];
    btn.onclick = function() {
    modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
  }

  