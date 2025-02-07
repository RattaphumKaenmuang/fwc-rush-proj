
$(document).ready(function(){
    function randomise_text(element, max_iterations){
        var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
        const real_text = element.text();
        
        let iterations = 0;
        const interval = setInterval(() => {
            let temp_text = "";
            for (let i = 0; i < real_text.length; i++) {
                let rand_idx = Math.floor(Math.random() * letters.length);
                let random_char = letters[rand_idx];
                temp_text += random_char;
            }
            element.text(temp_text);
            iterations++;

            if (iterations >= max_iterations) {
                clearInterval(interval);
                element.text(real_text);
            }
        }, 50);
    }

    randomise_text($("#name"), 15);
    randomise_text($("#desc"), 10);
    randomise_text($("#long-desc"), 5);
});