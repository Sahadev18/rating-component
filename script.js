const ratings = document.querySelectorAll('li');
const submit = document.querySelector('button');
const container = document.querySelector('#container');
const thank = document.querySelector('#thank-you');

// Add click event listener to each rating
ratings.forEach(function(rating) {
    rating.addEventListener('click', function() {
        // Remove 'select' and 'disabled' classes from all ratings
        ratings.forEach(function(item) {
            item.classList.remove('select', 'disabled');
        });
        // Add 'select' and 'disabled' classes to the clicked rating
        rating.classList.add('select', 'disabled');
    });
});


submit.addEventListener('click',function(){
    const rate = document.querySelector('.select').textContent;
    if(rate === null){
        alert('Please select a rating');
        return;
    }
    const span = document.querySelector('span');
    span.textContent = rate;
    container.style.display = 'none';
    thank.style.display = 'flex';
});