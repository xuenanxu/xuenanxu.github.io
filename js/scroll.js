    //Back to top button and sidenav
    //Get the button
    var mybutton = document.getElementById("myBtn");
    var sideNav = document.getElementById("sidenav");
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    scrollFunction();
    hideFunction()
    };

    function hideFunction() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

    function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
        sideNav.style.display="block";
    } else {
        mybutton.style.display = "none";
        sideNav.style.display="none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
