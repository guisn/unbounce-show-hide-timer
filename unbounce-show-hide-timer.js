function unbounceShowHideTimer(hideAllExcept, timerInSeconds) {
    
    // Take the exact height that need to mantain
    let idsOfSessionsToGetHeight = hideAllExcept.split(',')
    let newHeight = 0
    for (i = 0; i <= idsOfSessionsToGetHeight.length; i++) {
        if (String(idsOfSessionsToGetHeight[i]).indexOf('-block-') !== -1) {
            if ($(idsOfSessionsToGetHeight[i]).height() !== undefined) {
                newHeight += $(idsOfSessionsToGetHeight[i]).height()
            }
        }
    }

    $(document).ready(function () {
        console.log("novotamanho:", newHeight)
        let originalHeight = $("body").height()

        // Hide all except elements in argument "hideAllExcept".
        $(".lp-pom-block").hide()
        $(".lp-positioned-content > *").hide()
        $('#lp-pom-root-color-overlay').hide()
        $(hideAllExcept).show()
        let interval = setInterval(function () {
            $(".lp-pom-block").hide()
            $(".lp-positioned-content > *").hide()
            $('#lp-pom-root-color-overlay').hide()
            $(hideAllExcept).show()
        }, 500)

        // Setting the window height
        $("#lp-pom-root").height(newHeight) // Blocking user

        // Set timer to display content again.
        setTimeout(function () {
            clearInterval(interval)
            $(".lp-pom-block").show()
            $(".lp-positioned-content > *").css("display", "")
            $('#lp-pom-root-color-overlay').show()
            
            // Back to original size
            $("#lp-pom-root").height(originalHeight)
        }, timerInSeconds * 1000)

    })

}
