const dataAppList = [
  {
    name: "Barcode Detection API",
    check: () => "BarcodeDetector" in window,
  },
];

function test() {
  dataAppList.forEach((elem) => {
    let apicheck = elem.check();
    console.log(elem.name, apicheck);
  });
}

test();
