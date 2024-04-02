document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputBox');

    document.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;

        if (buttonText === '=') {
            input.value = eval(input.value);
        } else if (buttonText === 'AC') {
            input.value = '';
        } else if (buttonText === 'DEL') {
            input.value = input.value.slice(0, -1);
        } else {
            input.value += buttonText;
        }
    });
});