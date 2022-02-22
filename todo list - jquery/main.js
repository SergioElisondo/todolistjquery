$('.txtb').on('keyup', function (e) {
            if (e.keyCode == 13 && $('.txtb').val() != '')
            // alert('ok') worked at this point
            {
                // **** START Not Completed TASK ******
                let task = $('<div class="task"></div>').text($('.txtb').val());
                let del = $('<i class="fas fa-trash-alt"></i>').click(function () {
                    let p = $(this).parent();
                    p.fadeOut(function () {
                        p.remove();
                    });
                })
                // **** END  Not Complete TASK ******

                // **** START Completed TASK ******
                let check = $('<i class="fas fa-check"></i>').click(function () {
                    let p = $(this).parent();
                    p.fadeOut(function () {
                        $('.comp').append(p);
                        p.fadeIn()
                    });
                    $(this).remove();
                });
                // **** START Completed TASK ******

                task.append(del, check);
                $('.notcomp').append(task);
                //code below clears the form after input
                $('.txtb').val('');
            }
        })