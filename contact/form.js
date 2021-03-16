
$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });	
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  nav fix  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// nav fix onscroll

window.onload =function(){
        const EFFECT =document.querySelector("#navigare_fix");

        window.addEventListener("scroll", scrollEffect);

        function scrollEffect(){
            if(window.scrollY>= 160) {
                EFFECT.style.opacity= "1";
                EFFECT.style.transform= "translateY(0px)";
                EFFECT.style.transition = "1s ease-in-out";
            }
            else {
                EFFECT.style.opacity = "0";
                EFFECT.style.transform = "translateY(-50px)";
            }
        }
        scrollEffect()
    }

