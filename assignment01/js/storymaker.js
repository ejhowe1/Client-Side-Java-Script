// Wait for the HTML content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Constants for main button query selectors
    const noun1Button = document.querySelector("#noun1");
    const verbButton = document.querySelector("#verb");
    const adjectiveButton = document.querySelector("#adjective");
    const noun2Button = document.querySelector("#noun2");
    const settingButton = document.querySelector("#setting");

    // Constants for p tags to display selected words
    const displayElement = document.querySelector("#choosenNoun1");
    const displayElement2 = document.querySelector("#choosenVerb");
    const displayElement3 = document.querySelector("#choosenAdjective");
    const displayElement4 = document.querySelector("#choosenNoun2");
    const displayElement5 = document.querySelector("#choosenSetting");

    // Constants for final buttons and p tag to display the story
    const playbackButton = document.querySelector("#playback");
    const randomButton = document.querySelector("#random");
    const finalDisplay = document.querySelector("#story");

    // Arrays of pre-defined words for each category
    const nouns = ["cat", "dog", "bird", "snake", "gekko"];
    const verbs = ["ran", "jumped", "flew", "dived", "swam"];
    const adjectives = ["Happy", "Mysterious", "Vibrant", "Serene", "Courageous"];
    const noun2s = ["ball", "tree", "mountain", "lake", "swamp"];
    const settings = ["in the park", "under the stars", "at the beach", "At Area 51", "at the cemetery"];

    // Variables to keep track of the current selected index for each category
    let nounCount = 0;
    let verbCount = 0;
    let adjectiveCount = 0;
    let noun2Count = 0;
    let settingCount = 0;

    /* Event Handlers */

    // Handle Noun 1 button click
    function noun1_on_click() {
        const noun = nouns[nounCount];
        displayElement.textContent = `Noun 1: ${noun}`;
        nounCount = (nounCount + 1) % nouns.length;
    }

    // Handle Verb button click
    function verb_on_click() {
        const verb = verbs[verbCount];
        displayElement2.textContent = `Verb: ${verb}`;
        verbCount = (verbCount + 1) % verbs.length;
    }

    // Handle Adjective button click
    function adjective_on_click() {
        const adjective = adjectives[adjectiveCount];
        displayElement3.textContent = `Adjective: ${adjective}`;
        adjectiveCount = (adjectiveCount + 1) % adjectives.length;
    }

    // Handle Noun 2 button click
    function noun2_on_click() {
        const noun2 = noun2s[noun2Count];
        displayElement4.textContent = `Noun 2: ${noun2}`;
        noun2Count = (noun2Count + 1) % noun2s.length;
    }

    // Handle Setting button click
    function setting_on_click() {
        const setting = settings[settingCount];
        displayElement5.textContent = `Setting: ${setting}`;
        settingCount = (settingCount + 1) % settings.length;
    }

    // Handle Show Story button click
    // Handle Show Story button click
    function playback_on_click() {
        const story = `the ${displayElement.textContent.split(":")[1]} ${displayElement2.textContent.split(":")[1]} and found a ${displayElement3.textContent.split(":")[1]} ${displayElement4.textContent.split(":")[1]} world ${displayElement5.textContent.split(":")[1]}.`;
        finalDisplay.textContent = story;
    }


    // Handle Random Story button click
    function random_on_click() {
        const randomNounIndex = Math.floor(Math.random() * nouns.length);
        const randomVerbIndex = Math.floor(Math.random() * verbs.length);
        const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
        const randomNoun2Index = Math.floor(Math.random() * noun2s.length);
        const randomSettingIndex = Math.floor(Math.random() * settings.length);
    
        const randomStory = `The ${nouns[randomNounIndex]} ${verbs[randomVerbIndex]} and found a ${adjectives[randomAdjectiveIndex]} ${noun2s[randomNoun2Index]} ${settings[randomSettingIndex]}.`;
        finalDisplay.textContent = randomStory;
    }

    /* Event Listeners */

    noun1Button.addEventListener("click", noun1_on_click);
    verbButton.addEventListener("click", verb_on_click);
    adjectiveButton.addEventListener("click", adjective_on_click);
    noun2Button.addEventListener("click", noun2_on_click);
    settingButton.addEventListener("click", setting_on_click);
    playbackButton.addEventListener("click", playback_on_click);
    randomButton.addEventListener("click", random_on_click);
    storyButton.addEventListener("click", story_on_click);

});
