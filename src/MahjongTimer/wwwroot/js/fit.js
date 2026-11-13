// Shrinks parts of the calculator until they fit. Called from Calculator.razor.

const STEP = 0.5; // px

/** Lowers a CSS size variable on `element` from `largest` toward `smallest` while `doesNotFit()`. */
function shrink(element, variable, largest, smallest, doesNotFit) {
    let size = largest;
    element.style.setProperty(variable, `${size}px`);
    while (size > smallest && doesNotFit()) {
        size -= STEP;
        element.style.setProperty(variable, `${size}px`);
    }
}

const cutOff = el => el.scrollWidth > el.clientWidth;

/** Yaku/fu lists: nothing cut off, nothing needing to scroll. 12px normally, 9px at the least. */
export function fitLists(lists) {
    if (!lists) return;
    shrink(lists, "--list-size", 12, 9, () =>
        lists.scrollHeight > lists.clientHeight ||
        [...lists.querySelectorAll(".calc-line-name > *")].some(cutOff));
}

/** Conditions: every row on one line, and the column not needing to scroll. 11px normally, 7px at the least. */
export function fitConditions(conditions) {
    if (!conditions) return;
    shrink(conditions, "--cond-size", 11, 7, () =>
        cutOff(conditions) ||
        conditions.scrollHeight > conditions.clientHeight ||
        [...conditions.querySelectorAll(".calc-cond")].some(cutOff));
}
