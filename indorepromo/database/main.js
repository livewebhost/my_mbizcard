  // Page Title
  document.title = database.site.title;

  // Profile Section
  document.getElementById("profileName").textContent = database.profile.name;
  document.getElementById("worktitle").textContent = database.profile.title;
  document.getElementById("about-us-short").textContent = database.profile.about.aboutusshort;
  document.getElementById("profile-image").src = database.profile.about.profileimage;
  document.getElementById("cover-image").src = database.profile.about.coverimage;
  document.getElementById("my-qr-code-url").src = database.site.qrurl;
