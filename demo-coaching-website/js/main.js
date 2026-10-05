/**
 * DEMO Coaching Institute - Main Interactive Script
 * High performance, responsive, touch-friendly UI interactions
 */

// Course Database for Dynamic Modal and Prefilled Inquiries
const COURSE_DATA = {
  'class-9-10': {
    id: 'class-9-10',
    name: 'Class 9–10 Foundation',
    category: 'school',
    tagline: 'Comprehensive Conceptual Foundation for School & Board Excellence',
    description: 'Build strong fundamentals in Mathematics, Science and English while developing the problem-solving skills needed for higher classes.',
    classes: 'Classes 9–10',
    subjects: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'English Language & Literature'],
    duration: '10 Months',
    mode: 'Offline + Online (Hybrid Available)',
    batchSize: '25 Students',
    fee: '₹2,999/month',
    fullFee: '₹28,500 (One-time annual payment option with 5% waiver)',
    timing: 'Mon, Wed, Fri • 4:30 PM – 6:30 PM',
    seatsLeft: 7,
    highlights: [
      'NCERT Line-by-Line Mastery & Exemplar Problem Solving',
      'Regular Chapter-end MCQ & Subjective Assessments',
      'Specialised Science Laboratory Experiment Visualisation',
      'English Writing Skills & Grammatical Precision Workshops'
    ],
    whatsappMsg: 'Hello DEMO, I am interested in the Class 9–10 Foundation program. I would like to know more about the fees, batch timings and demo class.'
  },
  'class-11-12-commerce': {
    id: 'class-11-12-commerce',
    name: 'Class 11–12 Commerce',
    category: 'commerce',
    tagline: 'Mastering Board Fundamentals & Practical Business Concepts',
    description: 'Master Accountancy, Economics and Business Studies with concept-focused teaching, regular practice and board-exam preparation.',
    classes: 'Classes 11–12',
    subjects: ['Accountancy', 'Economics (Micro & Macro)', 'Business Studies', 'Applied Mathematics (Optional)'],
    duration: '12 Months',
    mode: 'Offline + Online',
    batchSize: '20 Students',
    fee: '₹3,999/month',
    fullFee: '₹44,000 (Annual comprehensive package including board mock series)',
    timing: 'Tue, Thu, Sat • 5:30 PM – 7:30 PM',
    seatsLeft: 5,
    highlights: [
      'Double Entry Ledger & Balance Sheet Step-by-Step Rigor',
      'Real-world Case Studies for Business Studies & Economics',
      'Previous 10-Year CBSE & ISC Board Question Dissection',
      'Dedicated Answer Sheet Presentation Techniques'
    ],
    whatsappMsg: 'Hello DEMO, I am interested in the Class 11–12 Commerce program. I would like to know more about the fees, batch timings and demo class.'
  },
  'cuet-prep': {
    id: 'cuet-prep',
    name: 'CUET Preparation',
    category: 'entrance',
    tagline: 'Target Top Central Universities with Strategic MCQ Accuracy',
    description: 'A focused preparation program covering domain subjects, English and general test preparation with regular mock tests.',
    classes: 'Target: Class 12 Students & Droppers',
    subjects: ['Section IA English Language', 'Section II Domain Subjects (Commerce/Science/Hum)', 'Section III General Test (Quant, Reasoning, GK)'],
    duration: '8 Months',
    mode: 'Hybrid (Interactive Classroom + National Test Portal)',
    batchSize: '25 Students',
    fee: '₹4,999/month',
    fullFee: '₹36,000 (Complete program including 40+ Full NTA Computer-Based Mocks)',
    timing: 'Mon, Wed, Sat • 6:30 PM – 8:30 PM',
    seatsLeft: 9,
    highlights: [
      'NTA-Pattern Computer Based Test (CBT) Interface Practice',
      'Negative Marking Mitigation & Speed Math Tricks',
      'Detailed Question Difficulty Analytics & Percentile Predictor',
      'University Form Filling & College Preference Guidance'
    ],
    whatsappMsg: 'Hello DEMO, I am interested in the CUET Preparation program. I would like to know more about the domain test series, batch timings and demo class.'
  },
  'foundation-comp': {
    id: 'foundation-comp',
    name: 'Foundation & Competitive Preparation',
    category: 'foundation',
    tagline: 'Early Aptitude, Olympiad & Competitive Edge for School Students',
    description: 'Develop logical reasoning, quantitative aptitude and strong academic fundamentals for future competitive examinations.',
    classes: 'Classes 8–10',
    subjects: ['Mental Ability & Logical Reasoning', 'Advanced Quantitative Aptitude', 'Scientific Inquiry & Olympiad Concepts'],
    duration: '12 Months',
    mode: 'Offline + Online',
    batchSize: '20 Students',
    fee: '₹2,499/month',
    fullFee: '₹26,000 (Annual package with Olympiad mock test package)',
    timing: 'Sat & Sun • 10:00 AM – 1:00 PM (Weekend Special)',
    seatsLeft: 8,
    highlights: [
      'Brain-teaser & Non-routine Problem Solving Framework',
      'Olympiads (IMO, NSO, NTSE Foundation) Preparedness',
      'Speed Calculation Mental Techniques (Vedic & Modern)',
      'Critical Thinking & Analytical Writing Foundations'
    ],
    whatsappMsg: 'Hello DEMO, I am interested in the Foundation & Competitive Preparation program. I would like to know more about the fees, weekend schedule and demo class.'
  }
};

const DEMO_PHONE = '919876543210';

// Global helper to open prefilled WhatsApp URL
function openWhatsApp(customText) {
  const text = customText || 'Hello DEMO, I would like to enquire about your coaching programs, batch timings and admission process.';
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/${DEMO_PHONE}?text=${encoded}`, '_blank');
}

// Open Course WhatsApp directly
function enquireCourseWhatsApp(courseKey) {
  const course = COURSE_DATA[courseKey];
  if (course) {
    openWhatsApp(course.whatsappMsg);
  } else {
    openWhatsApp();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle & Auto-Close on Link Tap
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');

  function openMobileMenu() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.remove('translate-x-full');
      mobileBackdrop.classList.remove('hidden');
      setTimeout(() => mobileBackdrop.classList.remove('opacity-0'), 10);
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.add('translate-x-full');
      mobileBackdrop.classList.add('opacity-0');
      setTimeout(() => mobileBackdrop.classList.add('hidden'), 300);
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

  // Auto-close drawer on tapping navigation links
  if (mobileDrawer) {
    const navLinks = mobileDrawer.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // 2. Sticky Navbar Glass Effect on Scroll
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (mainHeader) {
      if (window.scrollY > 15) {
        mainHeader.classList.add('shadow-md');
        mainHeader.classList.remove('shadow-xs');
      } else {
        mainHeader.classList.remove('shadow-md');
        mainHeader.classList.add('shadow-xs');
      }
    }
  }, { passive: true });

  // 3. Course Details Modal Setup
  const courseModal = document.getElementById('course-details-modal');
  const closeModalBtns = document.querySelectorAll('.close-modal-trigger');

  function openCourseModal(courseKey) {
    const data = COURSE_DATA[courseKey] || COURSE_DATA['class-9-10'];
    if (!courseModal) return;

    // Fill modal fields
    const titleEl = document.getElementById('modal-course-title');
    const taglineEl = document.getElementById('modal-course-tagline');
    const descEl = document.getElementById('modal-course-desc');
    const classesEl = document.getElementById('modal-course-classes');
    const durationEl = document.getElementById('modal-course-duration');
    const modeEl = document.getElementById('modal-course-mode');
    const batchSizeEl = document.getElementById('modal-course-batch');
    const feeEl = document.getElementById('modal-course-fee');
    const timingEl = document.getElementById('modal-course-timing');
    const seatsEl = document.getElementById('modal-course-seats');
    const subjectsContainer = document.getElementById('modal-course-subjects');
    const highlightsContainer = document.getElementById('modal-course-highlights');
    const waBtn = document.getElementById('modal-whatsapp-btn');
    const demoBtn = document.getElementById('modal-demo-btn');

    if (titleEl) titleEl.textContent = data.name;
    if (taglineEl) taglineEl.textContent = data.tagline;
    if (descEl) descEl.textContent = data.description;
    if (classesEl) classesEl.textContent = data.classes;
    if (durationEl) durationEl.textContent = data.duration;
    if (modeEl) modeEl.textContent = data.mode;
    if (batchSizeEl) batchSizeEl.textContent = data.batchSize;
    if (feeEl) feeEl.textContent = data.fee;
    if (timingEl) timingEl.textContent = data.timing;
    if (seatsEl) seatsEl.textContent = `${data.seatsLeft} Seats Left`;

    if (subjectsContainer) {
      subjectsContainer.innerHTML = data.subjects.map(sub => 
        `<span class="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
          <svg class="w-3.5 h-3.5 mr-1 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          ${sub}
        </span>`
      ).join('');
    }

    if (highlightsContainer && data.highlights) {
      highlightsContainer.innerHTML = data.highlights.map(item =>
        `<li class="flex items-start text-xs sm:text-sm text-slate-700">
          <svg class="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
          <span>${item}</span>
        </li>`
      ).join('');
    }

    if (waBtn) {
      waBtn.onclick = () => {
        openWhatsApp(data.whatsappMsg);
      };
    }

    if (demoBtn) {
      demoBtn.onclick = () => {
        closeModal();
        window.location.href = `contact.html?course=${encodeURIComponent(data.name)}#demo-booking`;
      };
    }

    courseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (courseModal) {
      courseModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Hook all "View Details" buttons with data-course
  document.querySelectorAll('[data-action="view-course-modal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseId = btn.getAttribute('data-course-id');
      openCourseModal(courseId);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (courseModal) {
    courseModal.addEventListener('click', (e) => {
      if (e.target === courseModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 4. Course Filtering (Courses Page) with Horizontal Scroll Behavior
  const filterBtns = document.querySelectorAll('.course-filter-btn');
  const courseCards = document.querySelectorAll('.course-card-item');

  if (filterBtns.length > 0 && courseCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Toggle active states
        filterBtns.forEach(b => {
          b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
          b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
        });
        btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');

        // Filter cards
        courseCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. Free Demo Booking Form Logic & WhatsApp Link Builder
  const bookingForm = document.getElementById('demo-booking-form');
  const bookingSuccessCard = document.getElementById('booking-success-container');
  const resetBookingBtn = document.getElementById('reset-booking-btn');
  const confirmBookingWhatsAppBtn = document.getElementById('confirm-whatsapp-booking-btn');

  // Pre-fill course from query parameter if present
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedCourse = urlParams.get('course');
  if (preselectedCourse) {
    const courseSelect = document.getElementById('booking-course');
    if (courseSelect) {
      for (let i = 0; i < courseSelect.options.length; i++) {
        if (courseSelect.options[i].text.includes(preselectedCourse) || courseSelect.options[i].value === preselectedCourse) {
          courseSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  // Set default preferred date to tomorrow
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const studentName = document.getElementById('student-name')?.value.trim();
      const parentName = document.getElementById('parent-name')?.value.trim();
      const phone = document.getElementById('phone-number')?.value.trim();
      const studentClass = document.getElementById('student-class')?.value;
      const course = document.getElementById('booking-course')?.value;
      const date = document.getElementById('booking-date')?.value;
      
      const timeRadios = document.getElementsByName('preferred-time');
      let selectedTime = '4:00 PM';
      for (const radio of timeRadios) {
        if (radio.checked) {
          selectedTime = radio.value;
          break;
        }
      }

      if (!studentName || !phone || !course) {
        alert('Please fill in the required fields (Student Name, Phone Number, and Course).');
        return;
      }

      let formattedDate = date;
      try {
        if (date) {
          const d = new Date(date);
          formattedDate = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        }
      } catch (err) {}

      const summaryStudent = document.getElementById('summary-student-name');
      const summaryParent = document.getElementById('summary-parent-name');
      const summaryCourse = document.getElementById('summary-course');
      const summarySlot = document.getElementById('summary-slot');
      const summaryPhone = document.getElementById('summary-phone');

      if (summaryStudent) summaryStudent.textContent = studentName;
      if (summaryParent) summaryParent.textContent = parentName || 'N/A';
      if (summaryCourse) summaryCourse.textContent = course;
      if (summarySlot) summarySlot.textContent = `${formattedDate} at ${selectedTime}`;
      if (summaryPhone) summaryPhone.textContent = phone;

      const demoWhatsAppMsg = `Hello DEMO, I would like to confirm my free demo class. Student: ${studentName}. Course: ${course}. Preferred Date: ${formattedDate}. Preferred Time: ${selectedTime}.`;

      if (confirmBookingWhatsAppBtn) {
        confirmBookingWhatsAppBtn.onclick = () => {
          openWhatsApp(demoWhatsAppMsg);
        };
      }

      bookingForm.classList.add('hidden');
      if (bookingSuccessCard) {
        bookingSuccessCard.classList.remove('hidden');
        bookingSuccessCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  if (resetBookingBtn) {
    resetBookingBtn.addEventListener('click', () => {
      if (bookingSuccessCard) bookingSuccessCard.classList.add('hidden');
      if (bookingForm) {
        bookingForm.reset();
        bookingForm.classList.remove('hidden');
      }
    });
  }

  // 6. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
          }
        });

        if (isOpen) {
          item.classList.remove('open');
        } else {
          item.classList.add('open');
        }
      });
    }
  });

  // 7. Floating WhatsApp Mini Widget Toggle
  const floatingWidgetBtn = document.getElementById('whatsapp-floating-btn');
  const floatingWidgetPopup = document.getElementById('whatsapp-popup-card');
  const closePopupBtn = document.getElementById('close-whatsapp-popup');

  if (floatingWidgetBtn && floatingWidgetPopup) {
    floatingWidgetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingWidgetPopup.classList.toggle('hidden');
    });

    if (closePopupBtn) {
      closePopupBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        floatingWidgetPopup.classList.add('hidden');
      });
    }

    document.addEventListener('click', (e) => {
      if (!floatingWidgetPopup.contains(e.target) && e.target !== floatingWidgetBtn) {
        floatingWidgetPopup.classList.add('hidden');
      }
    });
  }
});
