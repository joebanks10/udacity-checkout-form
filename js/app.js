(function($){

    var $billing = $('.billing');

    $('#pay-address').change(function() {
        $billing.toggleClass('billing-show');
    });

})(jQuery);

(function($){

    var locationPromise = getCurrentLocation();

    $('#current-location').change(function() {
        if (this.checked) {
            $('.loading').addClass('loading-show');

            locationPromise.then(function(location) {
                $('.loading').removeClass('loading-show');

                $('#shipping-address-line-1').val(location.street_number + ' ' + location.street);
                $('#shipping-city').val(location.city);
                $('#shipping-state').val(location.state);
                $('#shipping-postal-code').val(location.postal_code);
                $('#shipping-country').val(location.country);
            });
        } 
        else {
            $('#shipping-address-line-1').val('');
            $('#shipping-city').val('');
            $('#shipping-state').val('');
            $('#shipping-postal-code').val('');
            $('#shipping-country').val('');
        }
    });

    function getCurrentLocation() {
        if (!("geolocation" in navigator)) {
            return {};
        }

        var currentLocation = {
            street_number: null,
            street: null,
            city: null,
            state: null,
            postal_code: null,
            country: null
        };

        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(positionSuccess, positionError, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });

            function positionSuccess(position) {
                var latitude = position.coords.latitude,
                    longitude = position.coords.longitude,
                    url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude;

                $.getJSON(url, function(data) {
                    if (data.status !== 'OK') {
                        reject(data.status);
                    }

                    var result = data.results[0];

                    result.address_components.forEach(function(comp) {
                        var value = comp.long_name,
                            types = comp.types;

                        if (types.indexOf('street_number') !== -1) {
                            currentLocation.street_number = value;
                        }
                        else if (types.indexOf('route') !== -1) {
                            currentLocation.street = value;
                        }
                        else if (types.indexOf('locality') !== -1) {
                            currentLocation.city = value;
                        }
                        else if (types.indexOf('administrative_area_level_1') !== -1) {
                            currentLocation.state = comp.short_name;
                        }
                        else if (types.indexOf('postal_code') !== -1) {
                            currentLocation.postal_code = value;
                        }
                        else if (types.indexOf('country') !== -1) {
                            currentLocation.country = value;
                        }
                    });

                    resolve(currentLocation);
                });
            }

            function positionError(error) {
                reject(error);
            }
        });
    }

})(jQuery);

// (function($) {

//     "use strict";

//     var $order = $('.order'),
//         $content = $('.content'),
//         orderOffset = $order.offset(),
//         contentOffset = $content.offset(),
//         orderHeight = $order.outerHeight(),
//         contentHeight = $content.outerHeight();

//     if (orderHeight < contentHeight) {
//         $order.affix({
//             offset: {
//                 top: orderOffset.top
//             }
//         });
//     }

// })(jQuery);
