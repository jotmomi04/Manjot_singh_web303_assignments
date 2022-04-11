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

function button() {
    let Names = $('#tbody p');
    let $buttons = $('#buttons');
    let tagged = {};

    Names.each(function() {
        var name = this;
        var hashtags = $(this).data('moviecharacter');
        if (hashtags) {
            hashtags.split(',').forEach(function(tagName) {
                if (tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(name);
            })
        }
    });


    $('<button/>', {
        text: 'A - M',
        class: 'active',
        click: function() {
            $(this).addClass('active').siblings().removeClass('active');
            console.log('clicked');
            Names.show();
            $.each(character, function() {
                if (character <= "M") {
                    $("p").show();
                } else {
                    $("p").hide();
                }
                console.log(character);
            })
        }
    }).appendTo($buttons);
    $('<button/>', {
        text: 'M - Z',
        class: 'active',
        click: function() {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
            Names.show();
            console.log('clicked');
            $.each(character, function() {
                if (character > "M") {
                    $("p").show();
                } else {
                    $("p").hide();
                }
                console.log(character);
            })
        }
    }).appendTo($buttons);
    $.each(tagged, function(tagName) {
        $('<button/>', {
            text: tagName + ' (' + tagged[tagName].length + ')',
            click: function() {
                $(this).addClass('active').siblings().removeClass('active');
                Names.hide().filter(tagged[tagName]).show();
            }
        }).appendTo($buttons);
    })
    console.log($buttons);

}