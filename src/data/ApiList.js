const dataAppList = [
  {
    name: "Background Fetch API",
    check: () => "BackgroundFetchManager" in window,
  },
  {
    name: "Barcode Detection API",
    check: () => "BarcodeDetector" in window,
  },
  {
    name: "Battery Status API",
    check: () => "getBattery" in window.navigator,
  },
  {
    name: "Web Bluetooth API",
    check: () => "bluetooth" in window.navigator,
  },
  {
    name: "",
    check: () => "" in window,
  },
  {
    name: "",
    check: () => "" in window,
  },
];

export default dataAppList;
