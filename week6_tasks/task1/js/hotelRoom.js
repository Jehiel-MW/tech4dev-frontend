const studioPrices = [
        [50.00, 0.95, 0.70],
        [75.20, 0.95, 0.70],
        [76.00, 0.80, 10],
      ]
const apartmentPrices = [
        [65.00, 0.90],
        [68.7, 0.90],
        [77.00, 1.00],
      ];
      
function calculatePrice(month, days, prices) {
        let price = 0;
        let discount = 1;
        const priceList = prices[month];
  
if (days >= 14 && prices === apartmentPrices) {
          discount = 0.90;
        } else if (month === 0 && days >= 14) {
          discount = 0.70;
        } else if (month === 0 && days >= 7) {
          discount = 0.95;
        } else if (month === 1 && days >= 14) {
          discount = 0.80;
        }
        
        price = priceList[0] * discount * days;
        return price;
      }
      
function calculateTotal() {
        const month = parseInt(document.getElementById('month').value);
        const days = parseInt(document.getElementById('days').value);
        const studioPrice = calculatePrice(month, days, studioPrices);
        const apartmentPrice = calculatePrice(month, days, apartmentPrices);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
          <p>Total price for Studio room: #${studioPrice.toFixed(2)}</p>
          <p>Total price for Apartment room: #${apartmentPrice.toFixed(2)}</p>
        `;
      }
