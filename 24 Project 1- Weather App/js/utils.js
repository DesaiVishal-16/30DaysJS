export const formatDate = (dateData) => {
  const newDate = new Date(dateData);
  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const date = String(newDate.getDate()).padStart(2, "0");
  const dayInWords = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const day = dayInWords[newDate.getDay()];
  return `${day} (${date}.${month}.${year})`;
};

export const formatTime = (timeString) => {
  const date = new Date(timeString);
  return date.toLocaleDateString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

export const createElement = (tag, options = {}) => {
  const element = document.createElement(tag);
  if (options.id) element.id = options.id;
  if (options.className) element.className = options.className;
  if (options.textContent) element.textContent = options.textContent;
  if (options.src) element.src = options.src;
  if (options.innerHTML) element.innerHTML = options.innerHTML;
  if (options.children) {
    options.children.forEach((child) => element.appendChild(child));
  }
  return element;
};
