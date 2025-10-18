// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {

  // Page Title
  document.title = database.site.title;

  // Profile Section
  document.getElementById("profileName").textContent = database.profile.name;
  document.getElementById("profileTitle").textContent = database.profile.title;
  document.getElementById("aboutTitle").textContent = database.profile.about.title;
  document.getElementById("aboutText1").textContent = database.profile.about.text1;
  document.getElementById("aboutText2").textContent = database.profile.about.text2;
  document.getElementById("aboutImage").src = database.profile.about.image;

  // Social Links
  const socialContainer = document.getElementById("socialLinks");
  database.socialLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.innerHTML = `
      <div class="social-icon-content-wrap">
        <img src="${link.icon}" alt="social-icon">
      </div>`;
    socialContainer.appendChild(a);
  });

  // Services
  const serviceContainer = document.getElementById("services");
  database.services.forEach(service => {
    const div = document.createElement("div");
    div.classList.add("service-card");
    div.innerHTML = `
      <div class="service-img">
        <img src="${service.image}" alt="${service.title}">
      </div>
      <div class="service-info">
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
      </div>`;
    serviceContainer.appendChild(div);
  });

  // Testimonials
  const testimonialContainer = document.getElementById("testimonials");
  database.testimonials.forEach(t => {
    const div = document.createElement("div");
    div.classList.add("testimonial");
    div.innerHTML = `
      <img src="${t.image}" alt="${t.name}" class="testimonial-img">
      <p class="testimonial-comment">"${t.comment}"</p>
      <h4>- ${t.name}</h4>`;
    testimonialContainer.appendChild(div);
  });

  // Contact Info
  document.getElementById("contactPhone").textContent = database.contact.phone;
  document.getElementById("contactEmail").textContent = database.contact.email;
  document.getElementById("contactAddress").textContent = database.contact.address;
});
