

// function superbowlWin(array) {
//     return array['result'] === 'W';
// }

// record.find(superbowlWin).year;

// record.find(superbowlWin);

// function xxx(array) {
//     return array['result'] === 'W';
// }

// array.find(xxx).year;


function xxx(element) {
    // console.log("my xxx array:" , array)
    return element['result'] === 'W';
}

function superbowlWin(array) {
    let result = array.find(xxx);
    if (result) {
        return result.year;
    } else {
        return result;
    }
}