"use strict";
//mobile menu
$(function () {
  $(".menu_icon").on("click", function () {
    $("#menu_wrap").stop().fadeIn();
  });
  $(".menu_close_btn").on("click", function () {
    $("#menu_wrap").stop().fadeOut();
    $(".menu_inr_middle_under").slideUp();
  });

  //mobile menu클릭시 accodion
  let $menu = $(".menu_inr_middle_title");
  //상위li클릭시 하위 ul toggle
  $(".menu_inr_middle_list").on("click", function () {
    if ($(this).find(".menu_inr_middle_under").is(":hidden")) {
      $(this).find(".menu_inr_middle_under").slideDown(300),
        $(this).find(".menu_arrow_btn").addClass("active");
    } else if ($(this).find(".menu_inr_middle_under").is(":visible")) {
      $(this).find(".menu_inr_middle_under").slideUp(300),
        $(this).find(".menu_arrow_btn").removeClass("active");
    }
  });

  /*header메뉴펼치는 제이쿼리*/
  $(".header_menu_list").on("mouseover", function () {
    $(this).children(".header_sub_container").stop().fadeIn(200);
  });
  $(".header_menu_list").on("mouseout", function () {
    $(this).children(".header_sub_container").stop().fadeOut(200);
  });
  //돋보기아이콘 클릭
  $(".search_icon").on("click", function () {
    $(".search_wrap").stop().slideToggle(300);
  });
  $(".search_close_btn").on("click", function () {
    $(".search_wrap").stop().slideUp(300);
  });
  /*버튼 클릭시 오른쪽 이미지 이동*/
  $(".arrow_btn_right").click(function () {
    $(".outdoor_wrap").animate(
      { "margin-left": "-50px" },
      150,

      function () {
        $(".outdoor_frame:first-child").insertAfter(
          ".outdoor_frame:last-child"
        );
        $(".outdoor_wrap").css({ "margin-left": "8px" });
      }
    );
  });

  $(".products_btn_right").click(function () {
    $(".products").animate(
      { "margin-left": "-50px" },
      150,

      function () {
        $(".product:first-child").insertAfter(".product:last-child");
        $(".products").css({ "margin-left": "0px" });
      }
    );
  });

  /*버튼 클릭시 왼쪽 이미지 이동*/
  $(".arrow_btn_left").click(function () {
    $(".outdoor_wrap").animate(
      { "margin-left": "50px" },
      150,

      function () {
        $(".outdoor_frame:first-child").insertAfter(
          ".outdoor_frame:last-child"
        );
        $(".outdoor_wrap").css({ "margin-left": "-8px" });
      }
    );
  });

  $(".products_btn_left").click(function () {
    $(".products").animate(
      { "margin-left": "50px" },
      150,

      function () {
        $(".product:first-child").insertAfter(".product:last-child");
        $(".products").css({ "margin-left": "0px" });
      }
    );
  });

  // 스크롤시 이벤트
  let $membership = $("#membership_container");
  let $sale = $("#sale_container");
  let $story = $("#story");
  let $offset = 300;
  let $membershipOST = $membership.offset().top - $offset;
  let $saleOST = $sale.offset().top - $offset;
  let $storyOST = $story.offset().top - $offset;

  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#header, .header_icon, .header_menu_item, #birdword").addClass(
        "active"
      );
    } else {
      $("#header, .header_icon, .header_menu_item, #birdword").removeClass(
        "active"
      );
    }

    if ($membershipOST < $(this).scrollTop()) {
      $(".membership_inr_wrap").addClass("active");
      $(".metadata").css({ opacity: "1", transform: "translateY(0%)" });
    } else {
      $(".membership_inr_wrap").removeClass("active");
      $(".metadata").css({
        opacity: "0",
        transform: "translateY(15%)",
      });
    }

    if ($saleOST < $(this).scrollTop()) {
      $(".sale_inr_wrap").addClass("active");
      $(".sale_metadata").css({
        opacity: "1",
        transform: "translateY(0%)",
      });
    } else {
      $(".sale_inr_wrap").removeClass("active");
      $(".sale_metadata").css({
        opacity: "0",
        transform: "translateY(15%)",
      });
    }

    if ($storyOST < $(this).scrollTop()) {
      $(".arc_inr_frame:nth-child(odd)").addClass("animate");
      $(".arc_inr_frame:nth-child(even)").addClass("animate");
    }
  });
});
