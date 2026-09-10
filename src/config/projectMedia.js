/**
 * =========================================================================
 * ANTELIA GROVES — CENTRALIZED PROJECT MEDIA REGISTRY
 * =========================================================================
 * 
 * Future-Ready Media System:
 * Initially uses photorealistic architectural visualizations (CGI).
 * When real drone photos, construction photos, or 4K videos become available,
 * simply populate `realPhotoUrl` or `videoUrl` on any item.
 * 
 * The SmartMedia engine will automatically detect and prioritize:
 *   1. videoUrl (if present, renders auto-playing muted HTML5 video)
 *   2. realPhotoUrl (if present, renders verified photograph with badge)
 *   3. url (default photorealistic CGI with architectural visualization badge)
 * 
 * All animations, layouts, and aspect ratios survive media replacement!
 */

export const PROJECT_MEDIA = {
  // =========================================================================
  // 1. HERO SECTION VISUALS
  // =========================================================================
  hero: [
    {
      key: 'HERO_VILLA_EXTERIOR',
      title: 'CONTEMPORARY VILLA FACADE',
      subtitle: 'Travertine Stone, Teak Louvers & Landscaped Entrance',
      type: 'cgi',
      url: '/images/hero/01_hero_villa_exterior.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      posterUrl: '/images/hero/01_hero_villa_exterior.jpg',
      alt: 'Antelia Groves contemporary luxury villa exterior',
      caption: 'Limestone piers, teak privacy louvers and landscaped entrance',
    },
    {
      key: 'HERO_LIVING_PAVILION',
      title: 'DOUBLE-HEIGHT LIVING PAVILION',
      subtitle: '18-Foot Soaring Volume Opening to Courtyard Pool',
      type: 'cgi',
      url: '/images/hero/02_hero_living_pavilion.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      posterUrl: '/images/hero/02_hero_living_pavilion.jpg',
      alt: 'Double-height luxury living pavilion',
      caption: '18-foot soaring volume seamlessly opening to private garden',
    },
    {
      key: 'HERO_COURTYARD_DINING',
      title: 'COURTYARD DINING & DECK',
      subtitle: 'Indoor-Outdoor Spatial Entertaining Harmony',
      type: 'cgi',
      url: '/images/hero/03_hero_dining_courtyard.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      posterUrl: '/images/hero/03_hero_dining_courtyard.jpg',
      alt: 'Split-level courtyard dining space',
      caption: 'Articulated dining platform connecting to terrace garden',
    },
    {
      key: 'HERO_SIGNATURE_CLUBHOUSE',
      title: '15,000 SQ.FT RESORT CLUBHOUSE',
      subtitle: '25-Meter Heated Lap Pool, Amphitheater & Wellness',
      type: 'cgi',
      url: '/images/hero/04_hero_clubhouse_pool.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      posterUrl: '/images/hero/04_hero_clubhouse_pool.jpg',
      alt: 'Clubhouse pavilion and azure lap pool',
      caption: '25-meter heated lap pool and wellness sanctuary',
    },
    {
      key: 'HERO_SUNSET_ENCLAVE',
      title: 'SUNSET GARDEN RESIDENCES',
      subtitle: 'Split-Level Rooftop Terraces Framing Linear Green Park',
      type: 'cgi',
      url: '/images/hero/05_hero_sunset_enclave.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      posterUrl: '/images/hero/05_hero_sunset_enclave.jpg',
      alt: 'Sunset garden villa enclave',
      caption: 'West-facing luxury residences overlooking flowering nature trails',
    },
    {
      key: 'HERO_AERIAL_MASTERPLAN',
      title: '10-ACRE AERIAL SANCTUARY',
      subtitle: 'Low-Density Gated Villa Masterplan with 40ft Boulevards',
      type: 'cgi',
      url: '/images/hero/06_hero_aerial_sanctuary.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      posterUrl: '/images/hero/06_hero_aerial_sanctuary.jpg',
      alt: '10-acre masterplan aerial view at golden hour',
      caption: '189 bespoke residences set amidst 10 contiguous acres',
    },
  ],

  // =========================================================================
  // 2. 5-STAGE DEVELOPMENT JOURNEY
  // =========================================================================
  journeyStages: [
    {
      id: 1,
      stageNumber: "01",
      key: "LAND_STAGE_01",
      title: "THE RAW LAND & TOPOGRAPHICAL SURVEY",
      subtitle: "10 ACRES OF UNTOUCHED TERRAIN & SITE MAPPING",
      headline: "STEP 01 — BASELINE LAND SURVEY & ECOLOGICAL CATALOGING",
      phaseTime: "MONTH 01–02",
      videoTimestamp: "0:00 / 0:15",
      desc: "10 contiguous acres of natural red soil terrain with undulating natural gradients and dense native tree canopies. Before moving a single piece of earth, certified geotechnical engineers and survey crews mapped the exact terrain contours and cataloged all heritage flora.",
      url: "/images/journey/01_aerial_raw_land.jpg",
      secondaryUrl: "/images/journey/02_ground_raw_land.jpg",
      angles: [
        { label: "AERIAL DRONE SURVEY", url: "/images/journey/01_aerial_raw_land.jpg", desc: "Topographic contour mapping from 120m altitude" },
        { label: "GROUND LEVEL BASELINE", url: "/images/journey/02_ground_raw_land.jpg", desc: "Red soil gradient and wild foliage inspection" }
      ],
      personnel: [
        { role: "Chief Land Surveyor", badge: "LICENSED GIS", task: "Boundary pegging with sub-centimeter GPS accuracy" },
        { role: "Geotechnical Engineers", badge: "SOIL SCIENTISTS", task: "48 borehole core samples to test safe bearing capacity (250 kN/m²)" },
        { role: "Botanical Conservationists", badge: "ECOLOGISTS", task: "Tagging 1,200+ mature neem & eucalyptus trees for 100% preservation" },
        { role: "Civil Project Directors", badge: "LEAD ARCHITECTS", task: "Establishing master benchmark coordinates (12°47'28\"N 77°41'12\"E)" }
      ],
      machinery: [
        { name: "Leica TS16 Total Station", category: "OPTICAL LASER", note: "Sub-millimeter angular measurement" },
        { name: "Trimble R12i RTK GNSS Rover", category: "SATELLITE GPS", note: "Centimeter precision boundary pegging" },
        { name: "DJI Matrice 300 RTK Drone", category: "AERIAL PHOTOGRAMMETRY", note: "3D digital elevation model (DEM)" },
        { name: "Hydraulic Core Drilling Rig", category: "GEOTECHNICAL", note: "Extracting 15m deep rock & soil samples" }
      ],
      actions: [
        "48 deep borehole soil tests verified rock stratum depth and safe bearing capacity",
        "100% of mature specimen trees tagged with brass RFID seals for green buffer zones",
        "2,780 linear feet of outer perimeter boundary pegged and legally demarcated",
        "Digital 3D elevation terrain model created for zero-waste cut-and-fill grading"
      ],
      stats: [
        { label: "PARCEL AREA", value: "10 Contiguous Acres" },
        { label: "TREES CATALOGED", value: "1,240 Specimen Trees" },
        { label: "SOIL BEARING CAPACITY", value: "250 kN/m² Verified" },
        { label: "PERIMETER BOUNDARY", value: "2,780 Linear Feet" }
      ]
    },
    {
      id: 2,
      stageNumber: "02",
      key: "CLEARING_STAGE_02",
      title: "SELECTIVE CLEARING & PRECISION EARTHWORK",
      subtitle: "ECO-FRIENDLY CLEARING & BUILDING PLATFORM GRADING",
      headline: "STEP 02 — CONTROLLED CLEARING & CUT-AND-FILL TERRACING",
      phaseTime: "MONTH 03–04",
      videoTimestamp: "0:15 / 0:30",
      desc: "Heavy machinery arrived on site to shape the land. Wild brambles and invasive underbrush were cleared with surgical care, while all cataloged heritage trees were shielded behind protective barriers. Hydraulic excavators and bulldozers leveled 3 gentle terraces for natural rainwater drainage.",
      url: "/images/journey/04_earthmoving_machinery.jpg",
      secondaryUrl: "/images/journey/03_vegetation_clearing.jpg",
      angles: [
        { label: "EARTHMOVING FLEET", url: "/images/journey/04_earthmoving_machinery.jpg", desc: "Heavy excavators, bulldozers and tippers shaping terraces" },
        { label: "CONTROLLED CLEARING", url: "/images/journey/03_vegetation_clearing.jpg", desc: "Selective clearing protecting designated tree buffers" },
        { label: "LEVELED BUILDING TIERS", url: "/images/journey/05_levelled_site.jpg", desc: "Graded and compacted red soil platforms ready for civil works" }
      ],
      personnel: [
        { role: "Heavy Equipment Operators", badge: "LICENSED FLEET", task: "Operating 20-ton hydraulic excavators and precision bulldozers" },
        { role: "Civil Earthwork Supervisors", badge: "SITE MANAGERS", task: "Monitoring cut-and-fill elevation markers with laser level receivers" },
        { role: "Topsoil Conservation Stewards", badge: "AGRONOMISTS", task: "Scraping and stockpiling fertile topsoil for future landscape turf" },
        { role: "Safety & Environmental Marshals", badge: "HSE COMPLIANCE", task: "Dust suppression water spraying and protective tree barriering" }
      ],
      machinery: [
        { name: "Caterpillar 320D Excavator", category: "20-TON HYDRAULIC", note: "Deep earth excavation and trenching" },
        { name: "Komatsu D65EX Bulldozer", category: "CRAWLER TRACTOR", note: "Cut-and-fill soil leveling across terraces" },
        { name: "Hamm 311 Vibratory Roller", category: "11-TON COMPACTOR", note: "98% modified proctor soil compaction" },
        { name: "Bandit Industrial Chipper", category: "ORGANIC RECYCLING", note: "Mulching cleared brush into organic compost" }
      ],
      actions: [
        "Cleared 4.2 acres of invasive wild scrub while safeguarding 100% of tagged trees",
        "Stockpiled 8,500 cubic meters of fertile topsoil for villa garden landscaping",
        "Graded 3 gentle building tiers to ensure natural monsoon gravity drainage",
        "Continuous 20,000-liter water sprinkler tankers deployed for 100% dust suppression"
      ],
      stats: [
        { label: "TOPSOIL CONSERVED", value: "8,500 m³ Stored" },
        { label: "COMPACTION RATING", value: "98% Modified Proctor" },
        { label: "MACHINERY FLEET", value: "14 Heavy Units Active" },
        { label: "DUST SUPPRESSION", value: "100% Continuous Water Spray" }
      ]
    },
    {
      id: 3,
      stageNumber: "03",
      key: "ROAD_STAGE_03",
      title: "PLANNING, UNDERGROUND UTILITIES & ARTERIAL ROADS",
      subtitle: "CONCEALED INFRASTRUCTURE & 40FT TREE-LINED BOULEVARD",
      headline: "STEP 03 — MASTERPLOT DEMARCATION & SUBSURFACE CONDUITS",
      phaseTime: "MONTH 05–07",
      videoTimestamp: "0:30 / 0:45",
      desc: "The architectural blueprint becomes physical reality. All 189 private villa plots were pegged with lime demarcations. Before any road surface was laid, the complete underground lifeline was deployed: concealed high-voltage cables, optic fiber conduits, dual water networks, and RCC storm pipes.",
      url: "/images/journey/07_road_construction.jpg",
      secondaryUrl: "/images/journey/06_underground_utilities.jpg",
      angles: [
        { label: "CENTRAL BOULEVARD PAVING", url: "/images/journey/07_road_construction.jpg", desc: "40ft arterial avenue paved with asphalt and concrete curbs" },
        { label: "UNDERGROUND UTILITIES", url: "/images/journey/06_underground_utilities.jpg", desc: "Concealed electrical ducts, storm drains and water pipelines" },
        { label: "PLOT DEMARCATION", url: "/images/journey/08_plot_demarcation.jpg", desc: "189 individual villa boundaries pegged with survey stakes" }
      ],
      personnel: [
        { role: "Infrastructure Project Managers", badge: "URBAN PLANNERS", task: "Coordinating utility ducting with civil road paving alignments" },
        { role: "Underground Utility Technicians", badge: "ELECTRO-MECHANICAL", task: "Deploying high-density polyethylene (HDPE) conduits and storm mains" },
        { role: "Asphalt Paving Crew", badge: "ROAD SPECIALISTS", task: "Laying 40mm dense bituminous macadam at 150°C compaction" },
        { role: "Quality Assurance Inspectors", badge: "CIVIL QC", task: "Hydrostatic pressure testing of water mains and road core samplings" }
      ],
      machinery: [
        { name: "Vogele Super 1800-3 Asphalt Paver", category: "TRACKED PAVER", note: "Laying 40ft wide continuous asphalt mat" },
        { name: "Dynapac CC4200 Tandem Roller", category: "ASPHALT COMPACTOR", note: "Vibratory finish compaction for glass-smooth roads" },
        { name: "Ditch Witch Laser Trencher", category: "TRENCH EXCAVATOR", note: "Precision 1.5m deep utility corridors" },
        { name: "Wirtgen SP 15 Kerb Extruder", category: "SLIPFORM CONCRETE", note: "Monolithic casting of white curb stones" }
      ],
      actions: [
        "100% underground cabling for zero visual clutter (zero overhead wires across site)",
        "Constructed 42 deep groundwater percolation recharge wells along storm corridors",
        "40ft wide central boulevard and 30ft residential avenues paved with dual-layer asphalt",
        "Individual utility termination points deployed for all 189 independent villa plots"
      ],
      stats: [
        { label: "BOULEVARD WIDTH", value: "40ft Tree-Lined Spine" },
        { label: "INTERNAL ROADS", value: "30ft Residential Streets" },
        { label: "UNDERGROUND NETWORK", value: "100% Concealed Services" },
        { label: "RAINWATER WELLS", value: "42 Deep Recharge Shafts" }
      ]
    },
    {
      id: 4,
      stageNumber: "04",
      key: "CONSTRUCTION_STAGE_04",
      title: "STAGGERED VILLA SUPERSTRUCTURES & ARCHITECTURE",
      subtitle: "RCC COLUMNS, BLOCK MASONRY & LIMESTONE FINISHES",
      headline: "STEP 04 — SIMULTANEOUS PHASED CIVIL CONSTRUCTION",
      phaseTime: "MONTH 08–18",
      videoTimestamp: "0:45 / 1:00",
      desc: "The skyline of Antelia Groves comes alive. Staggered, synchronized construction across all sectors. Deep isolated column footings gave way to earthquake-resistant RCC structural frames, solid clay block masonry, roof slabs, acoustic timber louvers, and natural limestone facade cladding.",
      url: "/images/journey/14_staggered_community.jpg",
      secondaryUrl: "/images/journey/09_villa_foundation.jpg",
      angles: [
        { label: "COMMUNITY CONSTRUCTION", url: "/images/journey/14_staggered_community.jpg", desc: "Simultaneous villa framing and masonry across sectors" },
        { label: "FOUNDATION EXCAVATION", url: "/images/journey/09_villa_foundation.jpg", desc: "Deep RCC footings with anti-termite chemical barrier" },
        { label: "RCC FRAMEWORK", url: "/images/journey/10_ground_floor_structure.jpg", desc: "Precision column casting and double-height ceiling shuttering" },
        { label: "EXTERIOR FINISHES", url: "/images/journey/13_exterior_finishes.jpg", desc: "Natural limestone cladding, teak louvers and terrace glazing" }
      ],
      personnel: [
        { role: "Senior Structural Engineers", badge: "RCC SPECIALISTS", task: "Verifying rebar placement, lap lengths, and seismic shear links" },
        { role: "Formwork & Shuttering Carpenters", badge: "PRECISION CARPENTRY", task: "Erecting mirror-smooth plywood formwork for exposed concrete" },
        { role: "Master Masonry Craftsmen", badge: "STONE & BRICK", task: "Laying high-density clay blocks and hand-dressing limestone facades" },
        { role: "Quality Testing Technicians", badge: "CONCRETE LAB", task: "Cube testing 28-day compressive strength (M30/M35 grade concrete)" }
      ],
      machinery: [
        { name: "Schwing Stetter Transit Mixers", category: "RMC FLEET", note: "Delivering continuous M35 grade ready-mix concrete" },
        { name: "Putzmeister 36m Boom Pump", category: "CONCRETE PUMP", note: "Placing concrete into upper floors and sky terraces" },
        { name: "Peri Skydeck Shuttering System", category: "MODULAR FORMWORK", note: "Millimeter-precision flat ceiling and slab casting" },
        { name: "Potain Tower Crane & Hoists", category: "VERTICAL LOGISTICS", note: "Lifting steel bundles, bricks, and facade stones" }
      ],
      actions: [
        "High-grade Fe550D TMT earthquake-resistant steel reinforcement in all columns",
        "Double-height living pavilions engineered with 18-foot soaring floor-to-ceiling glass",
        "Triple-layer polyurethane chemical waterproofing on all roof terraces and sky decks",
        "Installation of custom fluted teak privacy louvers and natural limestone facade piers"
      ],
      stats: [
        { label: "CONCRETE GRADE", value: "M30 / M35 High-Strength" },
        { label: "STEEL GRADE", value: "Fe550D Seismic Rebar" },
        { label: "CEILING HEIGHT", value: "18-Foot Living Foyer" },
        { label: "SAFETY AUDITS", value: "Weekly Structural Certification" }
      ]
    },
    {
      id: 5,
      stageNumber: "05",
      key: "COMPLETED_STAGE_05",
      title: "THE COMPLETED ARCHITECTURAL SANCTUARY",
      subtitle: "189 FINISHED RESIDENCES, CLUBHOUSE & LIVING GROVE",
      headline: "STEP 05 — READY COMMUNITY HANDOVER & SERENE LIVING",
      phaseTime: "MONTH 19 ONWARD",
      videoTimestamp: "1:00 / 1:15",
      desc: "The 10-acre transformation is complete. 189 private independent split-level villas delivered amidst lush biophilic groves, mature shady boulevards, an illuminated 15,000+ sq.ft signature clubhouse, 25-meter azure lap pool, and walking trails welcoming resident families.",
      url: "/images/journey/20_grand_aerial_community.jpg",
      secondaryUrl: "/images/journey/16_completed_villa.jpg",
      angles: [
        { label: "GRAND AERIAL PERSPECTIVE", url: "/images/journey/20_grand_aerial_community.jpg", desc: "Complete 10-acre low-density community illuminated at dusk" },
        { label: "COMPLETED INDEPENDENT VILLA", url: "/images/journey/16_completed_villa.jpg", desc: "Private entry court, split-level living, and rooftop terrace" },
        { label: "SHADED CENTRAL BOULEVARD", url: "/images/journey/17_central_boulevard.jpg", desc: "40ft tree-lined avenue with pedestrian walks and warm lighting" },
        { label: "15,000+ SQ.FT. CLUBHOUSE", url: "/images/journey/19_signature_clubhouse.jpg", desc: "25-meter heated lap pool, gym, banquet and wellness pavilion" }
      ],
      personnel: [
        { role: "Estate Operations Director", badge: "VILLA CONCIERGE", task: "Overseeing facility management, smart security, and resident onboarding" },
        { role: "Head Horticulturalist", badge: "BIOPHILIC CURATOR", task: "Maintaining 1,200+ preserved trees, flowering shrubs, and butterfly park" },
        { role: "Clubhouse Wellness Manager", badge: "HOSPITALITY", task: "Managing 25m heated lap pool, fitness academy, and private salon" },
        { role: "24/7 Command Security", badge: "SMART SECURITY", task: "Monitoring perimeter infrared sensors, RFID boom gates, and CCTV surveillance" }
      ],
      machinery: [
        { name: "Automated Drip Irrigation Grid", category: "WATER CONSERVATION", note: "Smart sensor hydration for all avenue trees and lawns" },
        { name: "Centralized Dual Filtration STP", category: "ENVIRONMENTAL", note: "100% water recycling for landscaping and flushing" },
        { name: "Solar PV Rooftop Generation", category: "CLEAN ENERGY", note: "Powering all common street lights and clubhouse pumps" },
        { name: "Smart RFID Automatic Boom Gates", category: "SECURITY AUTOMATION", note: "Seamless resident vehicular access control" }
      ],
      actions: [
        "189 private independent villas ready for occupancy with individual occupancy certificates",
        "15,000+ sq.ft signature clubhouse fully operational with heated 25m lap pool",
        "Over 45% of total acreage maintained as open green parks, trails, and water features",
        "24/7 gated security with biometric access, CCTV monitoring, and estate concierge"
      ],
      stats: [
        { label: "TOTAL RESIDENCES", value: "189 Private Villas" },
        { label: "GREEN OPEN SPACE", value: "Over 45% Protected Greens" },
        { label: "CLUBHOUSE SCALE", value: "15,000+ Sq.Ft Pavilion" },
        { label: "HANDOVER STATUS", value: "Ready for Immediate Possession" }
      ]
    }
  ],
  // =========================================================================
  // 3. BEFORE / AFTER COMPARISON PAIRS
  // =========================================================================
  beforeAfterPairs: [
    {
      id: 'pair-1',
      title: 'RAW TERRAIN TO SITE PREPARATION',
      subtitle: 'Stage 01 vs Stage 02',
      description: 'Observe how 10 untouched acres are graded and stabilized with preserved tree clusters.',
      before: {
        label: 'BEFORE: RAW LAND',
        url: '/images/journey/01_aerial_raw_land.jpg',
        realPhotoUrl: null,
        caption: 'Undeveloped 10-acre natural terrain with red soil contours',
      },
      after: {
        label: 'AFTER: SITE PREPARATION',
        url: '/images/journey/04_earthmoving_machinery.jpg',
        realPhotoUrl: null,
        caption: 'Controlled grading, leveled terraces, and hydraulic fleet',
      },
    },
    {
      id: 'pair-2',
      title: 'PREPARED SITE TO ROAD INFRASTRUCTURE',
      subtitle: 'Stage 02 vs Stage 03',
      description: 'Witness the emergence of the 40-foot central boulevard and 189 demarcated plots.',
      before: {
        label: 'BEFORE: GRADED SITE',
        url: '/images/journey/05_levelled_site.jpg',
        realPhotoUrl: null,
        caption: 'Graded earth platforms ready for underground utilities',
      },
      after: {
        label: 'AFTER: INTERNAL ROADS',
        url: '/images/journey/07_road_construction.jpg',
        realPhotoUrl: null,
        caption: 'Paved asphalt avenues, concrete curbs, and plot boundaries',
      },
    },
    {
      id: 'pair-3',
      title: 'CONSTRUCTION SITE TO COMPLETED SANCTUARY',
      subtitle: 'Stage 04 vs Stage 05',
      description: 'The dramatic evolution from active construction to an illuminated luxury estate.',
      before: {
        label: 'BEFORE: VILLA CONSTRUCTION',
        url: '/images/journey/14_staggered_community.jpg',
        realPhotoUrl: null,
        caption: 'Staggered structural frames, brick masonry, and cranes',
      },
      after: {
        label: 'AFTER: COMPLETED SANCTUARY',
        url: '/images/journey/20_grand_aerial_community.jpg',
        realPhotoUrl: null,
        caption: '189 finished residences, mature trees, and evening lighting',
      },
    },
  ],

  // =========================================================================
  // 4. MASTERPLAN SECTION
  // =========================================================================
  masterplan: {
    key: 'MASTERPLAN_DRONE_01',
    type: 'cgi',
    url: '/images/antelia_aerial_masterplan.jpg',
    realPhotoUrl: null,
    videoUrl: null,
    posterUrl: '/images/antelia_aerial_masterplan.jpg',
    alt: 'Antelia Groves 10-Acre Masterplan Drone View',
    caption: '10-acre low-density masterplanned residential sanctuary',
  },

  // =========================================================================
  // 5. VILLAS SECTION
  // =========================================================================
  villas: [
    {
      key: 'VILLA_EXTERIOR_01',
      title: 'Contemporary Villa Architecture',
      subtitle: 'EXTERIOR FACADE & PRIVATE ENTRANCE',
      type: 'cgi',
      url: '/images/antelia_villa_exterior.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      desc: 'Natural limestone piers, fluted teak louvers, and double-height glass framing manicured gardens.',
    },
    {
      key: 'VILLA_LIVING_02',
      title: 'Double-Height Living Pavilion',
      subtitle: 'SEAMLESS COURTYARD CONNECTION',
      type: 'cgi',
      url: '/images/antelia_villa_living.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      desc: '18-foot soaring volume with floor-to-ceiling glass sliding open to a private green courtyard.',
    },
    {
      key: 'VILLA_DINING_03',
      title: 'Split-Level Dining & Kitchen',
      subtitle: 'SPATIAL ARTICULATION',
      type: 'cgi',
      url: '/images/antelia_villa_dining.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      desc: 'Elevated dining platform defining functional separation without restrictive interior walls.',
    },
    {
      key: 'VILLA_BEDROOM_04',
      title: 'Master Bedroom Suite & Sky Terrace',
      subtitle: 'PRIVATE TREETOP RETREAT',
      type: 'cgi',
      url: '/images/antelia_villa_bedroom.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      desc: 'Master sanctuary featuring wide oak plank flooring, acoustic timber wall, and private canopy deck.',
    },
  ],

  // =========================================================================
  // 6. LIFESTYLE SECTION
  // =========================================================================
  lifestyle: {
    clubhouse: {
      key: 'LIFESTYLE_CLUBHOUSE_POOL',
      type: 'cgi',
      url: '/images/antelia_clubhouse_pool.jpg',
      realPhotoUrl: null,
      videoUrl: null,
      posterUrl: '/images/antelia_clubhouse_pool.jpg',
      title: 'The Azure Lap Pool & Wellness Sanctuary',
      subtitle: 'SIGNATURE CLUBHOUSE PAVILION · 15,000+ SQ.FT',
      caption: '25-Meter Heated Lap Pool · Sunken Lounges · Private Cabanas',
    },
  },

  // =========================================================================
  // 7. NATURE & LOCATION SECTION
  // =========================================================================
  nature: {
    key: 'NATURE_PARKLAND_01',
    type: 'cgi',
    url: '/images/antelia_nature_landscape.jpg',
    realPhotoUrl: null,
    videoUrl: null,
    posterUrl: '/images/antelia_nature_landscape.jpg',
    title: 'Shaded Walking Trails & Natural Water Features',
    subtitle: 'BIOPHILIC LANDSCAPE · OVER 45% GREEN OPEN SPACE',
    caption: 'Native Gulmohar & Neem avenues, porous pebble walkways, and rainwater recharging',
  },

  // =========================================================================
  // 8. EXPLORE CLIMAX SECTION
  // =========================================================================
  explore: {
    key: 'EXPLORE_DUSK_AERIAL',
    type: 'cgi',
    url: '/images/antelia_aerial_masterplan.jpg',
    realPhotoUrl: null,
    videoUrl: null,
    posterUrl: '/images/antelia_aerial_masterplan.jpg',
    title: '10 ACRES · 189 PRIVATE VILLAS · A LIVING LANDSCAPE',
    subtitle: 'SOUTH BANGALORE SANCTUARY',
  },

  // =========================================================================
  // 9. EXPANDABLE DYNAMIC GALLERY (Future-Ready Masonry)
  // =========================================================================
  gallery: [
    {
      id: 'g-1',
      title: 'Villa Exterior Facade at Golden Hour',
      category: 'VILLAS',
      type: 'cgi',
      url: '/images/antelia_villa_exterior.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/10]',
      tag: 'ARCHITECTURE',
    },
    {
      id: 'g-2',
      title: 'Double-Height Living Pavilion',
      category: 'INTERIORS',
      type: 'cgi',
      url: '/images/antelia_villa_living.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[4/3]',
      tag: 'LIVING SPACES',
    },
    {
      id: 'g-3',
      title: '10-Acre Masterplan Aerial Dusk View',
      category: 'MASTERPLAN',
      type: 'cgi',
      url: '/images/antelia_aerial_masterplan.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/9]',
      tag: 'AERIAL DRONE',
    },
    {
      id: 'g-4',
      title: 'Signature Clubhouse & 25m Lap Pool',
      category: 'AMENITIES',
      type: 'cgi',
      url: '/images/antelia_clubhouse_pool.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/10]',
      tag: 'CLUBHOUSE',
    },
    {
      id: 'g-5',
      title: 'Biophilic Walking Trails & Flora',
      category: 'NATURE',
      type: 'cgi',
      url: '/images/antelia_nature_landscape.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[4/3]',
      tag: 'LANDSCAPE',
    },
    {
      id: 'g-6',
      title: 'Split-Level Courtyard Dining',
      category: 'INTERIORS',
      type: 'cgi',
      url: '/images/antelia_villa_dining.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/10]',
      tag: 'DINING',
    },
    {
      id: 'g-7',
      title: 'Master Suite Sanctuary',
      category: 'INTERIORS',
      type: 'cgi',
      url: '/images/antelia_villa_bedroom.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/10]',
      tag: 'BEDROOM',
    },
    {
      id: 'g-8',
      title: 'Original 10-Acre Raw Land Topography',
      category: 'CONSTRUCTION',
      type: 'cgi',
      url: '/images/journey/01_aerial_raw_land.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/9]',
      tag: 'SITE ORIGIN',
    },
    {
      id: 'g-9',
      title: 'Site Preparation & Earthmoving Fleet',
      category: 'CONSTRUCTION',
      type: 'cgi',
      url: '/images/journey/04_earthmoving_machinery.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/10]',
      tag: 'EARTHMOVING',
    },
    {
      id: 'g-10',
      title: 'Paved Internal Arterial Avenues',
      category: 'INFRASTRUCTURE',
      type: 'cgi',
      url: '/images/journey/07_road_construction.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/9]',
      tag: 'ROADS',
    },
    {
      id: 'g-11',
      title: 'Villa Foundation Excavation & Rebar',
      category: 'CONSTRUCTION',
      type: 'cgi',
      url: '/images/journey/09_villa_foundation.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[4/3]',
      tag: 'FOUNDATION',
    },
    {
      id: 'g-12',
      title: 'Staggered Villa Construction Across Site',
      category: 'CONSTRUCTION',
      type: 'cgi',
      url: '/images/journey/14_staggered_community.jpg',
      realPhotoUrl: null,
      aspect: 'aspect-[16/9]',
      tag: 'SUPERSTRUCTURE',
    },
  ],

  // =========================================================================
  // 10. FUTURE PROJECT UPDATES LOG
  // =========================================================================
  projectUpdates: [
    {
      id: 'up-1',
      stage: 'STAGE 01 — THE LAND',
      date: 'SEPTEMBER 2025',
      title: 'Comprehensive Topographical & Hydrogeology Surveys Completed',
      desc: 'Topographic contour mapping, boundary survey pegging, and comprehensive soil bearing capacity studies across the 10-acre parcel concluded with zero environmental disruption.',
      image: '/images/journey/01_aerial_raw_land.jpg',
      videoUrl: null,
      isVerified: true,
      milestones: ['10 Contiguous Acres Mapped', 'Soil Bearing Capacity Verified', 'Perimeter Buffer Established'],
    },
    {
      id: 'up-2',
      stage: 'STAGE 02 — SITE PREPARATION',
      date: 'NOVEMBER 2025',
      title: 'Controlled Civil Grading & Tree Conservation Demarcation',
      desc: 'Selective clearing of wild vegetation initiated while 100% of mature specimen trees were cataloged and preserved. Cut-and-fill equilibrium grading established stable building tiers.',
      image: '/images/journey/04_earthmoving_machinery.jpg',
      videoUrl: null,
      isVerified: true,
      milestones: ['100% Topsoil Conserved', '2,780ft Perimeter Bio-Fence', 'Heavy Access Corridors Formed'],
    },
    {
      id: 'up-3',
      stage: 'STAGE 03 — INFRASTRUCTURE',
      date: 'FEBRUARY 2026',
      title: 'Internal Road Asphalt Laying & Subsurface Utilities Conduit',
      desc: 'Asphalt paving completed for the 40ft tree-lined boulevard and 30ft residential avenues. 100% underground power, telecom fiber, and storm drainage conduits deployed.',
      image: '/images/journey/07_road_construction.jpg',
      videoUrl: null,
      isVerified: true,
      milestones: ['40ft Boulevard Paved', 'Underground Utility Ducting Complete', '189 Plots Pegged'],
    },
  ],
};
