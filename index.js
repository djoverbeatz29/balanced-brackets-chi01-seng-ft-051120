const chars = {
    "(": ")",
    "[": "]",
    "{": "}"
}

function isBalanced(str) {
    while (str.length > 0) {
        if (ranges(str) !== false) {
            str = ranges(str);
        }
        else {
            return false;
        }
    }
    return true;
}

function ranges(h) {
    let [li, ri] = [0, 0];
    const [left, right] = [h[0], chars[h[0]]];
    for (let i = 1; i < h.length; i++) {
        if (h[i] === left) {
            li = i;
        }
        else if (h[i] === right) {
            ri = i;
            break;
        }
    }
    if (li < ri && isSubBalanced(h.slice(li + 1, ri))) {
        return h.split('').filter((ch, i)=>i !== li && i !== ri).join('')
    }
    else {
        return false
    }
    
}

function isSubBalanced(str) {
    const counts = {};
    for (const ch of str) {
        counts[ch] = (counts[ch] || 0) + 1;
    }
    for (const ch of Object.keys(chars)) {
        if (counts[ch] !== counts[chars[ch]]) {
            return false;
        }
    }
    return true;
}