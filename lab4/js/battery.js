/* Variables */
const chargeStatus = document.querySelector('#battery dd:nth-of-type(1)');
const chargeLevel = document.querySelector('#battery dd:nth-of-type(2) output');
const chargeMeter = document.querySelector('#battery dd:nth-of-type(2) progress');
const robohashImage = document.querySelector('#robohash');

/* Functions */
function updateBatteryStatus(battery) {
    // Update charging status
    chargeStatus.textContent = battery.charging ? "Charging" : "Not Charging";
    
    // Update charge level
    const levelPercentage = (battery.level * 100).toFixed(2) + "%";
    chargeLevel.textContent = levelPercentage;
    chargeMeter.value = battery.level * 100;
    
    // Update Robohash image based on battery percentage
    const imageUrl = `https://robohash.org/${levelPercentage.replace('%', 'percent')}.png`;
    robohashImage.src = imageUrl;
}

navigator.getBattery().then(battery => {
    // Initial update
    updateBatteryStatus(battery);
    
    // Event listeners for changes in charging status and charge level
    battery.addEventListener("chargingchange", () => {
        updateBatteryStatus(battery);
    });
    
    battery.addEventListener("levelchange", () => {
        updateBatteryStatus(battery);
    });
});
