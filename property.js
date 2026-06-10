const tabData = {
    overview: {
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80',
        badge: 'LEED Platinum',
        title: 'Harbor View Tower',
        subtitle: 'San Francisco, CA · 42,800 sq ft · Mixed-use commercial',
        stats: [
            { value: '92', label: 'Sustainability score' },
            { value: '−38%', label: 'vs. baseline' },
            { value: 'A+', label: 'Energy rating' }
        ],
        description: 'A waterfront mixed-use tower with integrated solar, greywater recycling, and smart HVAC optimization across 12 floors of office and retail space.'
    },
    energy: {
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80',
        badge: 'Net-positive ready',
        title: 'Energy performance',
        subtitle: '1.2 MWh monthly · 62% renewable · 88% efficiency score',
        stats: [
            { value: '62%', label: 'Renewable share' },
            { value: '−24%', label: 'YoY consumption' },
            { value: '18 kW', label: 'Solar capacity' }
        ],
        description: 'Rooftop solar arrays and battery storage offset peak demand. Smart meters and AI-driven HVAC tuning reduced consumption by 12% this quarter.'
    },
    carbon: {
        image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b0?w=1400&q=80',
        badge: 'Carbon negative trajectory',
        title: 'Carbon footprint',
        subtitle: '142 tCO₂e annual · −38% vs. industry baseline',
        stats: [
            { value: '142', label: 'tCO₂e / year' },
            { value: '−38%', label: 'Below baseline' },
            { value: '2030', label: 'Net-zero target' }
        ],
        description: 'Scope 1 and 2 emissions tracked in real time. Offset programs and on-site generation put the property on a path to net-zero by 2030.'
    },
    water: {
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1400&q=80',
        badge: 'Water stewardship',
        title: 'Water management',
        subtitle: '45% recycled · Low-flow fixtures · Rainwater capture',
        stats: [
            { value: '45%', label: 'Water recycled' },
            { value: '−31%', label: 'Usage vs. baseline' },
            { value: '12k', label: 'Gallons captured / mo' }
        ],
        description: 'Greywater recycling feeds irrigation and cooling systems. Rainwater harvesting and low-flow fixtures cut municipal water demand by nearly a third.'
    },
    certifications: {
        image: 'https://images.unsplash.com/photo-1518005028251-37900150dfca?w=1400&q=80',
        badge: '5 active certifications',
        title: 'Certifications & compliance',
        subtitle: 'LEED Platinum · ENERGY STAR · WELL Gold',
        stats: [
            { value: 'LEED', label: 'Platinum' },
            { value: 'WELL', label: 'Gold certified' },
            { value: '98%', label: 'Compliance score' }
        ],
        description: 'Maintains LEED Platinum, ENERGY STAR, and WELL Gold certifications. Annual audits confirm compliance across energy, air quality, and occupant wellness standards.'
    }
};

const heroBg = document.getElementById('hero-bg');
const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');
const heroStats = document.getElementById('hero-stats');
const heroDescription = document.getElementById('hero-description');
const heroContent = document.querySelector('.hero-content');
const heroBadge = document.querySelector('.hero-badge');
const tabCards = document.querySelectorAll('.tab-card');

function renderStats(stats) {
    return stats.map((stat, index) => {
        const divider = index < stats.length - 1 ? '<div class="stat-divider"></div>' : '';
        return `
            <div class="stat">
                <span class="stat-value">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
            ${divider}
        `;
    }).join('');
}

function switchTab(tabKey) {
    const data = tabData[tabKey];
    if (!data) return;

    heroContent.classList.add('is-transitioning');

    setTimeout(() => {
        heroBg.style.backgroundImage = `url('${data.image}')`;
        heroBadge.textContent = '';
        heroBadge.innerHTML = `<span class="badge-dot"></span>${data.badge}`;
        heroTitle.textContent = data.title;
        heroSubtitle.textContent = data.subtitle;
        heroStats.innerHTML = renderStats(data.stats);
        heroDescription.textContent = data.description;

        heroContent.classList.remove('is-transitioning');
    }, 300);

    tabCards.forEach(card => {
        const isActive = card.dataset.tab === tabKey;
        card.classList.toggle('active', isActive);
        card.setAttribute('aria-pressed', isActive);
    });
}

tabCards.forEach(card => {
    card.addEventListener('click', () => switchTab(card.dataset.tab));
});

switchTab('overview');
