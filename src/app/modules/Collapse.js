import $ from 'jquery';

$(document).ready(function () {
    $("#collapsMonika").on("shown.bs.collapse", function () {
      $("#extendMonika").text("Manj...");
    });
  
    $("#collapsMonika").on("hidden.bs.collapse", function () {
      $("#extendMonika").text("Več...");
    });
  });
