# Default UI/UX Intelligence: UI/UX Pro Max

Always enforce the **UI/UX Pro Max** design and usability standards by default for any user interface, frontend styling, layout, component architecture, accessibility, or interaction task in this project.

## Core Directives

1. **Default Skill Activation**:
   - Whenever designing, building, reviewing, or modifying user interfaces (React, Tailwind CSS, HTML/CSS, Three.js 3D Canvas, Lucide icons, animations), automatically apply the ui-ux-pro-max skill and its local datasets (.agents/skills/ui-ux-pro-max/).
   - Run the search tool for design systems, palettes, typography, or UX patterns whenever relevant:
     ```bash
     python .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system
     ```

2. **10 Priority Rules (Mandatory Hierarchy)**:
   - **Priority 1: Accessibility (CRITICAL)**: Text contrast minimum 4.5:1, proper ARIA labels on icon buttons, full keyboard navigation, visible focus rings.
   - **Priority 2: Touch & Interaction (CRITICAL)**: Minimum 44x44px clickable target size, 8px+ spacing between interactive elements, explicit loading/hover/active feedback.
   - **Priority 3: Performance (HIGH)**: WebP/optimized media, reserved aspect ratio spaces (CLS < 0.1), prevent layout thrashing.
   - **Priority 4: Style Selection (HIGH)**: Cohesive design system matching product personality, SVGs (Lucide/Heroicons) instead of raw emojis as icons.
   - **Priority 5: Layout & Responsive (HIGH)**: Mobile-first responsive breakpoints, zero unintentional horizontal scroll (overflow-x-hidden), fluid typography.
   - **Priority 6: Typography & Color (MEDIUM)**: Clear visual hierarchy, semantic color tokens, avoid uncoordinated raw hex values in components.
   - **Priority 7: Animation & Motion (MEDIUM)**: Purposeful transitions (150–300ms), smooth eases, respect prefers-reduced-motion.
   - **Priority 8: Forms & Feedback (MEDIUM)**: Visible field labels, contextual inline validation, progressive disclosure.
   - **Priority 9: Navigation Patterns (HIGH)**: Predictable back/scroll behavior, clear active indicators, sticky/floating header clearance.
   - **Priority 10: Charts & Data (LOW)**: Meaningful palettes, readable legends, accessible tooltips.

3. **Pre-Delivery Verification Checklist**:
   - [ ] No emojis used as UI icons (use Lucide/SVG).
   - [ ] cursor-pointer on all interactive/clickable elements.
   - [ ] Smooth hover & focus transitions (150–300ms).
   - [ ] Verified contrast ratio (4.5:1 minimum for body text).
   - [ ] No horizontal overflow on mobile viewports (375px+).
   - [ ] Tested responsive breakpoints (375px, 768px, 1024px, 1440px).
