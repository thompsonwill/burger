$(document).ready(function () {

    var $burgerContainer = $(".burger-container");

    var burgers = [];

    function initializeRows() {
        $burgerContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < burgers.length; i++) {
            rowsToAdd.push(createNewRow(burgers[i]));
        }
        $burgerContainer.prepend(rowsToAdd);
    }

    function createNewRow(todo) {
        var $newInputRow = $(
            [
                "<li class='list-group-item todo-item'>",
                "<span>",
                todo.text,
                "</span>",
                "<input type='text' class='edit' style='display: none;'>",
                "<button class='delete btn btn-danger'>x</button>",
                "<button class='complete btn btn-primary'>✓</button>",
                "</li>"
            ].join("")
        );


        $(".create-form").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();

            var newBurger = {
                name: $("#burger_name").val().trim()
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        });




    }