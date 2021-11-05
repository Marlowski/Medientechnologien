$(function () {
    let switchElem = $(".switch input");
    if(switchElem.prop("checked")) {
        $("html").addClass("html--darkmode");
    }

    switchElem.click(function () {
       if(switchElem.prop("checked")) {
          $("html").addClass("html--darkmode");
       } else {
           $("html").removeClass("html--darkmode");
       }
    });
})