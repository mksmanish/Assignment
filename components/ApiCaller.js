const ApiCaller = async (method, url, data = null, headers = {}) => {
  console.log(method, url, data, headers);
  try {
    // Create options for the fetch request
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };
    // Add request body if it's a POST or PUT request
    if (data && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(data);
    }

    // Make the fetch request
    const response = await fetch(url, options);

    if (!response.ok) {
      // Handle non-successful response (e.g., 404, 500)
      throw new Error(`Request failed with status ${response.status}`);
    }

    // Parse the response JSON
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    // Handle any errors here (e.g., network issues, parsing errors)
    throw error;
  }
};

export default ApiCaller;
