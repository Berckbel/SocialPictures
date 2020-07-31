$('#btn-like').click(function(e){
    e.preventDefault();
    let imageId = $(this).data('id');
    
    $.post('/images/' + imageId +'/like').done(data =>{
        console.log(data);
        $('.likes-count').text(data.likes);
    });
});