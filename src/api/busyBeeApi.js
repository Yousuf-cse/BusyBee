export async function fetchData(inputValue) {
  try {
    const response = await fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/findplacefromtext/json?input=${inputValue}&inputtype=textquery&fields=all&language=en`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key':import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'google-map-places.p.rapidapi.com'
      }
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}




