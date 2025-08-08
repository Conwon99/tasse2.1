// DOM Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileDropdown = document.getElementById("mobileDropdown")
const mobileOverlay = document.getElementById("mobileOverlay")
const bookPopupBtn = document.getElementById("bookPopupBtn")
const bookPopupBtnMobile = document.getElementById("bookPopupBtnMobile")
const bookingModal = document.getElementById("bookingModal")
const closeModal = document.getElementById("closeModal")
const cancelBooking = document.getElementById("cancelBooking")
const typewriterText = document.getElementById("typewriter-text")
const cursor = document.getElementById("cursor")
const navItems = document.querySelectorAll(".nav-item")
const navMobileItems = document.querySelectorAll(".nav-mobile-item")
const bookingForm = document.querySelector(".booking-form")

// State
let isMobileMenuOpen = false
let isBookingModalOpen = false

// Typewriter Effect
const fullText = "WELCOME TO TASSE SPECIALTY COFFEE"
let currentIndex = 0
let typewriterInterval
let cursorInterval

function startTypewriter() {
  typewriterInterval = setInterval(() => {
    if (currentIndex <= fullText.length) {
      typewriterText.textContent = fullText.slice(0, currentIndex)
      currentIndex++
    } else {
      clearInterval(typewriterInterval)
      // Hide cursor after typing is complete
      setTimeout(() => {
        cursor.classList.add("hidden")
      }, 1000)
    }
  }, 100)

  // Cursor blinking effect
  cursorInterval = setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0"
  }, 500)
}

// Mobile Menu Functions
function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen

  if (isMobileMenuOpen) {
    mobileMenuBtn.classList.add("active")
    mobileDropdown.classList.add("active")
    mobileOverlay.classList.add("active")
  } else {
    mobileMenuBtn.classList.remove("active")
    mobileDropdown.classList.remove("active")
    mobileOverlay.classList.remove("active")
  }
}

function closeMobileMenu() {
  isMobileMenuOpen = false
  mobileMenuBtn.classList.remove("active")
  mobileDropdown.classList.remove("active")
  mobileOverlay.classList.remove("active")
}

// Modal Functions
function openBookingModal() {
  isBookingModalOpen = true
  bookingModal.classList.add("active")
  closeMobileMenu()
  document.body.style.overflow = "hidden"
}

function closeBookingModal() {
  isBookingModalOpen = false
  bookingModal.classList.remove("active")
  document.body.style.overflow = ""
}

// Smooth Scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Start typewriter effect
  startTypewriter()

  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('open');
    });

    // Close menu when a nav item is clicked
    mobileNav.querySelectorAll('.mobile-nav-item').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
      });
    });
  }

  // Mobile overlay click
  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMobileMenu)
  }

  // Booking modal triggers
  if (bookPopupBtn) {
    bookPopupBtn.addEventListener("click", openBookingModal)
  }
  if (bookPopupBtnMobile) {
    bookPopupBtnMobile.addEventListener("click", openBookingModal)
  }

  // Close modal
  if (closeModal) {
    closeModal.addEventListener("click", closeBookingModal)
  }
  if (cancelBooking) {
    cancelBooking.addEventListener("click", closeBookingModal)
  }

  // Close modal when clicking outside
  if (bookingModal) {
    bookingModal.addEventListener("click", (e) => {
      if (e.target === bookingModal) {
        closeBookingModal()
      }
    })
  }

  // Navigation items
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")
      scrollToSection(sectionId)
    })
  })

  // Mobile navigation items
  navMobileItems.forEach((item) => {
    item.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section")
      scrollToSection(sectionId)
      closeMobileMenu()
    })
  })

  // Form submission
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Here you would typically send the data to a server
      console.log("Booking request:", data)

      // Show success message (you can customize this)
      alert("Thank you for your booking request! We will contact you soon.")

      // Close modal and reset form
      closeBookingModal()
      this.reset()
    })
  }

  // Close mobile menu when window is resized to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
      closeMobileMenu()
    }
  })

  // Handle escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (isBookingModalOpen) {
        closeBookingModal()
      } else if (isMobileMenuOpen) {
        closeMobileMenu()
      }
    }
  })

  // Smooth scroll to contact section for all BOOK A POPUP buttons
  const bookBtns = document.querySelectorAll('.book-popup-btn');
  bookBtns.forEach(function(bookBtn) {
    bookBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})

// Cleanup intervals when page unloads
window.addEventListener("beforeunload", () => {
  if (typewriterInterval) {
    clearInterval(typewriterInterval)
  }
  if (cursorInterval) {
    clearInterval(cursorInterval)
  }
})
