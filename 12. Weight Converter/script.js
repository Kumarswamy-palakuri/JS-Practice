const kgToPounds = 2.2046226218487757;
const poundsToKg = 1 / kgToPounds;
const kgToOunces = 35.273961949580;
const ouncesToKg = 1 / kgToOunces;
const kgToGrams = 1000;
const gramsToKg = 1 / kgToGrams;

function convertFromKg() {
    const kg = parseFloat(document.getElementById('kgInput').value) || 0;
    document.getElementById('poundsInput').value = (kg * kgToPounds).toFixed(2);
    document.getElementById('ouncesInput').value = (kg * kgToOunces).toFixed(2);
    document.getElementById('gramsInput').value = (kg * kgToGrams).toFixed(2);
}

function convertFromPounds() {
    const pounds = parseFloat(document.getElementById('poundsInput').value) || 0;
    document.getElementById('kgInput').value = (pounds * poundsToKg).toFixed(2);
    document.getElementById('ouncesInput').value = (pounds * 16).toFixed(2); // 1 pound = 16 ounces
    document.getElementById('gramsInput').value = (pounds * 453.59237).toFixed(2); // 1 pound = 453.59237 grams
}

function convertFromOunces() {
    const ounces = parseFloat(document.getElementById('ouncesInput').value) || 0;
    document.getElementById('kgInput').value = (ounces * ouncesToKg).toFixed(2);
    document.getElementById('poundsInput').value = (ounces / 16).toFixed(2); // 1 pound = 16 ounces
    document.getElementById('gramsInput').value = (ounces * 28.349523125).toFixed(2); // 1 ounce = 28.349523125 grams
}

function convertFromGrams() {
    const grams = parseFloat(document.getElementById('gramsInput').value) || 0;
    document.getElementById('kgInput').value = (grams * gramsToKg).toFixed(2);
    document.getElementById('poundsInput').value = (grams * 0.0022046226218487757).toFixed(2); // 1 gram = 0.0022046226218487757 pounds
    document.getElementById('ouncesInput').value = (grams * 0.035273961949580).toFixed(2); // 1 gram = 0.035273961949580 ounces
}