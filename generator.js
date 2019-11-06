function generateQR(event){
    $('#qrcode canvas').remove();
    event.preventDefault();
    var event = $('#event').val();
    var level = $('#level').val();
    var point = $('#point').val();
    $('#qrcode').qrcode('{"event": "'+event+'","level": "'+level+'","point": "'+point+'"}');
}