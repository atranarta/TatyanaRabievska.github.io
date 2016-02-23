jQuery(document).ready(function () {

    jQuery('#form').submit(function () {

        var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + encodeURIComponent(jQuery('#question').val()) + '&callback=GoogleCallback&context=?';

        jQuery.ajax({
            url: urlFull,
            dataType: "jsonp",
            success: function (data, textStatus) {
                var ul = document.createElement("ul");
                jQuery.each(data.results,
                    function (i, val) {
                        var li = document.createElement("li");

                        li.innerHTML = '<a href="' + val.url + '" title="' + val.url + '" target="_blank">' + val.title + "</a> - " + val.content;

                        ul.appendChild(li);
                    }
                );
                jQuery('#results').html(ul);
            }
        });
        return false;
    });

});

function GoogleCallback(func, data) {
    window[func](data);
}