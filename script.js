
digits_pressed = 0;


function calculate_entries(string_to_caluclate) {

	for (let i = string_to_caluclate.length-1; i > -1; i--) {
      if (string_to_caluclate[i] == "+"){
		  return calculate_entries(string_to_caluclate.substring(0,i)) + calculate_entries(string_to_caluclate.substring(i+1,string_to_caluclate.length));
      }
	  if (string_to_caluclate[i] == "-"){
		  return calculate_entries(string_to_caluclate.substring(0,i)) - calculate_entries(string_to_caluclate.substring(i+1,string_to_caluclate.length));
      }
    }

    for (let i = string_to_caluclate.length-1; i > -1; i--) {
      if (string_to_caluclate[i] == "*"){
		  return calculate_entries(string_to_caluclate.substring(0,i)) * calculate_entries(string_to_caluclate.substring(i+1,string_to_caluclate.length));
      }
	  if (string_to_caluclate[i] == "/"){
		  return calculate_entries(string_to_caluclate.substring(0,i)) / calculate_entries(string_to_caluclate.substring(i+1,string_to_caluclate.length));
      }
    }
	
	
	return parseFloat(string_to_caluclate);

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