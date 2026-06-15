
/* ══════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════ */
const GRADE_POINTS = {
  'A+': 5.00, 'A': 4.75, 'A-': 4.50,
  'B+': 4.25, 'B': 4.00, 'B-': 3.75,
  'C+': 3.50, 'C': 3.00, 'C-': 2.75,
  'D+': 2.50, 'D': 2.00, 'F': 0.00
};

const COLLEGES = [
  { en: 'Software Engineering',             ar: 'هندسة البرمجيات',                 min: 96.95 },
  { en: 'Computer Science',                 ar: 'علوم الحاسب',                      min: 95.50 },
  { en: 'Information Systems',              ar: 'نظم المعلومات',                    min: 94.10 },
  { en: 'Computer Engineering',             ar: 'هندسة الحاسب',                     min: 92.70 },
  { en: 'Engineering',                      ar: 'الهندسة',                          min: 88.85 },
  { en: 'Electronic & Financial Mathematics',ar:'الرياضيات الإلكترونية والمالية',   min: 88.10 },
  { en: 'Urban Planning & Design',          ar: 'التخطيط والتصميم العمراني',        min: 87.55 },
  { en: 'Architecture & Building Science',  ar: 'عمارة وعلوم البناء',              min: 86.80 },
  { en: 'Agricultural Engineering',         ar: 'الهندسة الزراعية',                 min: 85.35 },
  { en: 'Statistics',                       ar: 'إحصاء',                            min: 84.30 },
  { en: 'Operations Research',              ar: 'بحوث العمليات',                    min: 83.75 },
  { en: 'Biophysics',                       ar: 'حيوفيزياء',                        min: 82.75 },
  { en: 'Mathematics',                      ar: 'رياضيات',                          min: 81.60 },
  { en: 'Applied Economics',                ar: 'الاقتصاد التطبيقي',               min: 78.55 },
  { en: 'Physics',                          ar: 'فيزياء',                           min: 78.45 },
  { en: 'Biochemistry',                     ar: 'كيمياء حيوية',                     min: 78.00 },
  { en: 'Zoology',                          ar: 'حيوان',                            min: 75.30 },
  { en: 'Chemistry',                        ar: 'كيمياء',                           min: 73.40 },
  { en: 'Food Science & Human Nutrition',   ar: 'علوم الأغذية وتغذية الإنسان',     min: 72.90 },
  { en: 'Microbiology',                     ar: 'الأحياء الدقيقة',                  min: 71.15 },
  { en: 'Botany',                           ar: 'نبات',                             min: 70.00 },
  { en: 'Animal Science',                   ar: 'علم الحيوان',                      min: 70.00 },
  { en: 'Animal Production',                ar: 'الإنتاج الحيواني',                 min: 70.00 },
  { en: 'Forest Production Science',        ar: 'علوم الإنتاج الغابي',              min: 70.00 },
  { en: 'Plant Protection',                 ar: 'وقاية النبات',                     min: 70.00 },
];

/* ══════════════════════════════════════════════════
   i18n
══════════════════════════════════════════════════ */
const STRINGS = {
  en: {
    hLogoText:'Allocation Calculator', hLogoSub:'King Saud University',
    step1Label:'Courses', step2Label:'Grades', step3Label:'Test Scores', step4Label:'Results',
    p0Title:'First-year courses', p0Sub:'How many courses did you take in your first year?',
    p0Btn:'Next — Enter Grades →',
    p1Title:'Course grades', p1Sub:'Enter credit hours and grade for each course. Course name is optional.',
    p1Btn:'Next — Test Scores →',
    colName:'Course name (optional)', colHrs:'Credit hrs', colGrade:'Grade',
    gradesErr:'Please fill in credit hours and grade for all courses.',
    backBtn:'← Back',
    p2Title:'National test scores', p2Sub:'Enter your Qudrat and Tahsili scores (0 – 100).',
    formulaLabel:'Allocation Score',
    qudratLabel:'Qudrat — Aptitude Test', qudratHint:'Out of 100 — counts 25%',
    tahsiliLabel:'Tahsili — Achievement Test', tahsiliHint:'Out of 100 — counts 25%',
    scoresErr:'Please enter valid scores between 0 and 100.',
    p2Btn:'Calculate Results →',
    resLabel:'Allocation Score', outOf:'out of 100', gpaComp:'GPA component',
    qudBreakdown:'Qudrat', tahBreakdown:'Tahsili',
    gpaLbl:'GPA (/ 5.0)', qudLbl:'Qudrat Score', tahLbl:'Tahsili Score',
    rankLbl:'Performance',
    availHead:'Majors you qualify for', unavailHead:'Majors out of reach',
    noAvail:'No majors available at this score.',
    allAvail:'All majors are within reach!',
    restartBtn:'↺ Start Over',
    minLabel:'Min:', ptsLabel:'pts',
    gradeSelect:'— Grade —',
    courseNamePlaceholder:'Course name…',
    hrsPlaceholder:'Hrs',
    langLabel:'عربي',
  },
  ar: {
    hLogoText:'حاسبة معدل التخصيص', hLogoSub:'جامعة الملك سعود',
    step1Label:'المواد', step2Label:'التقديرات', step3Label:'نتائج الاختبارات', step4Label:'النتائج',
    p0Title:'مواد السنة الأولى', p0Sub:'كم عدد المواد التي درستها في السنة الأولى؟',
    p0Btn:'التالي — إدخال التقديرات ←',
    p1Title:'تقديرات المواد', p1Sub:'أدخل الساعات المعتمدة والتقدير لكل مادة. اسم المادة اختياري.',
    p1Btn:'التالي — نتائج الاختبارات ←',
    colName:'اسم المادة (اختياري)', colHrs:'الساعات', colGrade:'التقدير',
    gradesErr:'الرجاء إدخال الساعات والتقدير لجميع المواد.',
    backBtn:'رجوع →',
    p2Title:'نتائج الاختبارات الوطنية', p2Sub:'أدخل درجة القدرات والتحصيلي (0 – 100).',
    formulaLabel:'معدل التخصيص',
    qudratLabel:'اختبار القدرات', qudratHint:'من 100 — يحتسب 25%',
    tahsiliLabel:'الاختبار التحصيلي', tahsiliHint:'من 100 — يحتسب 25%',
    scoresErr:'الرجاء إدخال درجات صحيحة بين 0 و 100.',
    p2Btn:'احسب النتائج ←',
    resLabel:'معدل التخصيص', outOf:'من 100', gpaComp:'المعدل التراكمي',
    qudBreakdown:'قدرات', tahBreakdown:'تحصيلي',
    gpaLbl:'المعدل التراكمي (/ 5.0)', qudLbl:'درجة القدرات', tahLbl:'درجة التحصيلي',
    rankLbl:'التقدير',
    availHead:'التخصصات المتاحة', unavailHead:'التخصصات غير المتاحة',
    noAvail:'لا توجد تخصصات متاحة بهذا المعدل.',
    allAvail:'جميع التخصصات في المتناول!',
    restartBtn:'↺ البدء من جديد',
    minLabel:'الحد الأدنى:', ptsLabel:'نقطة',
    gradeSelect:'— التقدير —',
    courseNamePlaceholder:'اسم المادة…',
    hrsPlaceholder:'الساعات',
    langLabel:'English',
  }
};

let lang = localStorage.getItem('ksu-lang') || 'en';

function applyLang() {
  const s = STRINGS[lang];
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
  document.getElementById('langLabel').textContent = s.langLabel;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (s[key] !== undefined) el.textContent = s[key];
  });

  // header
  document.getElementById('hLogoText').textContent = s.hLogoText;
  document.getElementById('hLogoSub').textContent  = s.hLogoSub;

  // rebuild course rows preserving data
  const grid = document.getElementById('coursesGrid');
  if (grid.children.length) {
    const prev = Array.from(grid.querySelectorAll('.course-row')).map(r => ({
      name: r.querySelector('.cname').value,
      hrs:  r.querySelector('.chrs').value,
      grade:r.querySelector('.cgrade').value
    }));
    buildCourseRows(prev.length, prev);
  }

  // re-render results if on page 3
  if (currentPage === 3) renderResults();
}

document.getElementById('langBtn').addEventListener('click', () => {
  lang = lang === 'en' ? 'ar' : 'en';
  localStorage.setItem('ksu-lang', lang);
  applyLang();
});

/* ══════════════════════════════════════════════════
   THEME
══════════════════════════════════════════════════ */
const themeBtn  = document.getElementById('themeBtn');
const iconSun   = document.getElementById('iconSun');
const iconMoon  = document.getElementById('iconMoon');

const savedTheme = localStorage.getItem('ksu-theme') || 'light';
setTheme(savedTheme, false);

function setTheme(t, animate = true) {
  if (!animate) {
    document.documentElement.style.setProperty('--theme-transition', 'none');
  }
  document.documentElement.setAttribute('data-theme', t);
  iconSun.style.display  = t === 'dark' ? 'block' : 'none';
  iconMoon.style.display = t === 'dark' ? 'none'  : 'block';
  localStorage.setItem('ksu-theme', t);
  if (!animate) {
    requestAnimationFrame(() => document.documentElement.style.removeProperty('--theme-transition'));
  }
}

themeBtn.addEventListener('click', () => {
  const cur  = document.documentElement.getAttribute('data-theme');
  setTheme(cur === 'dark' ? 'light' : 'dark');
});

/* ══════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════ */
let currentPage = 0;
let maxReached  = 0;
let state = {};

function showPage(n) {
  document.querySelectorAll('.page').forEach((p, i) => p.classList.toggle('active', i === n));
  document.querySelectorAll('.step-dot').forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i < n) d.classList.add('done');
    if (i === n) d.classList.add('active');
  });
  currentPage = n;
  if (n > maxReached) maxReached = n;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function jumpToStep(n) {
  if (n > maxReached) return; // can't jump ahead
  if (n === currentPage) return;

  // save current step data before jumping away
  if (currentPage === 1) saveGradesState();
  if (currentPage === 2) saveScoresState();

  if (n === 0) { showPage(0); return; }
  if (n === 1) { const cnt = parseInt(document.getElementById('courseCount').value)||6; buildCourseRows(cnt); showPage(1); return; }
  if (n === 2) { showPage(2); return; }
  if (n === 3 && state.courses && state.qudrat !== undefined) { renderResults(); showPage(3); return; }
}

function saveGradesState() {
  const rows = document.querySelectorAll('#coursesGrid .course-row');
  if (!rows.length) return;
  const valid = Array.from(rows).every(r => r.querySelector('.chrs').value && r.querySelector('.cgrade').value);
  if (valid) {
    state.courses = Array.from(rows).map(r => ({
      name:  r.querySelector('.cname').value,
      hrs:   parseFloat(r.querySelector('.chrs').value),
      grade: r.querySelector('.cgrade').value
    }));
  }
}

function saveScoresState() {
  const q = parseFloat(document.getElementById('qudratScore').value);
  const t = parseFloat(document.getElementById('tahsiliScore').value);
  if (!isNaN(q) && q >= 0 && q <= 100) state.qudrat  = q;
  if (!isNaN(t) && t >= 0 && t <= 100) state.tahsili = t;
}

/* ══════════════════════════════════════════════════
   COURSE COUNT
══════════════════════════════════════════════════ */
const countInput = document.getElementById('courseCount');
document.getElementById('decBtn').addEventListener('click', () => {
  const v = parseInt(countInput.value) || 1;
  if (v > 1) countInput.value = v - 1;
});
document.getElementById('incBtn').addEventListener('click', () => {
  const v = parseInt(countInput.value) || 1;
  if (v < 20) countInput.value = v + 1;
});
countInput.addEventListener('input', () => {
  let v = parseInt(countInput.value);
  if (isNaN(v) || v < 1) countInput.value = 1;
  if (v > 20) countInput.value = 20;
});

document.getElementById('goToGrades').addEventListener('click', () => {
  const n = parseInt(countInput.value) || 6;
  buildCourseRows(n);
  showPage(1);
});

/* ══════════════════════════════════════════════════
   BUILD COURSE ROWS
══════════════════════════════════════════════════ */
function buildCourseRows(n, prevData) {
  const s    = STRINGS[lang];
  const grid = document.getElementById('coursesGrid');
  const prev = prevData || Array.from(grid.querySelectorAll('.course-row')).map(r => ({
    name:  r.querySelector('.cname').value,
    hrs:   r.querySelector('.chrs').value,
    grade: r.querySelector('.cgrade').value
  }));
  grid.innerHTML = '';

  // update col headers
  ['colName','colHrs','colGrade'].forEach(key => {
    const els = document.querySelectorAll(`[data-i18n="${key}"]`);
    els.forEach(el => el.textContent = s[key]);
  });

  for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.className = 'course-row';
    const p = prev[i] || {};
    const gradeOpts = Object.keys(GRADE_POINTS).map(g =>
      `<option value="${g}" ${p.grade === g ? 'selected' : ''}>${g}</option>`
    ).join('');
    row.innerHTML = `
      <div class="course-num">${i + 1}</div>
      <input class="cname" type="text" placeholder="${s.courseNamePlaceholder}" value="${p.name || ''}">
      <input class="chrs" type="number" min="1" max="10" placeholder="${s.hrsPlaceholder}" value="${p.hrs || ''}">
      <select class="cgrade">
        <option value="">${s.gradeSelect}</option>
        ${gradeOpts}
      </select>
    `;
    grid.appendChild(row);
  }
}

/* ══════════════════════════════════════════════════
   GRADES → SCORES
══════════════════════════════════════════════════ */
document.getElementById('backToCount').addEventListener('click', () => showPage(0));

document.getElementById('goToScores').addEventListener('click', () => {
  const rows  = document.querySelectorAll('#coursesGrid .course-row');
  const errEl = document.getElementById('gradesErr');
  let valid = true;
  rows.forEach(r => {
    if (!r.querySelector('.chrs').value || !r.querySelector('.cgrade').value) valid = false;
  });
  if (!valid) { errEl.style.display = 'block'; return; }
  errEl.style.display = 'none';
  state.courses = Array.from(rows).map(r => ({
    name:  r.querySelector('.cname').value,
    hrs:   parseFloat(r.querySelector('.chrs').value),
    grade: r.querySelector('.cgrade').value
  }));
  // restore saved scores
  if (state.qudrat  !== undefined) document.getElementById('qudratScore').value  = state.qudrat;
  if (state.tahsili !== undefined) document.getElementById('tahsiliScore').value = state.tahsili;
  showPage(2);
});

/* ══════════════════════════════════════════════════
   SCORES → RESULTS
══════════════════════════════════════════════════ */
document.getElementById('backToGrades').addEventListener('click', () => showPage(1));

document.getElementById('calcBtn').addEventListener('click', () => {
  const q    = parseFloat(document.getElementById('qudratScore').value);
  const t    = parseFloat(document.getElementById('tahsiliScore').value);
  const errEl = document.getElementById('scoresErr');
  if (isNaN(q)||isNaN(t)||q<0||q>100||t<0||t>100) { errEl.style.display='block'; return; }
  errEl.style.display = 'none';
  state.qudrat  = q;
  state.tahsili = t;

  const totalPts = state.courses.reduce((s,c) => s + GRADE_POINTS[c.grade]*c.hrs, 0);
  const totalHrs = state.courses.reduce((s,c) => s + c.hrs, 0);
  state.gpa   = totalPts / totalHrs;
  state.gpaC  = state.gpa * 10;
  state.qudC  = q * 0.25;
  state.tahC  = t * 0.25;
  state.total = state.gpaC + state.qudC + state.tahC;

  renderResults();
  showPage(3);
});

/* ══════════════════════════════════════════════════
   RENDER RESULTS
══════════════════════════════════════════════════ */
function renderResults() {
  if (state.total === undefined) return;
  const s   = STRINGS[lang];
  const col = lang === 'ar' ? 'ar' : 'en';

  document.getElementById('totalScore').textContent = state.total.toFixed(2);
  document.getElementById('gpaComp').textContent    = state.gpaC.toFixed(2);
  document.getElementById('qudComp').textContent    = state.qudC.toFixed(2);
  document.getElementById('tahComp').textContent    = state.tahC.toFixed(2);
  document.getElementById('gpaVal').textContent     = state.gpa.toFixed(2);
  document.getElementById('qudVal').textContent     = state.qudrat.toFixed(1);
  document.getElementById('tahVal').textContent     = state.tahsili.toFixed(1);

  // تحديث نصوص اللغات
  document.querySelector('[data-i18n="gpaComp"]').textContent = s.gpaComp;
  document.querySelector('[data-i18n="qudBreakdown"]').textContent = s.qudBreakdown;
  document.querySelector('[data-i18n="tahBreakdown"]').textContent = s.tahBreakdown;
  document.querySelector('[data-i18n="rankLbl"]').textContent = s.rankLbl;

  // منطق احتساب التقدير (Rank Logic)
  let gpa = state.gpa;
  let rankEn = "";
  let rankAr = "";
  let rankColor = "";

  if (gpa < 2.00) {
    rankEn = "Failed"; rankAr = "متعثر";
    rankColor = "var(--danger)"; // لون أحمر
  } else if (gpa < 3.24) {
    rankEn = "Expected to fail"; rankAr = "متوقع تعثره";
    rankColor = "#eab308"; // لون أصفر
  } else if (gpa < 4.24) {
    rankEn = "Good"; rankAr = "مثابر";
    rankColor = "#f97316"; // لون برتقالي
  } else if (gpa < 4.74) {
    rankEn = "Very Good"; rankAr = "متفوق";
    rankColor = "#8b5cf6"; // لون بنفسجي
  } else {
    rankEn = "Excellent"; rankAr = "متميز";
    rankColor = "var(--success)"; // لون أخضر
  }

  const rankEl = document.getElementById('gpaRank');
  rankEl.textContent = lang === 'ar' ? rankAr : rankEn;
  rankEl.style.color = rankColor;

  const avail   = COLLEGES.filter(c => state.total >= c.min);
  const unavail = COLLEGES.filter(c => state.total <  c.min);

  document.getElementById('availHead').textContent   = `${s.availHead} (${avail.length})`;
  document.getElementById('unavailHead').textContent = `${s.unavailHead} (${unavail.length})`;

  function renderList(items, containerId, mode) {
    const el = document.getElementById(containerId);
    if (!items.length) {
      el.innerHTML = `<div style="font-size:13px;color:var(--text3);padding:10px 0;">${
        mode==='avail' ? s.noAvail : s.allAvail
      }</div>`;
      return;
    }
    el.innerHTML = items.map(c => {
      const diff    = state.total - c.min;
      const absDiff = Math.abs(diff).toFixed(2);
      const badge   = mode === 'avail'
        ? `<span class="badge badge-green">+${absDiff} ${s.ptsLabel}</span>`
        : `<span class="badge badge-red">−${absDiff} ${s.ptsLabel}</span>`;
      return `
        <div class="college-item ${mode==='avail'?'':'unavail'}">
          <div class="college-name">${c[col]}</div>
          <div class="college-right">
            <span class="college-min">${s.minLabel} ${c.min.toFixed(2)}</span>
            ${badge}
          </div>
        </div>`;
    }).join('');
  }
  renderList(avail,   'availList',   'avail');
  renderList(unavail, 'unavailList', 'unavail');
}

/* ══════════════════════════════════════════════════
   RESTART
══════════════════════════════════════════════════ */
document.getElementById('restartBtn').addEventListener('click', () => {
  state = {}; maxReached = 0;
  document.getElementById('courseCount').value   = 6;
  document.getElementById('qudratScore').value   = '';
  document.getElementById('tahsiliScore').value  = '';
  document.getElementById('coursesGrid').innerHTML = '';
  showPage(0);
});

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
applyLang();