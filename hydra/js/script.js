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
// });
// openJoin.addEventListener("click", () => {
//    popupJoin.classList.add("active");
// });

// // Закрити по кнопці
// closePopupContact.addEventListener("click", () => {
//    popupContact.classList.remove("active");
// });
// closePopupJoin.addEventListener("click", () => {
//    popupJoin.classList.remove("active");
// });

// // Закрити по кліку поза вікном
// popupContact.addEventListener("click", (e) => {
//    if (e.target === popupContact) {
//    popupContact.classList.remove("active");
//    }
// });
// popupJoin.addEventListener("click", (e) => {
//    if (e.target === popupJoin) {
//    popupJoin.classList.remove("active");
//    }
// });
const openContact = document.getElementById("openContact");
const openJoin = document.getElementById("openJoin");
const closePopupJoin = document.getElementById("closePopupJoin");
const closePopupContact = document.getElementById("closePopupContact");
const popupContact = document.getElementById("popupContact");
const popupJoin = document.getElementById("popupJoin");

// Відкрити
openContact.addEventListener("click", () => {
   popupContact.classList.add("active");
   document.body.classList.add("lock"); // блок скролу
});
openJoin.addEventListener("click", () => {
   popupJoin.classList.add("active");
   document.body.classList.add("lock");
});

// Закрити по кнопці
closePopupContact.addEventListener("click", () => {
   popupContact.classList.remove("active");
   document.body.classList.remove("lock"); // розблокувати
});
closePopupJoin.addEventListener("click", () => {
   popupJoin.classList.remove("active");
   document.body.classList.remove("lock");
});

// Закрити по кліку поза вікном
popupContact.addEventListener("click", (e) => {
   if (e.target === popupContact) {
      popupContact.classList.remove("active");
      document.body.classList.remove("lock");
   }
});
popupJoin.addEventListener("click", (e) => {
   if (e.target === popupJoin) {
      popupJoin.classList.remove("active");
      document.body.classList.remove("lock");
   }
});