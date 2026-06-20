// --- Parsed C# Menu Data ---
const menuData = {
    "MainMenu": [
        { DisplayName: "Movement", type: "submenu", target: "Movement", tooltip: "Open Movement Options" },
        { DisplayName: "Visual", type: "submenu", target: "Visual", tooltip: "Open Visual Options" },
        { DisplayName: "Player", type: "submenu", target: "Player", tooltip: "Open Player Options" },
        { DisplayName: "Computer", type: "submenu", target: "Computer", tooltip: "Open Computer Options" },
        { DisplayName: "Exploits", type: "submenu", target: "Exploits", tooltip: "Open Exploits" },
        { DisplayName: "Safety", type: "submenu", target: "Safety", tooltip: "Open Safety Options" },
        { DisplayName: "MusicPlayer", type: "submenu", target: "MusicPlayer", tooltip: "Open Music Player" },
        { DisplayName: "Settings", type: "submenu", target: "Settings", tooltip: "Open Settings" },
        { DisplayName: "Info", type: "submenu", target: "Info", tooltip: "Open Info" },
        { DisplayName: "Notifications", type: "toggle", tooltip: "Toggle notifications" },
        { DisplayName: "Overlay", type: "toggle", tooltip: "Toggle overlay visibility" },
        { DisplayName: "Tool Tips", type: "toggle", tooltip: "Toggle tooltips" }
    ],
    "Movement": [
        { DisplayName: "ExcelFly", type: "slider", options: ["[OFF]", "Super Slow", "Slow", "Medium", "Fast", "Super Fast"], tooltip: "Excel Fly Speed" },
        { DisplayName: "TFly", type: "toggle", tooltip: "Toggle Touch Fly" },
        { DisplayName: "WallWalk", type: "slider", options: ["[OFF]", "6.8", "7", "7.5", "7.8", "8", "8.5", "8.8", "9", "9.5", "9.8"], tooltip: "Wall Walk Speed" },
        { DisplayName: "Speed Options", type: "submenu", target: "Speed", tooltip: "Open Speed Options" },
        { DisplayName: "Platforms", type: "toggle", tooltip: "Toggle Platforms" },
        { DisplayName: "UpsideDown Monkey", type: "toggle", tooltip: "Flip your monkey" },
        { DisplayName: "WateryAir", type: "toggle", tooltip: "Toggle Watery Air" },
        { DisplayName: "LongArms", type: "toggle", tooltip: "Extend your arms" },
        { DisplayName: "SpinBot", type: "toggle", tooltip: "Toggle Spin Bot" },
        { DisplayName: "WASDFly", type: "slider", options: ["[OFF]", "5", "7", "10", "13", "16"], tooltip: "WASD Fly Speed" },
        { DisplayName: "Next ->", type: "submenu", target: "Movement2", tooltip: "Next Page" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Movement2": [
        { DisplayName: "Timer", type: "slider", options: ["[OFF]", "1.03x", "1.06x", "1.09x", "1.1x", "1.13x", "1.16x", "1.19x", "1.2x", "1.23x", "1.26", "1.29", "1.3x", "2x", "3x", "4x", "5x"], tooltip: "Movement Timer" },
        { DisplayName: "FloatyMonkey", type: "slider", options: ["[OFF]", "1.1", "1.2", "1.4", "1.6", "1.8", "2", "2.2", "2.4", "2.6", "2.8", "3", "3.2", "3.4", "3.6", "3.8", "4", "Anti Grav"], tooltip: "Floaty Monkey Modifier" },
        { DisplayName: "Climbable Gorillas", type: "toggle", tooltip: "Make gorillas climbable" },
        { DisplayName: "Near Pulse", type: "slider", options: ["[OFF]", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], tooltip: "Near Pulse Intensity" },
        { DisplayName: "Near Pulse Distance", type: "slider", options: ["[OFF]", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], tooltip: "Near Pulse Distance" },
        { DisplayName: "Player Scale [DISABLED]", type: "toggle", tooltip: "Player Scale (Disabled)" },
        { DisplayName: "No Clip", type: "toggle", tooltip: "Toggle No Clip" },
        { DisplayName: "Force Tag Freeze", type: "toggle", tooltip: "Force tag freeze" },
        { DisplayName: "Teleport To Random", type: "button", tooltip: "Teleport to a random player" },
        { DisplayName: "HZ Hands", type: "slider", options: ["[OFF]", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], tooltip: "HZ Hands value" },
        { DisplayName: "Throw", type: "toggle", tooltip: "Toggle Throw" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Speed": [
        { DisplayName: "Speed", type: "slider", options: ["[OFF]", "7", "7.2", "7.4", "7.6", "7.8", "8", "8.2", "8.4", "8.6"], tooltip: "Base Speed" },
        { DisplayName: "Speed Toggle", type: "slider", options: ["[OFF]", "7", "7.2", "7.4", "7.6", "7.8", "8", "8.2", "8.4", "8.6"], tooltip: "Toggle Speed Value" },
        { DisplayName: "Near Speed", type: "slider", options: ["[OFF]", "7", "7.2", "7.4", "7.6", "7.8", "8", "8.2", "8.4", "8.6"], tooltip: "Speed when near others" },
        { DisplayName: "Near Speed Distance", type: "slider", options: ["[OFF]", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"], tooltip: "Distance for Near Speed" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Visual": [
        { DisplayName: "Chams", type: "toggle", tooltip: "Player Chams" },
        { DisplayName: "BoxESP", type: "toggle", tooltip: "Box ESP" },
        { DisplayName: "HollowBoxESP", type: "toggle", tooltip: "Hollow Box ESP" },
        { DisplayName: "BoneESP", type: "toggle", tooltip: "Skeletal Bone ESP" },
        { DisplayName: "Tracers", type: "submenu", target: "Tracers", tooltip: "Tracer Options" },
        { DisplayName: "NameTags", type: "submenu", target: "NameTags", tooltip: "NameTag Options" },
        { DisplayName: "Proximity Alert", type: "toggle", tooltip: "Proximity Alert" },
        { DisplayName: "Full Bright", type: "toggle", tooltip: "Full Bright Map" },
        { DisplayName: "Sky Colour", type: "slider", options: ["Default", "Purple", "Red", "Cyan", "Green", "Black"], tooltip: "Change Sky Colour" },
        { DisplayName: "WhyIsEveryoneLookingAtMe", type: "toggle", tooltip: "Detect if looking" },
        { DisplayName: "Next ->", type: "submenu", target: "Visual2", tooltip: "Next Page" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Visual2": [
        { DisplayName: "SplashMonkey", type: "toggle", tooltip: "Splash Monkey" },
        { DisplayName: "NoLeaves [DISABLED]", type: "toggle", tooltip: "No Leaves (Disabled)" },
        { DisplayName: "ComicTags [DISABLED]", type: "toggle", tooltip: "Comic Tags (Disabled)" },
        { DisplayName: "Anti Screen Share", type: "slider", options: ["[OFF]", "VR View", "PC View"], tooltip: "Anti Screen Share" },
        { DisplayName: "MCM Sight", type: "slider", options: ["[OFF]", "Self & Others", "Others", "Self"], tooltip: "MCM Sight" },
        { DisplayName: "Show Boards", type: "toggle", tooltip: "Show Boards" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Tracers": [
        { DisplayName: "Tracers", type: "slider", options: ["[OFF]", "RHand", "LHand", "Head", "Screen"], tooltip: "Tracer Origin" },
        { DisplayName: "Tracer Size", type: "slider", options: ["Extremely Small", "Super Small", "Small", "Medium", "Large", "Giant", "Huge"], tooltip: "Tracer Thickness" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "NameTags": [
        { DisplayName: "NameTags", type: "toggle", tooltip: "Toggle NameTags" },
        { DisplayName: "Show Creation Date", type: "toggle", tooltip: "Show Creation Date" },
        { DisplayName: "Show Colour Code", type: "toggle", tooltip: "Show Colour Code" },
        { DisplayName: "Show Distance", type: "toggle", tooltip: "Show Distance" },
        { DisplayName: "Always Visible", type: "toggle", tooltip: "Always Visible" },
        { DisplayName: "NameTag Height", type: "slider", options: ["Chest", "Above Head"], tooltip: "NameTag Height" },
        { DisplayName: "NameTag Size", type: "slider", options: ["Chest Size", "Small", "Medium", "Large"], tooltip: "NameTag Size" },
        { DisplayName: "NameTag Colour", type: "slider", options: ["White", "Yellow", "Green", "Blue", "Red", "Cyan", "Black"], tooltip: "NameTag Colour" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Player": [
        { DisplayName: "NoFinger", type: "toggle", tooltip: "No Finger" },
        { DisplayName: "TagGun", type: "toggle", tooltip: "Tag Gun" },
        { DisplayName: "CreeperMonkey", type: "toggle", tooltip: "Creeper Monkey" },
        { DisplayName: "GhostMonkey", type: "toggle", tooltip: "Ghost Monkey" },
        { DisplayName: "InvisMonkey", type: "toggle", tooltip: "Invis Monkey" },
        { DisplayName: "TagAura", type: "slider", options: ["[OFF]", "Really Close", "Close", "Legit", "Semi Legit", "Semi Blatant", "Blatant", "Rage"], tooltip: "Tag Aura Distance" },
        { DisplayName: "TagAll", type: "toggle", tooltip: "Tag All Players" },
        { DisplayName: "Desync", type: "toggle", tooltip: "Desync" },
        { DisplayName: "HitBoxes", type: "slider", options: ["[OFF]", "Really Close", "Close", "Legit", "Semi Legit", "Semi Blatant", "Blatant", "Rage"], tooltip: "Hitbox Size" },
        { DisplayName: "No Wind", type: "toggle", tooltip: "No Wind" },
        { DisplayName: "Anti Grab", type: "toggle", tooltip: "Anti Grab" },
        { DisplayName: "Name Changer", type: "toggle", extra: "[STUMP]", tooltip: "Name Changer" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Exploits": [
        { DisplayName: "Break NameTags", type: "toggle", tooltip: "Break NameTags" },
        { DisplayName: "SS Platforms", type: "toggle", extra: "[M] [BASEMENT]", tooltip: "SS Platforms" },
        { DisplayName: "Audio Crash", type: "toggle", tooltip: "Audio Crash" },
        { DisplayName: "Cosmetics Spoofer", type: "submenu", target: "Cosmetics Spoofer", tooltip: "Cosmetics Spoofer" },
        { DisplayName: "Freeze All", type: "toggle", tooltip: "Freeze All" },
        { DisplayName: "Become Master", type: "button", tooltip: "Become Master Client" },
        { DisplayName: "Crash All", type: "toggle", extra: "[M]", tooltip: "Crash All" },
        { DisplayName: "Assend All", type: "toggle", extra: "[M]", tooltip: "Assend All" },
        { DisplayName: "Next ->", type: "submenu", target: "Exploits2", tooltip: "Next Page" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Exploits2": [
        { DisplayName: "Creation Date Gun", type: "toggle", tooltip: "Creation Date Gun" },
        { DisplayName: "Snowball Gun", type: "toggle", tooltip: "Snowball Gun" },
        { DisplayName: "Max Quest Score", type: "button", tooltip: "Max Quest Score" },
        { DisplayName: "Kick All", type: "toggle", extra: "[M]", tooltip: "Kick All" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Cosmetics Spoofer": [
        { DisplayName: "Spaz All Cosmetics (Try On)", type: "toggle", extra: "[CITY]", tooltip: "Spaz Cosmetics Try On" },
        { DisplayName: "Spaz All Cosmetics", type: "toggle", tooltip: "Spaz All Cosmetics" },
        { DisplayName: "Steal Worn Cosmetics", type: "button", extra: "[CITY] [TRYON]", tooltip: "Steal Worn Cosmetics" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Computer": [
        { DisplayName: "Disconnect", type: "button", tooltip: "Disconnect from room" },
        { DisplayName: "Join GTC", type: "button", tooltip: "Join GTC" },
        { DisplayName: "Join TTT", type: "button", tooltip: "Join TTT" },
        { DisplayName: "Join YTTV", type: "button", tooltip: "Join YTTV" },
        { DisplayName: "Join MODS", type: "button", tooltip: "Join MODS" },
        { DisplayName: "Join MOD", type: "button", tooltip: "Join MOD" },
        { DisplayName: "Join:", type: "button", extra: "roomtojoin", tooltip: "Join Custom Room" },
        { DisplayName: "Modded Casual", type: "button", tooltip: "Join Modded Casual" },
        { DisplayName: "Modded Infection", type: "button", tooltip: "Join Modded Infection" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Safety": [
        { DisplayName: "Panic", type: "toggle", tooltip: "Panic Mode" },
        { DisplayName: "AntiReport", type: "slider", options: ["[OFF]", "Disconnect", "Reconnect", "Join Random"], tooltip: "Anti Report Action" },
        { DisplayName: "RandomIdentity", type: "button", tooltip: "Random Identity" },
        { DisplayName: "Pc Check Bypass", type: "toggle", tooltip: "PC Check Bypass" },
        { DisplayName: "Fake Quest Menu", type: "toggle", tooltip: "Fake Quest Menu" },
        { DisplayName: "Fake Report Menu", type: "toggle", tooltip: "Fake Report Menu" },
        { DisplayName: "<- Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Settings": [
        { DisplayName: "Colour Settings", type: "submenu", target: "ColourSettings", tooltip: "Colour Settings" },
        { DisplayName: "MenuPosition", type: "slider", options: ["Top Left", "Middle", "Top Right"], tooltip: "Menu Position" },
        { DisplayName: "Config", type: "slider", options: ["NewConfig_0 [1/2]"], tooltip: "Config Slot" },
        { DisplayName: "Load", type: "button", tooltip: "Load Config" },
        { DisplayName: "Save", type: "button", tooltip: "Save Config" },
        { DisplayName: "Player Logging", type: "toggle", tooltip: "Player Logging" },
        { DisplayName: "Inverted Controls", type: "toggle", tooltip: "Inverted Controls" },
        { DisplayName: "Log Out", type: "button", tooltip: "Log Out" },
        { DisplayName: "Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "Info": [
        { DisplayName: "PlayerList", type: "label", tooltip: "View Player List" },
        { DisplayName: "GTC Ranked Codes", type: "label", tooltip: "View GTC Ranked Codes" },
        { DisplayName: "JUPITERX Menu Users", type: "label", tooltip: "View JUPITERX Users" },
        { DisplayName: "MCMV2 Menu Users", type: "label", tooltip: "View MCMV2 Users" },
        { DisplayName: "Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "MusicPlayer": [
        { DisplayName: "Music", type: "slider", options: ["Empty"], tooltip: "Select Music" },
        { DisplayName: "Play Music", type: "button", tooltip: "Play Music" },
        { DisplayName: "Stop Music", type: "button", tooltip: "Stop Music" },
        { DisplayName: "Shuffle Music", type: "button", tooltip: "Shuffle Music" },
        { DisplayName: "Loop Music", type: "toggle", tooltip: "Loop Music" },
        { DisplayName: "Sound Board", type: "toggle", tooltip: "Sound Board" },
        { DisplayName: "Volume", type: "slider", options: ["100%", "90%", "80%", "70%", "60%", "50%", "40%", "30%", "20%", "10%"], tooltip: "Music Volume" },
        { DisplayName: "Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ],
    "ColourSettings": [
        { DisplayName: "MenuColour", type: "slider", options: ["Purple", "Red", "Yellow", "Green", "Blue"], tooltip: "Menu Colour" },
        { DisplayName: "Ghost Colour", type: "slider", options: ["Purple", "Red", "Yellow", "Green", "Blue"], tooltip: "Ghost Colour" },
        { DisplayName: "Beam Colour", type: "slider", options: ["Purple", "Red", "Yellow", "Green", "Blue"], tooltip: "Beam Colour" },
        { DisplayName: "ESP Colour", type: "slider", options: ["Purple", "Red", "Yellow", "Green", "Blue"], tooltip: "ESP Colour" },
        { DisplayName: "Ghost Opacity", type: "slider", options: ["100%", "80%", "60%", "30%", "20%", "0%"], tooltip: "Ghost Opacity" },
        { DisplayName: "HitBoxes Opacity", type: "slider", options: ["100%", "80%", "60%", "30%", "20%", "0%"], tooltip: "HitBox Opacity" },
        { DisplayName: "HitBoxes Colour", type: "slider", options: ["Purple", "Red", "Yellow", "Green", "Blue"], tooltip: "HitBox Colour" },
        { DisplayName: "Platforms Colour", type: "slider", options: ["Purple", "Red", "Yellow", "Green", "Blue"], tooltip: "Platforms Colour" },
        { DisplayName: "Back", type: "submenu", target: "back", tooltip: "Go Back" }
    ]
};

// --- Interactive Menu Logic ---
let history = ['MainMenu'];
let currentMenu = 'MainMenu';
let selectedIndex = 0;
let optionStates = {}; // Stores toggles and slider indices

const menuList = document.getElementById('menu-list');
const menuTitle = document.getElementById('menu-title');
const menuTooltip = document.getElementById('menu-tooltip');
const menuWrapper = document.getElementById('interactive-menu-wrapper');

function getState(menuName, index, option) {
    const key = `${menuName}.${index}`;
    if (optionStates[key] === undefined) {
        if (option.type === 'toggle') optionStates[key] = false;
        if (option.type === 'slider') optionStates[key] = 0; // Default to first option
    }
    return optionStates[key];
}

function setState(menuName, index, option, value) {
    const key = `${menuName}.${index}`;
    optionStates[key] = value;
}

function renderMenu() {
    const data = menuData[currentMenu];
    // Clean up title formatting (e.g., "MainMenu" -> "MAIN MENU", "Movement2" -> "MOVEMENT 2")
    let titleText = currentMenu.replace(/([A-Z])/g, ' $1').replace("2", " 2").trim().toUpperCase();
    menuTitle.innerText = titleText;
    menuList.innerHTML = '';

    data.forEach((option, index) => {
        const li = document.createElement('li');
        li.className = 'menu-option' + (index === selectedIndex ? ' active' : '');
        li.dataset.index = index;
        
        let stateHtml = '';
        if (option.type === 'toggle') {
            const isOn = getState(currentMenu, index, option);
            stateHtml = `<span class="state ${isOn ? 'on' : 'off'}">${isOn ? '[ON]' : '[OFF]'}</span>`;
        } else if (option.type === 'slider') {
            const valIdx = getState(currentMenu, index, option);
            stateHtml = `<span class="state">[${option.options[valIdx]}]</span>`;
        } 
        // Removed the [CLICK] and > text to match the clean screenshot design

        li.innerHTML = `
            <div class="name">${option.DisplayName} ${option.extra ? `<span class="extra">${option.extra}</span>` : ''}</div>
            ${stateHtml}
        `;

        menuList.appendChild(li);
    });

    // Update tooltip
    if (data[selectedIndex]) {
        menuTooltip.innerText = data[selectedIndex].tooltip || "";
    }

    // Scroll into view
    const activeEl = document.querySelector('.menu-option.active');
    if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Event Delegation to fix the tab/click bug
menuList.addEventListener('mouseover', (e) => {
    const li = e.target.closest('.menu-option');
    if (li) {
        const index = parseInt(li.dataset.index);
        if (selectedIndex !== index) {
            selectedIndex = index;
            menuTooltip.innerText = menuData[currentMenu][index].tooltip || "";
            renderMenu();
        }
    }
});

menuList.addEventListener('click', (e) => {
    const li = e.target.closest('.menu-option');
    if (li) {
        const index = parseInt(li.dataset.index);
        selectedIndex = index;
        handleAction('Enter');
    }
});

function navigateTo(target) {
    if (target === 'back') {
        history.pop();
        currentMenu = history[history.length - 1];
    } else {
        currentMenu = target;
        history.push(target);
    }
    selectedIndex = 0;
    renderMenu();
}

function handleAction(key) {
    const data = menuData[currentMenu];
    const option = data[selectedIndex];

    if (key === 'ArrowUp') {
        selectedIndex = Math.max(0, selectedIndex - 1);
        renderMenu();
    } else if (key === 'ArrowDown') {
        selectedIndex = Math.min(data.length - 1, selectedIndex + 1);
        renderMenu();
    } else if (key === 'ArrowRight' || key === 'Enter') {
        if (option.type === 'toggle') {
            let val = getState(currentMenu, selectedIndex, option);
            setState(currentMenu, selectedIndex, option, !val);
        } else if (option.type === 'slider') {
            let val = getState(currentMenu, selectedIndex, option);
            val = Math.min(option.options.length - 1, val + 1);
            setState(currentMenu, selectedIndex, option, val);
        } else if (option.type === 'submenu') {
            navigateTo(option.target);
        } else if (option.type === 'button') {
            // Flash effect
            menuTooltip.innerText = `Executed: ${option.DisplayName}`;
        }
        renderMenu();
    } else if (key === 'ArrowLeft') {
        if (option.type === 'toggle') {
            setState(currentMenu, selectedIndex, option, false);
        } else if (option.type === 'slider') {
            let val = getState(currentMenu, selectedIndex, option);
            val = Math.max(0, val - 1);
            setState(currentMenu, selectedIndex, option, val);
        } else if (option.type === 'submenu' && option.target === 'back') {
            navigateTo('back');
        }
        renderMenu();
    } else if (key === 'Backspace' || key === 'Escape') {
        if (currentMenu !== 'MainMenu') {
            navigateTo('back');
        }
    }
}

// Event Listener for Keyboard
menuWrapper.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Backspace', 'Escape'].includes(e.key)) {
        e.preventDefault();
        handleAction(e.key);
    }
});

// Make sure it loads focused on scroll
menuWrapper.addEventListener('click', () => menuWrapper.focus());

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize
renderMenu();
