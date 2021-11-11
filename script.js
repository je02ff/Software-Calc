
digits_pressed = 0;


function calculate_entries(string_to_caluclate) {

    // need to implement eval() func here

}

function digit_pressed() {
    digits_pressed++;
    console.log(digits_pressed)

    if (digits_pressed > 8) {
        calc_form.display.value = 'ERR'
        digits_pressed = 0;

    }
}

function clear_all() {
    calc_form.display.value = ' '
    digits_pressed = 0;
}