document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Membuat URL WhatsApp dengan pesan yang telah diisi
    var whatsappMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    var whatsappLink = `https://wa.me/081542612228?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect ke WhatsApp
    window.open(whatsappLink, "_blank");
  });
