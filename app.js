document.addEventListener('DOMContentLoaded', () => {
    const unit1Radio = document.getElementById('unit1');
    const unit2Radio = document.getElementById('unit2');
    const unit3Radio = document.getElementById('unit3');

    const unit1Options = document.getElementById('unit1-options');
    const unit2Options = document.getElementById('unit2-options');
    const unit3Options = document.getElementById('unit3-options');

    const totalElement = document.querySelector('.charges span:nth-child(2)');

    function updateTotalPrice(unitPrice) {
        totalElement.textContent = `Total : $${unitPrice} USD`;
    }

    unit2Radio.checked = true;
    unit2Options.style.display = 'block';
    unit1Options.style.display = 'none';
    unit3Options.style.display = 'none';
    updateTotalPrice(18.00);  

    unit1Radio.addEventListener('change', () => {
        if (unit1Radio.checked) {
            unit1Options.style.display = 'block';
            unit2Options.style.display = 'none';
            unit3Options.style.display = 'none';
            updateTotalPrice(10.00);  
        }
    });

    unit2Radio.addEventListener('change', () => {
        if (unit2Radio.checked) {
            unit2Options.style.display = 'block';
            unit1Options.style.display = 'none';
            unit3Options.style.display = 'none';
            updateTotalPrice(18.00);  
        }
    });

    unit3Radio.addEventListener('change', () => {
        if (unit3Radio.checked) {
            unit3Options.style.display = 'block';
            unit1Options.style.display = 'none';
            unit2Options.style.display = 'none';
            updateTotalPrice(24.00);
        }
    });
});
