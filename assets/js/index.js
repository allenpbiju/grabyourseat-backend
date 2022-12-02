(function ($) {
    $.fn.serialize = function (options) {
        return $.param(this.serializeArray(options));
    };

    $.fn.serializeArray = function (options) {
        var o = $.extend({
            checkboxesAsBools: false
        }, options || {});

        var rselectTextarea = /select|textarea/i;
        var rinput = /text|hidden|password|search|number/i;

        return this.map(function () {
            return this.elements ? $.makeArray(this.elements) : this;
        })
        .filter(function () {
            return this.name && !this.disabled &&
                (this.checked
                || (o.checkboxesAsBools && this.type === 'checkbox')
                || rselectTextarea.test(this.nodeName)
                || rinput.test(this.type));
            })
            .map(function (i, elem) {
                var val = $(this).val();
                return val == null ?
                null :
                $.isArray(val) ?
                $.map(val, function (val, i) {
                    return { name: elem.name, value: val };
                }) :
                {
                    name: elem.name,
                    value: (o.checkboxesAsBools && this.type === 'checkbox') ?
                        (this.checked ? true : false) :
                        val
                };
            }).get();
    };
})(jQuery);

$("#add_event").submit(function(event) {
    alert('Event Added Successfully')
})

$("#update_event").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray({
        checkboxesAsBools: true
    });
    var data = {}

    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })

    console.log(unindexed_array)

    var request = {
        "url" : `http://localhost:3000/api/events/${data.id}`,
        "method" : "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Event updated successfully")
    })
})

if(window.location.pathname == '/'){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/events/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this Event?")){
            $.ajax(request).done(function(response){
                alert("Event Deleted successfully")
                location.reload()
            })
        }
    })
}