export const getMessage = (code) => {
  if (code === "auth/user-not-found") return "User not found!";
  if (code === "auth/wrong-password") return "Invalid Password!";
  if (code === "auth/email-already-in-use")
    return "Email address already registered!";
};

export const prepareUserPayload = (userCred) => {
  const { uid, displayName, email, photoURL } = userCred?.user;
  const user = { uid, name: displayName, email, image: photoURL };
  return user;
};

export const sleep = (sec) => {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
};

export const formatToINR = (price) =>
  new Intl.NumberFormat("en-In", {
    style: "currency",
    currency: "INR",
  }).format(price);
