// Function to convert a number to Vietnamese Dong (VND)
function convertToVND(amount: number): string {
    return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  }
  
// Function to convert a number to United States Dollar (USD)
function convertToUSD(amount: number): string {
return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default {
    convertToVND,
    convertToUSD
}