function arrayRotation(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstItem = array.shift()
        array.push(firstItem)
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)