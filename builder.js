/**
 * PORTFOLIO BUILDER CORE APPLICATION LOGIC
 * Handles editor state, form bindings, dynamic lists, visual compiling, and exporting.
 */

// -------------------------------------------------------------
// 1. PRE-POPULATED DATA STATE (PRE-FILLED WITH RESUME DATA)
// -------------------------------------------------------------
let state = {
  general: {
    name: "PRANAV HARKE",
    title: "Data Analyst & Business Analyst",
    tagline: "Translating complex, multi-source datasets into actionable business insights.",
    bio: "Results-driven Data Analyst with hands-on experience translating complex, multi-source datasets into actionable business insights. Skilled in end-to-end analytics workflows — from data extraction, cleaning, and root cause analysis to interactive dashboard delivery and stakeholder reporting. Proficient in Power BI, Python, and SQL; experienced building GenAI-powered applications using LangChain and LLMs. Recognised for Outstanding Performance and consistently delivering data-backed recommendations.",
    email: "harkepranav@gmail.com",
    location: "Pune, Maharashtra, India",
    linkedin: "pranavharke",
    github: "pranavharke",
    badge: "🚀 Open to Opportunities"
  },
  experience: [
    {
      company: "ActioHX Solutions Private Limited",
      role: "Technical Consultant",
      duration: "Aug 2025 – Present",
      location: "Pune, Maharashtra",
      description: "Investigate and resolve data discrepancies across analytics and service supply chain platforms using structured root cause analysis (RCA), reducing repeat incidents. Monitor and report on operational KPIs and SLA compliance metrics using Power BI dashboards, enabling real-time visibility for cross-functional stakeholders. Flag risk patterns in operational datasets to drive process improvements. Awarded Outstanding Performance (January 2026).",
      isCurrent: true
    },
    {
      company: "Smruthi Organics Limited",
      role: "Trainee Engineer",
      duration: "Jul 2023 – Apr 2024",
      location: "Solapur, Maharashtra",
      description: "Managed and analysed operational data across procurement and supply chain workflows using ERP, MRP and Document Management Systems, improving inventory tracking. Reviewed technical reports for equipment qualification and monitoring activities to ensure continuous process improvement.",
      isCurrent: false
    }
  ],
  projects: [
    {
      title: "Sales Analytics Dashboard",
      icon: "📊",
      tags: "Power BI, DAX, Power Query",
      description: "Designed an interactive Power BI dashboard analyzing sales performance across regions and products. Engineered 15+ DAX measures for YoY growth and customer KPIs, and cleaned 10,000+ rows using Power Query. Enabled dynamic filtering, reducing reporting effort by 60%.",
      link: "https://github.com/pranavharke"
    },
    {
      title: "GenAI-IRS: Intelligent Document Q&A",
      icon: "🤖",
      tags: "LangChain, FAISS, LLaMA3, Streamlit",
      description: "Architected a GenAI chatbot enabling natural language Q&A over multiple PDFs using LangChain, FAISS semantic search, HuggingFace embeddings, and GROQ LLaMA3. Implemented ConversationBufferMemory for multi-turn dialogue; deployed via Streamlit.",
      link: "https://github.com/pranavharke"
    },
    {
      title: "Speech Emotion Detection",
      icon: "🧠",
      tags: "Python, CNN, VGG16, Streamlit",
      description: "Developed deep learning models trained on the RAVDESS dataset to classify 8 human emotions from speech audio. Engineered audio features (MFCCs, Mel-Spectrograms, Chroma) using Librosa for real-time Streamlit inference.",
      link: "https://github.com/pranavharke"
    }
  ],
  skills: [
    {
      category: "Analytics & BI",
      items: "Power BI (DAX, Power Query), Tableau, Excel (Pivot, VLOOKUP), KPI Reporting, EDA"
    },
    {
      category: "Languages & Tools",
      items: "Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Streamlit, Git, Jupyter, VS Code"
    },
    {
      category: "ML & AI",
      items: "LangChain, Scikit-learn, TensorFlow, Keras, FAISS Semantic Search, NLP, LLaMA3"
    },
    {
      category: "Engineering & Operations",
      items: "AutoCAD, HVAC Systems, Equipment Qualification, ERP/MRP Systems"
    }
  ],
  education: [
    {
      degree: "Post Graduate Diploma in Big Data Analytics",
      school: "C-DAC ACTS, Pune",
      duration: "Aug 2024 – Feb 2025",
      score: "Grade B",
      highlight: "Career Pivot"
    },
    {
      degree: "B.Tech in Mechanical Engineering",
      school: "Dr. Babasaheb Ambedkar Technological University",
      duration: "2019 – 2022",
      score: "CGPA 9.48",
      highlight: "Distinction & Academic Excellence"
    },
    {
      degree: "Diploma in Mechanical Engineering",
      school: "Polytechnic Institute",
      duration: "2016 – 2019",
      score: "First Class Distinction",
      highlight: "Technical Foundation"
    }
  ],
  style: {
    theme: "aura-dark",
    customPrimary: "#00d4ff",
    customSecondary: "#7c3aed"
  }
};

// -------------------------------------------------------------
// 2. THEME CONFIGURATIONS
// -------------------------------------------------------------
const ThemeConfigs = {
  "aura-dark": {
    name: "Aura Dark",
    desc: "Sleek glassmorphism, midnight blue, neon glow, and particle background.",
    bgPrimary: "#0a0f1a",
    bgSecondary: "#0f1629",
    bgCard: "rgba(15, 22, 41, 0.65)",
    bgGlass: "rgba(255, 255, 255, 0.04)",
    borderGlass: "rgba(255, 255, 255, 0.08)",
    textPrimary: "#e8ecf4",
    textSecondary: "#8892a8",
    textMuted: "#5a6478",
    colorAccent1: "#00d4ff",
    colorAccent2: "#7c3aed",
    rgbAccent1: "0, 212, 255",
    rgbAccent2: "124, 58, 237",
    shadowLg: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    shadowGlowColor: "rgba(0, 212, 255, 0.15)",
    fontBody: "'Inter', system-ui, sans-serif",
    fontHeading: "'Space Grotesk', 'Inter', sans-serif",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
    statusColor: "#34d399", // Emerald
    particles: true,
    particleHue1: "190", // Cyan
    particleHue2: "270"  // Purple
  },
  "nordic-light": {
    name: "Nordic Clean",
    desc: "Light and minimal layout, spacious whitespace, cobalt blue, teal accents.",
    bgPrimary: "#f8fafc",
    bgSecondary: "#ffffff",
    bgCard: "#ffffff",
    bgGlass: "rgba(15, 23, 42, 0.02)",
    borderGlass: "rgba(15, 23, 42, 0.06)",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    textMuted: "#64748b",
    colorAccent1: "#2563eb",
    colorAccent2: "#0d9488",
    rgbAccent1: "37, 99, 235",
    rgbAccent2: "13, 148, 136",
    shadowLg: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
    shadowGlowColor: "rgba(37, 99, 235, 0.05)",
    fontBody: "'Inter', system-ui, sans-serif",
    fontHeading: "'Inter', sans-serif",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    statusColor: "#059669", // Medium Green
    particles: false,
    particleHue1: "220",
    particleHue2: "170"
  },
  "cyberpunk": {
    name: "Cyberpunk Green",
    desc: "High-contrast dark terminal theme. Monospace typography, glowing cyber-green.",
    bgPrimary: "#050505",
    bgSecondary: "#0d0d0d",
    bgCard: "#0d0d0d",
    bgGlass: "rgba(0, 255, 0, 0.02)",
    borderGlass: "rgba(0, 255, 0, 0.15)",
    textPrimary: "#39ff14", // Cyber Neon Green
    textSecondary: "#88ff66",
    textMuted: "#558855",
    colorAccent1: "#39ff14",
    colorAccent2: "#f92672", // Neon Pink
    rgbAccent1: "57, 255, 20",
    rgbAccent2: "249, 38, 114",
    shadowLg: "0 0 20px rgba(57, 255, 20, 0.1)",
    shadowGlowColor: "rgba(57, 255, 20, 0.2)",
    fontBody: "'Fira Code', monospace",
    fontHeading: "'Fira Code', monospace",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap",
    statusColor: "#39ff14",
    particles: true,
    particleHue1: "120", // Green
    particleHue2: "330"  // Pink
  },
  "warm-editorial": {
    name: "Warm Editorial",
    desc: "Cream pages, serif editorial headers, rust red, and forest green accents.",
    bgPrimary: "#fcfaf6",
    bgSecondary: "#f5f0e4",
    bgCard: "#ffffff",
    bgGlass: "rgba(0, 0, 0, 0.01)",
    borderGlass: "rgba(0, 0, 0, 0.08)",
    textPrimary: "#1f1d1a",
    textSecondary: "#4e4a42",
    textMuted: "#7a7469",
    colorAccent1: "#b45309", // Amber
    colorAccent2: "#15803d", // Forest Green
    rgbAccent1: "180, 83, 9",
    rgbAccent2: "21, 128, 61",
    shadowLg: "0 15px 35px rgba(40, 30, 20, 0.03)",
    shadowGlowColor: "rgba(180, 83, 9, 0.03)",
    fontBody: "'Outfit', sans-serif",
    fontHeading: "'Playfair Display', Georgia, serif",
    fontsUrl: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,400&display=swap",
    statusColor: "#15803d",
    particles: false,
    particleHue1: "30",
    particleHue2: "140"
  }
};

// -------------------------------------------------------------
// 3. APPLICATION INITS & BINDINGS
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  prefillGeneralInputs();
  renderExperienceList();
  renderProjectsList();
  renderSkillsList();
  renderEducationList();
  renderThemesSelection();
  setupEventListeners();
  updatePreview();
});

// Sidebar Navigation tabs
function setupTabs() {
  const tabs = document.querySelectorAll('#editorTabs .tab-btn');
  const panels = document.querySelectorAll('#editorContent .tab-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      const targetPanel = document.getElementById(`panel-${tab.dataset.tab}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

// Prefill base inputs (General Tab)
function prefillGeneralInputs() {
  document.getElementById('inputName').value = state.general.name;
  document.getElementById('inputTitle').value = state.general.title;
  document.getElementById('inputTagline').value = state.general.tagline;
  document.getElementById('inputBio').value = state.general.bio;
  document.getElementById('inputEmail').value = state.general.email;
  document.getElementById('inputLocation').value = state.general.location;
  document.getElementById('inputLinkedin').value = state.general.linkedin;
  document.getElementById('inputGithub').value = state.general.github;
  document.getElementById('inputBadge').value = state.general.badge;
}

// -------------------------------------------------------------
// 4. LIST RENDERS (DYNAMIC SECTIONS)
// -------------------------------------------------------------

// EXPERIENCE LIST
function renderExperienceList() {
  const container = document.getElementById('experienceList');
  container.innerHTML = '';
  
  state.experience.forEach((exp, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-header" onclick="toggleItemCard(this)">
        <span class="item-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          ${exp.company || 'New Position'} — ${exp.role || 'Title'}
        </span>
        <div class="item-actions" onclick="event.stopPropagation()">
          <button class="btn-icon btn-delete" onclick="deleteExperience(${index})" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
      <div class="item-body">
        <div class="form-row">
          <div class="form-group">
            <label>Company Name</label>
            <input type="text" value="${exp.company}" oninput="updateExperience(${index}, 'company', this.value)">
          </div>
          <div class="form-group">
            <label>Job Role</label>
            <input type="text" value="${exp.role}" oninput="updateExperience(${index}, 'role', this.value)">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Duration / Dates</label>
            <input type="text" value="${exp.duration}" oninput="updateExperience(${index}, 'duration', this.value)">
          </div>
          <div class="form-group">
            <label>Location</label>
            <input type="text" value="${exp.location}" oninput="updateExperience(${index}, 'location', this.value)">
          </div>
        </div>
        <div class="form-group">
          <label>Job Description</label>
          <textarea rows="3" oninput="updateExperience(${index}, 'description', this.value)">${exp.description}</textarea>
        </div>
        <div class="form-group" style="flex-direction: row; gap: 8px; align-items: center; margin-bottom: 0;">
          <input type="checkbox" id="expCurrent_${index}" ${exp.isCurrent ? 'checked' : ''} onchange="updateExperience(${index}, 'isCurrent', this.checked)">
          <label for="expCurrent_${index}" style="margin-bottom: 0;">Is Current Job (Highlight in Green)</label>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function deleteExperience(index) {
  state.experience.splice(index, 1);
  renderExperienceList();
  updatePreview();
  showToast("Experience deleted");
}

function updateExperience(index, key, val) {
  state.experience[index][key] = val;
  updatePreview();
}

// PROJECTS LIST
function renderProjectsList() {
  const container = document.getElementById('projectsList');
  container.innerHTML = '';
  
  state.projects.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-header" onclick="toggleItemCard(this)">
        <span class="item-title">
          <span style="font-size: 1.1rem; margin-right: 4px;">${proj.icon || '🚀'}</span>
          ${proj.title || 'New Project'}
        </span>
        <div class="item-actions" onclick="event.stopPropagation()">
          <button class="btn-icon btn-delete" onclick="deleteProject(${index})" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
      <div class="item-body">
        <div class="form-row">
          <div class="form-group">
            <label>Project Title</label>
            <input type="text" value="${proj.title}" oninput="updateProject(${index}, 'title', this.value)">
          </div>
          <div class="form-group">
            <label>Card Emoji Icon</label>
            <input type="text" value="${proj.icon}" placeholder="e.g. 📊" oninput="updateProject(${index}, 'icon', this.value)">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Technologies Tags (Comma Separated)</label>
            <input type="text" value="${proj.tags}" placeholder="e.g. Python, ML" oninput="updateProject(${index}, 'tags', this.value)">
          </div>
          <div class="form-group">
            <label>Project Link / GitHub URL</label>
            <input type="text" value="${proj.link}" placeholder="e.g. https://github.com/..." oninput="updateProject(${index}, 'link', this.value)">
          </div>
        </div>
        <div class="form-group">
          <label>Project Description</label>
          <textarea rows="3" oninput="updateProject(${index}, 'description', this.value)">${proj.description}</textarea>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function deleteProject(index) {
  state.projects.splice(index, 1);
  renderProjectsList();
  updatePreview();
  showToast("Project deleted");
}

function updateProject(index, key, val) {
  state.projects[index][key] = val;
  updatePreview();
}

// SKILLS LIST
function renderSkillsList() {
  const container = document.getElementById('skillsList');
  container.innerHTML = '';
  
  state.skills.forEach((skill, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-header" onclick="toggleItemCard(this)">
        <span class="item-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
          ${skill.category || 'Skill Category'}
        </span>
        <div class="item-actions" onclick="event.stopPropagation()">
          <button class="btn-icon btn-delete" onclick="deleteSkill(${index})" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
      <div class="item-body">
        <div class="form-group">
          <label>Category Label</label>
          <input type="text" value="${skill.category}" oninput="updateSkill(${index}, 'category', this.value)">
        </div>
        <div class="form-group">
          <label>Skills Sub-Items (Comma Separated)</label>
          <textarea rows="3" placeholder="e.g. Python, SQL, Tableau" oninput="updateSkill(${index}, 'items', this.value)">${skill.items}</textarea>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function deleteSkill(index) {
  state.skills.splice(index, 1);
  renderSkillsList();
  updatePreview();
  showToast("Skill Category deleted");
}

function updateSkill(index, key, val) {
  state.skills[index][key] = val;
  updatePreview();
}

// EDUCATION LIST
function renderEducationList() {
  const container = document.getElementById('educationList');
  container.innerHTML = '';
  
  state.education.forEach((edu, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-header" onclick="toggleItemCard(this)">
        <span class="item-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
          ${edu.degree || 'Degree Course'}
        </span>
        <div class="item-actions" onclick="event.stopPropagation()">
          <button class="btn-icon btn-delete" onclick="deleteEducation(${index})" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
      <div class="item-body">
        <div class="form-row">
          <div class="form-group">
            <label>Course / Degree Title</label>
            <input type="text" value="${edu.degree}" oninput="updateEducation(${index}, 'degree', this.value)">
          </div>
          <div class="form-group">
            <label>Institution / University</label>
            <input type="text" value="${edu.school}" oninput="updateEducation(${index}, 'school', this.value)">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Duration / Dates</label>
            <input type="text" value="${edu.duration}" oninput="updateEducation(${index}, 'duration', this.value)">
          </div>
          <div class="form-group">
            <label>Grade / Score Result</label>
            <input type="text" value="${edu.score}" placeholder="e.g. CGPA 9.48" oninput="updateEducation(${index}, 'score', this.value)">
          </div>
        </div>
        <div class="form-group">
          <label>Notable Achievement / Badge Tag</label>
          <input type="text" value="${edu.highlight}" placeholder="e.g. Distinction, Academic Excellence" oninput="updateEducation(${index}, 'highlight', this.value)">
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function deleteEducation(index) {
  state.education.splice(index, 1);
  renderEducationList();
  updatePreview();
  showToast("Education entry deleted");
}

function updateEducation(index, key, val) {
  state.education[index][key] = val;
  updatePreview();
}

// Collapsible expand/collapse toggle
window.toggleItemCard = function(headerElement) {
  const card = headerElement.parentElement;
  card.classList.toggle('expanded');
};

// -------------------------------------------------------------
// 5. STYLE & THEME CONTROLS
// -------------------------------------------------------------
function renderThemesSelection() {
  const container = document.getElementById('themesGrid');
  container.innerHTML = '';
  
  Object.keys(ThemeConfigs).forEach(themeKey => {
    const config = ThemeConfigs[themeKey];
    const card = document.createElement('div');
    card.className = `theme-card ${state.style.theme === themeKey ? 'active' : ''}`;
    card.onclick = () => selectTheme(themeKey);
    
    card.innerHTML = `
      <div class="theme-preview" style="background-color: ${config.bgSecondary};">
        <div class="color-dot" style="background-color: ${config.colorAccent1};"></div>
        <div class="color-dot" style="background-color: ${config.colorAccent2};"></div>
      </div>
      <div class="theme-name">${config.name}</div>
      <div class="theme-desc">${config.desc}</div>
    `;
    container.appendChild(card);
  });
}

function selectTheme(themeKey) {
  state.style.theme = themeKey;
  
  // Set custom color pickers to match theme defaults
  const config = ThemeConfigs[themeKey];
  state.style.customPrimary = config.colorAccent1;
  state.style.customSecondary = config.colorAccent2;
  document.getElementById('customColorPrimary').value = config.colorAccent1;
  document.getElementById('customColorSecondary').value = config.colorAccent2;
  
  renderThemesSelection();
  updatePreview();
  showToast(`Theme switched to ${config.name}`);
}

// -------------------------------------------------------------
// 6. GENERAL EVENT LISTENERS SETUP
// -------------------------------------------------------------
function setupEventListeners() {
  // Bind simple text inputs
  const bindInput = (id, statePath) => {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
      const parts = statePath.split('.');
      if (parts.length === 2) {
        state[parts[0]][parts[1]] = e.target.value;
      }
      updatePreview();
    });
  };
  
  bindInput('inputName', 'general.name');
  bindInput('inputTitle', 'general.title');
  bindInput('inputTagline', 'general.tagline');
  bindInput('inputBio', 'general.bio');
  bindInput('inputEmail', 'general.email');
  bindInput('inputLocation', 'general.location');
  bindInput('inputLinkedin', 'general.linkedin');
  bindInput('inputGithub', 'general.github');
  bindInput('inputBadge', 'general.badge');

  // Add Item Buttons
  document.getElementById('btnAddExperience').addEventListener('click', () => {
    state.experience.push({
      company: "New Company",
      role: "Job Title",
      duration: "Duration",
      location: "Location",
      description: "Description of your key activities.",
      isCurrent: false
    });
    renderExperienceList();
    updatePreview();
    // Expand the newly added card
    const list = document.getElementById('experienceList');
    list.lastElementChild.classList.add('expanded');
    showToast("Added work experience card");
  });

  document.getElementById('btnAddProject').addEventListener('click', () => {
    state.projects.push({
      title: "New Project",
      icon: "🚀",
      tags: "HTML, CSS",
      description: "Short descriptive summary of your project accomplishments.",
      link: "#"
    });
    renderProjectsList();
    updatePreview();
    const list = document.getElementById('projectsList');
    list.lastElementChild.classList.add('expanded');
    showToast("Added project card");
  });

  document.getElementById('btnAddSkillGroup').addEventListener('click', () => {
    state.skills.push({
      category: "New Skills Category",
      items: "Skill 1, Skill 2, Skill 3"
    });
    renderSkillsList();
    updatePreview();
    const list = document.getElementById('skillsList');
    list.lastElementChild.classList.add('expanded');
    showToast("Added skill category");
  });

  document.getElementById('btnAddEducation').addEventListener('click', () => {
    state.education.push({
      degree: "Degree / Course",
      school: "Institution Name",
      duration: "Dates",
      score: "GPA / Grade",
      highlight: "Special Highlight"
    });
    renderEducationList();
    updatePreview();
    const list = document.getElementById('educationList');
    list.lastElementChild.classList.add('expanded');
    showToast("Added education history");
  });

  // Custom Accent Colors pickers
  document.getElementById('customColorPrimary').addEventListener('input', (e) => {
    state.style.customPrimary = e.target.value;
    updatePreview();
  });
  document.getElementById('customColorSecondary').addEventListener('input', (e) => {
    state.style.customSecondary = e.target.value;
    updatePreview();
  });

  // Device layout selectors
  const deviceFrame = document.getElementById('deviceFrame');
  const deviceBtns = document.querySelectorAll('#deviceToggles .device-btn');
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const device = btn.dataset.device;
      deviceFrame.className = `device-frame ${device}`;
    });
  });

  // Export Buttons
  document.getElementById('btnExportZip').addEventListener('click', exportZIPPackage);
  document.getElementById('btnExportSingle').addEventListener('click', exportSingleHTML);
}

// -------------------------------------------------------------
// 7. COMPILER ENGINE (HTML, CSS, JS GENERATION)
// -------------------------------------------------------------
function compilePortfolio() {
  const themeKey = state.style.theme;
  const baseConfig = ThemeConfigs[themeKey];
  
  // Custom overrides for accent colors
  const primaryAccent = state.style.customPrimary;
  const secondaryAccent = state.style.customSecondary;
  
  // Calculate RGB versions of accents for shadows and backgrounds
  const hexToRgb = (hex) => {
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0, 212, 255';
  };
  const rgbAccent1 = hexToRgb(primaryAccent);
  const rgbAccent2 = hexToRgb(secondaryAccent);

  // Compile CSS variables
  let css = PortfolioTemplate.css;
  css = css.replace(/{{BG_PRIMARY}}/g, baseConfig.bgPrimary)
           .replace(/{{BG_SECONDARY}}/g, baseConfig.bgSecondary)
           .replace(/{{BG_CARD}}/g, baseConfig.bgCard)
           .replace(/{{BG_GLASS}}/g, baseConfig.bgGlass)
           .replace(/{{BORDER_GLASS}}/g, baseConfig.borderGlass)
           .replace(/{{TEXT_PRIMARY}}/g, baseConfig.textPrimary)
           .replace(/{{TEXT_SECONDARY}}/g, baseConfig.textSecondary)
           .replace(/{{TEXT_MUTED}}/g, baseConfig.textMuted)
           .replace(/{{ACCENT_1}}/g, primaryAccent)
           .replace(/{{ACCENT_2}}/g, secondaryAccent)
           .replace(/{{RGB_ACCENT_1}}/g, rgbAccent1)
           .replace(/{{RGB_ACCENT_2}}/g, rgbAccent2)
           .replace(/{{SHADOW_LG}}/g, baseConfig.shadowLg)
           .replace(/{{SHADOW_GLOW_COLOR}}/g, primaryAccent + "25") // 15% opacity hex
           .replace(/{{FONT_BODY}}/g, baseConfig.fontBody)
           .replace(/{{FONT_HEADING}}/g, baseConfig.fontHeading)
           .replace(/{{STATUS_COLOR}}/g, baseConfig.statusColor);

  // Compile JS
  let js = PortfolioTemplate.js;
  if (baseConfig.particles) {
    js = js.replace(/{{PARTICLES_INIT}}/g, "initParticles();")
           .replace(/{{PARTICLE_HUE_1}}/g, baseConfig.particleHue1)
           .replace(/{{PARTICLE_HUE_2}}/g, baseConfig.particleHue2);
  } else {
    js = js.replace(/{{PARTICLES_INIT}}/g, "")
           .replace(/{{PARTICLES_CANVAS}}/g, "");
  }

  // Compile HTML Parts
  let html = PortfolioTemplate.html;
  
  // Dynamic header logo
  const initials = state.general.name ? state.general.name.split(' ').map(n=>n[0]).join('').substring(0, 2).toUpperCase() : "PH";
  const logoText = state.general.name ? `${state.general.name.split(' ')[0]} <span class="accent">${state.general.name.split(' ').slice(1).join(' ')}</span>` : "Portfolio";
  
  html = html.replace(/{{NAME}}/g, state.general.name)
             .replace(/{{TITLE}}/g, state.general.title)
             .replace(/{{TAGLINE}}/g, state.general.tagline)
             .replace(/{{BIO}}/g, state.general.bio)
             .replace(/{{EMAIL}}/g, state.general.email)
             .replace(/{{LOGO_TEXT}}/g, logoText)
             .replace(/{{INITIALS}}/g, initials)
             .replace(/{{FONTS_URL}}/g, baseConfig.fontsUrl)
             .replace(/{{STATUS_COLOR}}/g, baseConfig.statusColor);

  // Particles canvas in html
  if (baseConfig.particles) {
    html = html.replace(/{{PARTICLES_CANVAS}}/g, '<canvas id="particlesCanvas"></canvas>');
  } else {
    html = html.replace(/{{PARTICLES_CANVAS}}/g, '');
  }

  // Hero Status badge
  if (state.general.badge) {
    html = html.replace(/{{HERO_BADGE}}/g, `<div class="hero-badge">${state.general.badge}</div>`);
    html = html.replace(/{{ABOUT_STATUS}}/g, `<div class="avatar-status"><span class="status-dot"></span> ${state.general.badge}</div>`);
  } else {
    html = html.replace(/{{HERO_BADGE}}/g, '');
    html = html.replace(/{{ABOUT_STATUS}}/g, '');
  }

  // Location html
  if (state.general.location) {
    html = html.replace(/{{LOCATION_HTML}}/g, `
      <div class="about-location">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${state.general.location}
      </div>`);
    html = html.replace(/{{LOCATION_CONTACT_ITEM}}/g, `
      <div class="contact-item">
        <div class="contact-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <h4>Location</h4>
          <p>${state.general.location}</p>
        </div>
      </div>`);
  } else {
    html = html.replace(/{{LOCATION_HTML}}/g, '');
    html = html.replace(/{{LOCATION_CONTACT_ITEM}}/g, '');
  }

  // Social Links
  let socialsHTML = '';
  if (state.general.linkedin) {
    socialsHTML += `
      <a href="https://linkedin.com/in/${state.general.linkedin}" class="social-link" aria-label="LinkedIn" target="_blank">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>`;
  }
  if (state.general.github) {
    socialsHTML += `
      <a href="https://github.com/${state.general.github}" class="social-link" aria-label="GitHub" target="_blank">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>`;
  }
  html = html.replace(/{{SOCIAL_LINKS}}/g, socialsHTML);

  // Conditionally render navbar items
  html = html.replace(/{{NAV_ABOUT}}/g, '<li><a href="#about">About</a></li>');
  html = html.replace(/{{NAV_JOURNEY}}/g, state.experience.length ? '<li><a href="#journey">Journey</a></li>' : '');
  html = html.replace(/{{NAV_SKILLS}}/g, state.skills.length ? '<li><a href="#skills">Skills</a></li>' : '');
  html = html.replace(/{{NAV_PROJECTS}}/g, state.projects.length ? '<li><a href="#projects">Projects</a></li>' : '');
  html = html.replace(/{{NAV_EDUCATION}}/g, state.education.length ? '<li><a href="#education">Education</a></li>' : '');

  // Compile Journey / Experience Section
  if (state.experience.length > 0) {
    let expHTML = `
  <!-- ===== JOURNEY ===== -->
  <section class="section timeline-section" id="journey">
    <div class="container">
      <h2 class="section-title reveal"><span class="gradient-text">My Journey</span></h2>
      <p class="section-subtitle reveal">A chronological path of my professional work history.</p>
      <div class="timeline">
        <div class="timeline-line"></div>`;

    state.experience.forEach((exp, i) => {
      const tagClass = exp.isCurrent ? 'tag-current' : 'tag-work';
      const tagText = exp.isCurrent ? 'Current' : 'Work';
      const dotClass = exp.isCurrent ? 'current' : '';
      
      expHTML += `
        <div class="timeline-item reveal-left">
          <div class="timeline-dot ${dotClass}"><span>${i + 1}</span></div>
          <div class="timeline-card">
            <div class="timeline-date">${exp.duration}</div>
            <h3>${exp.role}</h3>
            <p style="font-weight: 500; font-size: 0.85rem; opacity: 0.85; margin-bottom: 4px;">${exp.company} &nbsp;|&nbsp; ${exp.location}</p>
            <p>${exp.description}</p>
            <div class="timeline-tag ${tagClass}">${tagText}</div>
          </div>
        </div>`;
    });

    expHTML += `
      </div>
    </div>
  </section>`;
    html = html.replace(/{{TIMELINE_SECTION}}/g, expHTML);
  } else {
    html = html.replace(/{{TIMELINE_SECTION}}/g, '');
  }

  // Compile Skills Section
  if (state.skills.length > 0) {
    let skillTabsHTML = '';
    let skillPanelsHTML = '';
    
    state.skills.forEach((skill, i) => {
      const activeClass = i === 0 ? 'active' : '';
      const panelId = `panel-skill-${i}`;
      
      // tab button
      skillTabsHTML += `<button class="skill-tab ${activeClass}" data-tab="skill-${i}">${skill.category}</button>`;
      
      // panel items
      let itemsHTML = '';
      const itemsList = skill.items.split(',').map(item => item.trim()).filter(Boolean);
      itemsList.forEach((item) => {
        // Mock a percentage for aesthetic progress bars
        const hash = item.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const percent = 50 + (hash % 45); // Generates stable 50%-95% based on text
        itemsHTML += `
            <div class="skill-item reveal">
              <div class="skill-header">
                <span class="skill-name">${item}</span>
                <span class="skill-percent">${percent}%</span>
              </div>
              <div class="skill-bar"><div class="skill-fill" data-width="${percent}"></div></div>
            </div>`;
      });

      skillPanelsHTML += `
        <div class="skill-panel ${activeClass}" id="${panelId}">
          <div class="skills-grid">
            ${itemsHTML}
          </div>
        </div>`;
    });

    let skillsHTML = `
  <!-- ===== SKILLS ===== -->
  <section class="section skills-section" id="skills">
    <div class="container">
      <h2 class="section-title reveal"><span class="gradient-text">Skills & Expertise</span></h2>
      <p class="section-subtitle reveal">A visual catalog of technologies and domain capabilities.</p>
      <div class="skills-tabs reveal">
        ${skillTabsHTML}
      </div>
      <div class="skills-content">
        ${skillPanelsHTML}
      </div>
    </div>
  </section>`;
    
    html = html.replace(/{{SKILLS_SECTION}}/g, skillsHTML);
  } else {
    html = html.replace(/{{SKILLS_SECTION}}/g, '');
  }

  // Compile Projects Section
  if (state.projects.length > 0) {
    let projItemsHTML = '';
    state.projects.forEach(proj => {
      let tagsHTML = '';
      if (proj.tags) {
        proj.tags.split(',').map(t=>t.trim()).filter(Boolean).forEach(t => {
          tagsHTML += `<span class="ptag">${t}</span>`;
        });
      }
      projItemsHTML += `
        <div class="project-card reveal">
          <div class="project-icon">${proj.icon || '📊'}</div>
          <div class="project-tags">
            ${tagsHTML}
          </div>
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <div class="project-links">
            <a href="${proj.link}" class="project-link" target="_blank">View Project &rarr;</a>
          </div>
        </div>`;
    });

    let projectsHTML = `
  <!-- ===== PROJECTS ===== -->
  <section class="section projects-section" id="projects">
    <div class="container">
      <h2 class="section-title reveal"><span class="gradient-text">Featured Projects</span></h2>
      <p class="section-subtitle reveal">Showcasing real-world engineering and analytical accomplishments.</p>
      <div class="projects-grid">
        ${projItemsHTML}
      </div>
    </div>
  </section>`;
    html = html.replace(/{{PROJECTS_SECTION}}/g, projectsHTML);
  } else {
    html = html.replace(/{{PROJECTS_SECTION}}/g, '');
  }

  // Compile Education Section
  if (state.education.length > 0) {
    let eduCardsHTML = '';
    state.education.forEach(edu => {
      eduCardsHTML += `
        <div class="edu-card reveal">
          <div class="edu-icon">🎓</div>
          <h3>${edu.degree}</h3>
          <p class="edu-institution">${edu.school}</p>
          <p class="edu-year">${edu.duration}</p>
          <div class="edu-score">${edu.score}</div>
          <p style="font-size: 0.72rem; color: var(--text-muted); margin-top: 6px; font-weight: 500; text-transform: uppercase;">
            ${edu.highlight}
          </p>
        </div>`;
    });

    let educationHTML = `
  <!-- ===== EDUCATION ===== -->
  <section class="section education-section" id="education">
    <div class="container">
      <h2 class="section-title reveal"><span class="gradient-text">Education</span></h2>
      <p class="section-subtitle reveal">Academic credentials and career pivot credentials.</p>
      <div class="education-grid">
        ${eduCardsHTML}
      </div>
    </div>
  </section>`;
    html = html.replace(/{{EDUCATION_SECTION}}/g, educationHTML);
  } else {
    html = html.replace(/{{EDUCATION_SECTION}}/g, '');
  }

  return { html, css, js };
}

// -------------------------------------------------------------
// 8. PREVIEW UPDATER
// -------------------------------------------------------------
let previewTimeout = null;
function updatePreview() {
  if (previewTimeout) clearTimeout(previewTimeout);
  
  // Debounce slightly to prevent lag during rapid typing
  previewTimeout = setTimeout(() => {
    const { html, css, js } = compilePortfolio();
    
    // Assemble the complete package with local files referenced
    const iframe = document.getElementById('previewIframe');
    if (!iframe) return;
    
    // We insert style and scripts inline in the iframe to avoid filesystem latency
    let previewHTML = html;
    previewHTML = previewHTML.replace('<link rel="stylesheet" href="style.css" />', `<style>${css}</style>`);
    previewHTML = previewHTML.replace('<script src="script.js"></script>', `<script>${js}</script>`);
    
    iframe.srcdoc = previewHTML;
  }, 100);
}

// -------------------------------------------------------------
// 9. EXPORT & DOWNLOAD HANDLERS
// -------------------------------------------------------------
function exportSingleHTML() {
  const { html, css, js } = compilePortfolio();
  
  let merged = html;
  merged = merged.replace('<link rel="stylesheet" href="style.css" />', `<style>\n${css}\n</style>`);
  merged = merged.replace('<script src="script.js"></script>', `<script>\n${js}\n</script>`);
  
  triggerDownload(merged, "index.html", "text/html");
  showToast("Single HTML file downloaded successfully!");
}

function exportZIPPackage() {
  const { html, css, js } = compilePortfolio();
  
  if (typeof JSZip === 'undefined') {
    showToast("JSZip library loading, try again in a second...", true);
    return;
  }
  
  const zip = new JSZip();
  zip.file("index.html", html);
  zip.file("style.css", css);
  zip.file("script.js", js);
  
  showToast("Compiling files into ZIP...");
  
  zip.generateAsync({ type: "blob" }).then(content => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = "portfolio.zip";
    link.click();
    showToast("ZIP bundle downloaded successfully!");
  }).catch(err => {
    console.error("ZIP Generation Failed:", err);
    showToast("ZIP generation failed. Try Single HTML export instead.", true);
  });
}

function triggerDownload(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

// -------------------------------------------------------------
// 10. TOAST NOTIFICATION UTILITY
// -------------------------------------------------------------
function showToast(message, isError = false) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  if (isError) {
    toast.style.borderLeftColor = '#ef4444';
  }
  
  toast.innerHTML = `
    <span>${isError ? '⚠️' : '✨'}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Trigger animations
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}
