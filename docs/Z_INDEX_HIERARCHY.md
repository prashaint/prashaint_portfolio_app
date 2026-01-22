# Z-Index Hierarchy

This document defines the z-index layering system used throughout the application to prevent conflicts between overlapping elements.

## Hierarchy Table

| Layer | Z-Index | Components | Purpose |
|-------|---------|------------|---------|
| **Mobile Menu Overlay** | 999 | Header mobile menu | Highest priority - must be above everything |
| **Header** | 100 | Navigation header | Always visible at top |
| **Theme Toggle (Fixed)** | 90 | Fixed theme toggle button | Below header, above content |
| **Terminal Window (Open)** | 85 | Terminal modal window | Below theme toggle |
| **Utility Buttons** | 80 | BackToTop, Terminal button | Standard fixed buttons |
| **Modals** | 50 | Project detail modals | Standard overlays |
| **Sticky Elements** | 40 | FilterBar, FloatingNav | Sticky headers/navigation |
| **Elevated Content** | 10-30 | Cards, dropdowns | Slightly elevated UI |
| **Base Content** | 0-10 | Regular page content | Default layer |

## Implementation Guidelines

### Fixed Elements
Fixed elements that overlap should follow this hierarchy:

```jsx
// Mobile menu overlay (highest)
className="fixed inset-0 z-[999]"

// Header
className="sticky top-0 z-[100]"

// Theme toggle button
className="fixed top-4 right-4 z-[90]"

// Terminal window modal
className="fixed ... z-[85]"

// Utility buttons (BackToTop, Terminal trigger)
className="fixed bottom-4 right-4 z-[80]"
```

### Best Practices

1. **Use Bracket Notation** for custom z-index values
   ```jsx
   // Good
   className="z-[999]"

   // Avoid (unless using Tailwind's default scale)
   className="z-999"
   ```

2. **Group Related Components**
   - Keep modals in the 50-90 range
   - Keep utility buttons in the 80-85 range
   - Reserve 900+ for critical overlays

3. **Document New Layers**
   - Add any new z-index layers to this document
   - Update the table when adding fixed/sticky elements

4. **Test Mobile Menu**
   - Mobile menu overlay must always be clickable
   - Hamburger button must trigger menu on all pages
   - No fixed elements should block menu interaction

## Common Issues & Solutions

### Issue: Mobile menu doesn't open
**Cause**: Another element with higher or equal z-index is blocking
**Solution**: Ensure mobile menu overlay has `z-[999]`

### Issue: Buttons not clickable
**Cause**: Overlapping element with higher z-index
**Solution**: Review hierarchy table and adjust accordingly

### Issue: Modal appears behind content
**Cause**: Z-index too low
**Solution**: Ensure modals use z-50 or higher

## Current Component Z-Index Map

```
Mobile Menu Overlay (Header.jsx)     → z-[999]
Header (Header.jsx)                  → z-[100]
Theme Toggle (ThemeToggle.jsx)       → z-[90]
Terminal Window (TerminalWindow.jsx) → z-[85] (open), z-[80] (button)
BackToTop (BackToTop.jsx)            → z-[80]
FilterBar (FilterBar.jsx)            → z-40
Project Modals                       → z-50
Floating Navigation                  → z-40
```

## Testing Checklist

When adding new fixed/sticky elements:

- [ ] Does the mobile hamburger menu still work?
- [ ] Can all fixed buttons be clicked?
- [ ] Do modals appear above content?
- [ ] Does the header remain visible when scrolling?
- [ ] Are dropdowns and tooltips visible?
- [ ] Is the z-index documented in this file?

## Notes

- Always test on mobile devices (or DevTools mobile view)
- The mobile menu must ALWAYS be the highest layer (z-999)
- Header should be second highest (z-100) to stay visible
- Keep spacing between z-index values (10-20 units) for future additions
- Update this document when adding new layers

---

**Last Updated**: 2024
**Maintained By**: Development Team
