$(document).foundation()
var feed = new Instafeed({
        get: 'tagged',
        tagName: 'box',
        clientId: '40b090e3c9924a6f91fbacb64071cd78'
    });
    feed.run();

// var icon = document.getElementById("icon");
//
// icon.onclick = function() {
//     if (this.className === "Icon") {
//         this.className = "Icon open";
//     }
//     else {
//         this.className = "Icon";
//     }
// };
    // $('#offCanvas a').on('click', function () {
    //     $('#offCanvas').foundation('close')
    // })
    // sidebar toggle triggers

    // $("#close-sidebar").click(function() {
    //   $('#offCanvas').toggleClass('reveal-for-medium');
    // });
    //
    // $("#open-sidebar").click(function() {
    //   $('#offCanvas').toggleClass('reveal-for-medium');
    // });
