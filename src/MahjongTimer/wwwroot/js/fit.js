// Shrinks the calculator's yaku/fu lists until nothing is cut off and nothing needs scrolling.
// Called from Calculator.razor whenever a new result is shown.

const LARGEST = 12;  // px: the normal list size
const SMALLEST = 9;  // px: below this the text gets hard to read at arm's length
const STEP = 0.5;

export function fitLists(lists) {
    if (!lists) return;
    let size = LARGEST;
    lists.style.setProperty("--list-size", `${size}px`);
    while (size > SMALLEST && doesNotFit(lists)) {
        size -= STEP;
        lists.style.setProperty("--list-size", `${size}px`);
    }
}

function doesNotFit(lists) {
    if (lists.scrollHeight > lists.clientHeight) return true;
    // A name is cut off when its text is wider than the space it has.
    return [...lists.querySelectorAll(".calc-line-name > *")].some(part => part.scrollWidth > part.clientWidth);
}
