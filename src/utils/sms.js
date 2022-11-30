async function sendSMS(phoneNumbers, otp) {
  const url = "https://www.fast2sms.com/dev/bulkV2";
  const body = {
    numbers: phoneNumbers, // mobile number where you want to send otp i.e "9595585757,5757577575,5757757575"
    variables_values: otp, // any variable data that you want to send like otp
    route: "otp", // to send otp use "otp",
  };
  const res = await fetch(url, {
    method: "post",
    headers: {
      Authorization: process.env.FAST2SMS_API_KEY,
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  console.log(data);
}

module.exports = {
  sendSMS,
};
