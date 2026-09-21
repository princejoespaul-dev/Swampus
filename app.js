/**
 * Swampus - College Peer-to-Peer Rental Web App
 * Interactive Client Application Logic
 */

// Initial Seed Data Store
const SwampusState = {
  currentUser: {
    name: "Alex Rivera",
    email: "alex.rivera@campus.edu",
    major: "Computer Science '26",
    dorm: "Maple Hall, Rm 304",
    campus: "State University",
    verified: true,
    rating: 4.9,
    reviewsCount: 28,
    activeBorrowingCount: 2,
    activeLendingCount: 3,
    semesterEarnings: 215,
    campusKarma: 98,
    avatarLetter: "A",
    isLoggedIn: true
  },

  activeView: "user-view", // default to user-view so user can see it right away, or login-view

  // Marketplace Listings
  items: [
    {
      id: "item-1",
      title: "TI-84 Plus CE Graphing Calculator",
      category: "tech",
      categoryName: "Tech & Calculators",
      pricePerDay: 4,
      deposit: 30,
      lenderName: "Jordan Hayes",
      lenderDorm: "Oak Hall (3 min walk)",
      lenderRating: 5.0,
      icon: "🧮",
      desc: "Perfect for Calculus and Physics midterms. Pre-loaded with essential exam formulas and 100% battery charge.",
      available: true
    },
    {
      id: "item-2",
      title: "Sony Alpha A6400 4K Camera + 16-50mm Lens",
      category: "cameras",
      categoryName: "Camera & Audio",
      pricePerDay: 18,
      deposit: 150,
      lenderName: "Alex Rivera", // Current user's item
      lenderDorm: "Maple Hall (South Quad)",
      lenderRating: 4.9,
      icon: "📷",
      desc: "Crisp 4K video for student journalism, club promos, or photography class assignments. Includes 64GB SD card & 2 batteries.",
      available: true
    },
    {
      id: "item-3",
      title: "Dorm Mini-Projector + 80\" Foldable Screen",
      category: "dorm",
      categoryName: "Dorm & Living",
      pricePerDay: 12,
      deposit: 60,
      lenderName: "Maya Chen",
      lenderDorm: "Pine Hall (North Quad)",
      lenderRating: 4.8,
      icon: "📽️",
      desc: "HDMI/USB compatible. Connects to laptop, iPhone, or FireStick for movie nights or club presentations.",
      available: true
    },
    {
      id: "item-4",
      title: "Chem 101 Molecular Model Kit & Safety Goggles",
      category: "academic",
      categoryName: "Textbooks & Lab",
      pricePerDay: 3,
      deposit: 20,
      lenderName: "Alex Rivera",
      lenderDorm: "Maple Hall (South Quad)",
      lenderRating: 4.9,
      icon: "🧪",
      desc: "Full 240-piece organic chemistry set + UV-protective scratch-free goggles. Saves buying $70 new at campus bookstore.",
      available: false // Currently rented to Marcus
    },
    {
      id: "item-5",
      title: "Nintendo Switch OLED + Mario Kart 8 & 4 JoyCons",
      category: "games",
      categoryName: "Games & Party",
      pricePerDay: 10,
      deposit: 80,
      lenderName: "Carlos Gomez",
      lenderDorm: "Birch Hall (East Campus)",
      lenderRating: 4.9,
      icon: "🎮",
      desc: "Instant dorm social night setup. Includes dock, power adapter, and Mario Kart 8 with all DLC tracks.",
      available: true
    },
    {
      id: "item-6",
      title: "Heavy-Duty U-Lock + Kryptonite Cable & Helmet",
      category: "sports",
      categoryName: "Sports & Wheels",
      pricePerDay: 2,
      deposit: 15,
      lenderName: "Liam Patel",
      lenderDorm: "Maple Hall, Rm 112",
      lenderRating: 5.0,
      icon: "🚲",
      desc: "Visiting campus or borrowing a friend's bike? Keep it locked securely at campus racks with high-security lock.",
      available: true
    },
    {
      id: "item-7",
      title: "4-Person Waterproof Camping Tent + Lantern",
      category: "sports",
      categoryName: "Sports & Travel",
      pricePerDay: 14,
      deposit: 50,
      lenderName: "Emma Watson",
      lenderDorm: "University Apartments",
      lenderRating: 4.9,
      icon: "⛺",
      desc: "Easy 10-minute setup tent for weekend outdoor club trips or lake camping. Dry and thoroughly cleaned.",
      available: true
    },
    {
      id: "item-8",
      title: "Official Graduation Cap & Gown (Size 5'8\" - 5'11\")",
      category: "academic",
      categoryName: "Textbooks & Lab",
      pricePerDay: 8,
      deposit: 40,
      lenderName: "Sarah Jenkins",
      lenderDorm: "Off-Campus Commons",
      lenderRating: 5.0,
      icon: "🎓",
      desc: "Save $120 for senior portraits and family ceremonies. Steamed and wrinkle-free with gold tassel.",
      available: true
    }
  ],

  // User's Currently Borrowed Items
  borrowings: [
    {
      id: "bor-1",
      itemId: "item-1",
      title: "TI-84 Plus CE Graphing Calculator",
      lender: "Jordan Hayes",
      dorm: "Oak Hall #204",
      dueIn: "Due in 2 days (Oct 23)",
      price: "$4/day",
      depositHeld: "$30 hold",
      status: "Active Rental",
      statusClass: "badge-active",
      icon: "🧮"
    },
    {
      id: "bor-2",
      itemId: "item-3",
      title: "Dorm Mini-Projector + 80\" Screen",
      lender: "Maya Chen",
      dorm: "Pine Hall #102",
      dueIn: "Due in 5 days (Oct 26)",
      price: "$12/day",
      depositHeld: "$60 hold",
      status: "Active Rental",
      statusClass: "badge-active",
      icon: "📽️"
    }
  ],

  // User's Own Listed Items (Lending Out)
  myListings: [
    {
      id: "list-1",
      title: "Sony Alpha A6400 4K Camera + Lens",
      rate: "$18/day",
      status: "Available to rent",
      statusClass: "badge-active",
      renter: "None right now",
      icon: "📷",
      earnings: "$90 earned"
    },
    {
      id: "list-2",
      title: "Chem 101 Molecular Model Kit & Goggles",
      rate: "$3/day",
      status: "Currently Rented to Marcus Vance",
      statusClass: "badge-due-soon",
      renter: "Marcus Vance (Due Oct 24)",
      icon: "🧪",
      earnings: "$45 earned"
    },
    {
      id: "list-3",
      title: "Giant Wooden Tumbling Tower (Jenga) Lawn Game",
      rate: "$6/day",
      status: "Available to rent",
      statusClass: "badge-active",
      renter: "None right now",
      icon: "🧱",
      earnings: "$36 earned"
    }
  ],

  // Incoming Requests from fellow students
  incomingRequests: [
    {
      id: "req-1",
      studentName: "Taylor Brooks",
      studentMajor: "Media Studies '27",
      dorm: "Cedar Hall",
      karma: "4.8 ★ (12 rentals)",
      itemTitle: "Sony Alpha A6400 4K Camera",
      duration: "3 days (Oct 24 - 27)",
      totalPayout: "$54.00",
      notes: "Need for campus festival highlight reel filming. Can pick up at Maple Hall or Student Union!",
      icon: "📷"
    }
  ],

  // Chat Threads
  activeChatId: "thread-1",
  threads: [
    {
      id: "thread-1",
      otherUser: "Jordan Hayes",
      otherAvatar: "J",
      otherDorm: "Oak Hall #204",
      itemTitle: "TI-84 Plus CE Graphing Calculator",
      itemPrice: "$4/day",
      rentalDates: "Oct 19 - Oct 23 (Active)",
      itemIcon: "🧮",
      statusPill: "Active Rental",
      messages: [
        {
          sender: "them",
          time: "Oct 19, 1:15 PM",
          text: "Hey Alex! Thanks for renting my TI-84 calculator. Did you get the battery charging cable okay?"
        },
        {
          sender: "me",
          time: "Oct 19, 1:22 PM",
          text: "Yes! Tested it during my Calc II quiz prep yesterday, works perfectly. Thanks so much!"
        },
        {
          sender: "system",
          text: "🤝 Handshake confirmed at Main Library Front Desk. Security deposit ($30) held safely in escrow."
        },
        {
          sender: "them",
          time: "Today, 10:45 AM",
          text: "Awesome! Let me know whenever you want to do the return on Wednesday. No rush!"
        }
      ]
    },
    {
      id: "thread-2",
      otherUser: "Maya Chen",
      otherAvatar: "M",
      otherDorm: "Pine Hall #102",
      itemTitle: "Dorm Mini-Projector + 80\" Screen",
      itemPrice: "$12/day",
      rentalDates: "Oct 20 - Oct 26 (Active)",
      itemIcon: "📽️",
      statusPill: "Active Rental",
      messages: [
        {
          sender: "them",
          time: "Oct 20, 4:00 PM",
          text: "Hi Alex! The projector is in its carrying case with the tripod and HDMI cable."
        },
        {
          sender: "me",
          time: "Oct 20, 4:10 PM",
          text: "Great! Can we meet at the Student Union Starbucks around 5:15 PM?"
        },
        {
          sender: "system",
          text: "📍 Meetup spot suggested: Student Union Starbucks"
        },
        {
          sender: "them",
          time: "Oct 20, 4:12 PM",
          text: "See you there! I'll be in a green Swampus hoodie."
        },
        {
          sender: "me",
          time: "Oct 20, 5:20 PM",
          text: "Thanks Maya! Movie night was a huge hit with the floor."
        }
      ]
    },
    {
      id: "thread-3",
      otherUser: "Marcus Vance",
      otherAvatar: "M",
      otherDorm: "Elm Quad B",
      itemTitle: "Chem 101 Molecular Model Kit",
      itemPrice: "$3/day",
      rentalDates: "Oct 21 - Oct 24",
      itemIcon: "🧪",
      statusPill: "Rented Out (You are Lender)",
      messages: [
        {
          sender: "them",
          time: "Yesterday, 3:30 PM",
          text: "Hey Alex, is the stereochemistry kit still available for the Organic Chem exam week?"
        },
        {
          sender: "me",
          time: "Yesterday, 3:45 PM",
          text: "Yup, all 240 atoms and bonds are in the container. When do you need it?"
        },
        {
          sender: "system",
          text: "✅ Alex approved rental request for Marcus Vance."
        },
        {
          sender: "them",
          time: "Yesterday, 4:00 PM",
          text: "Sweet! Can I grab it from your dorm lobby around 6pm?"
        }
      ]
    }
  ]
};

// DOM Elements & View Management
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  setupNavigation();
  setupLoginForm();
  setupUserLocker();
  setupMessages();
  setupMarketplace();
  setupModals();

  // Load active view
  showView(SwampusState.activeView);
}

// -------------------------------------------------------------
// NAVIGATION
// -------------------------------------------------------------
function setupNavigation() {
  const navBtns = document.querySelectorAll("[data-nav-target]");
  navBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = btn.getAttribute("data-nav-target");
      showView(targetView);
    });
  });

  // Logo click returns to marketplace or user page
  const logoLink = document.getElementById("nav-brand-link");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      showView("market-view");
    });
  }

  // Profile avatar button in navbar
  const navProfileBtn = document.getElementById("nav-user-profile-btn");
  if (navProfileBtn) {
    navProfileBtn.addEventListener("click", () => {
      showView("user-view");
    });
  }
}

function showView(viewId) {
  SwampusState.activeView = viewId;

  // Hide all views
  document.querySelectorAll(".app-view").forEach((view) => {
    view.classList.remove("active-view");
  });

  // Show selected view
  const targetEl = document.getElementById(viewId);
  if (targetEl) {
    targetEl.classList.add("active-view");
  }

  // Update navbar active states
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    if (btn.getAttribute("data-nav-target") === viewId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Window scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Specific view refresh triggers
  if (viewId === "messages-view") {
    renderChatMessages();
    scrollChatToBottom();
  } else if (viewId === "user-view") {
    renderLockerStats();
  }
}

// -------------------------------------------------------------
// LOGIN PAGE LOGIC
// -------------------------------------------------------------
function setupLoginForm() {
  const loginForm = document.getElementById("app-login-form");
  const emailInput = document.getElementById("login-email");
  const passInput = document.getElementById("login-password");
  const togglePassBtn = document.getElementById("toggle-login-pass");
  const demoLoginBtn = document.getElementById("btn-demo-login");
  const logoutBtn = document.getElementById("btn-user-logout");

  // Show/Hide Password
  if (togglePassBtn && passInput) {
    togglePassBtn.addEventListener("click", () => {
      const isPassword = passInput.type === "password";
      passInput.type = isPassword ? "text" : "password";
      togglePassBtn.textContent = isPassword ? "Hide" : "Show";
    });
  }

  // Form Submission
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const pass = passInput.value;

      let valid = true;

      // Email validation (.edu / college check)
      if (!email || !email.includes("@")) {
        setFieldError("login-email", "Please enter a valid student email.");
        valid = false;
      } else if (!email.toLowerCase().endsWith(".edu") && !email.toLowerCase().includes("college")) {
        setFieldError("login-email", "Must be a college email address (e.g., student@campus.edu)");
        valid = false;
      } else {
        clearFieldError("login-email");
      }

      // Password validation
      if (pass.length < 6) {
        setFieldError("login-password", "Password must be at least 6 characters.");
        valid = false;
      } else {
        clearFieldError("login-password");
      }

      if (!valid) return;

      // Successful Login
      SwampusState.currentUser.isLoggedIn = true;
      SwampusState.currentUser.email = email;
      showToast(`Welcome back, ${email.split("@")[0]}! Connected to Swampus.`);
      showView("user-view");
    });
  }

  // 1-Click Demo Login
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener("click", () => {
      if (emailInput) emailInput.value = "alex.rivera@campus.edu";
      if (passInput) passInput.value = "student2026!";
      clearFieldError("login-email");
      clearFieldError("login-password");

      SwampusState.currentUser.isLoggedIn = true;
      showToast("Signed in as Alex Rivera (Maple Hall)!");
      showView("user-view");
    });
  }

  // Sign out
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      SwampusState.currentUser.isLoggedIn = false;
      showToast("You have been signed out.");
      showView("login-view");
    });
  }
}

function setFieldError(fieldId, msg) {
  const errEl = document.getElementById(`${fieldId}-error`);
  if (errEl) errEl.textContent = msg;
}

function clearFieldError(fieldId) {
  const errEl = document.getElementById(`${fieldId}-error`);
  if (errEl) errEl.textContent = "";
}

// -------------------------------------------------------------
// USER PAGE ("CAMPUS LOCKER & PROFILE") LOGIC
// -------------------------------------------------------------
function setupUserLocker() {
  // Tab switching
  const tabs = document.querySelectorAll(".locker-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const targetTab = tab.getAttribute("data-locker-tab");
      document.querySelectorAll(".locker-panel").forEach((panel) => {
        panel.classList.remove("active-panel");
      });

      const activePanel = document.getElementById(`panel-${targetTab}`);
      if (activePanel) {
        activePanel.classList.add("active-panel");
      }
    });
  });

  renderBorrowingsList();
  renderMyListings();
  renderIncomingRequests();
}

function renderLockerStats() {
  const u = SwampusState.currentUser;
  const countBorrowEl = document.getElementById("stat-borrow-count");
  const countLendEl = document.getElementById("stat-lend-count");
  const countEarnEl = document.getElementById("stat-earn-count");
  const countKarmaEl = document.getElementById("stat-karma-count");

  if (countBorrowEl) countBorrowEl.textContent = SwampusState.borrowings.length;
  if (countLendEl) countLendEl.textContent = SwampusState.myListings.length;
  if (countEarnEl) countEarnEl.textContent = `$${u.semesterEarnings}`;
  if (countKarmaEl) countKarmaEl.textContent = `${u.campusKarma}%`;
}

function renderBorrowingsList() {
  const container = document.getElementById("borrowings-container");
  if (!container) return;

  if (SwampusState.borrowings.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; background: var(--mist); border-radius: var(--radius-md); border: 1.5px dashed var(--line);">
        <p style="font-weight: 700; color: var(--muted); font-size: 1.1rem;">You aren't borrowing any items right now.</p>
        <button class="btn-primary" style="margin-top: 1rem; padding: 0.6rem 1.25rem; border-radius: var(--radius-md);" onclick="showView('market-view')">Browse Campus Marketplace</button>
      </div>`;
    return;
  }

  container.innerHTML = SwampusState.borrowings
    .map(
      (b) => `
    <div class="rental-item-card">
      <div class="rental-item-thumb">${b.icon}</div>
      <div class="rental-item-info">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
          <span class="badge-status ${b.statusClass}">${b.status}</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: #b45309;">${b.dueIn}</span>
        </div>
        <h3>${b.title}</h3>
        <div class="rental-item-meta">
          <span><strong>Lender:</strong> ${b.lender} (${b.dorm})</span>
          <span><strong>Rate:</strong> ${b.price}</span>
          <span><strong>Security Deposit:</strong> ${b.depositHeld}</span>
        </div>
      </div>
      <div class="rental-actions">
        <button class="btn-secondary" style="padding: 0.5rem 0.85rem; font-size: 0.85rem; border-radius: var(--radius-md); cursor: pointer;" onclick="openChatWithUser('${b.lender}')">
          💬 Message
        </button>
        <button class="btn-primary" style="padding: 0.5rem 0.85rem; font-size: 0.85rem; border-radius: var(--radius-md); cursor: pointer;" onclick="markItemReturned('${b.id}', '${b.title}')">
          ✓ Mark Returned
        </button>
      </div>
    </div>`
    )
    .join("");
}

function renderMyListings() {
  const container = document.getElementById("listings-container");
  if (!container) return;

  container.innerHTML = SwampusState.myListings
    .map(
      (item) => `
    <div class="rental-item-card">
      <div class="rental-item-thumb">${item.icon}</div>
      <div class="rental-item-info">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
          <span class="badge-status ${item.statusClass}">${item.status}</span>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--success);">${item.earnings}</span>
        </div>
        <h3>${item.title}</h3>
        <div class="rental-item-meta">
          <span><strong>Rate:</strong> ${item.rate}</span>
          <span><strong>Renter:</strong> ${item.renter}</span>
        </div>
      </div>
      <div class="rental-actions">
        <button class="btn-secondary" style="padding: 0.5rem 0.85rem; font-size: 0.85rem; border-radius: var(--radius-md);" onclick="toggleListingAvailability('${item.id}')">
          Edit Status
        </button>
      </div>
    </div>`
    )
    .join("");
}

function renderIncomingRequests() {
  const container = document.getElementById("requests-container");
  const badgeCountEl = document.getElementById("req-tab-badge");
  if (!container) return;

  if (badgeCountEl) {
    badgeCountEl.textContent = SwampusState.incomingRequests.length;
  }

  if (SwampusState.incomingRequests.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem; background: var(--mist); border-radius: var(--radius-md); border: 1.5px dashed var(--line);">
        <p style="font-weight: 700; color: var(--muted);">No pending rental requests from other students.</p>
      </div>`;
    return;
  }

  container.innerHTML = SwampusState.incomingRequests
    .map(
      (req) => `
    <div class="rental-item-card" style="border-left: 4px solid var(--beak);">
      <div class="rental-item-thumb">${req.icon}</div>
      <div class="rental-item-info">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
          <span class="badge-status badge-due-soon">Pending Your Approval</span>
          <span style="font-weight: 800; color: var(--forest);">${req.totalPayout} Payout</span>
        </div>
        <h3>${req.itemTitle}</h3>
        <div class="rental-item-meta">
          <span><strong>Requester:</strong> ${req.studentName} (${req.studentMajor}, ${req.dorm})</span>
          <span><strong>Rating:</strong> ${req.karma}</span>
          <span><strong>Requested Period:</strong> ${req.duration}</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--muted); background: var(--mist); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); margin-top: 0.25rem;">
          "${req.notes}"
        </p>
      </div>
      <div class="rental-actions">
        <button class="btn-primary" style="padding: 0.55rem 1rem; font-size: 0.9rem; border-radius: var(--radius-md);" onclick="approveRequest('${req.id}', '${req.studentName}')">
          ✓ Approve
        </button>
        <button class="btn-secondary" style="padding: 0.55rem 0.85rem; font-size: 0.9rem; border-radius: var(--radius-md);" onclick="declineRequest('${req.id}')">
          ✕ Decline
        </button>
      </div>
    </div>`
    )
    .join("");
}

window.approveRequest = function (reqId, studentName) {
  SwampusState.incomingRequests = SwampusState.incomingRequests.filter((r) => r.id !== reqId);
  renderIncomingRequests();
  renderLockerStats();
  showToast(`Rental approved for ${studentName}! Handshake chat opened.`);
  showView("messages-view");
};

window.declineRequest = function (reqId) {
  SwampusState.incomingRequests = SwampusState.incomingRequests.filter((r) => r.id !== reqId);
  renderIncomingRequests();
  renderLockerStats();
  showToast("Request declined.");
};

window.markItemReturned = function (borrowId, itemTitle) {
  SwampusState.borrowings = SwampusState.borrowings.filter((b) => b.id !== borrowId);
  renderBorrowingsList();
  renderLockerStats();
  showToast(`"${itemTitle}" marked as returned! Deposit released.`);
};

window.toggleListingAvailability = function (listingId) {
  const item = SwampusState.myListings.find((l) => l.id === listingId);
  if (item) {
    if (item.status.includes("Available")) {
      item.status = "Paused (Unavailable)";
      item.statusClass = "badge-pending";
      showToast(`Listing for "${item.title}" paused.`);
    } else {
      item.status = "Available to rent";
      item.statusClass = "badge-active";
      showToast(`Listing for "${item.title}" is now active.`);
    }
    renderMyListings();
  }
};

window.openChatWithUser = function (userName) {
  const foundThread = SwampusState.threads.find((t) => t.otherUser.toLowerCase().includes(userName.toLowerCase()));
  if (foundThread) {
    SwampusState.activeChatId = foundThread.id;
  }
  showView("messages-view");
  renderChatThreadsList();
  renderChatMessages();
};

// -------------------------------------------------------------
// MESSAGES & MEETUP CHAT LOGIC
// -------------------------------------------------------------
function setupMessages() {
  renderChatThreadsList();
  renderChatMessages();

  const msgInput = document.getElementById("chat-message-input");
  const sendBtn = document.getElementById("btn-send-message");

  const handleSend = () => {
    const text = msgInput.value.trim();
    if (!text) return;

    sendMessage(text);
    msgInput.value = "";
  };

  if (sendBtn) {
    sendBtn.addEventListener("click", handleSend);
  }

  if (msgInput) {
    msgInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // Setup Campus Meetup Spot Chips
  const meetupChips = document.querySelectorAll(".meetup-chip");
  meetupChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const locationName = chip.getAttribute("data-location");
      const proposalText = `📍 Let's meet at ${locationName} for the handshake! Does that time work for you?`;
      sendMessage(proposalText);
    });
  });
}

function renderChatThreadsList() {
  const container = document.getElementById("inbox-threads-container");
  if (!container) return;

  container.innerHTML = SwampusState.threads
    .map((th) => {
      const isActive = th.id === SwampusState.activeChatId;
      const lastMsg = th.messages[th.messages.length - 1];
      const lastMsgText = lastMsg ? lastMsg.text : "No messages yet";

      return `
      <div class="chat-thread-item ${isActive ? "active" : ""}" onclick="selectChatThread('${th.id}')">
        <div class="thread-avatar">${th.otherAvatar}</div>
        <div class="thread-details">
          <div class="thread-top-row">
            <span class="thread-name">${th.otherUser}</span>
            <span class="thread-time">Active</span>
          </div>
          <div class="thread-item-tag">
            <span>${th.itemIcon}</span>
            <span>${th.itemTitle}</span>
          </div>
          <div class="thread-last-msg">${lastMsgText}</div>
        </div>
      </div>`;
    })
    .join("");
}

window.selectChatThread = function (threadId) {
  SwampusState.activeChatId = threadId;
  renderChatThreadsList();
  renderChatMessages();
  scrollChatToBottom();
};

function renderChatMessages() {
  const currentThread = SwampusState.threads.find((t) => t.id === SwampusState.activeChatId);
  if (!currentThread) return;

  // Update Context Header
  const headerItemTitle = document.getElementById("chat-header-item-title");
  const headerItemSub = document.getElementById("chat-header-item-sub");
  const headerItemThumb = document.getElementById("chat-header-item-thumb");
  const headerStatusBadge = document.getElementById("chat-header-status-badge");

  if (headerItemTitle) headerItemTitle.textContent = currentThread.itemTitle;
  if (headerItemSub) headerItemSub.textContent = `${currentThread.itemPrice} • with ${currentThread.otherUser} (${currentThread.otherDorm})`;
  if (headerItemThumb) headerItemThumb.textContent = currentThread.itemIcon;
  if (headerStatusBadge) headerStatusBadge.textContent = currentThread.statusPill;

  // Render Messages Stream
  const container = document.getElementById("chat-messages-stream");
  if (!container) return;

  container.innerHTML = currentThread.messages
    .map((m) => {
      if (m.sender === "system") {
        return `
        <div class="msg-system-pill">
          ${m.text}
        </div>`;
      }

      const isMe = m.sender === "me";
      return `
      <div class="message-bubble-wrap ${isMe ? "outgoing" : "incoming"}">
        ${!isMe ? `<span class="msg-sender-name">${currentThread.otherUser}</span>` : ""}
        <div class="message-bubble">
          ${m.text}
        </div>
        <span class="msg-timestamp">${m.time || "Just now"}</span>
      </div>`;
    })
    .join("");
}

function sendMessage(text) {
  const currentThread = SwampusState.threads.find((t) => t.id === SwampusState.activeChatId);
  if (!currentThread) return;

  // Append user message
  currentThread.messages.push({
    sender: "me",
    time: "Just now",
    text: text
  });

  renderChatMessages();
  renderChatThreadsList();
  scrollChatToBottom();

  // Simulated peer response
  setTimeout(() => {
    const replies = [
      "Sounds great to me! I'll be there on time.",
      "Perfect, I've got the item packaged and ready with all accessories.",
      "See you near the front entrance! Look for the duck keychain.",
      "Got it! Thanks for taking good care of the gear."
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    currentThread.messages.push({
      sender: "them",
      time: "Just now",
      text: randomReply
    });

    renderChatMessages();
    renderChatThreadsList();
    scrollChatToBottom();
  }, 1200);
}

function scrollChatToBottom() {
  const container = document.getElementById("chat-messages-stream");
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

// -------------------------------------------------------------
// MARKETPLACE & EXPLORE FEED LOGIC
// -------------------------------------------------------------
function setupMarketplace() {
  renderMarketplaceItems(SwampusState.items);

  // Category filter clicks
  const catBtns = document.querySelectorAll(".cat-btn");
  catBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      catBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.getAttribute("data-category");
      if (cat === "all") {
        renderMarketplaceItems(SwampusState.items);
      } else {
        const filtered = SwampusState.items.filter((i) => i.category === cat);
        renderMarketplaceItems(filtered);
      }
    });
  });

  // Search input
  const searchInput = document.getElementById("market-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = SwampusState.items.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.categoryName.toLowerCase().includes(q) ||
          i.lenderDorm.toLowerCase().includes(q)
      );
      renderMarketplaceItems(filtered);
    });
  }
}

function renderMarketplaceItems(itemsList) {
  const container = document.getElementById("marketplace-grid");
  if (!container) return;

  if (itemsList.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #fff; border-radius: var(--radius-md); border: 1.5px dashed var(--line);">
        <p style="font-size: 1.1rem; font-weight: 700; color: var(--muted);">No campus items found matching your search.</p>
      </div>`;
    return;
  }

  container.innerHTML = itemsList
    .map(
      (item) => `
    <div class="item-card" onclick="openRentModal('${item.id}')">
      <div class="item-card-image">
        <span>${item.icon}</span>
        <span class="item-price-tag">$${item.pricePerDay} / day</span>
      </div>
      <div class="item-card-body">
        <span class="item-category-label">${item.categoryName}</span>
        <h3 class="item-title">${item.title}</h3>
        <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 0.75rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${item.desc}
        </p>
        <div class="item-lender-info">
          <span class="item-dorm">📍 ${item.lenderDorm}</span>
          <span class="item-rating">★ ${item.lenderRating}</span>
        </div>
      </div>
    </div>`
    )
    .join("");
}

// -------------------------------------------------------------
// MODALS (RENT ITEM & LIST NEW ITEM)
// -------------------------------------------------------------
function setupModals() {
  // Close buttons
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  // Backdrop click
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // Open "List an Item" modal
  const openListBtn = document.getElementById("btn-open-list-modal");
  const navAddBtn = document.getElementById("btn-nav-add-item");

  const openList = () => {
    const modal = document.getElementById("modal-list-item");
    if (modal) modal.classList.add("show-modal");
  };

  if (openListBtn) openListBtn.addEventListener("click", openList);
  if (navAddBtn) navAddBtn.addEventListener("click", openList);

  // Handle New Item Submission
  const formList = document.getElementById("form-list-new-item");
  if (formList) {
    formList.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("new-item-title").value.trim();
      const category = document.getElementById("new-item-category").value;
      const price = parseFloat(document.getElementById("new-item-price").value) || 5;
      const deposit = parseFloat(document.getElementById("new-item-deposit").value) || 20;
      const desc = document.getElementById("new-item-desc").value.trim();
      const icon = document.getElementById("new-item-icon").value || "📦";

      if (!title) return;

      const newItem = {
        id: `item-${Date.now()}`,
        title: title,
        category: category,
        categoryName: category.charAt(0).toUpperCase() + category.slice(1),
        pricePerDay: price,
        deposit: deposit,
        lenderName: SwampusState.currentUser.name,
        lenderDorm: SwampusState.currentUser.dorm,
        lenderRating: SwampusState.currentUser.rating,
        icon: icon,
        desc: desc || "Listed by fellow student on campus.",
        available: true
      };

      SwampusState.items.unshift(newItem);
      SwampusState.myListings.unshift({
        id: `list-${Date.now()}`,
        title: title,
        rate: `$${price}/day`,
        status: "Available to rent",
        statusClass: "badge-active",
        renter: "None right now",
        icon: icon,
        earnings: "$0 earned"
      });

      closeAllModals();
      formList.reset();
      renderMarketplaceItems(SwampusState.items);
      renderMyListings();
      renderLockerStats();
      showToast(`"${title}" listed on Swampus Campus Hub!`);
      showView("user-view");
    });
  }

  // Handle Rent Confirmation
  const formRent = document.getElementById("form-confirm-rent");
  if (formRent) {
    formRent.addEventListener("submit", (e) => {
      e.preventDefault();
      const itemId = document.getElementById("rent-item-id").value;
      const days = parseInt(document.getElementById("rent-days-count").value) || 3;
      const item = SwampusState.items.find((i) => i.id === itemId);

      if (!item) return;

      // Add to user borrowings
      const newBorrowing = {
        id: `bor-${Date.now()}`,
        itemId: item.id,
        title: item.title,
        lender: item.lenderName,
        dorm: item.lenderDorm,
        dueIn: `Due in ${days} days`,
        price: `$${item.pricePerDay}/day`,
        depositHeld: `$${item.deposit} hold`,
        status: "Active Rental",
        statusClass: "badge-active",
        icon: item.icon
      };
      SwampusState.borrowings.unshift(newBorrowing);

      // Create new chat thread with lender
      const newThread = {
        id: `thread-${Date.now()}`,
        otherUser: item.lenderName,
        otherAvatar: item.lenderName.charAt(0),
        otherDorm: item.lenderDorm,
        itemTitle: item.title,
        itemPrice: `$${item.pricePerDay}/day`,
        rentalDates: `${days} Days Rental`,
        itemIcon: item.icon,
        statusPill: "Active Rental",
        messages: [
          {
            sender: "system",
            text: `🎉 Rental request confirmed for ${item.title}! Security deposit hold placed.`
          },
          {
            sender: "me",
            time: "Just now",
            text: `Hi ${item.lenderName}! I just booked your ${item.title} for ${days} days. Where is the best campus spot to meet?`
          }
        ]
      };

      SwampusState.threads.unshift(newThread);
      SwampusState.activeChatId = newThread.id;

      closeAllModals();
      renderBorrowingsList();
      renderLockerStats();
      showToast(`Rental confirmed for ${item.title}! Chatting with ${item.lenderName}...`);
      showView("messages-view");
    });
  }
}

window.openRentModal = function (itemId) {
  const item = SwampusState.items.find((i) => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById("modal-rent-item");
  if (!modal) return;

  document.getElementById("rent-item-id").value = item.id;
  document.getElementById("rent-modal-title").textContent = item.title;
  document.getElementById("rent-modal-icon").textContent = item.icon;
  document.getElementById("rent-modal-price").textContent = `$${item.pricePerDay} / day`;
  document.getElementById("rent-modal-deposit").textContent = `$${item.deposit} refundable hold`;
  document.getElementById("rent-modal-lender").textContent = `${item.lenderName} (${item.lenderDorm})`;
  document.getElementById("rent-modal-desc").textContent = item.desc;

  // Recalculate cost
  const daysInput = document.getElementById("rent-days-count");
  const costSummary = document.getElementById("rent-total-calc");

  const updateCost = () => {
    const days = parseInt(daysInput.value) || 1;
    const total = days * item.pricePerDay;
    costSummary.textContent = `$${total}.00 total ($${item.deposit} deposit returned after return)`;
  };

  daysInput.oninput = updateCost;
  updateCost();

  modal.classList.add("show-modal");
};

function closeAllModals() {
  document.querySelectorAll(".modal-backdrop").forEach((m) => {
    m.classList.remove("show-modal");
  });
}

// -------------------------------------------------------------
// TOAST NOTIFICATIONS
// -------------------------------------------------------------
function showToast(message) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3500);
}
