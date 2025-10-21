  // Page Title
  document.title = database.site.title;

  // Profile Section
  document.getElementById("profileName").textContent = database.profile.name;
  document.getElementById("worktitle").textContent = database.profile.title;
  document.getElementById("about-us-short").textContent = database.profile.about.aboutusshort;
  document.getElementById("about-us-long").textContent = database.profile.about.aboutuslong;
  document.getElementById("profile-image").src = database.profile.about.profileimage;
  document.getElementById("cover-image").src = database.profile.about.coverimage;
  document.getElementById("my-qr-code-url").src = database.site.qrurl;
  document.getElementById("gmap").src = database.contact.gmap;

  document.getElementById("contactmobile").textContent = database.contact.phone;
  document.getElementById("contactmobilehref").href = "tel:"+database.contact.phone;
  document.getElementById("contactaddress").textContent = database.contact.address;
  document.getElementById("contactemail").textContent = database.contact.email;
  document.getElementById("contactemailhref").href = "mailto:"+database.contact.email;

  document.getElementById("contactmobile1").textContent = database.contact.phone;
  document.getElementById("contactmobilehref1").href = "tel:"+database.contact.phone;

  document.getElementById("instagram-profile-link").href = database.profile.about.profilelink;