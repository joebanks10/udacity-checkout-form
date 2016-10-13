# Checkout Form

My solution for the checkout form [quiz](https://www.youtube.com/watch?v=R2rWAO4fqow) from Udacity's course: [Building High Conversion Forms](https://www.udacity.com/course/building-high-conversion-web-forms--ud890). I'm taking this course as part of the [Senior Web Developer Nanodegree](https://www.udacity.com/course/senior-web-developer-nanodegree-by-google--nd802).

I used the following resources:

- [Bootstrap](http://getbootstrap.com/) for styling
- [jQuery](https://jquery.com/) for working with the DOM
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) and [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding) for looking up the user's current location's address.

The goal was to make a fast and efficient checkout form. Here are a few things I did to help out the user:

- Added the option to use the user's current location as the shipping address
- Took advantage of the autocomplete attribute to allow the user to autocomplete the form
- Included the option to use the shipping address for the billing address
- Minimized the amount of space the form fields took up
- Included a personal message at the beginning of the form to give the user an idea of what she needs to do to complete the form
- Provided some form validation

Areas to improve on:

- Recognize the type of credit card being entered
- Allow the user to search for an address instead of typing the address across multiple fields
- If user is registered, ask to save addresses and payment info
