import fs from "fs";
import type { ProductType } from "./start.js";

const JSON_FILE =
  "/home/carlos/Documents/Development/nodeJs/aliQuotes/src/data/data.json";

export function getData() {
  try {
    const data = fs.readFileSync(JSON_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Catched the following error: ", err);
    return { productos: [] };
  }
}

export function saveData(newProduct: ProductType) {
  const data = getData();
  data.products.push(newProduct);
  fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2));
  console.log("\n");
  console.log("The " + newProduct.title.green + " was saved succesfully.");
  console.log("\n");
}