/*------------------------------------- Slider -------------------------------------*/
$('.features-sec-bottom-wrap').slick({
  dots: true,
  arrows: false,
  infinite: false,
  autoplay:true,
  speed: 300,
  rows: 0 ,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.testimonial-sec-wrap').slick({
  dots: false,
  arrows: false,
  infinite: false,
  autoplay:true,
  speed: 300,
  rows: 0 ,
  slidesToShow: 1,
  slidesToScroll: 1
});

/*------------------------------------- Preloader -------------------------------------*/
$(window).on("load", function() {
  $('.preloader').delay(1000).fadeOut(800); 
});

/*------------------------------------- Scanner Img Download -------------------------------------*/
function downloadImage() {
  const imagePath = 'img/qrcode.png';
  const fileName = 'qrcode.png';
  const link = document.createElement('a');
  link.href = imagePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
/*------------------------------------- Share Scanner Img -------------------------------------*/
function shareImage() {
  const imageUrl = 'img/qrcode.png';
  const title = 'Share Scanner Image';
  const text = 'Check out this image!';
  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: imageUrl
    }).then(() => {
      console.log('Image shared successfully.');
    }).catch((error) => {
      console.error('Error sharing image:', error);
    });
  } else {
    alert('Sharing is not supported on this device.');
  }
}