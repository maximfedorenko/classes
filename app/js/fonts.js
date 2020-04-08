(function ($) {

    /*function addGoogleFont(FontName) {
        $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontName + "' rel='stylesheet' type='text/css'>");
    }
    addGoogleFont("Junge"); */

    function addGoogleFonts(){
        var t = [],
        n = 0;
        $.each({
            ".font__family-oxygen": "Oxygen:300,400,700",
            ".font__family-overpass": "Overpass:400,700",
            ".font__family-oswald": "Oswald:400",
            ".font__family-montserrat": "Montserrat:100,200,300,400,500,600,700",
            ".font__family-open-sans": "Open+Sans:200,300,400,600,700",
            ".font__family-playfair": "Playfair+Display:400,400i,700",
            ".font__family-roboto": "Roboto:100,300,400,500,700",
            ".font__family-roboto-slab": "Roboto+Slab:100,300,400,700",
            ".font__family-poppins": "Poppins:100,200,300,400,600,700",
            ".font__family-pacifico": "Pacifico:300,400,700",
            ".font__family-montserrat-alt": "Montserrat+Alternates:400,700"
        }, function(s, i) {
            $(s).length && (t[n] = i, n++);
        });
        var s = t.join("|");
        $("head").append('<link id="css-google-fonts" href="//fonts.googleapis.com/css?family=' + s + '&display=swap&subset=cyrillic" rel="stylesheet" type="text/css">');
    }
    addGoogleFonts();

})(jQuery);