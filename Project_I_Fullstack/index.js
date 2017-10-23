$(function () {
    var url = "http://localhost:3000/IT";

    $.get(url, function (data) {

        $.each(data, function (i, obj) {

            var html = ' <tr>' +
                '<td>' + obj.id + '</td>' +
                '<td>' + obj.firstname + '</td>' +
                '<td>' + obj.lastname + '</td>' +
                '<td>' + obj.Major + '</td>' +
                '<td><button type="button" id="' + obj.id + '" class="btn-delete" name="button" onclick="">Delete</button></td>' +
                '</tr';
            $('#IT').append(html);

            $('.btn-delete').click(function () {
                var id = this.id;
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/IT/" + id,
                    success: function (data, textStatus, jqXHR) {
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            });

        });
    });
    url = "http://localhost:3000/EBIZ";

    $.get(url, function (data) {

        $.each(data, function (i, obj) {

            var html = ' <tr>' +
                '<td>' + obj.id + '</td>' +
                '<td>' + obj.firstname + '</td>' +
                '<td>' + obj.lastname + '</td>' +
                '<td>' + obj.Major + '</td>' +
                '<td><button type="button" id="' + obj.id + '" class="btn-delete" name="button" onclick="" value="de">Delete</button></td>' +
                '</tr';
            $('#EBIZ').append(html);

            $('.btn-delete').click(function () {
                var id = this.id;
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/EBIZ/" + id,
                    success: function (data, textStatus, jqXHR) {
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            });
        });
    });
    url = "http://localhost:3000/SE";

    $.get(url, function (data) {

        $.each(data, function (i, obj) {

            var html = ' <tr>' +
                '<td>' + obj.id + '</td>' +
                '<td>' + obj.firstname + '</td>' +
                '<td>' + obj.lastname + '</td>' +
                '<td>' + obj.Major + '</td>' +
                '<td><button type="button" id="' + obj.id + '" class="btn-delete" name="button" onclick="">Delete</button></td>' +
                '</tr';
            $('#SE').append(html);

            $('.btn-delete').click(function () {
                var id = this.id;
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/SE/" + id,
                    success: function (data, textStatus, jqXHR) {
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            });
        });
    });
    url = "http://localhost:3000/ETM";

    $.get(url, function (data) {

        $.each(data, function (i, obj) {

            var html = ' <tr>' +
                '<td>' + obj.id + '</td>' +
                '<td>' + obj.firstname + '</td>' +
                '<td>' + obj.lastname + '</td>' +
                '<td>' + obj.Major + '</td>' +
                '<td><button type="button" id="' + obj.id + '" class="btn-delete" name="button" onclick="">Delete</button></td>' +
                '</tr';
            $('#ETM').append(html);

            $('.btn-delete').click(function () {
                var id = this.id;
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/ETM/" + id,
                    success: function (data, textStatus, jqXHR) {
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            });
        });
    });
    url = "http://localhost:3000/GEO";

    $.get(url, function (data) {

        $.each(data, function (i, obj) {

            var html = ' <tr>' +
                '<td>' + obj.id + '</td>' +
                '<td>' + obj.firstname + '</td>' +
                '<td>' + obj.lastname + '</td>' +
                '<td>' + obj.Major + '</td>' +
                '<td><button type="button" id="' + obj.id + '" class="btn-delete" name="button" onclick="delete">Delete</button></td>' +
                '</tr';
            $('#GEO').append(html);

            $('.btn-delete').click(function () {
                var id = this.id;
                $.ajax({
                    type: 'DELETE',
                    url: "http://localhost:3000/GEO/" + id,
                    success: function (data, textStatus, jqXHR) {
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                    }
                });
            });
        });
    });
    $('#submit').click(
        function () {
            if ($("#major option:selected").text() === "Information Tehnology") {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/IT",
                    dataType: "json",
                    data: JSON.stringify({
                        "id": $('#id').val(),
                        "firstname": $('#firstname').val(),
                        "lastname": $('#lastname').val(),
                        "Major": $('#major').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert('Created successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert(' error: ' + textStatus);
                    }
                });
            } else if ($("#major option:selected").text() === "Electronic Business") {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/EBIZ",
                    dataType: "json",
                    data: JSON.stringify({
                        "id": $('#id').val(),
                        "firstname": $('#firstname').val(),
                        "lastname": $('#lastname').val(),
                        "Major": $('#major').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert(' created successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert(' error: ' + textStatus);
                    }
                });
            } else if ($("#major option:selected").text() === "Software Engineering") {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/SE",
                    dataType: "json",
                    data: JSON.stringify({
                        "id": $('#id').val(),
                        "firstname": $('#firstname').val(),
                        "lastname": $('#lastname').val(),
                        "Major": $('#major').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert(' created successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert(' error: ' + textStatus);
                    }
                });
            } else if ($("#major option:selected").text() === "Environmental Technology and Management") {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/ETM",
                    dataType: "json",
                    data: JSON.stringify({
                        "id": $('#id').val(),
                        "firstname": $('#firstname').val(),
                        "lastname": $('#lastname').val(),
                        "Major": $('#major').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert(' created successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert(' error: ' + textStatus);
                        location.reload(true);
                    }
                });
            } else if ($("#major option:selected").text() === "Environmental Geo-informatics") {
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: "http://localhost:3000/GEO",
                    dataType: "json",
                    data: JSON.stringify({
                        "id": $('#id').val(),
                        "firstname": $('#firstname').val(),
                        "lastname": $('#lastname').val(),
                        "Major": $('#major').val()
                    }),
                    success: function (data, textStatus, jqXHR) {
                        alert(' created successfully');
                        location.reload(true);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert(' error: ' + textStatus);
                        location.reload(true);
                    }
                });
            }
        }
    );
});