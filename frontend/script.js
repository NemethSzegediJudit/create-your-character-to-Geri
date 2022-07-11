let characterFormComponent = function () {
    return `
        <section class="creating">
        <form>
            <h1>Create your character</h1>
            <div class="name">
                <label for="name-input">name:</label>
                <input id="name-input" type="text">
            </div>
            <div class="options">
                <div class="gender">
                    <label for="gender-input">gender:</label>
                    <select id="gender-input">
                        <option hidden></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                </div>
                <div class="race">
                    <label for="race-input">race:</label>
                    <select id="race-input">
                        <option hidden></option>
                        <option value="centaur">centaur</option>
                        <option value="dwarf">dwarf</option>
                        <option value="elf">elf</option>
                        <option value="fairy">fairy</option>
                        <option value="goblin">goblin</option>
                        <option value="minotaur">minotaur</option>
                        <option value="orc">orc</option>
                    </select>
                </div>
                <div class="class">
                    <label for="class-input">class:</label>
                    <select id="class-input">
                        <option hidden></option>
                        <option value="barbarian">barbarian</option>
                        <option value="bard">bard</option>
                        <option value="cleric">cleric</option>
                        <option value="druid">druid</option>
                        <option value="monk">monk</option>
                        <option value="wizard">wizard</option>
                    </select>
                </div>
            </div>
        </form>
        </section>
        `
}

const yourCharacterComponent = function (choosenName, choosenGender, choosenRace, choosenClass) {
    return `
    <section class="yourCharacter">
        ${nameComponent(choosenName)}
        <div>
            ${genderComponent(choosenGender)}
            ${raceComponent(choosenRace)}
            ${classComponent(choosenClass)}
        </div>
    </section>`
}

let nameComponent = function (choosenName) {
    if (choosenName === "") {
        return `
            <h2>&nbsp;</h2>
            <img id="yourCharacter" src="character.png"></img>
        `
    }

    return `
        <h2>${choosenName}</h2>
        <img id="yourCharacter" src="character.png">
        `
}

let genderComponent = function (choosenGender) {
    if (choosenGender === "") {
        return "<div></div>"
    }

    return `
        <div><img src="gender/${choosenGender}.svg">
        <p>${choosenGender}</p>
        </div>
        `
}

let raceComponent = function (choosenRace) {
    if (choosenRace === "") {
        return "<div></div>"
    }

    return `
        <div><img src="races/${choosenRace}.png">
        <p>${choosenRace}</p>
        </div>
        `
}

let classComponent = function (choosenClass) {
    if (choosenClass === "") {
        return "<div></div>"
    }

    return `
    <div><img src="classes/${choosenClass}.png">
    <p>${choosenClass}</p>
    </div>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById('root');

    let choosenName = "";
    let choosenGender = "";
    let choosenRace = "";
    let choosenClass = "";

    rootElement.insertAdjacentHTML("beforeend", characterFormComponent());
    rootElement.insertAdjacentHTML("beforeend", yourCharacterComponent(choosenName, choosenGender, choosenRace, choosenClass));

    const updateCharacter = function () {
        document.querySelector('.yourCharacter').remove();
        rootElement.insertAdjacentHTML("beforeend", yourCharacterComponent(choosenName, choosenGender, choosenRace, choosenClass));
    }

    const nameInput = document.getElementById('name-input');
    const genderInput = document.getElementById('gender-input');
    const raceInput = document.getElementById('race-input');
    const classInput = document.getElementById('class-input');


    nameInput.addEventListener("input", function (event) {
        choosenName = event.target.value;
        updateCharacter();
    })

    genderInput.addEventListener("input", function (event) {
        choosenGender = event.target.value;
        updateCharacter();
    })

    raceInput.addEventListener("input", function (event) {
        choosenRace = event.target.value;
        updateCharacter();
    })

    classInput.addEventListener("input", function (event) {
        choosenClass = event.target.value;
        updateCharacter();
    })
}

window.addEventListener("load", loadEvent)