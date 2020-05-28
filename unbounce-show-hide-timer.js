function unbounceShowHideTimer(hideAllExcept, timerInSeconds) {
    let originalHeight = $("body").height()

    // Hide all except elements in argument "hideAllExcept".
    $(".lp-pom-block").hide()
    $(".lp-positioned-content > *").hide()
    $(hideAllExcept).show()

    // Setting the window height
    $("body").height('0px') // Blocking user
    $("body").css('overflow', 'hidden')

    // Set timer to display content again.
    setTimeout(function () {
        $(".lp-pom-block").show()
        $(".lp-positioned-content > *").css("display", "")

        // Back to original size
        $("body").height(originalHeight)
        $("body").css('overflow', '')
    }, timerInSeconds * 1000)
}