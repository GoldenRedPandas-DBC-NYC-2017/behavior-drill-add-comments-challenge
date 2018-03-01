$(document).ready(function() {
  $("#new_comment_button").click(function(e){
    e.preventDefault();
    $(this).removeClass()
    $(this).addClass("#center hidden")
    $("#new_comment_form").removeClass("#center hidden")
  })

  $("#new_comment_form").submit(function(e) {
    e.preventDefault();

    var commentText = $("#new_comment_form #comment_text").val();
    var commentName = $("#new_comment_form #commenter_name").val();

    var commentSubmission = '<li class="comment"><article><p></p><span class="author">commentName</span><button class="button delete-button">Delete Comment</button></article></li>'

    var commentSubmission = $.parseHTML(commentSubmission)
    $(commentSubmission).find("p").text(commentText)
    $(commentSubmission).find("span").text(commentName)
    $("ul#comment_list").append(commentSubmission)

    $(this).removeClass()
    $(this).addClass("center hidden")

    $(this).find("textarea").val("")
    $(this).find("#commenter_name").val("")

    $("#new_comment_button").removeClass("#center hidden")
    $("#new_comment_button").addClass("new-comment-button button center")
  })

  $("#comment_list").on("click", "button", function(e) {
    e.preventDefault();
    $(this).closest('li.comment').remove();
  });
});

