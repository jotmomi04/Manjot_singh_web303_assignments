$(function() {
    contentRows();
    searchName();
    button();
    update();
});

let rows = [];
$min = $('#value-min');
$max = $('#value-max');
$table = $('#rates');
moviecharacter = [];

function update(min, max) {
    rows.forEach(function(row) {
        if (row.person.episodes >= min && row.person.episodes <= max) {
            row.$element.show();
        } else {
            row.$element.hide();
        }
    });
}



function searchName() {
    $('#search').keydown(function() {
        let $names = $('#name');
        let $search = $('#search');
        let cache = [];
        console.log($search.val());
        $names.each(function() {
            cache.push({
                element: this
            });
        });
    })
    filter();
};

function filter() {
    $(document).ready(function() {
        $('#search').on('keyup', function() {

            let value = $(this).val().toLowerCase();
            $('#tbody tr').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                if (value != '') {
                    $(this).css({ 'background-color': 'yellow', 'color': 'black', 'font-weight': 'bold' });
                } else {
                    $(this).css({ 'background-color': '', 'color': 'black', 'font-weight': '' });
                }
            });

        });
    });
};
//adding Sorting
var compare = {
    name: function(a, b) {
        console.log("processing the words", b, ", ", a);
        if (a < b) {
            return -1;
        } else if (b < a) {
            return 1
        } else //they're equal
        {
            return 0;
        }
    },
    compareNumbersAscending: function(a, b) {
        // b is the first value being compared, a is the second
        console.log("processing the numbers", b, ", ", a);
        return parseInt(a) - parseInt(b);
    },
    compareNumbersDescending: function(a, b) {
        // b is the first value being compared, a is the second
        console.log("processing the numbers", b, ", ", a);
        return b - a;
    },
    compareNumbersRandom: function(a, b) {
        return 0.5 - Math.random(); // Math.random() returns a value between 0 and 1
    },
    compareDates: function(a, b) {
        var dateA = new Date(a);
        var dateB = new Date(b);
        return dateA - dateB;
    }
};


// beginning of the dynamic filtering example


function contentRows() {
    $.getJSON("moviecharacter.json", function(results) {
        $.each(results["moviecharacter"], function(i, field) {
            let $row = $('<tr><td><p>' + field['name'] + "</p></td><td><p>" + field['character'] + "</p></td><td><p>" + field['parts'] + "</p></td><td><p>" + field['episodes'] + "</p></td><td><p>" + field['role'] + "</p></td><td><p>" + field['age'] + "</p></td> </tr>");
            moviecharacter.push({
                person: field['name'],
                $element: $row
            });
            $("#table").append($row);
        });
    });
}

function init() { // this is essentially the jquery ready function now
    contentRows();


    $('.sortable').each(function() {
        var $table = $(this); // This table
        var $tbody = $table.find('tbody'); // Table body
        var $controls = $table.find('th'); // Table headers
        var rows = $tbody.find('tr').toArray(); // Array of rows
        $controls.on('click', function() { // Event handler
            var $header = $(this); // Get header
            var order = $header.data('sortbythis'); // either name or compareNumbersAscending
            var column; // Used later
            if ($header.is('.ascending') || $header.is('.descending')) { // Toggle to other class
                $header.toggleClass('ascending descending');
                // Reverse the array
                $tbody.append(rows.reverse());
            } else { //not sorted yet, we need to sort
                $header.addClass('ascending'); // Add class to header
                // Remove asc or desc from all other headers
                $header.siblings().removeClass('ascending descending'); // If compare object has method of that name
                console.log("check if has property");
                if (compare.hasOwnProperty(order)) {
                    console.log("has property");
                    column = $controls.index(this); // Column's index no
                    rows.sort(function(a, b) { // Call sort() on rows
                        a = $(a).find('td').eq(column).text(); // Text of column row a
                        b = $(b).find('td').eq(column).text(); // Text of column row b
                        return compare[order](a, b); // Call compare method
                    });
                    $tbody.append(rows);
                }
            }
        });
    });

}

$(init);