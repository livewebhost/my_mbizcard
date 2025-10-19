  // Page Title
  document.title = database.site.title;

  // Profile Section
  document.getElementById("profileName").textContent = database.profile.name;
  document.getElementById("worktitle").textContent = database.profile.title;
  document.getElementById("about-us-short").textContent = database.profile.about.aboutusshort;
  document.getElementById("profile-image").src = database.profile.about.profileimage;
  document.getElementById("cover-image").src = database.profile.about.coverimage;
  document.getElementById("my-qr-code-url").src = database.site.qrurl;


  function downloadImage() {
    const imagePath = database.site.qrurl;
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
    const imageUrl = database.site.qrurl;
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