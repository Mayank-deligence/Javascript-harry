const accordionHeaders = document.querySelectorAll(".accordion-header");
const addSectionButton = document.getElementById("add-section");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionContent = header.nextElementSibling;
    header.classList.toggle("active");
    if (header.classList.contains("active")) {
      accordionContent.style.display = "block";
    } else {
      accordionContent.style.display = "none";
    }
  });
});

addSectionButton.addEventListener("click", () => {
  const accordion = document.querySelector(".accordion");
  const newSection = document.createElement("div");
  newSection.classList.add("accordion-item");
  newSection.innerHTML = `
    <input type="text" class="accordion-header" placeholder="Enter Section Header">
    <div class="accordion-content"></div>
  `;
  accordion.insertBefore(newSection, addSectionButton);
  const newAccordionHeaders = document.querySelectorAll(".accordion-header");
  newAccordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionContent = header.nextElementSibling;
      header.classList.toggle("active");
      if (header.classList.contains("active")) {
        accordionContent.style.display = "block";
      } else {
        accordionContent.style.display = "none";
      }
    });
  });
});












// const accordionHeaders = document.querySelectorAll(".accordion-header");
// const accordionInputs = document.querySelectorAll(".accordion-input");

// accordionHeaders.forEach((header, index) => {
//   header.addEventListener("input", () => {
//     header.parentElement.querySelector(".accordion-header-text").textContent = header.value;
//   });
// });

// accordionInputs.forEach((input, index) => {
//   input.addEventListener("input", () => {
//     input.parentElement.querySelector(".accordion-text").textContent = input.value;
//   });
// });

// accordionHeaders.forEach(header => {
//   header.addEventListener("click", () => {
//     const accordionContent = header.nextElementSibling;
//     header.classList.toggle("active");
//     if (header.classList.contains("active")) {
//       accordionContent.style.display = "block";
//     } else {
//       accordionContent.style.display = "none";
//     }
//   });
// });
