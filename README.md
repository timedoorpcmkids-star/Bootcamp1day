# 🐻 Learning Hub - Modern Educational Platform

A beautiful, modern educational learning website built with vanilla HTML, CSS, and JavaScript. This platform provides interactive courses for learning Roblox, Web Development, Scratch, and Design.

## ✨ Features

- **🎨 Modern UI/UX**: Clean, playful, and attractive design with smooth animations
- **📱 Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **🌙 Dark Mode**: Toggle between light and dark themes with preference saving
- **🐻 Cute Mascot**: Bear mascot throughout the site with floating animations
- **📊 Progress Tracking**: Track your learning progress with visual indicators
- **🎬 Video Integration**: Embedded YouTube tutorials for each lesson
- **📚 Structured Content**: Step-by-step tutorials with clear navigation
- **⚡ Smooth Navigation**: Previous/Next buttons for easy content navigation
- **📱 Mobile Sidebar**: Hamburger menu for mobile navigation
- **🎯 Interactive Cards**: Hover animations and interactive elements
- **🎭 4 Learning Subjects**: Roblox, Web Development, Scratch, and Design

## 📁 Project Structure

```
Learning Hub/
├── index.html              # Landing page with subject overview
├── materi.html             # Materials listing page for selected subject
├── detail.html             # Detailed lesson page with steps and video
├── css/
│   └── style.css          # Complete styling (responsive, animations, dark mode)
├── js/
│   ├── data.js            # Course data and helper functions
│   └── app.js             # Main application logic
└── README.md              # This file
```

## 🎓 Learning Subjects

### 1. Roblox Development 🎮
- Getting Started with Roblox Studio
- Building Your First Game

### 2. Website Development 🌐
- HTML Basics
- CSS Styling & Layout

### 3. Scratch Programming 🧩
- Introduction to Scratch
- Creating Interactive Games

### 4. Design 🎭
- Design Principles
- UI/UX Design for Beginners

## 🚀 Getting Started

### Option 1: Open Directly in Browser
1. Navigate to the project folder
2. Right-click on `index.html`
3. Select "Open with" → Choose your browser

### Option 2: Use Live Server
1. Install VS Code extension: "Live Server"
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Use Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000`

## 🎨 Color Palette

- **Primary Green**: `#22C55E` - Main accent color
- **Navy Blue**: `#0F172A` - Text and backgrounds
- **Yellow**: `#FACC15` - Call-to-action buttons
- **Light Gray**: `#F8FAFC` - Light backgrounds
- **Dark Gray**: `#64748B` - Secondary text

## 🌙 Dark Mode

The website includes a dark mode feature that:
- Toggles with the button in the navbar
- Saves preference to localStorage
- Applies smooth transitions between themes
- Works on all pages

## 📱 Responsive Design Breakpoints

- **Desktop**: 1200px and above (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: Below 768px (single column)
- **Small Mobile**: Below 480px (optimized for small screens)

## 🎬 Video Integration

Each lesson includes embedded YouTube video tutorials. Videos are responsive and scale with the content.

## 📊 Progress Tracking

- Visual progress bar showing completion percentage
- Step counter (e.g., "2 of 5")
- Progress saved during session
- Encouragement messages and tips

## 🎯 Navigation Features

- **Next/Previous Buttons**: Easy navigation between lessons
- **Breadcrumb Links**: Click back to subject list from lesson
- **Sidebar Navigation**: Quick access to all sections
- **Smooth Scrolling**: Animated scroll to sections

## 🔧 How to Customize

### Change Color Scheme
Edit the CSS variables in `css/style.css`:
```css
:root {
  --primary-green: #22C55E;
  --navy: #0F172A;
  --yellow: #FACC15;
}
```

### Add New Subject
Edit `js/data.js` and add to the `coursesData.subjects` array:
```javascript
{
  id: 5,
  title: 'Your Subject',
  description: 'Description here',
  icon: '🎯',
  color: '#YOUR_COLOR',
  materials: [/* materials array */]
}
```

### Add New Material/Lesson
Add to the `materials` array within a subject:
```javascript
{
  id: 9,
  title: 'Lesson Title',
  description: 'Lesson description',
  image: '🎓',
  video: 'https://youtube.com/embed/VIDEO_ID',
  steps: [/* steps array */]
}
```

### Add New Steps to a Lesson
Add to the `steps` array within a material:
```javascript
{
  number: 1,
  title: 'Step Title',
  content: 'Step content and instructions'
}
```

## 🎨 Animation Effects

- **Float Animation**: Hero mascot and footer icon
- **Bounce Animation**: Subject and footer icons
- **Slide In**: Cards fade in with staggered delay
- **Hover Effects**: Cards lift up on hover
- **Progress Bar**: Smooth fill animation
- **Spin**: Loading spinner animation

## 💾 Browser Storage

The application uses `localStorage` to save:
- Dark mode preference (`darkMode` key)
- Can be extended for user progress tracking

## 🔒 Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Proper color contrast ratios
- Alt text ready for images
- Responsive font sizes
- Clear heading hierarchy

## ⚡ Performance Optimizations

- No external dependencies (pure vanilla JS)
- Minimal CSS (single stylesheet)
- Lightweight JavaScript (no frameworks)
- Fast load times
- Optimized animations with CSS transforms
- Intersection Observer for scroll animations

## 🐛 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Structure

### CSS Organization
- Root variables and global styles
- Component-specific styles
- Dark mode styles
- Responsive design media queries
- Animation definitions
- Utility classes

### JavaScript Organization
- Dark mode management
- Sidebar functionality
- URL parameter handling
- Page-specific initialization
- Data loading functions
- Navigation handlers

### Data Structure
- Hierarchical subject and material organization
- Helper functions for data retrieval
- Easy to extend with new content

## 🎓 Use Cases

- Online learning platform
- Educational website for kids
- Coding bootcamp landing page
- Tutorial aggregator
- Course catalog
- Learning management system frontend

## 📄 License

Free to use and modify for educational purposes.

## 🤝 Contributing

Feel free to fork, modify, and enhance this project for your needs!

## 📞 Support

For questions or issues, refer to the code comments and structure. The code is well-documented and organized for easy understanding.

---

**Built with ❤️ for learners everywhere** 🐻✨
# Bootcamp1day
# Bootcamp1day
# Bootcamp1day
# Bootcamp1day
# Bootcamp1day
