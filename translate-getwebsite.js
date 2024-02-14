/*! Copyright (C) GTranslate Inc. */
(function () {
    var gt = window.gtranslateSettings || {};
    gt = gt[document.currentScript.getAttribute('data-gt-widget-id')] || gt;

    var lang_array_english = {
        "es": "Spanish"
    };

    var lang_array_native = {
        "es": "Español"
    };

    var default_language = 'es'; // Set default language to Spanish
    var current_lang = 'es'; // Set current language to Spanish

    var languages = ['es']; // Only include Spanish language

    var alt_flags = gt.alt_flags || {};
    var flag_style = gt.flag_style || '2d';
    var flags_location = gt.flags_location || 'https://cdn.gtranslate.net/flags/';
    var url_structure = gt.url_structure || 'none';
    var custom_domains = gt.custom_domains || {};
    var switcher_horizontal_position = gt.switcher_horizontal_position || 'left';
    var switcher_vertical_position = gt.switcher_vertical_position || 'bottom';
    var float_switcher_open_direction = gt.float_switcher_open_direction || 'top';
    var native_language_names = gt.native_language_names || false;
    var detect_browser_language = gt.detect_browser_language || false;
    var wrapper_selector = gt.wrapper_selector || '.gtranslate_wrapper';
    var custom_css = gt.custom_css || '';

    var lang_array = lang_array_native;

    var u_class = '.gt_container-' + Array.from('float' + wrapper_selector).reduce(function (h, c) {
        return 0 | (31 * h + c.charCodeAt(0));
    }, 0).toString(36);

    var widget_code = '<!-- GTranslate: https://gtranslate.com -->';
    var widget_css = custom_css;

    flags_location += (flag_style == '3d' ? '32' : 'svg') + '/';
    var flag_ext = flag_style == '3d' ? '.png' : '.svg';

    function get_flag_src(lang) {
        if (!alt_flags[lang])
            return flags_location + lang + flag_ext;
        else if (alt_flags[lang] == 'usa')
            return flags_location + 'en-us' + flag_ext;
        else if (alt_flags[lang] == 'canada')
            return flags_location + 'en-ca' + flag_ext;
        else if (alt_flags[lang] == 'brazil')
            return flags_location + 'pt-br' + flag_ext;
        else if (alt_flags[lang] == 'mexico')
            return flags_location + 'es-mx' + flag_ext;
        else if (alt_flags[lang] == 'argentina')
            return flags_location + 'es-ar' + flag_ext;
        else if (alt_flags[lang] == 'colombia')
            return flags_location + 'es-co' + flag_ext;
        else if (alt_flags[lang] == 'quebec')
            return flags_location + 'fr-qc' + flag_ext;
        else
            return alt_flags[lang];
    }

    function get_lang_href(lang) {
        var href = '#';
        if (url_structure == 'sub_directory') {
            var gt_request_uri = (document.currentScript.getAttribute('data-gt-orig-url') || (location.pathname.startsWith('/' + current_lang + '/') && '/' + location.pathname.split('/').slice(2).join('/') || location.pathname)) + location.search + location.hash;
            href = (lang == default_language) ? location.protocol + '//' + location.hostname + gt_request_uri : location.protocol + '//' + location.hostname + '/' + lang + gt_request_uri;
        } else if (url_structure == 'sub_domain') {
            var gt_request_uri = (document.currentScript.getAttribute('data-gt-orig-url') || location.pathname) + location.search + location.hash;
            var domain = document.currentScript.getAttribute('data-gt-orig-domain') || location.hostname;
            if (typeof custom_domains == 'object' && custom_domains[lang])
                href = (lang == default_language) ? location.protocol + '//' + domain + gt_request_uri : location.protocol + '//' + custom_domains[lang] + gt_request_uri;
            else
                href = (lang == default_language) ? location.protocol + '//' + domain + gt_request_uri : location.protocol + '//' + lang + '.' + domain.replace(/^www\./, '') + gt_request_uri;
        }
        return href;
    }

    if (url_structure == 'none') {
        widget_code += '<div id="google_translate_element2"></div>';
        widget_css += "div.skiptranslate,#google_translate_element2{display:none!important}";
        widget_css += "body{top:0!important}";
        widget_css += "font font{background-color:transparent!important;box-shadow:none!important;position:initial!important}";
    }

    widget_css += '.gt_float_switcher{font-family:Arial;font-size:20px;border-radius:2px;color:#555;display:inline-block;line-height:20px;box-shadow:rgba(0,0,0,0.15) 0 5px 15px;background:#fff;overflow:hidden;transition:all .5s cubic-bezier(0.4, 0, 1, 1)}';
    widget_css += '.gt_float_switcher img{vertical-align:middle;display:inline-block;width:33px;height:auto;margin:0 5px 0 0;border-radius:3px}';

    // Rest of the CSS and code remains the same

    // Widget code generation
    widget_code += '</div></div>';

    var add_css = document.createElement('style');
    add_css.classList.add('gtranslate_css');
    add_css.textContent = widget_css;
    document.head.appendChild(add_css);

    document.querySelectorAll(wrapper_selector).forEach(function (e) {
        e.classList.add(u_class.substring(1));
        e.innerHTML += widget_code
    });

    // Code for browser language detection and auto-switch
    // remains the same

})();
