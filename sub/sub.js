"use strict";

$(function () {
  //mobile menu
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
  //돋보기아이콘클릭
  $(".search_icon").on("click", function () {
    $(".search_wrap").stop().slideToggle(300);
  });
  $(".search_close_btn").on("click", function () {
    $(".search_wrap").stop().slideUp(300);
  });
  /*클릭시 왼쪽필터 하위UL 보이기 */
  $(".womens_category").on("click", function () {
    if ($(this).find(".womens_category_list_wrap").is(":hidden")) {
      $(this).find(".womens_category_list_wrap").addClass("active"),
        $(this).find(".womens_category_title_arrow").addClass("active");
    } else if ($(this).find(".womens_category_list_wrap").is(":visible")) {
      $(this).find(".womens_category_list_wrap").removeClass("active"),
        $(this).find(".womens_category_title_arrow").removeClass("active");
    }
  });

  /*카테고리 선택시 배경색 변경과 형제요소클릭제거*/
  $(".category").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(this).parent().addClass("active");
  });
  $(".womens_category_list_wrap_txt").on("click", function () {
    $(this).parent().toggleClass("active");
  });
  /*메뉴펼치는 제이쿼리*/
  $(".header_menu_list").on("mouseover", function () {
    $(this).children(".header_sub_container").stop().fadeIn(200);
  });
  $(".header_menu_list").on("mouseout", function () {
    $(this).children(".header_sub_container").stop().fadeOut(200);
  });
  /*스크롤시 이벤트*/
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
  });
});
