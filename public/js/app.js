/**
 * Sends a request to the server to get Uber products based on passed in
 * latitude and longitude positions.
 * @param  {number} lat The location's latitude value
 * @param  {number} lng The location's longitude value
 * @return {[Products]]} The Uber products available at the queried location
 */
getProductsByLocation(21.3069, -157.8583); //+north of equater -west of UTC

function getProductsByLocation (lat, lng) {
  var location = {
    latitude: lat,
    longitude: lng
  };
  var products = getProducts(location);
  return products;
}

var productPrices = getProductsByLocation(21.3069, -157.8583);

console.log(productPrices.responseJSON.products);

var uberArray = productPrices.responseJSON.products;
for (var i=0; i < uberArray.length; i++){
  console.log(uberArray[i]);
  var displayName = uberArray[i].display_name;
  var description = uberArray[i].description;
  var capacity = uberArray[i].capacity;

  var displayElement = document.createElement('div');
    displayElement.className = "displayName";
    displayElement.innerHTML = displayName;
    document.body.appendChild(displayElement);

  var headerElement = document.createElement('h2');
    headerElement.appendChild(displayElement);
    document.body.appendChild(headerElement);

  var descriptionElement = document.createElement('p');
    descriptionElement.className = "description";
    descriptionElement.innerHTML = "Details: " + description;
    document.body.appendChild(descriptionElement);

  var capacityElement = document.createElement('p');
    capacityElement.className = "capacity";
    capacityElement.innerHTML = "Capacity: " + capacity;
    document.body.appendChild(capacityElement);

  var bodyDiv = document.createElement('div');
    bodyDiv.id = "body";
    bodyDiv.appendChild(descriptionElement);
    bodyDiv.appendChild(capacityElement);
    document.body. appendChild(bodyDiv);
}

/**
 * Gets the products from a certain location.
 * @param  {object} The location object to query
 * @return {[Product]]} An array of products
 */
function getProducts (location) {
  return $.ajax({
    type: "GET",
    data: location,
    url: '/products',
    async: false
  });
}

// Stretch Goal
/**
 * Returns the device's current location.
 * @return {object} The device's current location
 */
function requestProductsByCurrentPosition () {
  /* The `getCurrentPosition` takes a function as it's first argument.
   * This function is referred to as a "callback" function, because it is
   * called when the result (current location) is found.
   */
  navigator.geolocation.getCurrentPosition(/* your function name goes here */);
}
