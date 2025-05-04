// Button click
document.getElementById("magicBtn").addEventListener("click", () => {
    alert("✨ You clicked the magic button! ✨");
  });
  
  // Hover
  const colorBox = document.getElementById("colorBox");
  colorBox.addEventListener("mouseenter", () => {
    colorBox.style.backgroundColor = "#facc15"; // yellow
  });
  colorBox.addEventListener("mouseleave", () => {
    colorBox.style.backgroundColor = "#a5b4fc"; // reset
  });
  
  // Keypress
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyMsg").textContent = `You pressed: ${e.key}`;
  });
  
  // Double click secret
  const unicorn = document.getElementById("unicorn");
  unicorn.addEventListener("dblclick", () => {
    unicorn.classList.toggle("secret");
    alert("🦄 Secret unicorn power unlocked!");
  });
  
  // Image gallery
  const images = [
    "https://placekitten.com/300/200",
    "https://placebear.com/300/200",
    "https://place-puppy.com/300x200"
  ];
  let currentImg = 0;
  document.getElementById("nextImage").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentImg];
  });
  
  // Form validation
  const form = document.getElementById("signupForm");
  const feedback = document.getElementById("feedback");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (!name || !email || !password) {
      feedback.textContent = "Please fill in all fields!";
      return;
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Invalid email format!";
      return;
    }
  
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters!";
      return;
    }
  
    feedback.style.color = "green";
    feedback.textContent = "🎉 Signup successful! Welcome!";
    form.reset();
  });
  
  // Real-time password feedback
  document.getElementById("password").addEventListener("input", (e) => {
    if (e.target.value.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "";
    }
  });  