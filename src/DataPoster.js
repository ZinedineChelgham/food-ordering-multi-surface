const API = "http://localhost:9500/dining";
export const borneNumber = 2;

export async function getCommandId(borneNumber) {
  const res = await fetch(`http://localhost:9500/dining/tableOrders`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));

  for (let item of res) {
    if (item.tableNumber === borneNumber) {
      return item._id;
    }
  }
}

export async function startReservation() {
  const data = {
    tableNumber: borneNumber,
    customersCount: 4,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(`${API}/tableOrders`, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log("FROM BACK", data);
      return data;
    })
    .catch((err) => {});
}

export async function fillCommand(items) {
  const orderId = await getCommandId(borneNumber);

  for (let item of items) {
    const data = {
      menuItemId: item._id,
      menuItemShortName: item.shortName,
      howMany: item.quantity || 1,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(`${API}/tableOrders/${orderId}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return data;
      })
      .catch((err) => console.error(err));

    // wait 0.1s between each fetch
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Final POST request to /prepare endpoint
  try {
    const prepareResponse = await fetch(
      `${API}/tableOrders/${orderId}/prepare`,
      {
        method: "POST", // Assuming no body is required for this request
      }
    );
    const prepareData = await prepareResponse.json();
    console.log("FROM BACK", prepareData);
  } catch (err) {
    console.error(err);
    throw err; // You might want to handle this differently
  }

  // wait 0.1s between each fetch
  await new Promise((resolve) => setTimeout(resolve, 100));

  try {
    const prepareResponse = await fetch(`${API}/tableOrders/${orderId}/bill`, {
      method: "POST", // Assuming no body is required for this request
    });
    const prepareData = await prepareResponse.json();
  } catch (err) {
    console.error(err);
    throw err; // You might want to handle this differently
  }

  return true;
}
