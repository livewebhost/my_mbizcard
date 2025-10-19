document.addEventListener("DOMContentLoaded", () => {

  // Page Title
  document.title = database.site.title;

  // Profile Section
  document.getElementById("profileName").textContent = database.profile.name;
  document.getElementById("worktitle").textContent = database.profile.title;
  document.getElementById("profile-image").src = database.profile.about.profileimage;
  document.getElementById("cover-image").src = database.profile.about.coverimage;
});
