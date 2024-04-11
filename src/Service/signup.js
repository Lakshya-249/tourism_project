const url = "http://localhost:3001/api/";
const url2 = "http://localhost:3001/api/username";

export const register = async (formdata, nurl) => {
  const response = await fetch(url + nurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  });
  const data = await response.json();
  //   console.log(data);
  if (response.status == 400) {
    return null;
  }
  localStorage.setItem("token", data.token);
  return data;
};

export const getusername = async () => {
  const response = await fetch(url2, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  const data = await response.json();
  console.log(data);
  if (response.status == 200) {
    return data;
  }
  return null;
};

export const istoken = () => {
  if (localStorage.getItem("token") == null) {
    return false;
  }
  return true;
};
