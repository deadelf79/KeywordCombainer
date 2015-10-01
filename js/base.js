$("#mixer").click(function () {    
    var grp_a_vals = $("#grp_A textarea").val().split("\n");
    var grp_b_vals = $("#grp_B textarea").val().split("\n");
    var combine = [];
    // clearing
    var index;
    for (index = 0; index < grp_a_vals.length; index++) {
        grp_a_vals[index] = $.trim(grp_a_vals[index]);
    }
    for (index = 0; index < grp_b_vals.length; index++) {
        grp_b_vals[index] = $.trim(grp_b_vals[index]);
    }
    // clean empty
    grp_a_vals = grp_a_vals.filter(function(n){ return n != '' });
    grp_b_vals = grp_b_vals.filter(function(n){ return n != '' }); 
    // combining
    for (var x = 0; x < grp_a_vals.length; x++) {
        for (var y = 0; y < grp_b_vals.length; y++) {
            combine.push(grp_a_vals[x] + " " + grp_b_vals[y]);
        }
    }
    $("#result-count").html("( Результатов: "+combine.length+" )");
    $("#grp_result textarea").val(combine.join("\n"));
});