"use strict"

window.addEventListener('load', windowLoad)

function windowLoad() {
	document.addEventListener('click', documentActions)
	dynamicAdaptHeader();
	slidersInit();
}
function documentActions(e) {
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('scroll-lock')
		document.documentElement.classList.toggle('open-menu')
	}
   if (targetElement.closest('.menu-header__item')) {
		document.body.classList.remove('scroll-lock');
		document.documentElement.classList.remove('open-menu');
	}
   if (targetElement.closest('.buttons__button')) {
		document.body.classList.remove('scroll-lock');
		document.documentElement.classList.remove('open-menu');
	}
   if (
		document.documentElement.classList.contains('open-menu') &&
		!targetElement.closest('.menu-header') &&
		!targetElement.closest('.icon-menu')
	) {
		document.body.classList.remove('scroll-lock');
		document.documentElement.classList.remove('open-menu');
	}
}
window.addEventListener("scroll", function() {
   const header = document.querySelector(".header");
   if (window.scrollY > 50) {
      header.classList.add("active");
   } else {
      header.classList.remove("active");
   }
});
const btn = document.querySelector(".technologies__button");
const block = document.querySelector(".technologies__body");

btn.addEventListener("click", () => {
	block.classList.toggle("active");
   btn.classList.toggle("active");
});
function dynamicAdaptHeader() {
	const headerMenu = document.querySelector('.menu-header__body')

	const headerButtons = document.querySelector('.header__buttons')

	const buttonsList = document.querySelector('.buttons__body')

	const media = window.matchMedia("(max-width: 480px)")

	media.addEventListener("change", (e) => {
		dynamicAdaptHeaderInit(media)
	})
		dynamicAdaptHeaderInit(media)

	function dynamicAdaptHeaderInit(media) {
		if (media.matches) {
			headerMenu.insertAdjacentElement('beforeend', buttonsList)
		} 
		else {
			headerButtons.insertAdjacentElement('beforeend', buttonsList)
		}
	}
}
function slidersInit() {
   const contactsSlider = document.querySelector('.contacts__slider');
   if (contactsSlider) {
      new Swiper(contactsSlider, {
      loop: true,
      navigation: {
      nextEl: '.contacts__next',
		prevEl: '.contacts__prev',
      },
      breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1050: { slidesPerView: 3, spaceBetween: 25 },
      },
   });
}

	const servicesSlider = document.querySelector('.services__slider');
	if (servicesSlider) {
   new Swiper(servicesSlider, {
      loop: true,
      navigation: {
      nextEl: '.services__next',
      prevEl: '.services__prev',
      },
      breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      500: { slidesPerView: 2, spaceBetween: 10 },
      767: { slidesPerView: 3, spaceBetween: 10 },
      1050: { slidesPerView: 4, spaceBetween: 10 },
      },
   });
}
   
	const technologiesSlider = document.querySelector('.technologies__slider');
	if (technologiesSlider) {
   new Swiper(technologiesSlider, {
      loop: true,
      navigation: {
      nextEl: '.technologies__next',
      prevEl: '.technologies__prev',
      },
      breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      600: { slidesPerView: 2, spaceBetween: 20 },
      767: { slidesPerView: 3, spaceBetween: 40 },
      1050: { slidesPerView: 4, spaceBetween: 70 },
      },
   });

}
	const howSlider = document.querySelector('.how__slider');
	if (howSlider) {
   new Swiper(howSlider, {
      loop: true,
      navigation: {
      nextEl: '.how__next',
      prevEl: '.how__prev',
      },
      breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      500: { slidesPerView: 2, spaceBetween: 20 },
      850: { slidesPerView: 3, spaceBetween: 20 },
      1050: { slidesPerView: 4, spaceBetween: 20 },
      },
   });
}
}
// const openContact = document.getElementById("openContact");
// const openJoin = document.getElementById("openJoin");
// const closePopupJoin = document.getElementById("closePopupJoin");
// const closePopupContact = document.getElementById("closePopupContact");
// const popupContact = document.getElementById("popupContact");
// const popupJoin = document.getElementById("popupJoin");

// // Відкрити
// openContact.addEventListener("click", () => {
//    popupContact.classList.add("active");
//    document.body.classList.add("lock"); // блок скролу
// });
// openJoin.addEventListener("click", () => {
//    popupJoin.classList.add("active");
//    document.body.classList.add("lock");
// });

// // Закрити по кнопці
// closePopupContact.addEventListener("click", () => {
//    popupContact.classList.remove("active");
//    document.body.classList.remove("lock"); // розблокувати
// });
// closePopupJoin.addEventListener("click", () => {
//    popupJoin.classList.remove("active");
//    document.body.classList.remove("lock");
// });

// // Закрити по кліку поза вікном
// popupContact.addEventListener("click", (e) => {
//    if (e.target === popupContact) {
//       popupContact.classList.remove("active");
//       document.body.classList.remove("lock");
//    }
// });
// popupJoin.addEventListener("click", (e) => {
//    if (e.target === popupJoin) {
//       popupJoin.classList.remove("active");
//       document.body.classList.remove("lock");
//    }
// });
// let scrollY;

// // Відкрити попап
// function openPopup(popup) {
//   scrollY = window.scrollY;

//   // фіксуємо body
//   document.body.style.position = "fixed";
//   document.body.style.top = `-${scrollY}px`;
//   document.body.style.left = "0";
//   document.body.style.right = "0";
//   document.body.style.overflow = "hidden";

//   popup.classList.add("active");
// }

// // Закрити попап
// function closePopup(popup) {
//   popup.classList.remove("active");

//   // якщо інших відкритих попапів немає — розблокувати сторінку
//   if (!document.querySelector(".popup-overlay.active")) {
//     document.body.style.position = "";
//     document.body.style.top = "";
//     document.body.style.left = "";
//     document.body.style.right = "";
//     document.body.style.overflow = "";

//     // повертаємо на те саме місце
//     window.scrollTo(0, scrollY);
//   }
// }
// const openContact = document.getElementById("openContact");
// const openJoin = document.getElementById("openJoin");
// const closePopupJoin = document.getElementById("closePopupJoin");
// const closePopupContact = document.getElementById("closePopupContact");
// const popupContact = document.getElementById("popupContact");
// const popupJoin = document.getElementById("popupJoin");

// // Відкрити
// openContact.addEventListener("click", () => openPopup(popupContact));
// openJoin.addEventListener("click", () => openPopup(popupJoin));

// // Закрити по кнопці
// closePopupContact.addEventListener("click", () => closePopup(popupContact));
// closePopupJoin.addEventListener("click", () => closePopup(popupJoin));

// // Закрити по кліку поза вікном
// [popupContact, popupJoin].forEach(popup => {
//   popup.addEventListener("click", (e) => {
//     if (e.target === popup) {
//       closePopup(popup);
//     }
//   });
// });
let scrollY;

// Відкрити попап
function openPopup(popup) {
  scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  
  // компенсуємо ширину скролбару
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollBarWidth}px`;

  popup.classList.add("active");
}

function closePopup(popup) {
  popup.classList.remove("active");
  
   if (!document.querySelector(".popup-overlay.active")) {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.paddingRight = "";

    window.scrollTo(0, scrollY);
}
}
// Відкрити по кнопці з data-popup-open
document.querySelectorAll("[data-popup-open]").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-popup-open");
    const popup = document.getElementById(targetId);
    if (popup) openPopup(popup);
  });
});

// Закрити по кнопці з data-popup-close
document.querySelectorAll("[data-popup-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    const popup = btn.closest(".popup-overlay");
    closePopup(popup);
  });
});

// Закрити по кліку на фон
document.querySelectorAll(".popup-overlay").forEach(popup => {
  popup.addEventListener("click", e => {
    if (e.target === popup) {
      closePopup(popup);
    }
  });
});