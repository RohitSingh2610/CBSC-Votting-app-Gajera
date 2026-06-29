(() => {
  // ----- Candidate Data -----
  const candidates = {
    'head-boy': [
      { name: "Taksh Dhameliya", logo: "Student Photos\\05 Head Boy\\Taksh Dhameliya (Head Boy).JPG" },
      { name: "Yash Sonawane", logo: "Student Photos\\06 Head Girl\\Yash Sonawane (Head Boy).JPG" },
      { name: "Arya Kheni", logo: "Student Photos\\05 Head Boy\\Arya Kheni ( Head Boy).JPG" },
      { name: "Ansh Surani", logo: "Student Photos\\05 Head Boy\\Ansh Surani (Head boy).JPG" },
      { name: "Dhruv Chauhan", logo: "Student Photos\\05 Head Boy\\Dhruv Chauhan (Head Boy).JPG" }
    ],
    'head-girl': [
      { name: "Nisha Patel", logo: "Student Photos\\06 Head Girl\\Nisha Patel (Head Girl).JPG" },
      { name: "Dharmi Vora", logo: "Student Photos\\06 Head Girl\\Dharmi Vora (Head Girl).JPG" }
      
    ],
    'green-house-male': [
      { name: "Aadi Jain", logo: "Student Photos\\03 Green\\Aadi Jain.JPG" },
      { name: "Vinayak Namdev", logo: "Student Photos\\03 Green\\Vinayak Namdev.JPG" },
      { name: "Devendra Mishra", logo: "Student Photos\\03 Green\\Devendra Mishra.JPG" }
      
    ],
    'green-house-female': [
      { name: "Ayushi Yadav", logo: "Student Photos\\03 Green\\Ayushi Yadav.JPG" },
      { name: "Janavi Joshi", logo: "Student Photos\\03 Green\\Janavi Joshi.JPG" }
      
    ],
    'yellow-house-male': [
      { name: "Atharv Narkar", logo: "Student Photos\\01 Yellow\\Atharv Narkar.JPG" },
      { name: "Viren Charandas", logo: "Student Photos\\01 Yellow\\Viren Charandas.JPG" },
      { name: "Shivam Chauhan", logo: "Student Photos\\01 Yellow\\Shivam Chauhan.JPG" }
      
    ],
    'yellow-house-female': [
      { name: "Vrunda Bhalodi", logo: "Student Photos\\01 Yellow\\Vrunda Bhalodi.JPG" },
      { name: "Krupal Katira", logo: "Student Photos\\01 Yellow\\Krupal Katira.JPG" }
     
    ],
    'red-house-male': [
      { name: "Priyansh Valand", logo: "Student Photos\\04 Red\\Priyansh Valand.JPG" },
      { name: "Vatsal Vora", logo: "Student Photos\\04 Red\\Vatsal Vora.JPG" },
      { name: "Dirgh Khunt", logo: "Student Photos\\04 Red\\Dirgh Khunt.JPG" },
      { name: "Shrey Vaghani", logo: "Student Photos\\04 Red\\Shrey Vaghani.JPG" },
      { name: "Jihan Gelani", logo: "Student Photos\\04 Red\\Jihan Gelani.JPG" },
      { name: "Hem Patel", logo: "Student Photos\\04 Red\\Hem Patel.JPG" }
    ],
    'red-house-female': [
      { name: "Shreya Tiwari", logo: "Student Photos\\04 Red\\Shreya Tiwari.JPG" },
      { name: "Jayati Radadiya", logo: "Student Photos\\04 Red\\Jayti Radadiya.JPG" },
      { name: "Kavyanjali Chadvadiya", logo: "Student Photos\\04 Red\\Kavyanjali Chodvadiya.JPG" }
    ],
    'blue-house-male': [
      { name: "Vihan Boghara", logo: "Student Photos\\02 Blue- Dev Goyani\\Vihan Boghara.JPG" },
      { name: "Aryan Soni", logo: "Student Photos\\02 Blue- Dev Goyani\\Aryan Soni.JPG" },
      { name: "Dev Goyani", logo: "Student Photos\\02 Blue- Dev Goyani\\Dev Goyani.JPG" }
      
    ],
    'blue-house-female': [
      { name: "Yanshi Mistry", logo: "Student Photos\\02 Blue- Dev Goyani\\Yanshi Mistry.JPG" },
      { name: "Vancy Mangukiyai", logo: "Student Photos\\02 Blue- Dev Goyani\\Vancy Mangukiya.JPG" },
      { name: "Tanu Tiwari", logo: "Student Photos\\02 Blue- Dev Goyani\\Tannu Tiwari.JPG" }
    ]
  };

  let votedCategories = new Set();
  const container = document.getElementById('appContainer');

  // ----- Helper Functions -----
  function categoryDisplayName(cat) {
    const map = {
      'head-boy': 'Head Boy',
      'head-girl': 'Head Girl',
      'green-house-male': 'Green House Captain (Male)',
      'green-house-female': 'Green House Captain (Female)',
      'yellow-house-male': 'Yellow House Captain (Male)',
      'yellow-house-female': 'Yellow House Captain (Female)',
      'red-house-male': 'Red House Captain (Male)',
      'red-house-female': 'Red House Captain (Female)',
      'blue-house-male': 'Blue House Captain (Male)',
      'blue-house-female': 'Blue House Captain (Female)'
    };
    return map[cat] || cat;
  }

  function getSubCategories(group) {
    const map = {
      'head': ['head-boy', 'head-girl'],
      'green': ['green-house-male', 'green-house-female'],
      'yellow': ['yellow-house-male', 'yellow-house-female'],
      'red': ['red-house-male', 'red-house-female'],
      'blue': ['blue-house-male', 'blue-house-female']
    };
    return map[group] || [];
  }

  function getSubDisplayNames(group) {
    const map = {
      'head': ['Boy', 'Girl'],
      'green': ['Male', 'Female'],
      'yellow': ['Male', 'Female'],
      'red': ['Male', 'Female'],
      'blue': ['Male', 'Female']
    };
    return map[group] || [];
  }

  function getSubIconClasses(group) {
    const map = {
      'head': ['boy', 'girl'],
      'green': ['male', 'female'],
      'yellow': ['male', 'female'],
      'red': ['male', 'female'],
      'blue': ['male', 'female']
    };
    return map[group] || [];
  }

  function getSubIconNames(group) {
    const map = {
      'head': ['boy', 'girl'],
      'green': ['male', 'female'],
      'yellow': ['male', 'female'],
      'red': ['male', 'female'],
      'blue': ['male', 'female']
    };
    return map[group] || [];
  }

  // ----- Render Functions -----
  function renderFrontPage() {
    votedCategories = new Set();

    container.innerHTML = `
      <header>
        <div class="logo-area">
          <div class="logo-icon"><img src="Logo.png" alt="School Logo" /></div>
        </div>
        <div class="header-center">
          <div class="school-name">Gajera International School, Utran</div>
          <img class="ask-logo" src="Think Ask Rise.png" alt="Think Ask Rise" />
        </div>
      </header>
      <h1 class="main-title">Student Council Election <span>2025-26</span></h1>
      <div class="category-grid" id="categoryGrid">
        <div class="category-card card-head" data-group="head">
          <div class="icon-wrap"><span class="material-icons">group</span></div>
          <div class="cat-label">Head</div>
          <div class="cat-sub">Boy / Girl</div>
        </div>
        <div class="category-card card-green" data-group="green">
          <div class="icon-wrap"><span class="material-icons">grass</span></div>
          <div class="cat-label">Green House</div>
          <div class="cat-sub">Captain</div>
        </div>
        <div class="category-card card-yellow" data-group="yellow">
          <div class="icon-wrap"><span class="material-icons">light_mode</span></div>
          <div class="cat-label">Yellow House</div>
          <div class="cat-sub">Captain</div>
        </div>
        <div class="category-card card-red" data-group="red">
          <div class="icon-wrap"><span class="material-icons">whatshot</span></div>
          <div class="cat-label">Red House</div>
          <div class="cat-sub">Captain</div>
        </div>
        <div class="category-card card-blue" data-group="blue">
          <div class="icon-wrap"><span class="material-icons">water_drop</span></div>
          <div class="cat-label">Blue House</div>
          <div class="cat-sub">Captain</div>
        </div>
      </div>
      <div class="actions">
        <button class="action-btn primary" id="resultsBtn"><span class="material-icons">poll</span> View Results</button>
        <button class="action-btn danger" id="resetBtn"><span class="material-icons">restart_alt</span> Reset Votes</button>
      </div>
    `;

    // Event Listeners
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const group = card.dataset.group;
        if (group) showSelectionPage(group);
      });
    });

    document.getElementById('resultsBtn').addEventListener('click', () => {
      const pwd = prompt('Enter admin password:');
      if (pwd === 'admin123') showResults();
      else if (pwd !== null) alert('Incorrect password.');
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
      const pwd = prompt('Enter admin password:');
      if (pwd === 'admin123') {
        if (confirm('Reset ALL votes? This cannot be undone.')) {
          for (const cat in candidates) localStorage.removeItem(`votes_${cat}`);
          alert('All votes reset.');
        }
      } else if (pwd !== null) alert('Incorrect password.');
    });
  }

  function showSelectionPage(group) {
    const subCategories = getSubCategories(group);
    const displayNames = getSubDisplayNames(group);
    const iconClasses = getSubIconClasses(group);
    const iconNames = getSubIconNames(group);

    const mainDisplayNames = {
      'head': 'Head',
      'green': 'Green House',
      'yellow': 'Yellow House',
      'red': 'Red House',
      'blue': 'Blue House'
    };
    const mainName = mainDisplayNames[group] || group;

    const votedStatus = subCategories.map(cat => votedCategories.has(cat));
    const allVoted = votedStatus.every(v => v);

    let html = `
      <div class="page-header">
        <h2>Select ${mainName} Position</h2>
        <button class="back-btn" id="backToHome"><span class="material-icons" style="font-size:20px;">arrow_back</span> Back</button>
      </div>
      <div class="selection-page">
        <div class="selection-status ${allVoted ? 'done' : ''}">
          ${allVoted ? '✅ Both positions have been voted for!' : 'Choose the position you want to vote for'}
        </div>
        <div class="selection-options">
    `;

    subCategories.forEach((cat, index) => {
      const iconClass = iconClasses[index] || 'male';
      const iconName = iconNames[index] || 'person';
      const displayName = displayNames[index] || cat;
      const isVoted = votedStatus[index];
      const votedClass = isVoted ? 'voted' : '';
      const statusText = isVoted ? ' ✓ Voted' : '';

      html += `
        <div class="selection-option ${votedClass}" data-category="${cat}" ${isVoted ? 'style="pointer-events:none;"' : ''}>
          <div class="option-icon ${iconClass}"><span class="material-icons" style="font-size:48px;">${iconName}</span></div>
          <div class="option-label">${mainName} ${displayName}${statusText}</div>
          <div class="option-sub">${isVoted ? 'Already voted' : `Vote for ${displayName.toLowerCase()} candidate`}</div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;

    document.getElementById('backToHome').addEventListener('click', renderFrontPage);

    document.querySelectorAll('.selection-option:not(.voted)').forEach(option => {
      option.addEventListener('click', () => {
        const cat = option.dataset.category;
        if (cat) showCandidates(cat, group);
      });
    });
  }

  function showCandidates(category, group) {
    const list = candidates[category] || [];
    const displayName = categoryDisplayName(category);

    let html = `
      <div class="page-header">
        <h2>Candidates for ${displayName}</h2>
        <button class="back-btn" id="backToSelection"><span class="material-icons" style="font-size:20px;">arrow_back</span> Back</button>
      </div>
      <div class="candidate-grid" id="candidateGrid">
    `;

    list.forEach(c => {
      html += `
        <div class="candidate-card">
          <div class="candidate-avatar"><img src="${c.logo}" alt="${c.name}" /></div>
          <div class="candidate-name">${c.name}</div>
          <button class="vote-btn" data-category="${category}" data-candidate="${c.name}">Vote</button>
        </div>
      `;
    });

    html += `</div><div class="thank-msg" id="thankMsg"></div>`;
    container.innerHTML = html;

    document.querySelectorAll('.vote-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const cat = this.dataset.category;
        const candidate = this.dataset.candidate;

        document.querySelectorAll('.vote-btn').forEach(b => b.disabled = true);

        const key = `votes_${cat}`;
        const data = JSON.parse(localStorage.getItem(key) || '{}');
        data[candidate] = (data[candidate] || 0) + 1;
        localStorage.setItem(key, JSON.stringify(data));

        votedCategories.add(cat);

        const msg = document.getElementById('thankMsg');
        msg.innerHTML = `<span class="material-icons" style="font-size:28px;">check_circle</span> Thank you for voting for ${candidate}!`;
        msg.classList.add('show');

        setTimeout(() => {
          const subCats = getSubCategories(group);
          const allVoted = subCats.every(c => votedCategories.has(c));

          if (allVoted) {
            setTimeout(renderFrontPage, 400);
          } else {
            showSelectionPage(group);
          }
        }, 1500);
      });
    });

    document.getElementById('backToSelection').addEventListener('click', () => {
      showSelectionPage(group);
    });
  }

  function showResults() {
    let html = `
      <div class="page-header">
        <h2>Voting Results</h2>
        <button class="back-btn" id="backFromResults"><span class="material-icons" style="font-size:20px;">arrow_back</span> Back</button>
      </div>
    `;

    for (const cat in candidates) {
      const stored = JSON.parse(localStorage.getItem(`votes_${cat}`) || '{}');
      html += `<div class="result-category">${categoryDisplayName(cat)}</div>`;
      candidates[cat].forEach(c => {
        const count = stored[c.name] || 0;
        html += `
          <div class="result-item">
            <span>${c.name}</span>
            <span class="count">${count}</span>
          </div>
        `;
      });
    }

    container.innerHTML = html;
    document.getElementById('backFromResults').addEventListener('click', renderFrontPage);
  }

  // ----- Initialize -----
  renderFrontPage();
})();