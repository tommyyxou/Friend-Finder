$("#submit").on("click", function(event) {
    event.preventDefault();
    function valid () {
        
        if ($("#name").val() && $("#photo").val() && $("#q1").val() && $("#q2").val() &&
            $("#q3").val() && $("#q4").val() && $("#q5").val() && $("#q6").val() && 
            $("#q7").val() && $("#q8").val() && $("#q9").val() && $("#q10").val() !== ""
        ) {
            return true;
        } else {
            alert("You Must Answer all Questions")
        }
    }

    if (valid()) {

        let newFriend = {
            name: $("#name").val().trim(),
            photo_url: $("#photo").val().trim(),
            Q1: $("#q1").val().trim(),
            Q2: $("#q2").val().trim(),
            Q3: $("#q3").val().trim(),
            Q4: $("#q4").val().trim(),
            Q5: $("#q5").val().trim(),
            Q6: $("#q6").val().trim(),
            Q7: $("#q7").val().trim(),
            Q8: $("#q8").val().trim(),
            Q9: $("#q9").val().trim(),
            Q10: $("#q10").val().trim()
        }
        
        $.post("/api/friends", newFriend)
        .then(function(data) {
            $("#survey").remove();
            $("#match").append("<h1>Best Match</h1>");
            $("#match").append("<h3>Name: " + data.matchName +"</h1>");
            $("#match").append("<img src='"+ data.matchImage +"' alt='Best Matched Image' width='100%' height='auto'></img>");
        });
    }
});