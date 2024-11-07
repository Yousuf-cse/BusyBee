import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useRef } from 'react';
import { fetchData } from '../../api/busyBeeApi';
import { useState,useEffect } from 'react';
import RotatingLogoLoader from '../Loading/Loading'

function MapUpdater({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13); 
  }, [lat, lng, map]);
  return null;
}

export default function Home ()  {
  const [inputPlace,setInputPlace] = useState(''); // Holds the value of input
  const [submittedValue, setSubmittedValue] = useState(null); // Holds the value after submission
  const [apiData, setApiData] = useState(null); // Holds the api data
  const [latValue, setLatValue] = useState('48.8575')
  const [lngValue, setLngValue] = useState('2.3514')
  const [fullAddress, setFullAddress] = useState('')
  const [openStatus, setOpenstatus] = useState(false)
  const [placeRating, setPlaceRating] = useState(0)
  const [totalUserRating, setTotalUserRating] = useState(0)
  const [isLoading, setIsLoading] = useState(false);  // New loading state
  const [error, setError] = useState(null);  // New error state


  const handleChange = (e) => {
    setInputPlace(String(e.target.value));
  };

  const handleSubmit = () => {
    setSubmittedValue(inputPlace); // Set the submitted value
    setIsLoading(true);  // Start loading when submitting
    setError(null);  // Reset any previous error
  };

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchData(inputPlace); // Change here
        setApiData(data);
        setIsLoading(false);  // Stop loading after data fetch
      } catch (err) {
        setError("Location data could not be retrieved. Please try again."); // Set error message
        setIsLoading(false); // Stop loading on error
      }
    }
    if (submittedValue) {  // Change here
      getData();
    }
  }, [submittedValue]); // Change here
  // storing api data as per need

   
  useEffect(() => {
    if (apiData?.candidates && apiData.candidates[0]) {  // Change here
      const candidate = apiData.candidates[0];
      if (candidate.geometry?.location?.lat) setLatValue(candidate.geometry.location.lat);
      if (candidate.geometry?.location?.lng) setLngValue(candidate.geometry.location.lng);
      if (candidate.formatted_address) setFullAddress(candidate.formatted_address);
      if (candidate.opening_hours?.open_now !== undefined) setOpenStatus(candidate.opening_hours.open_now);
      if (candidate.rating) setPlaceRating(candidate.rating);
      if (candidate.user_ratings_total) setTotalUserRating(candidate.user_ratings_total);
    }
  }, [apiData]);

    // markers on the map
  const markers = [
    {
      geocode: [latValue,lngValue],
      popUp: fullAddress,
    },
  ];
  

  return (
    <div className="flex justify-evenly gap-4 p-6 bg-white ">
      {/* Left Dashboard (1/3 of the screen) */}
      <div className="w-2/3 bg-green-400 shadow-lg rounded-lg p-6 flex flex-col gap-3">
      <h2 className="text-white font-bold text-xl mb-4">Escape the Crowd</h2>

      <div className="flex items-center gap-4 w-full bg-gray-100 p-6 rounded-lg shadow-lg">
  <input 
    type="text" 
    value={inputPlace}
    onChange={handleChange}
    className="flex-grow p-4 border border-gray-300 rounded-lg shadow-md text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 
               transition bg-white text-gray-700 placeholder-gray-400 hover:bg-blue-50"
    placeholder="Enter a location"
  />
  <button
    onClick={handleSubmit}
    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg text-lg font-semibold shadow-lg transition transform hover:scale-105 
               focus:ring-2 focus:ring-blue-400 hover:from-blue-600 hover:to-blue-800"
  >
    Search
  </button>
</div>


  {/* Display API Data */}
  {isLoading ? (
    <p className="text-white text-center gap-10 text-xl"><RotatingLogoLoader/></p> // Loading message
  ) : error ? (
    <p className="text-red-500 text-center">{error}</p> // Display error
  ) : apiData ? (
    <div className="bg-gray-50 rounded-lg p-6 shadow-inner flex flex-col gap-2 ">
      {/* <h3 className="text-xl font-semibold text-gray-700 mb-2">Location Details</h3> */}

      {/* Full Address */}
      <p className="text-lg text-gray-600">
        <strong>Full Address:</strong> {fullAddress || 'Fetching...'}
      </p>

      {/* Open Status */}
      <p
        className={`text-lg font-semibold ${
         openStatus ? "text-green-500" : "text-gray-500"
         }`}
      >
        Status: {openStatus ? "Open" : "Closed"}
      </p>

      {/* Ratings */}
      <div className="flex items-center text-gray-600">
        <span className="text-lg font-semibold">Rating:</span>
        <span className="ml-2 text-lg">{placeRating}/5</span>
        <span className="ml-2 text-sm text-gray-500">({totalUserRating} ratings)</span>
      </div>

      {/* Latitude and Longitude (smaller) */}
      <div className="flex gap-4 text-sm text-gray-500">
        <p><strong>Latitude:</strong> {latValue}</p>
        <p><strong>Longitude:</strong> {lngValue}</p>
      </div>

      {/* Crowd Level */}
      <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center">
        <p className="text-xl font-bold">Crowd Level: {}</p>
      </div>
    </div>
  ) : (
<p className="text-gray-950 text-center p-20 text-xl">
  <strong>Please enter a place and click Search.</strong> </p> 
  )}
  
</div>


      {/* Right map area (1/3 of the screen) */}
      
      <div className="w-1/3 flex justify-center items-center">
        <MapContainer 
          center={[latValue, lngValue]} 
          zoom={13} 
          className="h-full w-full aspect-square rounded-lg shadow-md overflow-hidden"
          zoomControl={false}  // Disable default controls
          // ref={mapRef}
          attributionControl={false}
          >
          <MapUpdater lat={latValue} lng={lngValue} /> {/* Update map view */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <MarkerClusterGroup chunkedLoading>
            {markers.map((marker, index) => (
              <Marker position={marker.geocode} key={index}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};




















