// Browser features the C# side can't reach directly: screen wake lock, sound, vibration, saved settings.

const settingsKey = 'mahjongTimer.settings';
let wakeLock = null;
let audio = null;

async function keepAwake() {
    if (!('wakeLock' in navigator) || document.visibilityState !== 'visible' || wakeLock) return;
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => { wakeLock = null; });
    } catch {
        // Battery saver or an unsupported browser can refuse; the timer still works.
    }
}

// page is the C# Home component; it is told when the app leaves the screen so the clock can pause.
export function init(page) {
    keepAwake();
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            page.invokeMethodAsync('OnPageHidden').catch(() => { });
        } else {
            keepAwake();
        }
    });
}

// Audio can only start after a user gesture, so every tap calls this.
export function unlockAudio() {
    try {
        audio ??= new (window.AudioContext || window.webkitAudioContext)();
        if (audio.state === 'suspended') audio.resume();
    } catch { }
    keepAwake();
}

export function timeUp(soundOn) {
    if (soundOn && audio) {
        try {
            const now = audio.currentTime;
            for (const start of [0, 0.25]) {
                const osc = audio.createOscillator();
                const gain = audio.createGain();
                osc.type = 'square';
                osc.frequency.value = 880;
                gain.gain.setValueAtTime(0.15, now + start);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + start + 0.2);
                osc.connect(gain).connect(audio.destination);
                osc.start(now + start);
                osc.stop(now + start + 0.2);
            }
        } catch { }
    }
    try { navigator.vibrate?.([300, 120, 300]); } catch { }
}

export function loadSettings() {
    try { return localStorage.getItem(settingsKey); } catch { return null; }
}

export function saveSettings(json) {
    try { localStorage.setItem(settingsKey, json); } catch { }
}
