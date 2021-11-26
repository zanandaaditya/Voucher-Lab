var content_tags = [
    { id: 0, text: "Sweat Food" },
    { id: 1, text: "Male Sports" },
    { id: 2, text: "Female Sports" },
    { id: 3, text: "Spicy Food" },
    { id: 4, text: "Warm Cake" },
    { id: 5, text: "Black Flower" },
];


$("#tags").select2({
    data: content_tags,
    // minimumInputLength: 2,
    width: '100%',
    multiple: true,
    placeholder: "Insert new tags",
    // templateResult:formatState

});



function btn_handler_tags() {
    var names = $('#tags').select2('data');

    for (let name of names) {

        console.log(name)
        console.log(name.text)

        alert(`${name.text}`)

    }
}

var content_category = [
    { id: 0, text: "Man Shirt" },
    { id: 1, text: "Woman Shirt" },
    { id: 2, text: "Garden" },
    { id: 3, text: "Food" },
    { id: 4, text: "Traditional Shirt" },
    { id: 5, text: "Mom and Baby" },
];


$("#category").select2({
    data: content_category,
    // minimumInputLength: 2,
    width: '100%',
    multiple: true,
    placeholder: "Insert new category",
    // templateResult:formatState

});



function btn_handler_category() {
    var names = $('#category').select2('data');

    for (let name of names) {

        console.log(name)
        console.log(name.text)

        alert(`${name.text}`)

    }
}