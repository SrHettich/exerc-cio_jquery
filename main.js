$(document).ready(function(){
    $('header button').click(() =>{
        $('form').slideDown()
    })
    
    $('#cancelar').click(() =>{
        $('form').slideUp()
    })

    $('form').submit((e) =>{
        e.preventDefault()
        const novaTarefa = $('#inp-tarefa').val()

        $(`<li>
            <span>${novaTarefa}</span>
        </li>`).appendTo('ul')

        $('#inp-tarefa').val('')
    })

    $('ul').on('click', 'li', function(){

        if($( this ).css('text-decoration') === 'line-through solid rgb(0, 0, 0)')
        {
            $( this ).css({'text-decoration': '', 'font-style': ''})
        }
        else
        {
            $( this ).css({'text-decoration': 'line-through', 'font-style': 'italic'})
        }
    })
})

