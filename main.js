let counts = [0, 0, 0];

function incrementCount(index) {
    counts[index - 1]++;
    document.getElementById('count' + index).textContent = counts[index - 1];
}