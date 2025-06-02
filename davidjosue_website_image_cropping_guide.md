# David Josué Website - Image Cropping & Optimization Guide

## 📐 Aspect Ratio Reference Guide

### Common Aspect Ratios Used

1. **16:9 (1.78:1)** - Hero Sections
   - Used for: Main hero backgrounds
   - Dimensions: 1920x1080
   - Cropping tip: Wide cinematic view, ensure key subjects are centered

2. **3:2 (1.5:1)** - Landscape Photos
   - Used for: Destination showcases, featured images
   - Dimensions: 1200x800, 600x400
   - Cropping tip: Classic photography ratio, good for environmental shots

3. **2:3 (0.67:1)** - Portrait Photos
   - Used for: Service cards, gallery images
   - Dimensions: 800x1200, 600x900
   - Cropping tip: Vertical emphasis, great for full-body or tall compositions

4. **3:4 (0.75:1)** - Portrait Headshots
   - Used for: About page portraits
   - Dimensions: 600x800
   - Cropping tip: Standard portrait ratio, focus on upper body/face

5. **1:1 (1.0:1)** - Square
   - Used for: Destination thumbnails, portrait examples
   - Dimensions: 400x400, 600x600
   - Cropping tip: Center the main subject, works well for faces or symmetrical compositions

6. **5:3 (1.67:1)** - Portfolio Covers
   - Used for: Gallery cover images
   - Dimensions: 500x300
   - Cropping tip: Slightly wider than 3:2, good for panoramic crops

7. **1.91:1** - Open Graph Images
   - Used for: Social media sharing
   - Dimensions: 1200x630
   - Cropping tip: Leave space for text overlay, avoid important details at edges

## 🎯 Cropping Guidelines by Image Type

### Hero Images (16:9)
```
┌─────────────────────────────────────┐
│                                     │
│         Keep main subject           │
│         in center 60%               │
│                                     │
└─────────────────────────────────────┘
```
- Avoid placing critical elements in outer 20% (may be cropped on mobile)
- Consider text overlay areas - usually center or lower third
- Ensure faces/key subjects aren't cut off when responsive

### Service Cards (2:3 Portrait)
```
┌─────────────┐
│             │
│   Subject   │
│   should    │
│   fill      │
│   60-70%    │
│   of frame  │
│             │
│             │
└─────────────┘
```
- Vertical compositions work best
- Leave some breathing room at top/bottom
- For people: crop at natural points (waist, chest, not joints)

### Square Images (1:1)
```
┌───────────┐
│           │
│  Center   │
│  Subject  │
│           │
└───────────┘
```
- Perfect for faces, symmetrical compositions
- Rule of thirds still applies
- Avoid cramming too much into the frame

### Landscape Images (3:2)
```
┌─────────────────────┐
│                     │
│   Use rule of       │
│   thirds            │
└─────────────────────┘
```
- Place horizon on upper or lower third
- Keep subjects off-center for dynamic composition
- Great for environmental context

## 🔧 Technical Optimization Guide

### File Naming Convention
```
david-josue-[service]-[subject]-[location]-[descriptor].jpg

Examples:
- david-josue-wedding-couple-beach-sunset.jpg
- david-josue-boudoir-empowerment-studio.jpg
- david-josue-portrait-family-outdoor.jpg
```

### Compression Settings

#### For Web (Primary Images)
- **Format**: WebP with JPG fallback
- **Quality**: 80-85%
- **Color Profile**: sRGB
- **Resolution**: 72 DPI

#### For Hero/Featured Images
- **Quality**: 85-90%
- **Max file size**: 300-500KB
- **Progressive encoding**: Yes

#### For Thumbnails/Gallery
- **Quality**: 70-75%
- **Max file size**: 50-150KB
- **Lazy loading**: Enabled

### Responsive Image Sizes

Create 3 versions of each image:

1. **Mobile** (max-width: 768px)
   - Hero: 768x432
   - Service cards: 384x576
   - Gallery: 768x512

2. **Tablet** (max-width: 1024px)
   - Hero: 1024x576
   - Service cards: 512x768
   - Gallery: 1024x683

3. **Desktop** (1920px and up)
   - Hero: 1920x1080
   - Service cards: 800x1200
   - Gallery: Full size

## 🎨 Visual Consistency Guidelines

### Color Treatment
- Maintain consistent white balance across all images
- Slight warm tone preferred (matches brand aesthetic)
- Avoid over-saturation
- Keep blacks lifted slightly for softer feel

### Styling Consistency
- Similar depth of field treatment
- Consistent grain/texture if applied
- Matching contrast levels
- Coherent editing style across galleries

### Safe Zones for Text Overlay
For images that will have text overlays:

```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ │      Safe zone for text        │ │
│ │      (80% of image area)       │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

## 📱 Mobile Considerations

### Portrait Mode Cropping
- Hero images may be cropped to 4:5 or 1:1 on mobile
- Ensure critical content is in the center 60%
- Test crops at different ratios before finalizing

### Touch Targets
- If images are clickable, ensure they're at least 44x44px
- Gallery thumbnails should be large enough to see details
- Consider mobile thumb reach zones

## 🚀 Quick Export Checklist

Before exporting each image:

- [ ] Correct aspect ratio applied
- [ ] Image cropped with subject properly positioned
- [ ] Color correction/grading applied consistently
- [ ] Exported at correct dimensions
- [ ] File size optimized (check KB/MB)
- [ ] Proper filename following SEO convention
- [ ] Both WebP and JPG versions created
- [ ] Metadata/EXIF data cleaned (for privacy)
- [ ] Alt text prepared in both languages

## 💡 Pro Tips

1. **Batch Processing**: Use Photoshop actions or Lightroom presets for consistent processing
2. **Smart Cropping**: Some CMS/CDNs offer smart cropping - provide high-res originals
3. **Focus Points**: Mark focus points in metadata for smart cropping systems
4. **A/B Testing**: Try different crops for hero images to see what converts better
5. **Seasonal Updates**: Plan for seasonal image swaps (summer/winter weddings)

## 📊 Image Priority Order

Process images in this order for maximum impact:

1. **Homepage Hero** - First impression
2. **Service Card Images** - Drive conversions
3. **About Page Portrait** - Build trust
4. **Boudoir Hero** - Service page impact
5. **Portfolio Covers** - Showcase best work
6. **OG Images** - Social sharing
7. **Gallery Images** - Complete the experience

Remember: Quality over quantity. Better to have fewer, perfectly optimized images than many poor-quality ones.
