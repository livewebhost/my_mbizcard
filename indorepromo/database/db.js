const database = {
  site: {
    title: "Indore Promo",
    description: "Instagram Influencer in indore",
    qrurl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ encodeURIComponent(window.location.href),
  },

  profile: {
    name: "Manisha Raikwar",
    title: "Instagram Content Creator",
    about: {
      profileimage: "img/profile_pic.jpg",
      coverimage: "img/cover.png",
      aboutusshort: "मैं एक creative video editor और digital content creator हूँ, जो business promotions के लिए engaging Instagram reels बनाती हूँ। चाहे आपका brand नया हो या established — मैं आपके products और services को short, impactful reels के ज़रिए audience तक पहुँचाने में मदद करती हूँ। हर reel को unique concept और smart editing से बनाया जाता है ताकि आपका business online grow करे और लोगों का ध्यान खींचे। अगर आप भी अपने business, brand या service के लिए reel बनवाना चाहते हैं — तो आज ही contact करें!",
    }
  },

  socialLinks: [
    { icon: "assets/images/social-icon/icon2.svg", url: "https://www.facebook.com/" },
    { icon: "assets/images/social-icon/icon3.svg", url: "https://www.instagram.com/" },
    { icon: "assets/images/social-icon/icon4.svg", url: "https://wa.me/+1234567890" },
    { icon: "assets/images/social-icon/icon5.svg", url: "https://www.linkedin.com/" }
  ],

  services: [
    {
      title: "Gym Fitness Class",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
      image: "assets/images/services/services1.png",
      icon: "assets/images/services/service-icon1.svg"
    },
    {
      title: "Body Building",
      desc: "Praesentium blanditiis ducimus vero eos et accusamus.",
      image: "assets/images/services/services2.png",
      icon: "assets/images/services/service-icon2.svg"
    },
    {
      title: "Power Lifting",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      image: "assets/images/services/services3.png",
      icon: "assets/images/services/service-icon3.svg"
    }
  ],

  testimonials: [
    {
      name: "John Doe",
      comment: "Henry’s workouts completely changed my life! I feel stronger and more confident than ever.",
      image: "assets/images/testimonial1.png"
    },
    {
      name: "Sarah Lee",
      comment: "Best trainer I’ve ever worked with. He truly cares about his clients’ progress.",
      image: "assets/images/testimonial2.png"
    }
  ],

  contact: {
    phone: "+1 234 567 890",
    email: "contact@henryfitness.com",
    address: "123 Fitness Street, New York, USA"
  }
};
