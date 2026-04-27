export const CATEGORIES = [
  {
    id: 'stocks', icon: '📈', navLabel: '📈 Stocks',
    title: 'Stocks & Equities',
    subtitle: 'Growth-oriented ownership stakes in public companies',
    color: '#4f8ef7', rgb: '79,142,247',
    cards: [
      {
        tag: 'Core Strategy', title: 'Value Investing (Buffett-Style)',
        body: 'Buy stocks trading below intrinsic value and hold for 5+ years. Focus on companies with durable competitive moats, strong balance sheets, and consistent earnings.',
        bullets: ['Target P/E below industry average', 'Look for strong free cash flow', 'Prefer predictable, recurring revenue'],
        risk: 40, returnPct: 75,
      },
      {
        tag: '2026 Theme', title: 'AI & Technology Growth',
        body: 'AI adoption is a critical driver of stock performance in 2026. Above-trend growth and accelerating productivity favor selective risk-taking in high-quality AI infrastructure plays.',
        bullets: ['AI infrastructure & data centers', 'Hyperscaler companies (cloud providers)', 'Enterprise software with AI integration'],
        risk: 70, returnPct: 90,
      },
      {
        tag: 'Wealth Strategy', title: 'Ultra-Wealthy Portfolio Tactics',
        body: 'Long-term thinking, disciplined diversification, and position sizing are tactics used by the ultra-wealthy. Focus on high-probability outcomes, not hot trades.',
        bullets: ['Size positions based on conviction', 'Diversify across sectors & geographies', 'Resist chasing short-term momentum'],
        statVal: '5–10 yrs', statDesc: 'Recommended minimum holding horizon for core equity positions',
      },
    ],
    extraWide: {
      tag: '2026 Market Outlook', title: 'Key Macro Themes Driving Equities',
      col1: {
        intro: 'BlackRock and Morgan Stanley highlight four forces shaping equity markets in 2026:',
        items: [
          { label: 'AI adoption', detail: ' — productivity-driven earnings upside' },
          { label: 'Energy demand', detail: ' — data centers & electrification' },
          { label: 'Geopolitical shifts', detail: ' — reshoring & supply-chain diversification' },
          { label: 'Demographic trends', detail: ' — aging populations, healthcare spending' },
        ],
      },
      col2: {
        intro: 'Positioning tips from major institutions:',
        items: [
          'Favor quality over speculative growth',
          'Above-trend growth & easing policy supports risk assets',
          'Use volatility as an entry opportunity, not an exit signal',
          'Sustainable / ESG assets gaining mainstream allocation',
        ],
      },
    },
    top5: {
      col3: 'Key Metric', col4: 'Why Buy',
      rows: [
        { ticker: 'NVDA', name: 'Nvidia', sub: 'AI & GPU Computing', metric: '#1 AI Chip', note: 'Dominant GPU provider powering AI training & inference worldwide' },
        { ticker: 'MSFT', name: 'Microsoft', sub: 'Cloud & AI Software', metric: 'Near Decade-Low P/E', note: 'Near decade-low valuation with deep AI integration across all product lines' },
        { ticker: 'TSM', name: 'Taiwan Semiconductor', sub: 'Chip Manufacturing', metric: "World's Best Tech", note: "World's largest chip foundry with the most advanced semiconductor technology" },
        { ticker: 'TTD', name: 'The Trade Desk', sub: 'Ad Technology', metric: '+18% Revenue Growth', note: 'Analysts expect 18% revenue growth in 2026 as digital ad demand accelerates' },
        { ticker: 'MELI', name: 'MercadoLibre', sub: 'Latin America E-Commerce', metric: 'EM Diversifier', note: "Dominant e-commerce & fintech platform across Latin America's growing middle class" },
      ],
    },
  },

  {
    id: 'realestate', icon: '🏠', navLabel: '🏠 Real Estate',
    title: 'Real Estate',
    subtitle: 'Tangible assets generating rental income & long-term appreciation',
    color: '#34d399', rgb: '52,211,153',
    cards: [
      {
        tag: 'Core Strategy', title: 'Buy & Hold Rental Properties',
        body: 'Acquire properties in sub-markets with steady job growth, landlord-friendly regulations, and quality-of-life anchors (hospitals, universities) for long-term cash flow.',
        bullets: ['Target markets: Atlanta, Dallas-Fort Worth, Raleigh', 'Cleveland: highest rent yield ratio in any US metro', 'Prioritize cash flow over appreciation in 2026'],
        risk: 35, returnPct: 65,
      },
      {
        tag: 'Active Strategy', title: 'BRRRR Method',
        bodyHighlight: 'Buy · Rehab · Rent · Refinance · Repeat',
        body: '— purchase below stabilized value, renovate, place tenants, then refinance at the new appraised value to recycle capital.',
        bullets: ['Forces equity creation through rehab', 'Refinancing returns initial capital for next deal', 'Works best in markets with value-add inventory'],
        risk: 60, returnPct: 85,
      },
      {
        tag: 'Portfolio', title: 'Diversified RE Portfolio',
        body: 'Spread investments across asset types to ensure stability. Lower rates in 2026 are driving a real estate recovery, per Morgan Stanley.',
        bullets: ['Multifamily — steady demand, low vacancy', 'Build-to-Rent (BTR) — growing asset class', 'Industrial / logistics — e-commerce tailwinds', 'Select retail in high-traffic corridors'],
      },
      {
        tag: 'Key Principle', title: 'Cash Flow Over Appreciation',
        body: 'With rates still elevated, deals must be built around stable income and realistic assumptions. Disciplined underwriting and adequate reserves matter more than ever.',
        statVal: '#1 Market', statDesc: 'Cleveland — highest rent yield ratio & best affordability of any major US metro for 2026',
      },
    ],
    top5: {
      col3: 'Dividend Yield', col4: 'Why Buy',
      rows: [
        { ticker: 'O',   name: 'Realty Income',        sub: 'Triple-Net Retail REIT',       metric: '5.6% — Monthly', note: 'Largest triple-net REIT in the US; pays dividends monthly — rare income reliability' },
        { ticker: 'AMT', name: 'American Tower',        sub: 'Communications Infrastructure', metric: '~3.1% Yield',    note: "World's largest independent wireless tower portfolio; 5G & telecom demand" },
        { ticker: 'EQR', name: 'Equity Residential',    sub: 'Multifamily / Apartments',      metric: '~4.0% Yield',    note: 'Morningstar Buy rating with $80 fair value; benefits from housing undersupply' },
        { ticker: 'PK',  name: 'Park Hotels & Resorts', sub: 'Luxury Hotel REIT',             metric: '9.62% Yield',    note: '47% below fair value estimate of $19.50/share; deep value in hospitality' },
        { ticker: 'PEB', name: 'Pebblebrook Hotel',     sub: 'Boutique Hotels',               metric: '~5.5% Yield',    note: 'Largest US boutique lodging REIT; 44 properties in premium urban gateway markets' },
      ],
    },
  },

  {
    id: 'bonds', icon: '📜', navLabel: '📜 Bonds',
    title: 'Bonds & Fixed Income',
    subtitle: 'Stable income with capital preservation',
    color: '#fbbf24', rgb: '251,191,36',
    cards: [
      {
        tag: 'Core Positioning', title: 'Intermediate-Duration Investment Grade',
        body: 'Charles Schwab & Vanguard recommend keeping duration in the 5–10 year range, predominantly investment-grade credit, as rates normalize in 2026.',
        bullets: ['Investment-grade corporates at 4–5.5% coupons', 'BBB-rated bonds offering income with low default risk', 'Intermediate Treasuries — attractive on declining rate path'],
        risk: 25, returnPct: 55, returnLabel: 'Yield',
      },
      {
        tag: 'Tax-Advantaged', title: 'Municipal Bonds',
        body: 'Muni bonds offer a compelling after-tax yield for investors in higher tax brackets. Stable credit quality and attractive yields heading into 2026.',
        bullets: ['Federal (and often state) tax-exempt income', 'Strong credit fundamentals post-pandemic', 'Particularly valuable in top marginal brackets'],
        statVal: '~3.5–4.5%', statDesc: 'Tax-equivalent yield for top-bracket investors in quality munis',
      },
      {
        tag: 'Inflation Hedge', title: 'TIPS — Inflation-Protected',
        body: 'Treasury Inflation-Protected Securities adjust principal with CPI, making them a standout opportunity when inflation uncertainty remains elevated.',
        bullets: ['Principal rises with CPI automatically', 'Real yield remains positive in 2026', 'Ideal for retirement portfolios & conservative allocators'],
        risk: 15, returnPct: 95, returnLabel: 'Inflation Protection',
      },
      {
        tag: 'Higher Yield', title: 'High-Yield & Emerging Market Bonds',
        body: "PineBridge & VanEck note that high-yield all-in yields adequately compensate for credit risk. EM debt was 2025's strongest fixed-income performer.",
        bullets: ['High-yield: moderate default expectations in 2026', 'CLOs — income without excessive duration risk', 'EM bonds: strong fundamentals, underpinned by solid growth'],
        risk: 65, returnPct: 80, returnLabel: 'Yield',
      },
    ],
    top5: {
      col3: 'Yield / ER', col4: 'Why Buy',
      rows: [
        { ticker: 'BND',  name: 'Vanguard Total Bond Market ETF',  sub: 'Broad US Investment-Grade', metric: 'ER: 0.03%',      note: 'Entire US investment-grade bond market in one fund at an ultra-low 0.03% expense ratio' },
        { ticker: 'AGG',  name: 'iShares Core US Aggregate',        sub: 'Core Bond — Intermediate',  metric: 'ER: 0.03%',      note: 'Benchmark bond index: government, corporate, and mortgage-backed securities blended' },
        { ticker: 'BINC', name: 'iShares Flexible Income Active',   sub: 'Active Multi-Sector Bond',  metric: '$16B AUM',       note: 'Most popular active bond ETF of 2025-2026; flexible mandate captures best opportunities' },
        { ticker: 'BSV',  name: 'Vanguard Short-Term Corp Bond',    sub: 'Short Duration (1–5 yr)',   metric: '~4.2% Yield',    note: '4.20% yield with minimal interest-rate sensitivity; ideal for capital preservation' },
        { ticker: 'VTEB', name: 'Vanguard Tax-Exempt Bond ETF',     sub: 'Municipal Bonds',           metric: 'Tax-Free Yield', note: 'Broad muni bond exposure; compelling after-tax yield for high-bracket investors' },
      ],
    },
  },

  {
    id: 'crypto', icon: '🔷', navLabel: '🔷 Crypto',
    title: 'Cryptocurrency & Digital Assets',
    subtitle: 'High-risk, high-reward digital asset class',
    color: '#a78bfa', rgb: '167,139,250',
    cards: [
      {
        tag: 'Core Holdings', title: 'Bitcoin & Ethereum',
        body: 'BTC and ETH are treated as core holdings for their liquidity and widespread adoption. Bitcoin remains the benchmark entry point for new investors.',
        bullets: ['Largest market caps — most liquid assets', 'ETF spot products available on major brokerages', 'Long-term store of value narrative (BTC)'],
        risk: 85, returnPct: 95,
      },
      {
        tag: 'Layer-1 Alternatives', title: 'Solana, Avalanche & Others',
        body: "Solana (SOL) is Ethereum's biggest competitor, delivering high transaction speed, scalability, and low cost. AVAX, XRP, and ADA offer differentiated bets.",
        bullets: ['Solana — high TPS, thriving DeFi/NFT ecosystem', 'XRP — cross-border payment focus', 'ADA, AVAX, NEAR — smart contract platforms'],
        risk: 90, returnPct: 98,
      },
      {
        tag: 'Risk Management', title: 'Allocation & Time Horizon Strategy',
        body: 'Match crypto allocations to your time horizon. Diversification and ongoing research are essential — keep conviction aligned with clear risk controls.',
        bullets: ['Never allocate more than you can afford to lose', 'Core/satellite: BTC/ETH core + high-risk altcoin satellite', 'Dollar-cost average to smooth volatility entry', 'Consider gold-backed stablecoins as a hedge'],
      },
    ],
    top5: {
      col3: 'Suggested Allocation', col4: 'Why Hold',
      rows: [
        { ticker: 'BTC',  name: 'Bitcoin',   sub: 'Digital Gold / Store of Value', metric: '35% of Crypto', note: 'Largest market cap, highest liquidity; institutional ETF adoption driving mainstream demand' },
        { ticker: 'ETH',  name: 'Ethereum',  sub: 'Smart Contract Platform',       metric: '25% of Crypto', note: 'Unmatched developer ecosystem; leads DeFi, tokenized assets, and Layer-2 scaling' },
        { ticker: 'SOL',  name: 'Solana',    sub: 'High-Speed Blockchain',         metric: '15% of Crypto', note: 'Built reputation for speed and low fees; go-to chain for consumer apps and DeFi' },
        { ticker: 'LINK', name: 'Chainlink', sub: 'Blockchain Oracle Network',     metric: '15% of Crypto', note: 'Critical infrastructure for DeFi and real-world asset tokenization' },
        { ticker: 'BNB',  name: 'BNB',       sub: 'Exchange Ecosystem Token',      metric: '10% of Crypto', note: 'Strong exchange ecosystem integration; consistent demand from Binance platform usage' },
      ],
    },
  },

  {
    id: 'commodities', icon: '🥇', navLabel: '🥇 Commodities',
    title: 'Commodities & Precious Metals',
    subtitle: 'Tangible stores of value and inflation hedges',
    color: '#fb923c', rgb: '251,146,60',
    cards: [
      {
        tag: 'Bullish Outlook', title: 'Gold — Institutional Bull Case',
        body: 'J.P. Morgan forecasts gold reaching $5,000/oz by year-end 2026. Yardeni Research targets $6,000. Central bank demand averages 585 tonnes per quarter.',
        bullets: ['Geopolitical uncertainty driving safe-haven demand', 'Emerging market central banks buying aggressively', 'Low correlation to equities (0.1–0.3 vs S&P 500)'],
        statVal: '$5,000+', statDesc: 'J.P. Morgan gold price target by Q4 2026',
      },
      {
        tag: 'Access Methods', title: 'How to Invest in Gold',
        body: 'Investors must decide between direct physical exposure and financial instruments. Each has distinct risk/cost trade-offs.',
        bullets: [
          { label: 'Physical', detail: ' — coins, bars, bullion (storage & insurance costs)' },
          { label: 'Gold ETFs', detail: ' — GLD, IAU track spot price without storage' },
          { label: 'Mining stocks', detail: ' — GDX, GDXJ offer operating leverage to gold' },
          { label: 'Gold IRA', detail: ' — tax-advantaged retirement exposure' },
        ],
        risk: 45, returnPct: 88, returnLabel: 'Inflation Hedge',
      },
      {
        tag: 'Portfolio Role', title: 'Silver & Copper — Strategic Metals',
        body: 'Silver offers dual demand from investment and industrial use. Copper is a global growth barometer. Both benefit from the energy transition.',
        bullets: ['Silver: monetary store + solar panel demand', 'Copper: EV batteries, power grids, data centers', 'Sprott recommends 10–15% precious metals in portfolios'],
        risk: 55, returnPct: 72,
      },
    ],
    top5: {
      col3: 'AUM / Expense Ratio', col4: 'Why Buy',
      rows: [
        { ticker: 'GLD',  name: 'SPDR Gold Shares',         sub: 'Physical Gold ETF',      metric: '$176B / 0.40%', note: "World's largest gold ETF; deepest options chain & tightest spreads — preferred by institutions" },
        { ticker: 'IAU',  name: 'iShares Gold Trust',        sub: 'Physical Gold ETF',      metric: '$71B / 0.25%',  note: 'Best balance of liquidity and low cost for long-term gold investors' },
        { ticker: 'GLDM', name: 'SPDR Gold MiniShares',      sub: 'Low-Cost Physical Gold', metric: 'ER: 0.10%',     note: 'Lowest-cost physical gold ETF at just 0.10%; ideal for cost-conscious holders' },
        { ticker: 'GDX',  name: 'VanEck Gold Miners ETF',   sub: 'Gold Mining Stocks',     metric: '$33B / 0.51%',  note: 'Operating leverage to gold price through 63 top global producers' },
        { ticker: 'GDXJ', name: 'VanEck Junior Gold Miners', sub: 'Small-Cap Miners',       metric: '$10B / 0.51%',  note: 'High upside from small & early-stage miners; higher risk/reward than GDX' },
      ],
    },
  },

  {
    id: 'etfs', icon: '📊', navLabel: '📊 ETFs',
    title: 'ETFs & Index Funds',
    subtitle: 'Low-cost, diversified exposure to every asset class',
    color: '#f472b6', rgb: '244,114,182',
    cards: [
      {
        tag: 'Broad Market', title: 'Equal-Weight S&P 500 (RSP)',
        body: 'As market performance broadens beyond mega-cap tech, the Invesco S&P 500 Equal Weight ETF benefits from wider participation across all 500 names.',
        bullets: ['Equal exposure across all S&P 500 constituents', 'Natural rebalancing — sells high, buys low', 'Reduces mega-cap concentration risk'],
        risk: 40, returnPct: 92, returnLabel: 'Diversification',
      },
      {
        tag: 'Income', title: 'Dividend ETFs (SCHD)',
        body: 'The Schwab U.S. Dividend Equity ETF tracks the Dow Jones Dividend 100 Index — screening for dividend yield, five-year growth rate, and balance-sheet quality.',
        bullets: ['100 highest-quality dividend payers', 'Screens for consistent dividend growth', 'Low expense ratio — long-term compounding'],
        statVal: '~3.5%', statDesc: 'Trailing dividend yield — plus long-term capital appreciation',
      },
      {
        tag: 'Thematic', title: 'AI & Clean Energy Sector ETFs',
        body: "Position for 2026's dominant themes: AI infrastructure spending and renewables acceleration. Sector ETFs provide concentrated exposure without single-stock risk.",
        bullets: ['AI/Tech ETFs — infrastructure, semiconductors, software', 'Clean energy ETFs — solar, wind, grid modernization', 'Emerging markets ETFs — AI & growth beneficiaries'],
        risk: 65, returnPct: 88,
      },
      {
        tag: 'Fixed Income', title: 'Bond ETFs — Riding Rate Normalization',
        body: 'Bond ETF assets are now at 29.6% of all bond fund assets. Active bond ETFs are outpacing passive, capturing 90% of March 2026 flows.',
        bullets: ['Intermediate Treasury ETFs — rate cut beneficiaries', 'Investment-grade corporate bond ETFs', 'Muni bond ETFs for tax-sensitive investors'],
        risk: 25, returnPct: 60, returnLabel: 'Income',
      },
    ],
    extraWide: {
      tag: '2026 Shift', title: 'Key ETF Market Trend: Value Over Growth',
      col1: {
        intro: 'Morningstar and iShares data shows a rare 2026 market rotation:',
        items: [
          'Value ETFs seeing more inflows than growth — first time in 5 years',
          'Energy ETFs moved to top of leaderboard for first time in years',
          'Active ETFs outpacing index products in share of new flows',
          'International & EM ETFs gaining as USD weakens',
        ],
      },
      col2: {
        intro: 'Institutional allocation shifts to watch:',
        items: [
          'BlackRock highlights EM as key AI momentum beneficiary',
          'Momentum factor ETFs well-suited to high-dispersion environments',
          '149 new bond ETFs launched in 2025 — fixed income going ETF-first',
          'Sector rotation: energy > technology for the first time in years',
        ],
      },
    },
    top5: {
      col3: 'Key Stat', col4: 'Why Buy',
      rows: [
        { ticker: 'VOO',  name: 'Vanguard S&P 500 ETF',          sub: 'Broad US Large-Cap',     metric: '+85.94% (3yr)',         note: 'Ultimate diversification across all S&P 500 sectors; low cost with steady long-term returns' },
        { ticker: 'QQQ',  name: 'Invesco QQQ Trust',              sub: 'Nasdaq-100 Growth',      metric: 'Top 100 Nasdaq',        note: 'Concentrated bet on 100 largest non-financial Nasdaq companies; top AI/tech exposure' },
        { ticker: 'VGT',  name: 'Vanguard Info Technology ETF',   sub: 'Sector — Technology',    metric: '14.1% CAGR (20yr)',     note: '14.1% CAGR since 2004 vs 10.4% for S&P 500; Apple, Microsoft, Nvidia at 0.10% ER' },
        { ticker: 'SCHD', name: 'Schwab US Dividend Equity ETF',  sub: 'Dividend Income',        metric: '~3.5% Yield',           note: 'Top 100 dividend-quality stocks screened for yield & 5-yr growth rate; income + appreciation' },
        { ticker: 'VT',   name: 'Vanguard Total World Stock ETF', sub: 'Global All-Cap',         metric: '~10,000 stocks / 0.06%', note: 'Entire global stock market in one fund at 0.06%; Morningstar Gold Medal' },
      ],
    },
  },
];

export const SOURCES = [
  { href: 'https://www.blackrock.com/us/financial-professionals/insights/investing-in-2026', label: 'BlackRock — Investing in 2026', cat: 'stocks' },
  { href: 'https://www.morningstar.com/portfolios/4-investing-ideas-2026-great-money-minds', label: 'Morningstar — 4 Investing Ideas for 2026', cat: 'stocks' },
  { href: 'https://www.morganstanley.com/insights/articles/investment-outlook-shaping-markets-2026', label: 'Morgan Stanley — 2026 Market Outlook', cat: 'stocks' },
  { href: 'https://www.nerdwallet.com/investing/learn/the-best-investments-right-now', label: 'NerdWallet — 10 Best Investments 2026', cat: 'stocks' },
  { href: 'https://www.bankrate.com/investing/best-long-term-investments/', label: 'Bankrate — Best Long-Term Investments', cat: 'stocks' },
  { href: 'https://www.fidelity.com/learning-center/smart-money/what-to-invest-in', label: 'Fidelity — Top Investments 2026', cat: 'stocks' },
  { href: 'https://vikingcapllc.com/real-estate-portfolio-2026/', label: 'Viking Capital — Balanced RE Portfolio', cat: 'realestate' },
  { href: 'https://www.morganstanley.com/insights/articles/real-estate-market-outlook-2026-recovery', label: 'Morgan Stanley — RE Outlook 2026', cat: 'realestate' },
  { href: 'https://immersitech.com/blog/top-5-real-estate-investment-strategies-for-2026', label: 'Immersitech — Top 5 RE Strategies', cat: 'realestate' },
  { href: 'https://www.schwab.com/learn/story/fixed-income-outlook', label: 'Charles Schwab — Fixed Income Outlook', cat: 'bonds' },
  { href: 'https://www.fidelity.com/learning-center/trading-investing/fixed-income-outlook', label: 'Fidelity — Bonds Outlook 2026', cat: 'bonds' },
  { href: 'https://www.pinebridge.com/en/insights/2026-fixed-income-outlook', label: 'PineBridge — Fixed Income 2026', cat: 'bonds' },
  { href: 'https://coinledger.io/learn/best-long-term-crypto', label: 'CoinLedger — Best Long-Term Crypto', cat: 'crypto' },
  { href: 'https://www.fool.com/investing/2026/01/29/thinking-about-investing-in-crypto-in-2026-here-ar/', label: 'Motley Fool — Crypto Picks 2026', cat: 'crypto' },
  { href: 'https://www.jpmorgan.com/insights/global-research/commodities/gold-prices', label: 'J.P. Morgan — Gold Price Predictions', cat: 'commodities' },
  { href: 'https://www.canadianminingreport.com/blog/2026-strategic-metals-investing-guide-for-long-term-investors', label: 'Strategic Metals Guide 2026', cat: 'commodities' },
  { href: 'https://www.vaneck.com/us/en/blogs/gold-investing/gold-investing-outlook/', label: 'VanEck — Gold Investing Outlook', cat: 'commodities' },
  { href: 'https://www.morningstar.com/funds/6-etf-investing-predictions-2026', label: 'Morningstar — 6 ETF Predictions 2026', cat: 'etfs' },
  { href: 'https://www.bankrate.com/investing/best-etfs/', label: 'Bankrate — Best ETFs 2026', cat: 'etfs' },
  { href: 'https://www.invesco.com/us/en/insights/etf-ideas-key-2026-investment-themes.html', label: 'Invesco — ETF Ideas for 2026 Themes', cat: 'etfs' },
];
